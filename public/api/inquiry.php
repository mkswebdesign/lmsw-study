<?php
declare(strict_types=1);
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');
function respond(int $status, string $message, bool $ok = false): never {
    http_response_code($status);
    echo json_encode(['ok' => $ok, 'message' => $message]);
    exit;
}
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    respond(405, 'Please submit the inquiry form.');
}
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && !in_array($origin, ['https://katiemayes.com', 'https://www.katiemayes.com'], true)) respond(403, 'Please submit from katiemayes.com.');
if ((int)($_SERVER['CONTENT_LENGTH'] ?? 0) > 16000) respond(413, 'Your inquiry is too long.');
$raw = file_get_contents('php://input', false, null, 0, 16001);
if (strlen($raw) > 16000) respond(413, 'Your inquiry is too long.');
$data = str_contains($_SERVER['CONTENT_TYPE'] ?? '', 'application/json') ? json_decode($raw, true) : $_POST;
if (!is_array($data)) respond(400, 'Please check your form and try again.');
function field(array $data, string $key, int $max): string {
    $value = $data[$key] ?? '';
    if (!is_string($value) || strlen($value) > $max || str_contains($value, "\0")) respond(422, 'Please check your form fields.');
    return trim($value);
}
if (field($data, 'website', 1000) !== '') respond(422, 'Please leave the website field empty.');
$name = field($data, 'name', 120);
$email = field($data, 'email', 254);
$context = field($data, 'context', 8000);
$source = field($data, 'source', 20);
$audience = field($data, 'audience', 20);
$interest = field($data, 'interest', 20);
$id = field($data, 'submissionId', 80);
if ($name === '' || preg_match('/[\r\n]/', $name) || !filter_var($email, FILTER_VALIDATE_EMAIL) || $context === '') respond(422, 'Please enter your name, a valid email address, and your message.');
if (!in_array($source, ['apply', 'contact'], true)) respond(422, 'Please use the strategy-call or contact form.');
$audiences = ['' => 'Not specified', 'founder' => 'Founder / entrepreneur', 'solo' => 'Solo internal marketer', 'other' => 'Other / unsure'];
$interests = ['' => 'Not specified', 'session' => 'One-time session', 'ongoing' => 'Ongoing support', 'reset' => 'Strategic reset', 'notsure' => 'Not sure yet'];
if (!isset($audiences[$audience], $interests[$interest])) respond(422, 'Please select a valid role and support type.');
if ($id === '') $id = bin2hex(random_bytes(16));
if (!preg_match('/^[a-zA-Z0-9_-]{16,80}$/', $id)) respond(422, 'Please reload the form and try again.');
$private = dirname(__DIR__, 2) . '/.private';
umask(0077);
$config = is_file($private . '/emailit.json') ? json_decode(file_get_contents($private . '/emailit.json'), true) : null;
if (!is_array($config) || empty($config['api_key']) || !filter_var($config['recipient'] ?? '', FILTER_VALIDATE_EMAIL)) respond(503, 'Inquiries are temporarily unavailable. Please try again shortly.');
// The fixed recipient and sender are never taken from browser input.
$payload = ['from' => 'Katie Mayes Website <inquiries@katiemayes.com>', 'to' => $config['recipient'], 'reply_to' => $email,
    'subject' => $source === 'apply' ? 'New strategy call inquiry â€” Katie Mayes' : 'New contact inquiry â€” Katie Mayes',
    'text' => "Name: $name\nEmail: $email\nPage: /$source/\nRole: {$audiences[$audience]}\nInterest: {$interests[$interest]}\n\nMessage:\n$context",
    'tracking' => ['loads' => false, 'clicks' => false]];
$encoded = json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR);
// Limit attempts using the direct peer IP; forwarded headers cannot bypass the limit.
$ratePath = $private . '/rate-' . hash('sha256', $_SERVER['REMOTE_ADDR'] ?? 'unknown');
$rate = fopen($ratePath, 'c+');
if (!$rate || !flock($rate, LOCK_EX)) respond(503, 'Please try again shortly.');
$attempts = json_decode(stream_get_contents($rate), true) ?: [];
$attempts = array_values(array_filter($attempts, fn($time) => is_int($time) && $time > time() - 900));
if (count($attempts) >= 5) { header('Retry-After: 900'); respond(429, 'Too many attempts. Please wait 15 minutes and try again.'); }
$attempts[] = time();
ftruncate($rate, 0); rewind($rate); fwrite($rate, json_encode($attempts)); fflush($rate); flock($rate, LOCK_UN); fclose($rate);
// Lock each submission so retries cannot send concurrent duplicates.
$submission = fopen($private . '/submission-' . hash('sha256', $id), 'c+');
if (!$submission || !flock($submission, LOCK_EX)) respond(503, 'Please try again shortly.');
$previous = json_decode(stream_get_contents($submission), true);
$digest = hash('sha256', $encoded);
if ($previous && ($previous['digest'] ?? '') !== $digest) respond(409, 'This form has changed. Reload the page before sending again.');
if (($previous['sent'] ?? false) === true) respond(200, 'Thank you â€” your inquiry has been sent. Katie will reply within 2 business days.', true);
ftruncate($submission, 0); rewind($submission); fwrite($submission, json_encode(['digest' => $digest, 'sent' => false])); fflush($submission);
$curl = curl_init('https://api.emailit.com/v2/emails');
curl_setopt_array($curl, [CURLOPT_POST => true, CURLOPT_RETURNTRANSFER => true, CURLOPT_CONNECTTIMEOUT => 5, CURLOPT_TIMEOUT => 20,
    CURLOPT_HTTPHEADER => ['Authorization: Bearer ' . $config['api_key'], 'Content-Type: application/json', 'Idempotency-Key: katie-' . $id], CURLOPT_POSTFIELDS => $encoded]);
$result = curl_exec($curl);
$status = (int)curl_getinfo($curl, CURLINFO_RESPONSE_CODE);
$body = is_string($result) ? json_decode($result, true) : null;
curl_close($curl);
if ($status < 200 || $status >= 300 || empty($body['id'])) {
    error_log('Katie inquiry Emailit failure HTTP ' . $status);
    respond(502, 'Your inquiry could not be confirmed. Please try again. Your entries have been kept.');
}
ftruncate($submission, 0); rewind($submission); fwrite($submission, json_encode(['digest' => $digest, 'sent' => true])); fflush($submission);
respond(200, 'Thank you â€” your inquiry has been sent. Katie will reply within 2 business days.', true);

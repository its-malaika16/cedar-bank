<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require_once "db.php";

// Allow only POST requests
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode([
        "success" => false,
        "message" => "Method Not Allowed"
    ]);
    exit();
}

// Read JSON body
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require_once "db.php";

// Allow only POST requests
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode([
        "success" => false,
        "message" => "Method Not Allowed"
    ]);
    exit();
}

// Read JSON body
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "Invalid JSON data."
    ]);
    exit();
}

// Get values
$firstname = trim($data["firstname"] ?? "");
$lastname = trim($data["lastname"] ?? "");
$email = trim($data["email"] ?? "");
$company = trim($data["company"] ?? "");
$field = trim($data["field"] ?? "");
$location = trim($data["location"] ?? "");
$description = trim($data["description"] ?? "");

// Validate required fields
if (
    empty($firstname) ||
    empty($lastname) ||
    empty($email) ||
    empty($company) ||
    empty($field)
) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "Please fill all required fields."
    ]);
    exit();
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "Invalid email address."
    ]);
    exit();
}

// Insert into database
$sql = "INSERT INTO CBank
(firstname, lastname, email, company, field, location, description)
VALUES (?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);

if (!$stmt) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => $conn->error
    ]);
    exit();
}

$stmt->bind_param(
    "sssssss",
    $firstname,
    $lastname,
    $email,
    $company,
    $field,
    $location,
    $description
);

if ($stmt->execute()) {

    // Send email notification
    $to = "info@cedarpayroll.com";
    $subject = "New Cedar Bank Enquiry";

    $message = "
    <html>
    <body>
        <h2>New Cedar Bank Enquiry</h2>

        <p><strong>First Name:</strong> {$firstname}</p>
        <p><strong>Last Name:</strong> {$lastname}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Company:</strong> {$company}</p>
        <p><strong>Industry:</strong> {$field}</p>
        <p><strong>Location:</strong> {$location}</p>

        <p><strong>Description:</strong></p>
        <p>{$description}</p>
    </body>
    </html>
    ";

    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "From: Cedar Capital Bank <noreply@cedarpayroll.com>\r\n";
    $headers .= "Reply-To: {$email}\r\n";

    // Send email
    @mail($to, $subject, $message, $headers);

    echo json_encode([
        "success" => true,
        "message" => "Form submitted successfully."
    ]);

} else {

    http_response_code(500);

    echo json_encode([
        "success" => false,
        "message" => $stmt->error
    ]);
}

$stmt->close();
$conn->close();

?>
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "Invalid JSON data."
    ]);
    exit();
}

// Get values
$firstname  = trim($data["firstname"] ?? "");
$lastname   = trim($data["lastname"] ?? "");
$email      = trim($data["email"] ?? "");
$company    = trim($data["company"] ?? "");
$field      = trim($data["field"] ?? "");
$location   = trim($data["location"] ?? "");
$description = trim($data["description"] ?? "");

// Validate required fields
if (
    empty($firstname) ||
    empty($lastname) ||
    empty($email) ||
    empty($company) ||
    empty($field)
) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "Please fill all required fields."
    ]);
    exit();
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "Invalid email address."
    ]);
    exit();
}

// Insert into database
$sql = "INSERT INTO CBank
(firstname, lastname, email, company, field, location, description)
VALUES (?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);

$stmt->bind_param(
    "sssssss",
    $firstname,
    $lastname,
    $email,
    $company,
    $field,
    $location,
    $description
);

if ($stmt->execute()) {

    echo json_encode([
        "success" => true,
        "message" => "Form submitted successfully."
    ]);

} else {

    http_response_code(500);

    echo json_encode([
        "success" => false,
        "message" => "Database insert failed."
    ]);

}
 
$stmt->close();
$conn->close();

?>
<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Handle preflight requests
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit();
}

require_once "db.php";

// Check database connection
if (!$conn) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Database connection failed."
    ]);
    exit();
}

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

try {

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
    $rawData = file_get_contents("php://input");

    $data = json_decode($rawData, true);

    if (!$data) {
        http_response_code(400);
        echo json_encode([
            "success" => false,
            "message" => "Invalid JSON data received."
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

    // SQL Insert
    $sql = "INSERT INTO CBank
    (firstname, lastname, email, company, `field`, location, description)
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

    $stmt->execute();

    // Email notification
    $to = "support@cedarpayroll.com";
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

    @mail($to, $subject, $message, $headers);

    echo json_encode([
        "success" => true,
        "message" => "Form submitted successfully."
    ]);

    $stmt->close();
    $conn->close();

} catch (Exception $e) {

    http_response_code(500);

    echo json_encode([
        "success" => false,
        "message" => $e->getMessage()
    ]);
}
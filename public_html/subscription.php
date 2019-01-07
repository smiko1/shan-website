<?php

$servername = "localhost";
$username = "root";
$password = "S4mvqvo5";
$dbname = "subscription";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO subscribers (name, email)
VALUES (?,?)";

$stmt = mysqli_prepare($sql);
$stmt->bind_param("sss", $_POST['name'], $_POST['email']);
$stmt->execute();

$conn->close();
?>
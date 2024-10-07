<?php

include('config.php');

// Create connection
$conn = mysqli_connect($db['host'], $db['user'], $db['pass'], $db['name']);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
} else {
    echo "Connected successfully";
}

// Process form submission
if (isset($_POST['send'])) {

    // Get form data
    $name = htmlspecialchars($_POST['nome']);
    $phone = htmlspecialchars($_POST['telefone']);
    $email = htmlspecialchars($_POST['email']);
    $pass = htmlspecialchars($_POST['senha']);
    $hash = password_hash($pass, PASSWORD_BCRYPT);

    // Prepare the SQL statement
    $stmt = mysqli_prepare($conn, "INSERT INTO users (nome, telefone, email, senha) VALUES (?, ?, ?, ?)");
    mysqli_stmt_bind_param($stmt, 'ssss', $name, $phone, $email, $hash);

    // Execute the statement
    if (mysqli_stmt_execute($stmt)) {
        header("Location: login.html");
    } else {
        echo "Error: " . mysqli_stmt_error($stmt);
    }

    // Close the statement
    mysqli_stmt_close($stmt);
}

// Close MySQL connection
mysqli_close($conn);

?>


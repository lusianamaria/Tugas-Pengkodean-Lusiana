<?php
include 'config.php';

$id = $_POST['id'];

$sql = "UPDATE items SET available = available - 1 WHERE id = $id AND available > 0";

if ($conn->query($sql) === TRUE && $conn->affected_rows > 0) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false]);
}

$conn->close();
?>
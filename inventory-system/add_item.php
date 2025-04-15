<?php
include 'config.php';

$item_name = $_POST['item_name'];
$item_cost = $_POST['item_cost'];
$description = $_POST['description'];
$quantity = $_POST['quantity'];
$available = $quantity;

$sql = "INSERT INTO items (item_name, item_cost, description, quantity, available) VALUES ('$item_name', $item_cost, '$description', $quantity, $available)";

if ($conn->query($sql) === TRUE) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false]);
}

$conn->close();
?>
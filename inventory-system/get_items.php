<?php
include 'config.php';

$search = isset($_GET['search']) ? $_GET['search'] : '';
if ($search) {
    $sql = "SELECT * FROM items WHERE item_name LIKE '%$search%'";
} else {
    $sql = "SELECT * FROM items";
}

$result = $conn->query($sql);
$items = [];

while ($row = $result->fetch_assoc()) {
    $items[] = $row;
}

echo json_encode($items);
$conn->close();
?>
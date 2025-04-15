document.addEventListener('DOMContentLoaded', loadItems);

function loadItems() {
    fetch('get_items.php')
        .then(response => response.json())
        .then(data => {
            const tbody = document.getElementById('inventoryBody');
            tbody.innerHTML = '';
            data.forEach((item, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${item.item_name}</td>
                    <td>${item.item_cost}</td>
                    <td>${item.description}</td>
                    <td>${item.quantity}</td>
                    <td>${item.available}</td>
                    <td><button onclick="issueItem(${item.id})">Issue Item</button></td>
                `;
                tbody.appendChild(row);
            });
        });
}

function showAddForm() {
    document.getElementById('addForm').style.display = 'block';
}

function hideAddForm() {
    document.getElementById('addForm').style.display = 'none';
}

function addItem() {
    const itemName = document.getElementById('itemName').value;
    const itemCost = document.getElementById('itemCost').value;
    const description = document.getElementById('description').value;
    const quantity = document.getElementById('quantity').value;

    fetch('add_item.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `item_name=${itemName}&item_cost=${itemCost}&description=${description}&quantity=${quantity}`
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            hideAddForm();
            loadItems();
        } else {
            alert('Failed to add item');
        }
    });
}

function issueItem(id) {
    fetch('issue_item.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `id=${id}`
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            loadItems();
        } else {
            alert('Failed to issue item');
        }
    });
}

function searchItems() {
    const searchInput = document.getElementById('searchInput').value;
    fetch(`get_items.php?search=${searchInput}`)
        .then(response => response.json())
        .then(data => {
            const tbody = document.getElementById('inventoryBody');
            tbody.innerHTML = '';
            data.forEach((item, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${item.item_name}</td>
                    <td>${item.item_cost}</td>
                    <td>${item.description}</td>
                    <td>${item.quantity}</td>
                    <td>${item.available}</td>
                    <td><button onclick="issueItem(${item.id})">Issue Item</button></td>
                `;
                tbody.appendChild(row);
            });
        });
}
async function loadUsers() {
const res = await fetch('/api/users');
const users = await res.json();


const tbody = document.querySelector('#users-table tbody');
tbody.innerHTML = '';


users.forEach(u => {
const row = document.createElement('tr');
row.innerHTML = `
<td>${u.id}</td>
<td>${u.name}</td>
<td>${u.email}</td>
<td>
<a href="index.html?id=${u.id}">Edit</a>
<button onclick="deleteUser(${u.id})">Delete</button>
</td>`;
tbody.appendChild(row);
});
}


async function deleteUser(id) {
await fetch(`/api/users/${id}`, { method: 'DELETE' });
loadUsers();
}


async function loadStudentDetail() {
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
if (id) {
const res = await fetch(`/api/users/${id}`);
const user = await res.json();
document.getElementById('detail-id').textContent = `ID: ${user.id}`;
document.getElementById('detail-name').textContent = `Name: ${user.name}`;
document.getElementById('detail-email').textContent = `Email: ${user.email}`;
document.getElementById('detail-phone').textContent = `Phone: ${user.phone}`;
document.getElementById('detail-address').textContent = `Address: ${user.address}`;
}
}


async function saveUser() {
try {
const data = {
name: document.getElementById('name').value,
email: document.getElementById('email').value,
phone: document.getElementById('phone').value,
address: document.getElementById('address').value
};
const res = await fetch('/api/users', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(data)
});
if (!res.ok) throw new Error('Failed to save user');
const user = await res.json();
} catch (error) {
console.error('Error saving user:', error);
alert('Error saving user: ' + error.message);
}
}


window.onload = function () {
if (document.getElementById('users-table')) loadUsers();
if (document.getElementById('detail-card')) loadStudentDetail();
const form = document.getElementById('form');
if (form) {
form.addEventListener('submit', saveUser);
}
};

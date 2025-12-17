let users = [
{ id: 1, name: 'Alice', email: 'alice@example.com', phone: '123-456-7890', address: '123 Main St' },
{ id: 2, name: 'Bob', email: 'bob@example.com', phone: '987-654-3210', address: '456 Elm St' }
];
let nextId = 3;


module.exports = {
getAll() { return Promise.resolve(users); },


getById(id) {
return Promise.resolve(users.find(u => u.id === Number(id)) || null);
},


create({ name, email, phone, address }) {
const u = { id: nextId++, name, email, phone, address };
users.push(u);
return Promise.resolve(u);
},


update(id, data) {
const index = users.findIndex(u => u.id === Number(id));
if (index === -1) return Promise.resolve(null);
users[index] = { id: Number(id), ...data };
return Promise.resolve(users[index]);
},


remove(id) {
users = users.filter(u => u.id !== Number(id));
return Promise.resolve();
}
};
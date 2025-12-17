const User = require('./userModel');


exports.getUsers = async (req, res) => {
try {
const users = await User.getAll();
res.json(users);
} catch (err) {
res.status(500).json({ error: err.message });
}
};


exports.getUser = async (req, res) => {
try {
const user = await User.getById(req.params.id);
if (!user) return res.status(404).json({ error: 'User not found' });
res.json(user);
} catch (err) {
res.status(500).json({ error: err.message });
}
};


exports.createUser = async (req, res) => {
try {
const user = await User.create(req.body);
res.status(201).json(user);
} catch (err) {
res.status(500).json({ error: err.message });
}
};


exports.updateUser = async (req, res) => {
try {
const user = await User.update(req.params.id, req.body);
if (!user) return res.status(404).json({ error: 'User not found' });
res.json(user);
} catch (err) {
res.status(500).json({ error: err.message });
}
};


exports.deleteUser = async (req, res) => {
try {
await User.remove(req.params.id);
res.status(204).send();
} catch (err) {
res.status(500).json({ error: err.message });
}
};

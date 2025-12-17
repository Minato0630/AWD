const express = require("express");
const path = require("path");

const app = express();
const PORT = 3030;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// In-memory database
let students = [];
let nextId = 1;

// Serve Home Page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Add new student
app.post("/add-student", (req, res) => {
  const { firstName, lastName, age, course, email, phone } = req.body;

  const student = {
    id: nextId++,
    firstName,
    lastName,
    age,
    course,
    email,
    phone
  };

  students.push(student);

  res.redirect(`/student?id=${student.id}`);
});

// Display Student Profile
app.get("/student", (req, res) => {
  res.sendFile(path.join(__dirname, "student.html"));
});

// API to get student data (for JS)
app.get("/api/student/:id", (req, res) => {
  const student = students.find(s => s.id == req.params.id);
  res.json(student);
});

// API to get all students
app.get("/api/students", (req, res) => {
  res.json(students);
});

// Edit Page
app.get("/edit", (req, res) => {
  res.sendFile(path.join(__dirname, "edit.html"));
});

// Update Profile
app.post("/update-student", (req, res) => {
  const id = parseInt(req.body.id);
  const student = students.find(s => s.id === id);

  student.firstName = req.body.firstName;
  student.lastName = req.body.lastName;
  student.age = req.body.age;
  student.course = req.body.course;
  student.email = req.body.email;
  student.phone = req.body.phone;

  res.redirect(`/student?id=${id}`);
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

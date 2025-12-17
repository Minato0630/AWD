const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
let users = [];

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
// Route for displaying the registration form 
app.get('/register', (req, res) => { 
res.sendFile(path.join(__dirname, "express.html"));
}); 
// Route for handling form submission 
app.post('/register', (req, res) => { 
const { name, email, password, className, rollNo } = 
req.body; 

// Check if the user already exists 
const existingUser = users.find(user => user.email === 
email); 
if (existingUser) { 
return res.status(400).send('User already exists with this email.'); 
} 
// Store user data in memory 
users.push({ name, email, password, className, rollNo }); 
res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Success</title>
    <style>/* Page background */
body {
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
    background: linear-gradient(135deg, #6a11cb, #2575fc);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Success box */
.success-box {
    background: #ffffff;
    padding: 40px 50px;
    border-radius: 20px;
    text-align: center;
    width: 380px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    animation: fadeIn 0.8s ease-out;
}

/* Header */
.success-box h1 {
    color: #28a745;
    font-size: 32px;
    margin-bottom: 10px;
}

/* Message */
.success-box p {
    color: #333;
    font-size: 18px;
    margin-bottom: 25px;
}

/* Button */
.btn {
    display: inline-block;
    padding: 12px 20px;
    background: #2575fc;
    color: #fff;
    text-decoration: none;
    border-radius: 10px;
    font-size: 16px;
    transition: 0.3s;
}

/* Button hover */
.btn:hover {
    background: #6a11cb;
    transform: scale(1.05);
}

/* Fade-in animation */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.details {
    background: #f6f6f6;
    padding: 15px;
    border-radius: 10px;
    text-align: left;
    margin-bottom: 20px;
}

.details p {
    font-size: 16px;
    margin: 6px 0;
}

</style>
    <link rel="stylesheet" href="/success.css">
</head>
<body>

<div class="success-box">
    <h1>Registration Successful!</h1>
    <p>Your account has been created successfully.</p>
     <h3>User Details</h3>
    <div class="details">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Class:</strong> ${ className}</p>
        <p><strong>Roll Number:</strong>${ rollNo }</p>
    </div>

    <a href="index.html" class="btn">Go Back</a>
</div>

</body>

</html>
`); 
}); 
// Start the server 
app.listen(3020, () => { 
console.log("Server is running on http://localhost:3020"); 
}); 

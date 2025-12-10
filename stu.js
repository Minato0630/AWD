const express = require('express'); 
const path = require('path'); 
const app = express(); 
const port = 2020; 
app.use(express.urlencoded({ extended: true })); 
// Serve static files (like CSS) from the 'public' folder 
app.use(express.static('public')); 
// Route for the homepage 
app.get('/', (req, res) => { 
res.sendFile(path.join(__dirname, 'index.html')); 
}); 
// Route to handle form submission 
app.post('/greet', (req, res) => { 
const { name, mobile, email, address, gender } = req.body; 
res.send(` 
<!DOCTYPE html> 
<html lang="en"> 
<head> 
<meta charset="UTF-8"> 
<meta 
name="viewport" 
scale=1.0"> 
<title>Greeting</title> 
<style> 
content="width=device-width, 
initial
body { font-family: Arial, sans-serif; text-align: center; padding: 50px; 
background-color: #f4f4f9; } 
h1 { color: #4f5d80; } 
a 
{ 
display: inline-block; margin-top: 20px; padding: 10px 20px; 
background-color: #4CAF50; 
color: white; text-decoration: none; border-radius: 5px; } 
a:hover { background-color:#4f5d80 ; } 
</style> 
</head> 
<body> 
<h1>Hello, ${name}!</h1> 
<p><strong>Mobile:</strong> ${mobile}</p> 
<p><strong>Email:</strong> ${email}</p> 
<p><strong>Address:</strong> ${address}</p> 
<p><strong>Gender:</strong> ${gender}</p> 
<a href="/">Go Back</a> 
</body> 
</html> 
`); 
}); 

// Start the server 
app.listen(port, () => { 
console.log(`Server is running at http://localhost:${port}`); 
});
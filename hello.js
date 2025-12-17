const express = require("express");
const app = express();
app.get("/", (req, res) => {
res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Beautiful UI</title>
    <style>
    
    
        h1 {
            color: white;
            font-size: 4rem;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
            padding: 20px;
            border-radius: 10px;
            transition: transform 0.3s ease, color 0.3s ease;
            cursor: pointer;
             margin: 0;
            padding: 0;
            algin:center;
            height: 50vh;
            background: linear-gradient(45deg, #ffba6bff, #090909ff, #45b7d1, #de1010ff, #b21ce4ff);
            background-size: 400% 400%;
            animation: gradientShift 10s ease infinite;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        h1:hover {
            color: #000000ff;
            transform: scale(1.1);
        }
        @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
    </style>
</head>
<body>
    <h1>Hello World!!!</h1>
</body>
</html>
`);
});
const port = 2600;
app.listen(port, () => {
console.log(`Server running at http://localhost:${port}`);
});

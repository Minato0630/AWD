const express = require('express');
const bodyParser = require('body-parser');


const userRoutes = require('./userRoutes');


const app = express();
app.use(bodyParser.json());


app.use('/api/users', userRoutes);
app.use(express.static('public'));


app.listen(3000, () => console.log('Server running in http://localhost:3000'))
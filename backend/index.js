const express = require('express');
const connectDB = require('./config/db');

require('dotenv').config();


const app = express();



connectDB();




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
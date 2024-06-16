const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Connect Database
connectDB();


app.use(cors());
app.use(express.json());


// Define Routes
app.use('/api/tasks', require('./routes/taskRoutes'));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
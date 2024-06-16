
// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const { createTask ,getTasks,getTask} = require('../controllers/taskController');
router.post('/', createTask);
router.get('/', getTasks);
router.get('/:id', getTask);
module.exports = router;
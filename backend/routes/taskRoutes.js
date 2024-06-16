
// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const { createTask ,getTasks,getTask,updateTask} = require('../controllers/taskController');
router.post('/', createTask);
router.get('/', getTasks);
router.get('/:id', getTask);
router.put('/:id', updateTask);
module.exports = router;
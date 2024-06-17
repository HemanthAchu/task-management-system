
// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const { createTask ,getTasks,getTask,updateTask,deleteTask} = require('../controllers/taskController');
const {register,login}=require('../controllers/userController');
const jwtMiddleware = require('../Middleware/jwtMiddleware');
router.post('/register',register) 
router.post('/login',login) 
router.post('/',jwtMiddleware,createTask);
router.get('/',jwtMiddleware, getTasks);
router.get('/:id',jwtMiddleware, getTask);
router.put('/:id', updateTask);
router.delete('/:id',jwtMiddleware, deleteTask);
module.exports = router;
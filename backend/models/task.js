// models/task.js
const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
    taskName: {
        type:String,
        required:true,
    },
    description:{
        type: String,
        required: true,
    },
    userId:{
        type:String,
        require:true
    }
});


module.exports = mongoose.model('tasks', taskSchema);
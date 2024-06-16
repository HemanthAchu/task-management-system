const Task = require('../models/task');


exports.createTask = async (req, res) => {
    try {
        console.log(req.body);
        const { taskName, description } = req.body;
        const newTask = new Task({
            taskName,
            description,
         
        });
        await newTask.save();
        res.status(200).json(newTask);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'oops,We are not able to add task,Please try again later' });
    }
};


exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ id: req.payload });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'oops,We are not able to list task,Please try again later' });

    }
};

exports.getTask = async (req, res) => {
    try {
     const task =   await Task.findById(req.params.id);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: 'oops,We are not able to list the task,Please try again later' });
    }
};


exports.updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: 'oops,We are not able to update the task,Please try again later' });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Task Successfully Removed ' });
    } catch (error) {
        res.status(500).json({ message: 'oops,We are not able to remove the task,Please try again later' });
    }
};

const task = require('../models/task');
const Task = require('../models/task');


exports.createTask = async (req, res) => {
    try {
        console.log("inside add task");

        const userId = req.payload
        console.log(userId);
        console.log(req.body);
        const { taskName, description } = req.body;
        console.log(taskName, description);
        const newTask = new Task({
            taskName,
            description,
            userId
        });
        await newTask.save();
        res.status(200).json(newTask);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'oops,We are not able to add task,Please try again later' });
    }
};


exports.getTasks = async (req, res) => {
    console.log("Inside getTasks");

    const searchkey = req.query.search;
    const userId = req.payload;

    try {
        let tasks;
        if (searchkey) {
            tasks = await Task.find({ userId, taskName: { $regex: searchkey, $options: "i" } });
        } else {
            tasks = await Task.find({ userId });
        }

        console.log("Tasks found:", tasks);
        res.status(200).json(tasks);
    } catch (error) {
        console.error("Error fetching tasks:", error);
        res.status(500).json({ message: 'Oops, we are not able to list tasks. Please try again later.' });
    }
};


exports.getTask = async (req, res) => {
   
    try {
        const task = await Task.findById(req.params.id);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: 'oops,We are not able to list the task,Please try again later' });
    }
};


exports.updateTask = async (req,res) => {
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

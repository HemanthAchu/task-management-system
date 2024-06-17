import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addTask } from '../services/allAPI';

function AddUserTask({ setadd }) {
    const [task, setTask] = useState({
        taskName: '',
        description: ''
    });
    
    const handleAdd = async () => {
        const { taskName, description } = task;
        if (taskName && description) {
          
            // Retrieve token from session storage
            const token = sessionStorage.getItem('token');
            if (token) {
                const reqHeader= {
                    "Authorization":`Bearer ${token}`
                  }
                try {
                  
                    const result = await addTask(task,reqHeader);
            
                    if (result.status == 200){
                        setTask({
                            taskName: '',
                            description: ''
                        });
                        setadd(result.data); // Assuming result.data contains the added task details
                       
                    } else {
                        toast.error('Failed to add task. Please try again later.');
                    }
                } catch (err) {
                    console.error(err);
                    toast.error('Failed to add task. Please try again later.');
                }


            } else {
                toast.error('Unauthorized access. Please login.');
            }


        } else {
            toast.warning('Please fill in all fields.');
        }
    };

    return (
        <div className='container mt-5 p-3 shadow'>
            <h1 className='text-center mt-3'>Task <span className='text-danger'>Management</span></h1>
            <div>
                <input
                    value={task.taskName}
                    onChange={(e) => setTask({ ...task, taskName: e.target.value })}
                    type="text"
                    className='form-control mb-3'
                    placeholder='Task Name'
                />
                <textarea
                    value={task.description}
                    onChange={(e) => setTask({ ...task, description: e.target.value })}
                    className='form-control'
                    placeholder='Description'
                ></textarea>
            </div>
            <Button className='mt-3' onClick={handleAdd} type="button">
                Add Task
            </Button>
            <ToastContainer position='top-center' theme='colored' autoClose={3000} />
        </div>
    );
}

export default AddUserTask;

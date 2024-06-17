import React from 'react'
import  { useState } from 'react'
import {Button} from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import { updateTask } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Edit({setedi,e}) {
  const [task, settask] = useState({
    taskName: e.taskName,
     description: e.description
 })
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




 const handledit =async(task)=>{
  const id =e._id
const result =await updateTask(id,task)
if(result.status==200){
 
  handleClose()
  setedi(result)
}
 }

  return (
    <div>
         <Button onClick={handleShow}>Update</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>UserTask <span className='text-danger'>Update</span></Modal.Title>
        </Modal.Header>
        <Modal.Body><div>
          <h6>TaskName:</h6>
                        <input value={task.taskName} onChange={(e) => settask({ ...task, taskName: e.target.value })} type="text" className='form-control mb-3' placeholder='taskName' />
                        <h6>Description</h6>
                        <textarea value={task.description} onChange={(e) => settask({ ...task, description: e.target.value })} name="text" className='form-control' placeholder='Discription'></textarea>
                    </div>
                    </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handledit(task)}>
           Update
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    </div>
  )
}

export default Edit

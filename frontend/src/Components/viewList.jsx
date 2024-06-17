import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Edit from './Edit';
import { deleteTask, getATask, getTasks } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function viewList({ add }) {
  const [searchkey,setsearchkey] =useState("")
  const [ids, setids] = useState('')
  const [edi, setedi] = useState('')
  const [show, setShow] = useState(false);
  const [shows, setShows] = useState(false);
  const [view, setview] = useState([])
  const handleClosee = () => setShows(false);
  const [del, setdel] = useState('')
  const handleShows = (e) => {
    setShows(true)
    setids(e)
  }


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [taskdata, settaskdata] = useState([])


  //................................................................................
  useEffect(() => {



    const getdata = async () => {
      const token = sessionStorage.getItem('token');
      if (token) {
        const reqHeader = {
          "Authorization": `Bearer ${token}`
        }
        const result = await getTasks(searchkey,reqHeader)
        settaskdata(result.data);
      
      }

    }
    getdata()

  }, [del, edi, add,searchkey])
  //................................................................................
  const handleDelete = async (e) => {
 
    const token = sessionStorage.getItem('token');
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      const result = await deleteTask(e, reqHeader)
      if (result.status == 200) {
        handleClosee()
        setdel(result)
      }
    }
  }
  // erTask API.........................................................................
  const handleView = async (e) => {
    const token = sessionStorage.getItem('token');
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      const result = await getATask(e, reqHeader)
      setview(result.data)
      handleShow()
    }
  }

  return (
    <div>
      <div className='d-flex justify-content-between align-items-center'><h3 className='text-center'>Task <span className='text-danger'>List</span></h3>
        
        <input  onChange={(e)=>setsearchkey(e.target.value)} className='form-control w-50 my-3' type="text" placeholder='Search Task Name' />
          
      
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className='text-center'>#</th>
            <th className='text-center'>TaskName</th>
            <th className='text-center'>More Details</th>

            <th className='text-center'>Edit</th>
            <th className='text-center'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {taskdata?.length>0?taskdata?.map((e, i) => (
            <tr key={i}>
              <td className='text-center'>{i + 1}</td>
              <td className='text-center'>{e.taskName}</td>
              <td className='text-center'><Button onClick={() => handleView(e._id)} className='btn-primary'>view</Button></td>
              <td className='text-center'><Edit setedi={setedi} e={e} /></td>
              <td className='text-center'><Button onClick={() => handleShows(e._id)} className='btn-danger'>Delete</Button></td>
            </tr>
          )): <tr>
          <td className='text-center text-danger'>NULL</td>
          <td className='text-center text-danger'>NULL</td>
          <td className='text-center text-danger'>NULL</td>
          <td className='text-center text-danger'>NULL</td>
          <td className='text-center text-danger'>NULL</td>
        </tr>}

        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>View More Details</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ overflowX: "scroll" }}>
          <span className='d-flex align-items-center'> <h3 className='me-2'>TaskName:</h3> {view.taskName}</span>
          <span className='d-flex align-items-start'> <h3 className='me-2'>Description:</h3> <span className='mt-1'>{view.description}</span></span></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={shows} onHide={handleClosee}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to delete this task ?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosee}>
            Close
          </Button>
          <Button className='btn-danger' onClick={() => handleDelete(ids)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    </div>
  )
}

export default viewList

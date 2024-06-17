import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {  useNavigate } from 'react-router-dom'
function nav() {
  const navigate = useNavigate()

  const handleLOgout =()=>{
     sessionStorage.clear()
     navigate("/")

  }
  return (
    <Navbar className="shadow">
    <Container className=''>
      <Navbar.Brand href="#home">
        <img 
          className='pe-3' 
          style={{ width: "30px", height: "30px" }} 
          src="https://imgs.search.brave.com/7WwoZ3bT6ciDAJPqozPs5X6_ugtAc8K5QHLNWMKSob4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4y/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbWV0cm8tdWlu/dmVydC1kb2NrLzI1/Ni9UYXNrX01hbmFn/ZXJfYWx0XzIucG5n" 
          alt="logo" 
        />
        Task Management
      </Navbar.Brand>
      <Button onClick={handleLOgout}>LogOut</Button>
    </Container>
  </Navbar>
  )
}

export default nav

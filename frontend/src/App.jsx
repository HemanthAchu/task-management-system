import {Navigate, BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import Login from "./Components/login"
import Nav from "./Components/nav"
import MainHome from "./Components/MainHome"



function App() {
  

  return (
  <BrowserRouter>
  <Nav/>
    <Routes>  
    <Route path="/" element={<MainHome/>}/> 
    <Route path="/home" element={<Home/>}/> 
    <Route path="/login" element={<Login/>}/> 
    <Route path="/register" element={<Login insideRegister/>}/> 
    <Route path='/*' element={<Navigate to={'/'}/>}/>
   </Routes>
  </BrowserRouter>
  )
}

export default App
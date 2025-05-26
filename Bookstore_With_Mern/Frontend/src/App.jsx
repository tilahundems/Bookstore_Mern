import { useState } from 'react'
import Home from './Components/Homecomponent/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
 import {Link, Route,Routes} from 'react-router-dom'
import Create from './Components/Homecomponent/Create';
import Update from './Components/Homecomponent/Update';
import Delete from './Components/Homecomponent/Delete';
import View from './Components/Homecomponent/View';
import { Container, Nav, Navbar, NavItem } from 'react-bootstrap';
import { SnackbarProvider } from 'notistack';

function App() {
  


  return (
    <>
    <SnackbarProvider autoHideDuration={3000} >
       <Navbar expand="sm" className="navbar navbar-dark mb-1" style={{backgroundColor:"teal" ,color:'red '}} >
      <Container> 
        <Navbar.Brand >Bookstore App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='nav-link  t-dark  ' to={'/'}> Home </Link>
            <Link className='nav-link' to={'/create'}> Create Book </Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
      <Route path='/'  element={<Home />}   />
      <Route path='/create'  element={<Create />}   />
      <Route path='/update/:id'  element={<Update />}   />
      <Route path='/delete/:id'  element={<Delete />}   />
      <Route path='/view/:id'  element={<View />}   />
    </Routes>
</SnackbarProvider>
   </>
  )
}

export default App

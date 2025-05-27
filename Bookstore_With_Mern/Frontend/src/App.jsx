import { useState } from 'react'
import Home from './Components/Homecomponent/Home'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./index.css";
 import {Link, Route,Routes} from 'react-router-dom'
import Create from './Components/Homecomponent/Create';
import Update from './Components/Homecomponent/Update';
import Delete from './Components/Homecomponent/Delete';
import View from './Components/Homecomponent/View';
import { Container, Nav, Navbar, NavItem } from 'react-bootstrap';
import { SnackbarProvider } from 'notistack';
import SharedLayout from './Components/Homecomponent/SharedLayout';

function App() {
  


  return (
    <>
    <SnackbarProvider autoHideDuration={3000} >
   
    
   
     <Routes>
      <Route path='/' element={<SharedLayout /> } >
      <Route path='/'  element={<Home />}   />
      <Route path='/create'  element={<Create />}   />
      <Route path='/update/:id'  element={<Update />}   />
      <Route path='/delete/:id'  element={<Delete />}   />
      <Route path='/view/:id'  element={<View />}   />
      {/* <Route path='*'  element={< Notfound404 />}   /> */}
      </Route>
    </Routes>
    
  
</SnackbarProvider>
   </>
  )
}

export default App

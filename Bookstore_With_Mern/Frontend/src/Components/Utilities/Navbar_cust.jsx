import React from 'react'
import { Container, Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navbar_cust() {
  return (
    <> 
   <Navbar expand="sm" className="navbar navbar-dark mb-5 sticky-top" style={{backgroundColor:"black" ,color:'red '}} >
      <Container> 
        <Navbar.Brand >Bookstore App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex">
            <Link className='nav-link active ' to={'/'}> Home </Link>
            <Link className='nav-link active' to={'/create'}> Create Book </Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
         )
}

export default Navbar_cust
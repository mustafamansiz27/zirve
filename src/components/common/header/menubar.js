import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
// import {AiFillContacts, AiFillHome} from "react-icons/ai"
// import headerLogo from "../../../assets/img/product/2.png"
import navLogo from "../../../assets/img//product/2.png" 
import "./menubar.scss"

const Menubar = () => {
  return (
    <Navbar bg="secondary" expand="lg" className='menubar'>
    <Container className='container'>
      <Navbar.Brand href="#home"> <img src={navLogo} className='img-fluid'  alt="zirve prefabrik konteyner" height={200}/> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='navbar-links-collapse'>
        <Nav className="me-auto navbar-links">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Menubar

import React, {useState} from 'react';
import {  
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button
} from 'reactstrap';
import '../App.css';

const Sitebar = (props) => { 
  const [isOpen, setisOpen] = useState(false); 
  const toggle = () => {
    let newIsOpen = !isOpen;
    setisOpen(newIsOpen);
}

  return ( 
    <Navbar className="navbar" color="faded" light expand="md">
    <NavbarBrand className="navbarbrand" href="/">Pedalboard Builder</NavbarBrand>
    <NavbarToggler onClick={toggle}/>
    <Collapse isOpen={isOpen} navbar>
      <Nav className="ml-auto" navbar>
          <NavItem>
            <Button className="logoutbtn" onClick={props.clearToken}>Logout</Button>
          </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
  )
}

export default Sitebar;
import React, { useState, useEffect } from 'react';
import '../css/Header.css'
import Logo from '../logo.svg'
import { Navbar, Nav } from 'react-bootstrap';

// function Componente({ scrollY }) {
//   return <span>{scrollY}</span>;
// }

function Header() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const classScroll = () => {
    if(scrollY >= 25) {
      if(scrollY >= 645) {
        return 'scroll cambioColor';
      }
      return 'scroll';
    }
    return '';
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar className={`${classScroll()}`} collapseOnSelect expand="lg">
      <Navbar.Brand href="#home">
        <img
          src={Logo}
          className="img-logo d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Home</Nav.Link>
          <Nav.Link href="#pricing">About Us</Nav.Link>
          <Nav.Link href="#features">Services</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
import React, { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

import '../styles/components/_navbar.scss';

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#resume', label: 'Resume' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <div className="navbar-wrapper">
      <Navbar expand="lg" className="custom-navbar">
        <Container>
          <div className="d-lg-none">
            <Navbar.Toggle 
              aria-controls="navbar-nav" 
              onClick={() => setIsOpen(!isOpen)}
              className={`custom-toggler ${isOpen ? 'open' : ''}`}
            >
              <span></span>
              <span></span>
              <span></span>
            </Navbar.Toggle>
          </div>

          <Navbar.Collapse id="navbar-nav">
            <Nav className="nav-links">
              {navItems.map((item) => (
                <Nav.Link 
                  key={item.href}
                  href={item.href}
                  className="nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomNavbar; 
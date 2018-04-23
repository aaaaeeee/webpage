import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';


class Navigation extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to= "/">Home</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem>
            <Link to= "/ContactPage">Contact</Link>
      </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    );
  }
}

export default Navigation;
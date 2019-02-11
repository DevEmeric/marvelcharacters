import React from 'react';
import { Navbar, Nav, NavItem, NavLink, Button } from 'reactstrap';

const MainBar = () => {
  return (
    <div>
      <Navbar className="container-fluid">
        <Nav className="navMain d-flex justify-content-around mx-auto">
          <NavItem>
            <Button size="sm">Previous</Button>
          </NavItem>
          <NavItem>
            <NavLink>Favs</NavLink>
          </NavItem>
          <NavItem>
            <Button size="sm">Next</Button>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default MainBar;
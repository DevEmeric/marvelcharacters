import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import MainBar from '../components/MainBar'
import List from './List';

class HomePage extends Component {

  render() {
    return (
      <div>
        <Navbar className="homepageNav container-fluid">
          <NavbarBrand className="homepageBrand w-50 mx-auto text-center">Marvel Characters</NavbarBrand>
        </Navbar>
        <MainBar />
        <List />
      </div>
    );
  }
}

export default HomePage;
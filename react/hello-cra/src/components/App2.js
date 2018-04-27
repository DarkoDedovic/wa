// ovde se nalazi div koji se vidi na strani 

import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Footer from './footer'
import Navbar from './navbar'
// import Cards from './cards'
import { UsersContainer } from './UsersContainer'
import usersData from '../components/App';

import { FetchUsers } from '../services/service';

class App2 extends Component {


  componentDidMount() {
    // ovde cu da dovucem usere 
  }

  render() { // vraca HTML
    return (
      <div>
        <Navbar2  />
        <UsersContainer />
        <Footer2 />
      </div>
    )
  }

}

export default App2;

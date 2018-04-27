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

const LIST = 'LIST';
const GRID = 'GRID';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [],
      viewMode: LIST
    }
  }

  componentDidMount() {
    this.getUsers();
  }

  render() { // vraca HTML
    return (
      <div>
        <Navbar viewMode={this.state.viewMode} toggleVM={ () => this.toggleViewMode.bind(this) } refresh={ () => this.getUsers.bind(this) }  />
        <UsersContainer users={this.state.users} viewMode={this.state.viewMode} />
        <Footer />
      </div>
    )
  }

  getUsers() {
    FetchUsers()
      .then(res => {
        const newState = {
          users: res.results
        }
        this.setState(newState); // metoda iz nadklase Component, promeni state ili deo state-a i pozove opet render
      })
      .catch(error => console.log(error));
  }

  // reddishUsers = () => {
  //   props.result.map((el => {
  //     if(el.gender ==="female"){
  //       el.style.background = "red";
  //     }
  //   }))

  // }



  toggleViewMode() {
    let newViewMode = LIST;
    if (this.state.viewMode == GRID) {
      newViewMode = LIST;
    } else if (this.state.viewMode == LIST) {
      newViewMode = GRID;
    }

    this.setState({ viewMode: newViewMode })
  }

}

export default App;

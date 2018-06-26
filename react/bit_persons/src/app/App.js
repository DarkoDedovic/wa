import React, { Component } from 'react';

import './App';
import { Fetch } from '../services/fetchUsers'

import { Navbar } from './navbar';

import { UsersContainer } from './usersContainer';

import { Footer } from './footer'

class App extends Component {

  constructor(props) {
    super(props)
    this.changeView = this.changeView.bind(this);
    this.getUsers = this.getUsers.bind(this);
    // this.callback = this.callback.bind(this);

    this.state = {
      persons: undefined,
      viewMode: localStorage.getItem("lastViewMode") || 'list',
      searchedPersons: undefined
    }

  }

  componentDidMount() {
    this.getViewModeFromLocalStorage();
    this.getUsers();

  }

  callback = (e) => {
    // let newArr = this.state.persons.filter(user => {
    //   if (user.indexOf(inputValue) !== -1) {
    //     return true;
    //   }
    //   return false
    // })
    

    console.log(e);
    
    // this.setState({ searchedPersons: newArr })
  }

  getViewModeFromLocalStorage() {

    localStorage.setItem("lastViewMode", this.state.viewMode);
  }

  getUsers = () => {

    Fetch()
      .then(personData => this.setState({ persons: personData }))
  }

  changeView() {

    let callback = () => {
      console.log("change", this.state.viewMode);
      this.getViewModeFromLocalStorage();
    };

    if (this.state.viewMode === 'list') {
      this.setState({ viewMode: 'grid' }, callback)
    } else {
      this.setState({ viewMode: 'list' }, callback)
    }
  }

  // searchFunc(event) {

  //   let inputValue = event.target.value;
  //   console.log(this.state.persons);
  //   console.log(this.state.searchedPersons);

  //   this.setState({ search: inputValue })

  // }


  render() {

    let content = <div>Loading...</div>;
    console.log(this.state.persons);
    console.log(this.state.persons);

    if (this.state.searchedPersons != undefined) {

      content = <UsersContainer input={() => this.callback()} view={this.state.viewMode} persons={this.state.persons} />;
    }
    if (this.state.searchedPersons == undefined && this.state.persons != undefined) {

      content = <UsersContainer input={() => this.callback()} view={this.state.viewMode} persons={this.state.persons} />;
    }

    else if (this.state.searchedPersons == undefined && this.state.persons == undefined) {
      <div>No users ...</div>
    }


    return (

      <div>
        <Navbar data={this.state.viewMode} changeViewMode={() => this.changeView} refresh={() => this.getUsers()} />

        {content}
        <Footer />
      </div >
    );
  }
}

export { App };

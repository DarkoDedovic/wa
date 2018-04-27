import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';
import { Navbar } from './navBar'
import { Footer } from './footer'
import { Main } from './main'

class App extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          users: [],
        //   viewMode: LIST
        }
      }
    


    render() {

        return (
            <div>
                <Navbar />
                <Main />
                <Footer />

               
            </div>
        )
    }
}

export { App }


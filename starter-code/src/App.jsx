import React, { Component } from 'react';
// import { logo } from '../ironhack-logo.svg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="Navbar">
          <img src="./images/ironhack-logo.svg" className="App-logo" alt="logo" />
          <img src="./images/menu-top.svg" alt="logo" />
        </nav>
        <header className="App-header">
          <h1>
            Say Hello to <br /> React.js
          </h1>
          <p>
            You will learn a frontend <br />
            framework from scratch, to <br />
            become a ninja developer
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Awsome!
          </a>
        </header>
      </div>
    );
  }
}

export default App;

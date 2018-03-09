import React, { Component } from 'react';
import '../App.css';
import gitlogo from '../resources/Github-logo.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">James Marsh</h1>
        <a href="https://github.com/Marsh-James" target="_blank">
          <img src={gitlogo} height={80} />
        </a>
      </div>
    );
  }
}

export default App;

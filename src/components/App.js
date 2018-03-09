import React, { Component } from 'react';
import '../App.css';
import gitlogo from '../resources/Github-logo.png';
import twitterlogo from '../resources/Twitter-logo.png';
import linkedinlogo from '../resources/Linkedin-logo.png';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">James Marsh</h1>
        <a href="https://github.com/Marsh-James" target="_blank" style={{ paddingLeft: '0.5em', paddingRight: '0.5em' }}>
          <img src={gitlogo} height={50} />
        </a>
        <a href="https://www.linkedin.com/in/marsh-james/" target="_blank" style={{ paddingLeft: '0.5em', paddingRight: '0.5em' }}>
          <img src={linkedinlogo} height={50} />
        </a>
        <a href="https://twitter.com/Marsh_Jam" target="_blank" style={{ paddingLeft: '0.5em', paddingRight: '0.5em' }}>
          <img src={twitterlogo} height={50} padding-left="10" />
        </a>
      </div>
    );
  }
}

export default App;

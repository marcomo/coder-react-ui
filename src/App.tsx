import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
        <span role="img" aria-labelledby="test">👋</span> Hello, <i>Remote</i> World!
        </p>   
        <p>
        Coder listens for a running web app on a specific port.
        </p>                         
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


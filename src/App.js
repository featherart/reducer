import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-title">OMG A ToDo List!!</div>
        </header>
        <div className="App-container">
          <ol className="Todos-container">
            <li><input type="text" /></li>
            <li>Return Stuff</li>
          </ol>
        </div>
      </div>
    );
  }
}

export default App;

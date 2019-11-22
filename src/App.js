import React from 'react';
import logo from './logo.svg';
import './App.css';
import Credentials from './components/Credentials';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Credentials></Credentials>
      </header>
    </div>
  );
}

export default App;

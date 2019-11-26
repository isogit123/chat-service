import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Credentials from './components/Credentials';
import ChatList from './components/ChatList'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BrowserRouter>
        <Route exact={true} path="/" component={Credentials}></Route>
        <Route path="/chatlist" component={ChatList}></Route>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

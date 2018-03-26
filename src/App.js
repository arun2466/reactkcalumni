import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        {Routes}
      </Router>
    );
  }
}

export default App;

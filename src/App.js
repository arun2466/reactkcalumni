import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'
import './App.css';
import 'antd/dist/antd.css';
import store from './Redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store} key="provider">
        <Router>
          {Routes}
        </Router>
      </Provider>
    );
  }
}

export default App;
import React, { Component } from 'react';
import { Button } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <div style={{textAlign:'center',marginTop:'100px'}}>
        <h1> KC Alumni</h1>
        <br/>
        <br/>
        <Link to="/login">
          <Button type="primary">Login</Button>
        </Link>
        <br/>
        <br/>
        <Link to="/signup">
          <Button type="primary">Sign Up!</Button>
        </Link>
      </div>
    );
  }
}

export default Home;
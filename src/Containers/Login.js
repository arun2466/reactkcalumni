import React, { Component } from 'react';
import { Button } from 'antd';

export class Login extends Component {
  render() {
    return (
      <div style={{textAlign:'center',marginTop:'100px'}}>
        <h1> Login Page </h1>
        <br/>
        <br/>
        <Button type="primary">Login</Button>
      </div>
    );
  }
}

export default Login;
import React, { Component } from 'react';
import { Button } from 'antd';

export class SignUp extends Component {
  render() {
    return (
      <div style={{textAlign:'center',marginTop:'100px'}}>
        <h1> SignUp Page </h1>
        <br/>
        <br/>
        <Button type="primary">SignUp</Button>
      </div>
    );
  }
}

export default SignUp;
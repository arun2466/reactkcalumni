import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux'
import { login } from '../Redux/auth'

export class Login extends Component {
  doLogin = () => {
    console.log( this.props )
    this.props.dispatch(login())
  }
  render() {
    return (
      <div style={{textAlign:'center',marginTop:'100px'}}>
        <h1> Login Page </h1>
        <br/>
        <br/>
        <Button type="primary" onClick={this.doLogin}>Do Login</Button>
      </div>
    );
  }
}


export default connect(state => {
  return {

  }
})(Login)
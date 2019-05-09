import React, { Component } from "react";


export default class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };

  handleInputChange = e => {
    const { target } = e;
    this.setState({
      [target.name]: target.value
    });
  };

  onSubmitHandle = e => {
    e.preventDefault()
    const username = e.target.username.value;
    const password = e.target.password.value;
    this.props.submitHandler({ username, password })
  };

  render() {
    return (
      <form onSubmit={e => this.onSubmitHandle(e)}>
        <label htmlFor="username">UserName</label>
        <input
          onChange={e => this.handleInputChange(e)}
          name="username"
          value={this.state.username}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          onChange={e => this.handleInputChange(e)}
          name="password"
          type="password"
          value={this.state.password}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    );
  }
}

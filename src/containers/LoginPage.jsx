import React from 'react'
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'
import { requestLogin } from "../actions";
import LoginForm from '../components/LoginForm'


class LoginPage extends React.Component {
  submitHandler = (formValues) => {
    const { login } = this.props;
    login(formValues)
  }

  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/" />
    }

    return (
      <div>
        <h1>Login</h1>
        <LoginForm submitHandler={this.submitHandler} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.login.isLoggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: formValues => dispatch(requestLogin(formValues))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);

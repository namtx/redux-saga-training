import React from 'react'
import { connect } from 'react-redux';

class HomePage extends React.Component {
  render() {
    const { isLoggedIn, username } = this.props
    return (
      <div>
        {isLoggedIn && username ? <p>{username}</p> : <p>You are not logged in</p>}
        <h1>Home Page</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.login.isLoggedIn,
    username: state.login.username
  }
}

export default connect(mapStateToProps)(HomePage)

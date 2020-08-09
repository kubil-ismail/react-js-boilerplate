import React, { Component } from 'react';

// Use Redux
import { connect } from 'react-redux';
import { login } from '../redux/actions/authActions';

// import firebase 
import { auth, googleProvider } from '../firebase';

export class Profile extends Component {
  componentDidMount = () => {
    this.props.login();
  }

  googleAuth = () => {
      auth.signInWithPopup(googleProvider)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      });
  };

  render() {
    return (
      <>
        <p>Profile App</p>  
        <button onClick={() => this.googleAuth()}>Login</button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

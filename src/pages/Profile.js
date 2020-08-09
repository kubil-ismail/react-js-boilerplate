import React, { Component } from 'react';

// Use Redux
import { connect } from 'react-redux';
import { login } from '../redux/actions/authActions';

// import firebase from 'firebase/app';
import firebase from 'firebase/app';
import { googleProvider } from '../firebase';

export class Profile extends Component {
  componentDidMount = () => {
    this.props.login();
  }

  googleAuth = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
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

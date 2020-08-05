import React, { Component } from 'react';

// Use Redux
import { connect } from 'react-redux';
import { login } from '../redux/actions/authActions';

export class Profile extends Component {
  render() {
    return (
      <>
        <p>Profile App</p>  
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

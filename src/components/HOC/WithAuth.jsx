import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

const WithAuth = Component => (props) => {
  const { auth } = props;
  return auth === false ? <Redirect to="/login" /> : <Component />
}

const mapStateToProps = state => ({
  auth: state.authReducer.auth
})

export default compose(connect(mapStateToProps), WithAuth);
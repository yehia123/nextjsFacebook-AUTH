import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

const {
  string, func
} = PropTypes;
import React from 'react';


const flexCol = {
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1em'
};


export const login = ({
  title = 'Sign in with Facebook',
  signIn
} = {}) => <RaisedButton onClick={signIn} label={title} primary={true} />;


login.propTypes = {
  title: string,
  signIn: func
};

export default login;

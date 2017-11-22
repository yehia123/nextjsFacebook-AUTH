import React from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';


const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) =>
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />;


renderTextField.propTypes = {
  input: PropTypes.string,
  label: PropTypes.string,
  meta: PropTypes.object
};


export default renderTextField;


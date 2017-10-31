import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { onChangeAction, addItemAction } from '../store/reducer';
import { connect } from 'react-redux';

// ES6 Destructing
const AddItem = ({ inputVal, onChangeAction, addItemAction }) => {
  return (
    <div>
      <TextField value={inputVal} onChange={onChangeAction} hintText="new item text.."/>
      <RaisedButton onClick={addItemAction}
        primary={true} label="Click to add item" />
    </div>
  );
};

const mapState = state => ({ inputVal: state.inputVal });

export default connect(
  mapState,
  {
    onChangeAction,
    addItemAction
  }
)(AddItem);

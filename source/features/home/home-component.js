import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Tabs, Tab} from 'material-ui/Tabs';
const {
  string, func
} = PropTypes;
import React from 'react';
import { signIn, getAuthStatus } from '../auth/reducer';
import Login from '../login/login.component';

const flexCol = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1em'
};


export const home = ({
  signIn,
  status
} = {}) => status === 'signed-in' ?
  // If it's a pre-existing link then we will already know if there's a driver
  // //
  <Tabs>
    <Tab label="Rider or Driver?">
      Select Rider or Driver
    </Tab>
    <Tab label="Choose a destination">
    Tab 2
    </Tab>
  </Tabs> :
  <div>
    <Tabs>
      <Tab label="Sign In with Facebook!">
        <div className="flex-col">
          <h2>
          Carpooling for Events
          </h2>
          <h4>
          Poolwith.me is the (easiest) way to organize rides.
          </h4>
          <Login signIn={signIn} />
        </div>
      </Tab>
    </Tabs>
  </div>;

home.propTypes = {
  title: string,
  signIn: func
};

const mapState = state => ({ status: getAuthStatus(state) });

export default connect(mapState, { signIn })(home);

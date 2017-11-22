import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { loadGetInitialProps } from 'next/dist/lib/utils';

import dbAPI from '../../lib/db';

const withEnv = ComposedComponent => {
  return class HOC extends Component {
    static propTypes = {
      serverRendered: PropTypes.bool,
      userSignedIn: PropTypes.func,
      addNewUser: PropTypes.func,
      signInStatus: PropTypes.string,
      cancelSignIn: PropTypes.func
    }

    static async getInitialProps(ctx) {
      const subProps = await loadGetInitialProps(ComposedComponent, ctx);
      const serverRendered = !process.browser;

      return {
        serverRendered,
        ...subProps
      };
    }

    componentWillMount() {
      const {
        serverRendered,
        userSignedIn,
        addNewUser,
        signInStatus,
        cancelSignIn
      } = this.props;

      if (serverRendered) {
        dbAPI.registerOnAuthStateChanged({ userSignedIn, addNewUser });
        signInStatus === 'signingIn' && cancelSignIn();
      };
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  };
};

export default withEnv;

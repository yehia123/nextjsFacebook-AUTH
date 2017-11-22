import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { loadGetInitialProps } from 'next/dist/lib/utils';

const withEnv = ComposedComponent => {
  return class HOC extends Component {
    static propTypes = {
      storeEnv: PropTypes.func,
      initializeDB: PropTypes.func,
      serverRendered: PropTypes.bool,
      initializeAuth: PropTypes.func,

      env: PropTypes.shape({
        FIREBASE_API_KEY: PropTypes.string,
        FIREBASE_AUTH_DOMAIN: PropTypes.string,
        FIREBASE_DATABASE_URL: PropTypes.string,
        FIREBASE_PROJECT_ID: PropTypes.string,
        FIREBASE_STORAGE_BUCKET: PropTypes.string,
        FIREBASE_MESSAGING_SENDER_ID: PropTypes.string
      })
    }

    static async getInitialProps(ctx) {
      const subProps = await loadGetInitialProps(ComposedComponent, ctx);
      const serverRendered = !process.browser;
      const env = serverRendered ? {
        FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
        FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
        FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
        FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
        FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
        FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID
      } : {};

      return {
        env,
        serverRendered,
        ...subProps
      };
    }

    componentWillMount() {
      const {
        initializeAuth,
        initializeDB, env } = this.props;

      initializeDB(env);
      initializeAuth();
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  };
};

export default withEnv;

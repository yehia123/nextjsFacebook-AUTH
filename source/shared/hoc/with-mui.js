import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { loadGetInitialProps } from 'next/dist/lib/utils';
import Head from 'next/head';
import { PRIMARY_COLOR } from '../constants/theme';

try {
  injectTapEventPlugin();
} catch (e) {
  // prevent injectTapEventPlugin():
  // Can only be called once per application lifecycle
}

const withMaterialUI = ComposedComponent => {
  class HOC extends Component {
    static propTypes = {
      userAgent: PropTypes.string
    }

    static async getInitialProps(ctx) {
      const { req } = ctx;
      const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;

      const subProps = await loadGetInitialProps(ComposedComponent, ctx);

      return {
        ...subProps,
        userAgent
      };
    }

    render() {
      const { userAgent = 'all' } = this.props;
      const Lato = '\'lato\', sans-serif';
      const muiTheme = getMuiTheme(
        {
          fontFamily: Lato,
          palette: {
            primary1Color: PRIMARY_COLOR
          },
          appBar: {
            height: 50
          }
        },
        {
          userAgent
        }
      );

      return (
        <div>
          <Head>
            <title>NextJS Carpool</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" />
          </Head>
          <style>
            {`
            body {
              font-family: 'lato';
            }
        form, .flex-col {
          font-family: 'lato';
              display: flex;
    flex-direction: column;
    align-items: center;
        }
        `}
          </style>
          <MuiThemeProvider muiTheme={muiTheme}>
            <ComposedComponent
              {...this.props}
            />
          </MuiThemeProvider>
        </div>
      );
    }
  };

  return HOC;
};

export default withMaterialUI;

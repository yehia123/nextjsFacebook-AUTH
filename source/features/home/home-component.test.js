import React from 'react';
import reactDom from 'react-dom/server';
import test from 'tape';
import dom from 'cheerio';
import {home} from './home-component';
import { signIn } from '../auth/reducer';
import { Provider } from 'react-redux';
const Home = home;
import { nextConnect } from '../../store/index'
const render = reactDom.renderToStaticMarkup;

const wrappedHome = nextConnect(state => state)(Home);
test('Home', nest => {

  nest.test('title text', assert => {
    const msg = 'should render inside the button';

    const text = 'Sign in with Twitter';
    const re = RegExp(text);
    const auth = { status: 'signed-in'};
    const props = {
      auth: { status: 'signed-in'}
    };
    const el = <wrappedHome {...props} />;
    const $ = dom.load(render(el));
    const output = $('div').html();

    const actual =  output;
    const expected = true;

    assert.equal(actual, expected, msg);

    assert.end();
  });

});

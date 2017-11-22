import React from 'react';
import reactDom from 'react-dom/server';
import test from 'tape';
import dom from 'cheerio';
import {login} from './login.component';
import { signIn } from '../auth/reducer';
const Login = login;

const render = reactDom.renderToStaticMarkup;

test('Login', assert => {
    assert.plan(1);
    const msg = 'should render inside the button';

    const text = 'Sign in with Twitter';
    const re = RegExp(text);

    const el = <Login />;
    const $ = dom.load(render(el));
    const output = $('.loginDiv').html();

    const actual =  re.test(output);
    const expected = true;

    assert.same(actual, expected, msg);
    assert.end();
});

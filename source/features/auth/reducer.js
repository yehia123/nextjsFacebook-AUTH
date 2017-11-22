import dsm from 'redux-dsm';
// redux-dsm * "It just works"
// https://github.com/ericelliott/redux-dsm
// ['action', 'next state']
//   ['scoped-action', 'another-state']
const userAuthStates = [
  ['initialize', 'signed-out',
    ['sign in', 'signing-in',
      ['cancel', 'signed-out'],
      ['report error', 'error',
        ['handle error', 'signed-out']
      ],
      ['report success', 'signed-in',
        ['sign out', 'signing-out',
          [ 'sign out success', 'signed-out'],
          [ 'report sign out error', 'sign-out-error',
            ['handle sign out error', 'signed-in']
          ]
        ]
      ]
    ]
  ]
];

export const dismissErrorAction = () => ({ type: 'DISMISS_ERROR' });

const authDSM = dsm({
  component: 'postampUserAuth',
  description: 'user authentication',
  actionStates: userAuthStates
});

export const getAuthStatus = state => state.auth.status;

const { actionCreators:
    {initialize: initializeAuth,
      signIn }
} = authDSM;

export default authDSM;
export { initializeAuth, signIn };

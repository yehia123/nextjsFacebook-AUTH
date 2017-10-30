'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _page = require('../HOCs/page');

var _page2 = _interopRequireDefault(_page);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Card = require('material-ui/Card');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/thomasgreco/Dropbox/codementor/yehia/nextjs-carpool/pages/index.js?entry';


var Home = function Home(props) {
  return _react2.default.createElement(_Card.Card, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_Card.CardHeader, { title: props.board.title, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), _react2.default.createElement(_Card.CardText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, props.board.items.map(function (x, i) {
    return _react2.default.createElement('p', { key: i, __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }, x.name);
  })));
};

exports.default = (0, _page2.default)(Home);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIndpdGhQYWdlIiwiQXBwQmFyIiwiQ2FyZCIsIkNhcmRBY3Rpb25zIiwiQ2FyZEhlYWRlciIsIkNhcmRNZWRpYSIsIkNhcmRUaXRsZSIsIkNhcmRUZXh0IiwiSG9tZSIsInByb3BzIiwiYm9hcmQiLCJ0aXRsZSIsIml0ZW1zIiwibWFwIiwieCIsImkiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU87Ozs7QUFDUCxBQUFRLEFBQU0sQUFBYSxBQUFZLEFBQVcsQUFBVzs7Ozs7OztBQUU3RCxJQUFNLE9BQU8sU0FBUCxBQUFPLEtBQUEsQUFBQyxPQUFVLEFBQ3RCO3lCQUNFLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0E7QUFEQTtBQUFBLEdBQUEsa0JBQ0EsQUFBQyxrQ0FBVyxPQUFPLE1BQUEsQUFBTSxNQUF6QixBQUErQjtnQkFBL0I7a0JBREEsQUFDQSxBQUNBO0FBREE7c0JBQ0EsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFFSTtBQUZKO0FBQUEsV0FFSSxBQUFNLE1BQU4sQUFBWSxNQUFaLEFBQWtCLElBQUksVUFBQSxBQUFDLEdBQUQsQUFBRyxHQUFNLEFBQzdCOzJCQUFRLGNBQUEsT0FBRyxLQUFILEFBQVE7a0JBQVI7b0JBQUEsQUFBWTtBQUFaO0tBQUEsSUFBUixBQUFRLEFBQWMsQUFDdkI7QUFQUCxBQUNFLEFBRUEsQUFFSSxBQU9QO0FBYkQsQUFlQTs7a0JBQWUsb0JBQWYsQUFBZSxBQUFTIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy90aG9tYXNncmVjby9Ecm9wYm94L2NvZGVtZW50b3IveWVoaWEvbmV4dGpzLWNhcnBvb2wifQ==
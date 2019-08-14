webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _components_layouts_page_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../components/layouts/page.js */ "./components/layouts/page.js");
/* harmony import */ var _components_theme_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../components/theme.js */ "./components/theme.js");
/* harmony import */ var _components_buttons_bigButton_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../components/buttons/bigButton.js */ "./components/buttons/bigButton.js");
/* harmony import */ var _components_solutionsGrid_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../components/solutionsGrid.js */ "./components/solutionsGrid.js");
/* harmony import */ var _components_elements_homepageFeatureBox_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../components/elements/homepageFeatureBox.js */ "./components/elements/homepageFeatureBox.js");
/* harmony import */ var _components_githubLatestVersion_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../components/githubLatestVersion.js */ "./components/githubLatestVersion.js");





var _jsxFileName = "/Users/evan/workspace/actionhero/www.actionherojs.com/pages/index.js";








var CodeSamples = {
  eastToUseActions: "const {Action} = require('actionhero')\n\nmodule.exports = class RandomNumber extends Action {\n  constructor () {\n    super()\n    this.name = 'randomNumber'\n    this.description = 'I am an API method which will generate a random number'\n    this.outputExample = { randomNumber: 0.123 }\n  }\n\n  async run ({connection, response}) {\n    response.randomNumber = Math.random()\n  }\n}",
  backgroundTasks: "await api.tasks.enqueue(\n    \"sendWelcomeEmail\",\n    {to: 'evan@evantahler.com'},\n    'default');\n\nmodule.exports = class RunAction extends ActionHero.Task {\n  constructor () {\n    super()\n    this.name = 'sendWelcomeEmail'\n    this.description = 'I send an email'\n    this.frequency = 0\n    this.queue = 'default'\n  }\n\n  async run (params) {\n    await api.sendEmail(params)\n  }\n}",
  clusterReady: "npx actionhero start cluster --workers 10",
  localization: "let number = Math.random()\nlet response = data.connection.localize(['Your random number is {{number}}', {number: number}])\ndata.response.stringRandomNumber = response",
  routing: "{\n  get: [\n    { path: '/users', action: 'usersList' },\n    { path: '/search/:term/limit/:limit/offset/:offset', action: 'search' },\n  ],\n\n  post: [\n    { path: '/login/:userID(^\\d{3}$)', action: 'login' }\n  ],\n\n  all: [\n    { path: '/user/:userID', action: 'user', matchTrailingPathParts: true }\n  ]\n}",
  chat: "//server\nawait api.chatRoom.broadcast(null, 'myRoom', 'Hello!')\n\n//client\nclient.on('message', (message) => alert(message))\n"
};
var smallIconStyle = {
  padding: 30
};

var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(_default, _React$Component);

  function _default() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _default);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_default).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_default, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_layouts_page_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          backgroundColor: _components_theme_js__WEBPACK_IMPORTED_MODULE_8__["default"].colors.blue,
          color: _components_theme_js__WEBPACK_IMPORTED_MODULE_8__["default"].colors.white
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
        style: {
          paddingTop: 50
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: 8,
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://github.com/actionhero/actionhero",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/logo-and-wordmark.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        id: "latestRelease",
        style: {
          paddingTop: 20
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_githubLatestVersion_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        style: {
          fontFamily: 'Roboto',
          fontWeight: 200,
          paddingTop: 5,
          paddingBottom: 40
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "The reusable, scalable, and quick node.js API server for stateless and stateful applications")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/cloud.svg",
        className: "animated-clouds-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_buttons_bigButton_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
        href: "/downloads",
        backgroundColor: _components_theme_js__WEBPACK_IMPORTED_MODULE_8__["default"].colors.red,
        textColor: _components_theme_js__WEBPACK_IMPORTED_MODULE_8__["default"].colors.white,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "Download")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_buttons_bigButton_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
        href: "/get-started",
        backgroundColor: _components_theme_js__WEBPACK_IMPORTED_MODULE_8__["default"].colors.blueGray,
        textColor: _components_theme_js__WEBPACK_IMPORTED_MODULE_8__["default"].colors.white,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "Get Started")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        style: {
          marginTop: 30
        },
        src: "/static/images/cloud.svg",
        className: "animated-clouds-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        style: {
          marginTop: -30
        },
        src: "/static/images/cloud.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          height: 183,
          background: "url(\"/static/images/clouds.svg\") no-repeat center ".concat(_components_theme_js__WEBPACK_IMPORTED_MODULE_8__["default"].colors.blue)
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          backgroundColor: _components_theme_js__WEBPACK_IMPORTED_MODULE_8__["default"].colors.yellow,
          color: _components_theme_js__WEBPACK_IMPORTED_MODULE_8__["default"].colors.blue
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
        style: _components_theme_js__WEBPACK_IMPORTED_MODULE_8__["default"].padding.section,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: 1,
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/jetpack-lady.svg",
        className: "animated-hover-jetpack",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: 6,
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        style: _components_theme_js__WEBPACK_IMPORTED_MODULE_8__["default"].typeography.h1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "To the Rescue"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        style: _components_theme_js__WEBPACK_IMPORTED_MODULE_8__["default"].typeography.h2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, "No matter what you are building,", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }), " ActionHero is here to save the day.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_elements_homepageFeatureBox_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "Internet of Things",
        image: "/static/images/internet-of-things.svg",
        body: "ActionHero's small footprint and stateful server options make it ideal for IOT applications where as much logic as possible is offloaded to the server.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_elements_homepageFeatureBox_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "Real Time Chat",
        image: "/static/images/real-time-chat.svg",
        body: "ActionHero works with both stateless and statefull clients, making it ideal for chat applications.  ActionHero can work in a cluster to handle all the clients you can throw at it.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_elements_homepageFeatureBox_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "Video Games & Apps",
        image: "/static/images/video-game-servers.svg",
        body: "ActionHero was built to serve the same APIs across multiple protocols.  Do your games speak both HTTP and Socket?  ActionHero has got you covered.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: 12,
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        style: {
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 400,
          fontSize: 20,
          lineHeight: '1.5em',
          color: '#3B5D72'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "... and a whole lot more!"))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          backgroundColor: _components_theme_js__WEBPACK_IMPORTED_MODULE_8__["default"].colors.white,
          color: _components_theme_js__WEBPACK_IMPORTED_MODULE_8__["default"].colors.blue
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
        style: _components_theme_js__WEBPACK_IMPORTED_MODULE_8__["default"].padding.section,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: 12,
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        style: _components_theme_js__WEBPACK_IMPORTED_MODULE_8__["default"].typeography.h1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, "Plays Well With Others"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        style: _components_theme_js__WEBPACK_IMPORTED_MODULE_8__["default"].typeography.h2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, "Use ActionHero around ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, "your"), " workflow and preferred tools."))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        className: "hidden-xs hidden-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: 12,
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        style: smallIconStyle,
        src: "/static/images/plays-well-with-others/electron.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        style: smallIconStyle,
        src: "/static/images/plays-well-with-others/angular.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        style: smallIconStyle,
        src: "/static/images/plays-well-with-others/swift.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        style: smallIconStyle,
        src: "/static/images/plays-well-with-others/elasticsearch.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        style: smallIconStyle,
        src: "/static/images/plays-well-with-others/redis.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        style: smallIconStyle,
        src: "/static/images/plays-well-with-others/npm.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        style: smallIconStyle,
        src: "/static/images/plays-well-with-others/ember.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        className: "hidden-md hidden-lg hidden-xl",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: 1,
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        style: smallIconStyle,
        src: "/static/images/plays-well-with-others/electron.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: 1,
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        style: smallIconStyle,
        src: "/static/images/plays-well-with-others/angular.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: 1,
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        style: smallIconStyle,
        src: "/static/images/plays-well-with-others/swift.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: 1,
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        style: smallIconStyle,
        src: "/static/images/plays-well-with-others/elasticsearch.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: 1,
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        style: smallIconStyle,
        src: "/static/images/plays-well-with-others/redis.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: 1,
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        style: smallIconStyle,
        src: "/static/images/plays-well-with-others/npm.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: 2,
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        style: smallIconStyle,
        src: "/static/images/plays-well-with-others/ember.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: 12,
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        style: smallIconStyle,
        src: "/static/images/flying-man.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          backgroundColor: _components_theme_js__WEBPACK_IMPORTED_MODULE_8__["default"].colors.yellow,
          color: _components_theme_js__WEBPACK_IMPORTED_MODULE_8__["default"].colors.blue
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
        style: _components_theme_js__WEBPACK_IMPORTED_MODULE_8__["default"].padding.section,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: 6,
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        style: _components_theme_js__WEBPACK_IMPORTED_MODULE_8__["default"].typeography.h1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, "You've Got the Power"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        style: _components_theme_js__WEBPACK_IMPORTED_MODULE_8__["default"].typeography.h2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }, "ActionHero was built from the ground up to include all the features you expect from a modern API framework. It also knows when to get out of the way so you can customize your stack to fit your needs.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_elements_homepageFeatureBox_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "Easy-to-Use Actions",
        image: "/static/images/easy-to-use-actions.svg",
        body: "With ActionHero, you create Actions which can respond to any type of connection. They process incoming parameters and offer a response to the client. ActionHero takes care of routing and responding to each connection type for you.",
        code: CodeSamples.eastToUseActions,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_elements_homepageFeatureBox_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "Built-in Tasks",
        image: "/static/images/built-in-tasks.svg",
        body: "Background tasks are first-class in ActionHero. You can enqueue a task from anywhere in the application. Tasks can be recurring or single-run. The ActionHero task system is powered by Resque, so it is compatible with a number of other applications and frameworks.",
        code: CodeSamples.backgroundTasks,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_elements_homepageFeatureBox_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "Cluster-Ready",
        image: "/static/images/cluster-ready.svg",
        body: "ActionHero uses Redis to store and share data. With first-class cache functions, decentralized communications, and distributed workers, you can be sure that your application is able to scale from 1 worker on one server, to as big of a cluster as you need.",
        code: CodeSamples.clusterReady,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_elements_homepageFeatureBox_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "Localization",
        image: "/static/images/localization.svg",
        body: "The ActionHero API makes is simple to create a traditional HTTP(S) API, but it also lets you easily extend your API to TCP and websocket clients (all included). ActionHero also easily lets you write your own servers to handle custom transports.",
        code: CodeSamples.localization,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_elements_homepageFeatureBox_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "Routing",
        image: "/static/images/routing.svg",
        body: "ActionHero ships with a robust router to make mapping HTTP requests to your actions a breeze.",
        code: CodeSamples.routing,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_elements_homepageFeatureBox_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "API-First Development",
        image: "/static/images/api-first-development.svg",
        body: "ActionHero makes API-First development easy by enforcing a strict separation of views and application logic and removing barriers to API creation. Versioning your actions is simple and integrates well with Agile or XP team workflows.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_elements_homepageFeatureBox_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "Chat",
        image: "/static/images/chat.svg",
        body: "The ActionHero API makes it simple to create a ActionHero (optionally) facilitates real-time communication not only from server-to-client, but also client-to-client! ActionHero's chat sub-system allows for streaming of both public and private messages between clients. Complete with middleware and extensions, you can create chat services, multi-player games, and more!",
        code: CodeSamples.chat,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_elements_homepageFeatureBox_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "Operations Tools",
        image: "/static/images/ops-tools.svg",
        body: "It is simple to deploy ActionHero with our included CLI tools. You can launch your server as a single instance or as part of a larger deployment cluster. Tools for 0-downtime deployments and robust monitoring and logging hooks make ActionHero a dream platform for your operations team.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_elements_homepageFeatureBox_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "File Server",
        image: "/static/images/file-server.svg",
        body: "Every server needs to serve files to its clients (even those that don't speak HTTP), and ActionHero is no exception. Configured to asynchronously stream file contents, ActionHero provides an robust file server which can live in parallel with your API, allowing for a fully featured server.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          backgroundColor: _components_theme_js__WEBPACK_IMPORTED_MODULE_8__["default"].colors.white,
          color: _components_theme_js__WEBPACK_IMPORTED_MODULE_8__["default"].colors.blue
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
        style: _components_theme_js__WEBPACK_IMPORTED_MODULE_8__["default"].padding.section,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: 12,
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        style: _components_theme_js__WEBPACK_IMPORTED_MODULE_8__["default"].typeography.h1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        __self: this
      }, "Trusted by Top Companies and Organizations"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        className: "hidden-xs hidden-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: 12,
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        style: smallIconStyle,
        src: "/static/images/companies/riot-games.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        style: smallIconStyle,
        src: "/static/images/companies/samsung.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        style: smallIconStyle,
        src: "/static/images/companies/va.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        style: smallIconStyle,
        src: "/static/images/companies/madglory.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        style: smallIconStyle,
        src: "/static/images/companies/taskrabbit.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        className: "hidden-md hidden-lg hidden-xl",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: 2,
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        style: smallIconStyle,
        src: "/static/images/companies/riot-games.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: 2,
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        style: smallIconStyle,
        src: "/static/images/companies/samsung.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: 1,
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        style: smallIconStyle,
        src: "/static/images/companies/va.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: 2,
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        style: smallIconStyle,
        src: "/static/images/companies/madglory.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: 3,
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        style: smallIconStyle,
        src: "/static/images/companies/taskrabbit.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_solutionsGrid_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          backgroundColor: _components_theme_js__WEBPACK_IMPORTED_MODULE_8__["default"].colors.yellow,
          color: _components_theme_js__WEBPACK_IMPORTED_MODULE_8__["default"].colors.blue,
          backgroundImage: 'url("/static/images/starburst.png")',
          backgroundSize: '100% 100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
        style: _components_theme_js__WEBPACK_IMPORTED_MODULE_8__["default"].padding.section,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: 12,
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        style: _components_theme_js__WEBPACK_IMPORTED_MODULE_8__["default"].typeography.h1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        },
        __self: this
      }, "Ready to take your development to the next level?"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: 12,
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_buttons_bigButton_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
        href: "/get-started",
        backgroundColor: _components_theme_js__WEBPACK_IMPORTED_MODULE_8__["default"].colors.red,
        textColor: _components_theme_js__WEBPACK_IMPORTED_MODULE_8__["default"].colors.white,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        },
        __self: this
      }, "Get Started"))))));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.2491ce535262bf1f37e1.hot-update.js.map
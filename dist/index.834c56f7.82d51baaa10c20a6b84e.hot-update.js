webpackHotUpdate("index.834c56f7",{

/***/ "./src/popup/index.js":
/*!****************************!*\
  !*** ./src/popup/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/popup/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _common_components_switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/components/switch */ "./src/common/components/switch.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/myungyeonlee/pshelper-extension/src/popup/index.js";







class Popup extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      algorithmIsToggled: false,
      highlightIsToggled: false,
      keywordIsToggled: false
    };
  }

  setIsToggled() {
    this.setState(event => {
      chrome.extension.getBackgroundPage().console.log(event);
    });
  } // FIXME: state doesn't change


  setAlgorithmIsToggled(flag) {
    chrome.extension.getBackgroundPage().console.log(flag);

    if (flag) {
      this.setState(this.algorithmIsToggled = false);
    } else {
      this.setState(this.algorithmIsToggled = true);
    }

    chrome.extension.getBackgroundPage().console.log("setAlgorithmIsToggled");
    chrome.extension.getBackgroundPage().console.log(this.state);
    chrome.runtime.sendMessage({
      action: "postAnalyzeAlgorithm"
    }, function (response) {
      chrome.extension.getBackgroundPage().console.log(response);
    });
  }

  setHighLightIsToggled(flag) {
    chrome.extension.getBackgroundPage().console.log(flag);

    if (flag) {
      this.setState(this.highlightIsToggled = false);
    } else {
      this.setState(this.highlightIsToggled = true);
    }

    chrome.extension.getBackgroundPage().console.log("setHighLightIsToggled");
    chrome.extension.getBackgroundPage().console.log(this.state);
    chrome.runtime.sendMessage({
      action: "postHighlight"
    }, function (response) {
      chrome.extension.getBackgroundPage().console.log(response);
    });
  }

  setKeywordIsToggled(flag) {
    this.setState(() => {
      if (flag) this.coreIsToggled = false;else this.coreIsToggled = true;
      chrome.extension.getBackgroundPage().console.log("setKeywordIsToggled");
      chrome.extension.getBackgroundPage().console.log(this.state);
      chrome.runtime.sendMessage({
        action: "postKeyword"
      }, function (response) {
        chrome.extension.getBackgroundPage().console.log(response);
      });
    });
  }

  componentDidMount() {
    /*global chrome*/
    // chrome.tabs.getSelected(null, function(tab) {
    //   chrome.tabs.sendMessage(tab.id, { action: "getDOM" }, function(response) {
    //     if (response) {
    //       chrome.extension.getBackgroundPage().console.log(response['description']);
    //       chrome.extension.getBackgroundPage().console.log(response['input']);
    //       chrome.extension.getBackgroundPage().console.log(response['output']);
    //     } else {
    //       chrome.extension.getBackgroundPage().console.log("EMPTY");
    //     }
    //   });
    // });
  }

  render() {
    const Footer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].footer`
      display: block;
      text-align: center;
      font-size: 10px;
      maring-top: 10px;
      `;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "Popup",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "Popup-body",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "App-logo",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "Logo",
            children: "PSHELPER"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "Logo-sub",
            children: "2021"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "Input",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "Swich-body",
            children: ["\uC54C\uACE0\uB9AC\uC998 \uBD84\uB958 \uD655\uC778", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_common_components_switch__WEBPACK_IMPORTED_MODULE_4__["default"], {
              id: "var-switch",
              toggled: this.state.algorithmIsToggled,
              onChange: this.setAlgorithmIsToggled(this.state.algorithmIsToggled)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "Swich-body",
            children: ["\uD558\uC774\uB77C\uC774\uD305 \uAE30\uB2A5", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_common_components_switch__WEBPACK_IMPORTED_MODULE_4__["default"], {
              id: "hilight-switch",
              toggled: this.state.highlightIsToggled,
              onChange: this.setHighLightIsToggled(this.state.highlightIsToggled)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "Swich-body",
            children: ["\uD575\uC2EC \uB2E8\uC5B4 \uCCB4\uD06C \uAE30\uB2A5", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_common_components_switch__WEBPACK_IMPORTED_MODULE_4__["default"], {
              id: "core-switch",
              toggled: this.state.keywordIsToggled,
              onChange: this.setKeywordIsToggled(this.state.keywordIsToggled)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Footer, {
          children: "\xA9 2021 50625, Inc. All right reserved."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, this);
  }

}

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Popup, {}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 134,
  columnNumber: 3
}, undefined), document.getElementById("root"));

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=index.834c56f7.82d51baaa10c20a6b84e.hot-update.js.map
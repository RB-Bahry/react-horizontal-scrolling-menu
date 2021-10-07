webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_safari_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/safari-polyfill */ \"./helpers/safari-polyfill.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/throttle */ \"./node_modules/lodash/throttle.js\");\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _helpers_useHideBodyScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/useHideBodyScroll */ \"./helpers/useHideBodyScroll/index.ts\");\n/* harmony import */ var _helpers_useDrag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/useDrag */ \"./helpers/useDrag.ts\");\n/* harmony import */ var react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-horizontal-scrolling-menu */ \"./node_modules/react-horizontal-scrolling-menu/dist/index.umd.js\");\n/* harmony import */ var react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/home/alex/react-horizontal-scrolling-menu/example-nextjs/pages/index.tsx\",\n    _process,\n    _process$env,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$(),\n    _s4 = $RefreshSig$(),\n    _s5 = $RefreshSig$();\n\n\n\n // NOTE: prevent scrolling on main page\n\n // NOTE drag with mouse\n\n // NOTE hide scrollbar in _app.js\n\n\nconst isTest = (_process = process) === null || _process === void 0 ? void 0 : (_process$env = _process.env) === null || _process$env === void 0 ? void 0 : _process$env.NEXT_PUBLIC_IS_TEST;\nconst elemPrefix = 'test';\n\nconst getId = index => \"\".concat(elemPrefix).concat(index);\n\nconst getItems = () => Array(170).fill(0).map((_, ind) => ({\n  id: getId(ind)\n}));\n\nconst onWheel = (apiObj, ev) => {\n  // NOTE: no good standart way to distinguish touchpad scrolling gestures\n  // but can assume that gesture will affect X axis, mouse scroll only Y axis\n  // of if deltaY too small probably is it touchpad\n  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;\n\n  if (isThouchpad) {\n    ev.stopPropagation();\n    return;\n  }\n\n  if (ev.deltaY < 0) {\n    apiObj.scrollNext();\n  } else if (ev.deltaY > 0) {\n    apiObj.scrollPrev();\n  }\n};\n\nfunction App() {\n  _s();\n\n  const [items, setItems] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(getItems);\n  const [selected, setSelected] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]);\n  const [position, setPosition] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0); // NOTE: for add more items when last item reached\n  // const onUpdate = ({ isLastItemVisible }: scrollVisibilityApiType) => {\n  //   if (isLastItemVisible) {\n  //     const newItems = items.concat(\n  //       Array(5)\n  //         .fill(0)\n  //         .map((_, ind) => ({ id: getId(items.length + ind) }))\n  //     );\n  //     console.log('push new items');\n  //     setItems(newItems);\n  //   }\n  // };\n\n  const isItemSelected = id => !!selected.find(el => el === id);\n\n  const {\n    dragStart,\n    dragStop,\n    dragMove,\n    dragging\n  } = Object(_helpers_useDrag__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n  const onMouseUp = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(() => dragStop, [dragStop]);\n  const onMouseDown = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(() => dragStart, [dragStart]);\n\n  const handleDrag = ({\n    scrollContainer\n  }) => ev => dragMove(ev, newPos => {\n    if (scrollContainer.current) {\n      const {\n        scrollLeft\n      } = scrollContainer.current;\n      scrollContainer.current.scrollLeft += newPos;\n    }\n  });\n\n  const handleItemClick = itemId => ({\n    getItemById,\n    scrollToItem\n  }) => {\n    if (dragging) {\n      return false;\n    }\n\n    const itemSelected = isItemSelected(itemId);\n    setSelected(currentSelected => itemSelected ? currentSelected.filter(el => el !== itemId) : currentSelected.concat(itemId));\n\n    if (!itemSelected) {\n      // NOTE: center item on select\n      scrollToItem(getItemById(itemId), 'smooth', 'center', 'nearest');\n    }\n  };\n\n  const restorePosition = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(({\n    scrollContainer,\n    getItemById,\n    scrollToItem\n  }) => {// NOTE: scroll to item, auto/smooth for animation\n    // scrollToItem(getItemById('test15'), 'auto');\n    // NOTE: or restore exact position by pixels\n    // scrollContainer.current.scrollLeft = position;\n  }, [position]); // eslint-disable-next-line react-hooks/exhaustive-deps\n\n  const savePosition = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default()(({\n    scrollContainer\n  }) => !!scrollContainer.current && setPosition(scrollContainer.current.scrollLeft), 500), []);\n  const {\n    hideScroll,\n    showScroll\n  } = Object(_helpers_useHideBodyScroll__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"example\",\n      style: {\n        height: '200vh',\n        paddingTop: '200px'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        onMouseEnter: hideScroll,\n        onMouseLeave: showScroll,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          onMouseLeave: dragStop,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__[\"ScrollMenu\"], {\n            LeftArrow: LeftArrow,\n            RightArrow: RightArrow,\n            onInit: restorePosition // onUpdate={onUpdate}\n            ,\n            onScroll: savePosition,\n            onWheel: onWheel,\n            onMouseDown: onMouseDown,\n            onMouseUp: onMouseUp,\n            onMouseMove: handleDrag,\n            children: items.map(({\n              id\n            }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Card, {\n              title: id,\n              itemId: id // NOTE: itemId is required for track items\n              ,\n              onClick: handleItemClick(id),\n              selected: isItemSelected(id)\n            }, id, false, {\n              fileName: _jsxFileName,\n              lineNumber: 149,\n              columnNumber: 17\n            }, this))\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 137,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 136,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 135,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 133,\n    columnNumber: 5\n  }, this);\n}\n\n_s(App, \"Jro51pFq0RYQw3sW1MVxRBkKz0o=\", false, function () {\n  return [_helpers_useDrag__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _helpers_useHideBodyScroll__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n});\n\n_c = App;\n\nfunction LeftArrow() {\n  _s2();\n\n  const {\n    initComplete,\n    isFirstItemVisible,\n    scrollPrev\n  } = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__[\"VisibilityContext\"]); // NOTE initComplete is a hack for  prevent blinking on init\n  // Can get visibility of item only after it's rendered\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Arrow, {\n    disabled: !initComplete || initComplete && isFirstItemVisible,\n    onClick: () => scrollPrev(isTest ? 'auto' : 'smooth'),\n    children: \"Left\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 172,\n    columnNumber: 5\n  }, this);\n}\n\n_s2(LeftArrow, \"2u9dvBRCES5pVRMXIGOF3Ug5BzY=\");\n\n_c2 = LeftArrow;\n\nfunction RightArrow() {\n  _s3();\n\n  const {\n    initComplete,\n    isLastItemVisible,\n    scrollNext\n  } = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__[\"VisibilityContext\"]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Arrow, {\n    disabled: initComplete && isLastItemVisible,\n    onClick: () => scrollNext(isTest ? 'auto' : 'smooth'),\n    children: \"Right\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 186,\n    columnNumber: 5\n  }, this);\n}\n\n_s3(RightArrow, \"PATf83e6EP2QcNJjlk2fI328v74=\");\n\n_c3 = RightArrow;\n\nfunction Arrow({\n  children,\n  disabled,\n  onClick\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n    disabled: disabled,\n    onClick: onClick,\n    style: {\n      cursor: 'pointer',\n      display: 'flex',\n      flexDirection: 'column',\n      justifyContent: 'center',\n      right: '1%',\n      opacity: disabled ? '0' : '1',\n      userSelect: 'none'\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 205,\n    columnNumber: 5\n  }, this);\n}\n\n_c4 = Arrow;\n\nfunction Card({\n  onClick,\n  selected,\n  title,\n  itemId\n}) {\n  _s4();\n\n  const visibility = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__[\"VisibilityContext\"]);\n  const visible = !visibility.initComplete || visibility.initComplete && visibility.isItemVisible(itemId);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    \"data-cy\": itemId,\n    onClick: () => onClick(visibility),\n    onKeyDown: ev => {\n      ev.code === 'Enter' && onClick(visibility);\n    },\n    role: \"button\",\n    style: {\n      border: '1px solid',\n      display: 'inline-block',\n      margin: '0 10px',\n      width: '160px',\n      userSelect: 'none'\n    },\n    tabIndex: 0,\n    className: \"card\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"card-header\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 260,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          backgroundColor: visible ? 'transparent' : 'gray'\n        },\n        children: [\"visible: \", JSON.stringify(visible)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 261,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [\"selected: \", JSON.stringify(!!selected)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 264,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 259,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        backgroundColor: selected ? 'green' : 'bisque',\n        height: '200px'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 266,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 242,\n    columnNumber: 5\n  }, this);\n} // TODO: nextjs complains about useLayoutEffect\n\n\n_s4(Card, \"wzCNnUK2b4GmsbLaFyuDONa1PJI=\");\n\n_c5 = Card;\n\nconst Wrapper = () => {\n  _s5();\n\n  const [mounted, setMounted] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false);\n  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(() => {\n    setMounted(true);\n  }, []);\n  return mounted ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(App, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 284,\n    columnNumber: 20\n  }, undefined) : null;\n};\n\n_s5(Wrapper, \"LrrVfNW3d1raFE0BNzCTILYmIfo=\");\n\n_c6 = Wrapper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wrapper);\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"App\");\n$RefreshReg$(_c2, \"LeftArrow\");\n$RefreshReg$(_c3, \"RightArrow\");\n$RefreshReg$(_c4, \"Arrow\");\n$RefreshReg$(_c5, \"Card\");\n$RefreshReg$(_c6, \"Wrapper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiaXNUZXN0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0lTX1RFU1QiLCJlbGVtUHJlZml4IiwiZ2V0SWQiLCJpbmRleCIsImdldEl0ZW1zIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImluZCIsImlkIiwib25XaGVlbCIsImFwaU9iaiIsImV2IiwiaXNUaG91Y2hwYWQiLCJNYXRoIiwiYWJzIiwiZGVsdGFYIiwiZGVsdGFZIiwic3RvcFByb3BhZ2F0aW9uIiwic2Nyb2xsTmV4dCIsInNjcm9sbFByZXYiLCJBcHAiLCJpdGVtcyIsInNldEl0ZW1zIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJwb3NpdGlvbiIsInNldFBvc2l0aW9uIiwiaXNJdGVtU2VsZWN0ZWQiLCJmaW5kIiwiZWwiLCJkcmFnU3RhcnQiLCJkcmFnU3RvcCIsImRyYWdNb3ZlIiwiZHJhZ2dpbmciLCJ1c2VEcmFnIiwib25Nb3VzZVVwIiwidXNlQ2FsbGJhY2siLCJvbk1vdXNlRG93biIsImhhbmRsZURyYWciLCJzY3JvbGxDb250YWluZXIiLCJuZXdQb3MiLCJjdXJyZW50Iiwic2Nyb2xsTGVmdCIsImhhbmRsZUl0ZW1DbGljayIsIml0ZW1JZCIsImdldEl0ZW1CeUlkIiwic2Nyb2xsVG9JdGVtIiwiaXRlbVNlbGVjdGVkIiwiY3VycmVudFNlbGVjdGVkIiwiZmlsdGVyIiwiY29uY2F0IiwicmVzdG9yZVBvc2l0aW9uIiwic2F2ZVBvc2l0aW9uIiwidGhyb3R0bGUiLCJoaWRlU2Nyb2xsIiwic2hvd1Njcm9sbCIsInVzZUhpZGVCb2R5U2Nyb2xsIiwiaGVpZ2h0IiwicGFkZGluZ1RvcCIsIkxlZnRBcnJvdyIsIlJpZ2h0QXJyb3ciLCJpbml0Q29tcGxldGUiLCJpc0ZpcnN0SXRlbVZpc2libGUiLCJ1c2VDb250ZXh0IiwiVmlzaWJpbGl0eUNvbnRleHQiLCJpc0xhc3RJdGVtVmlzaWJsZSIsIkFycm93IiwiY2hpbGRyZW4iLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJjdXJzb3IiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwicmlnaHQiLCJvcGFjaXR5IiwidXNlclNlbGVjdCIsIkNhcmQiLCJ0aXRsZSIsInZpc2liaWxpdHkiLCJ2aXNpYmxlIiwiaXNJdGVtVmlzaWJsZSIsImNvZGUiLCJib3JkZXIiLCJtYXJnaW4iLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsIkpTT04iLCJzdHJpbmdpZnkiLCJXcmFwcGVyIiwibW91bnRlZCIsInNldE1vdW50ZWQiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtDQUlBOztDQUdBOztDQUdBOztBQUVBO0FBRUEsTUFBTUEsTUFBTSxlQUFHQyxPQUFILDZEQUFHLFNBQVNDLEdBQVosaURBQUcsYUFBY0MsbUJBQTdCO0FBSUEsTUFBTUMsVUFBVSxHQUFHLE1BQW5COztBQUNBLE1BQU1DLEtBQUssR0FBSUMsS0FBRCxjQUFzQkYsVUFBdEIsU0FBbUNFLEtBQW5DLENBQWQ7O0FBRUEsTUFBTUMsUUFBUSxHQUFHLE1BQ2ZDLEtBQUssQ0FBQyxHQUFELENBQUwsQ0FDR0MsSUFESCxDQUNRLENBRFIsRUFFR0MsR0FGSCxDQUVPLENBQUNDLENBQUQsRUFBSUMsR0FBSixNQUFhO0FBQUVDLElBQUUsRUFBRVIsS0FBSyxDQUFDTyxHQUFEO0FBQVgsQ0FBYixDQUZQLENBREY7O0FBS0EsTUFBTUUsT0FBTyxHQUFHLENBQ2RDLE1BRGMsRUFFZEMsRUFGYyxLQUdMO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsUUFBTUMsV0FBVyxHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBU0gsRUFBRSxDQUFDSSxNQUFaLE1BQXdCLENBQXhCLElBQTZCRixJQUFJLENBQUNDLEdBQUwsQ0FBU0gsRUFBRSxDQUFDSyxNQUFaLElBQXNCLEVBQXZFOztBQUVBLE1B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RTtBQUFBLGtCQUFNRTtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUssYUFBSyxFQUFFO0FBQUVRLHlCQUFlLEVBQUVOLE9BQU8sR0FBRyxhQUFILEdBQW1CO0FBQTdDLFNBQVo7QUFBQSxnQ0FDWU8sSUFBSSxDQUFDQyxTQUFMLENBQWVSLE9BQWYsQ0FEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUtFO0FBQUEsaUNBQWdCTyxJQUFJLENBQUNDLFNBQUwsQ0FBZSxDQUFDLENBQUNqRSxRQUFqQixDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQkYsZUF3QkU7QUFDRSxXQUFLLEVBQUU7QUFDTCtELHVCQUFlLEVBQUUvRCxRQUFRLEdBQUcsT0FBSCxHQUFhLFFBRGpDO0FBRUxrQyxjQUFNLEVBQUU7QUFGSDtBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpQ0QsQyxDQUVEOzs7SUFyRFNvQixJOztNQUFBQSxJOztBQXNEVCxNQUFNWSxPQUFPLEdBQUcsTUFBTTtBQUFBOztBQUNwQixRQUFNLENBQUNDLE9BQUQsRUFBVUMsVUFBVixJQUF3QnRFLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBQTlCO0FBRUFELDhDQUFLLENBQUN1RSxTQUFOLENBQWdCLE1BQU07QUFDcEJELGNBQVUsQ0FBQyxJQUFELENBQVY7QUFDRCxHQUZELEVBRUcsRUFGSDtBQUlBLFNBQU9ELE9BQU8sZ0JBQUcscUVBQUMsR0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUgsR0FBYSxJQUEzQjtBQUNELENBUkQ7O0lBQU1ELE87O01BQUFBLE87QUFVU0Esc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL2hlbHBlcnMvc2FmYXJpLXBvbHlmaWxsJztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHRocm90dGxlIGZyb20gJ2xvZGFzaC90aHJvdHRsZSc7XG5cbi8vIE5PVEU6IHByZXZlbnQgc2Nyb2xsaW5nIG9uIG1haW4gcGFnZVxuaW1wb3J0IHVzZUhpZGVCb2R5U2Nyb2xsIGZyb20gJy4uL2hlbHBlcnMvdXNlSGlkZUJvZHlTY3JvbGwnO1xuXG4vLyBOT1RFIGRyYWcgd2l0aCBtb3VzZVxuaW1wb3J0IHVzZURyYWcgZnJvbSAnLi4vaGVscGVycy91c2VEcmFnJztcblxuLy8gTk9URSBoaWRlIHNjcm9sbGJhciBpbiBfYXBwLmpzXG5cbmltcG9ydCB7IFNjcm9sbE1lbnUsIFZpc2liaWxpdHlDb250ZXh0IH0gZnJvbSAncmVhY3QtaG9yaXpvbnRhbC1zY3JvbGxpbmctbWVudSc7XG5cbmNvbnN0IGlzVGVzdCA9IHByb2Nlc3M/LmVudj8uTkVYVF9QVUJMSUNfSVNfVEVTVDtcblxudHlwZSBzY3JvbGxWaXNpYmlsaXR5QXBpVHlwZSA9IFJlYWN0LkNvbnRleHRUeXBlPHR5cGVvZiBWaXNpYmlsaXR5Q29udGV4dD47XG5cbmNvbnN0IGVsZW1QcmVmaXggPSAndGVzdCc7XG5jb25zdCBnZXRJZCA9IChpbmRleDogbnVtYmVyKSA9PiBgJHtlbGVtUHJlZml4fSR7aW5kZXh9YDtcblxuY29uc3QgZ2V0SXRlbXMgPSAoKSA9PlxuICBBcnJheSgxNzApXG4gICAgLmZpbGwoMClcbiAgICAubWFwKChfLCBpbmQpID0+ICh7IGlkOiBnZXRJZChpbmQpIH0pKTtcblxuY29uc3Qgb25XaGVlbCA9IChcbiAgYXBpT2JqOiBzY3JvbGxWaXNpYmlsaXR5QXBpVHlwZSxcbiAgZXY6IFJlYWN0LldoZWVsRXZlbnRcbik6IHZvaWQgPT4ge1xuICAvLyBOT1RFOiBubyBnb29kIHN0YW5kYXJ0IHdheSB0byBkaXN0aW5ndWlzaCB0b3VjaHBhZCBzY3JvbGxpbmcgZ2VzdHVyZXNcbiAgLy8gYnV0IGNhbiBhc3N1bWUgdGhhdCBnZXN0dXJlIHdpbGwgYWZmZWN0IFggYXhpcywgbW91c2Ugc2Nyb2xsIG9ubHkgWSBheGlzXG4gIC8vIG9mIGlmIGRlbHRhWSB0b28gc21hbGwgcHJvYmFibHkgaXMgaXQgdG91Y2hwYWRcbiAgY29uc3QgaXNUaG91Y2hwYWQgPSBNYXRoLmFicyhldi5kZWx0YVgpICE9PSAwIHx8IE1hdGguYWJzKGV2LmRlbHRhWSkgPCAxNTtcblxuICBpZiAoaXNUaG91Y2hwYWQpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZXYuZGVsdGFZIDwgMCkge1xuICAgIGFwaU9iai5zY3JvbGxOZXh0KCk7XG4gIH0gZWxzZSBpZiAoZXYuZGVsdGFZID4gMCkge1xuICAgIGFwaU9iai5zY3JvbGxQcmV2KCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSBSZWFjdC51c2VTdGF0ZShnZXRJdGVtcyk7XG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcbiAgY29uc3QgW3Bvc2l0aW9uLCBzZXRQb3NpdGlvbl0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcblxuICAvLyBOT1RFOiBmb3IgYWRkIG1vcmUgaXRlbXMgd2hlbiBsYXN0IGl0ZW0gcmVhY2hlZFxuICAvLyBjb25zdCBvblVwZGF0ZSA9ICh7IGlzTGFzdEl0ZW1WaXNpYmxlIH06IHNjcm9sbFZpc2liaWxpdHlBcGlUeXBlKSA9PiB7XG4gIC8vICAgaWYgKGlzTGFzdEl0ZW1WaXNpYmxlKSB7XG4gIC8vICAgICBjb25zdCBuZXdJdGVtcyA9IGl0ZW1zLmNvbmNhdChcbiAgLy8gICAgICAgQXJyYXkoNSlcbiAgLy8gICAgICAgICAuZmlsbCgwKVxuICAvLyAgICAgICAgIC5tYXAoKF8sIGluZCkgPT4gKHsgaWQ6IGdldElkKGl0ZW1zLmxlbmd0aCArIGluZCkgfSkpXG4gIC8vICAgICApO1xuICAvLyAgICAgY29uc29sZS5sb2coJ3B1c2ggbmV3IGl0ZW1zJyk7XG4gIC8vICAgICBzZXRJdGVtcyhuZXdJdGVtcyk7XG4gIC8vICAgfVxuICAvLyB9O1xuXG4gIGNvbnN0IGlzSXRlbVNlbGVjdGVkID0gKGlkOiBzdHJpbmcpOiBib29sZWFuID0+XG4gICAgISFzZWxlY3RlZC5maW5kKChlbCkgPT4gZWwgPT09IGlkKTtcblxuICBjb25zdCB7IGRyYWdTdGFydCwgZHJhZ1N0b3AsIGRyYWdNb3ZlLCBkcmFnZ2luZyB9ID0gdXNlRHJhZygpO1xuICBjb25zdCBvbk1vdXNlVXAgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiBkcmFnU3RvcCwgW2RyYWdTdG9wXSk7XG4gIGNvbnN0IG9uTW91c2VEb3duID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4gZHJhZ1N0YXJ0LCBbZHJhZ1N0YXJ0XSk7XG5cbiAgY29uc3QgaGFuZGxlRHJhZyA9XG4gICAgKHsgc2Nyb2xsQ29udGFpbmVyIH06IHNjcm9sbFZpc2liaWxpdHlBcGlUeXBlKSA9PlxuICAgIChldjogUmVhY3QuTW91c2VFdmVudCkgPT5cbiAgICAgIGRyYWdNb3ZlKGV2LCAobmV3UG9zKSA9PiB7XG4gICAgICAgIGlmIChzY3JvbGxDb250YWluZXIuY3VycmVudCkge1xuICAgICAgICAgIGNvbnN0IHsgc2Nyb2xsTGVmdCB9ID0gc2Nyb2xsQ29udGFpbmVyLmN1cnJlbnQ7XG4gICAgICAgICAgc2Nyb2xsQ29udGFpbmVyLmN1cnJlbnQuc2Nyb2xsTGVmdCArPSBuZXdQb3M7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gIGNvbnN0IGhhbmRsZUl0ZW1DbGljayA9XG4gICAgKGl0ZW1JZDogc3RyaW5nKSA9PlxuICAgICh7IGdldEl0ZW1CeUlkLCBzY3JvbGxUb0l0ZW0gfTogc2Nyb2xsVmlzaWJpbGl0eUFwaVR5cGUpID0+IHtcbiAgICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBjb25zdCBpdGVtU2VsZWN0ZWQgPSBpc0l0ZW1TZWxlY3RlZChpdGVtSWQpO1xuXG4gICAgICBzZXRTZWxlY3RlZCgoY3VycmVudFNlbGVjdGVkOiBzdHJpbmdbXSkgPT5cbiAgICAgICAgaXRlbVNlbGVjdGVkXG4gICAgICAgICAgPyBjdXJyZW50U2VsZWN0ZWQuZmlsdGVyKChlbCkgPT4gZWwgIT09IGl0ZW1JZClcbiAgICAgICAgICA6IGN1cnJlbnRTZWxlY3RlZC5jb25jYXQoaXRlbUlkKVxuICAgICAgKTtcblxuICAgICAgaWYgKCFpdGVtU2VsZWN0ZWQpIHtcbiAgICAgICAgLy8gTk9URTogY2VudGVyIGl0ZW0gb24gc2VsZWN0XG4gICAgICAgIHNjcm9sbFRvSXRlbShnZXRJdGVtQnlJZChpdGVtSWQpLCAnc21vb3RoJywgJ2NlbnRlcicsICduZWFyZXN0Jyk7XG4gICAgICB9XG4gICAgfTtcblxuICBjb25zdCByZXN0b3JlUG9zaXRpb24gPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoe1xuICAgICAgc2Nyb2xsQ29udGFpbmVyLFxuICAgICAgZ2V0SXRlbUJ5SWQsXG4gICAgICBzY3JvbGxUb0l0ZW0sXG4gICAgfTogc2Nyb2xsVmlzaWJpbGl0eUFwaVR5cGUpID0+IHtcbiAgICAgIC8vIE5PVEU6IHNjcm9sbCB0byBpdGVtLCBhdXRvL3Ntb290aCBmb3IgYW5pbWF0aW9uXG4gICAgICAvLyBzY3JvbGxUb0l0ZW0oZ2V0SXRlbUJ5SWQoJ3Rlc3QxNScpLCAnYXV0bycpO1xuICAgICAgLy8gTk9URTogb3IgcmVzdG9yZSBleGFjdCBwb3NpdGlvbiBieSBwaXhlbHNcbiAgICAgIC8vIHNjcm9sbENvbnRhaW5lci5jdXJyZW50LnNjcm9sbExlZnQgPSBwb3NpdGlvbjtcbiAgICB9LFxuICAgIFtwb3NpdGlvbl1cbiAgKTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIGNvbnN0IHNhdmVQb3NpdGlvbiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIHRocm90dGxlKFxuICAgICAgKHsgc2Nyb2xsQ29udGFpbmVyIH06IHNjcm9sbFZpc2liaWxpdHlBcGlUeXBlKSA9PlxuICAgICAgICAhIXNjcm9sbENvbnRhaW5lci5jdXJyZW50ICYmXG4gICAgICAgIHNldFBvc2l0aW9uKHNjcm9sbENvbnRhaW5lci5jdXJyZW50LnNjcm9sbExlZnQpLFxuICAgICAgNTAwXG4gICAgKSxcbiAgICBbXVxuICApO1xuXG4gIGNvbnN0IHsgaGlkZVNjcm9sbCwgc2hvd1Njcm9sbCB9ID0gdXNlSGlkZUJvZHlTY3JvbGwoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGVcIiBzdHlsZT17eyBoZWlnaHQ6ICcyMDB2aCcsIHBhZGRpbmdUb3A6ICcyMDBweCcgfX0+XG4gICAgICAgIDxkaXYgb25Nb3VzZUVudGVyPXtoaWRlU2Nyb2xsfSBvbk1vdXNlTGVhdmU9e3Nob3dTY3JvbGx9PlxuICAgICAgICAgIDxkaXYgb25Nb3VzZUxlYXZlPXtkcmFnU3RvcH0+XG4gICAgICAgICAgICA8U2Nyb2xsTWVudVxuICAgICAgICAgICAgICBMZWZ0QXJyb3c9e0xlZnRBcnJvd31cbiAgICAgICAgICAgICAgUmlnaHRBcnJvdz17UmlnaHRBcnJvd31cbiAgICAgICAgICAgICAgb25Jbml0PXtyZXN0b3JlUG9zaXRpb259XG4gICAgICAgICAgICAgIC8vIG9uVXBkYXRlPXtvblVwZGF0ZX1cbiAgICAgICAgICAgICAgb25TY3JvbGw9e3NhdmVQb3NpdGlvbn1cbiAgICAgICAgICAgICAgb25XaGVlbD17b25XaGVlbH1cbiAgICAgICAgICAgICAgb25Nb3VzZURvd249e29uTW91c2VEb3dufVxuICAgICAgICAgICAgICBvbk1vdXNlVXA9e29uTW91c2VVcH1cbiAgICAgICAgICAgICAgb25Nb3VzZU1vdmU9e2hhbmRsZURyYWd9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtpdGVtcy5tYXAoKHsgaWQgfSkgPT4gKFxuICAgICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgICB0aXRsZT17aWR9XG4gICAgICAgICAgICAgICAgICBpdGVtSWQ9e2lkfSAvLyBOT1RFOiBpdGVtSWQgaXMgcmVxdWlyZWQgZm9yIHRyYWNrIGl0ZW1zXG4gICAgICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlSXRlbUNsaWNrKGlkKX1cbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtpc0l0ZW1TZWxlY3RlZChpZCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1Njcm9sbE1lbnU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIExlZnRBcnJvdygpIHtcbiAgY29uc3QgeyBpbml0Q29tcGxldGUsIGlzRmlyc3RJdGVtVmlzaWJsZSwgc2Nyb2xsUHJldiB9ID1cbiAgICBSZWFjdC51c2VDb250ZXh0KFZpc2liaWxpdHlDb250ZXh0KTtcbiAgLy8gTk9URSBpbml0Q29tcGxldGUgaXMgYSBoYWNrIGZvciAgcHJldmVudCBibGlua2luZyBvbiBpbml0XG4gIC8vIENhbiBnZXQgdmlzaWJpbGl0eSBvZiBpdGVtIG9ubHkgYWZ0ZXIgaXQncyByZW5kZXJlZFxuXG4gIHJldHVybiAoXG4gICAgPEFycm93XG4gICAgICBkaXNhYmxlZD17IWluaXRDb21wbGV0ZSB8fCAoaW5pdENvbXBsZXRlICYmIGlzRmlyc3RJdGVtVmlzaWJsZSl9XG4gICAgICBvbkNsaWNrPXsoKSA9PiBzY3JvbGxQcmV2KGlzVGVzdCA/ICdhdXRvJyA6ICdzbW9vdGgnKX1cbiAgICA+XG4gICAgICBMZWZ0XG4gICAgPC9BcnJvdz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gUmlnaHRBcnJvdygpIHtcbiAgY29uc3QgeyBpbml0Q29tcGxldGUsIGlzTGFzdEl0ZW1WaXNpYmxlLCBzY3JvbGxOZXh0IH0gPVxuICAgIFJlYWN0LnVzZUNvbnRleHQoVmlzaWJpbGl0eUNvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPEFycm93XG4gICAgICBkaXNhYmxlZD17aW5pdENvbXBsZXRlICYmIGlzTGFzdEl0ZW1WaXNpYmxlfVxuICAgICAgb25DbGljaz17KCkgPT4gc2Nyb2xsTmV4dChpc1Rlc3QgPyAnYXV0bycgOiAnc21vb3RoJyl9XG4gICAgPlxuICAgICAgUmlnaHRcbiAgICA8L0Fycm93PlxuICApO1xufVxuXG5mdW5jdGlvbiBBcnJvdyh7XG4gIGNoaWxkcmVuLFxuICBkaXNhYmxlZCxcbiAgb25DbGljayxcbn06IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIG9uQ2xpY2s6IFZvaWRGdW5jdGlvbjtcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgcmlnaHQ6ICcxJScsXG4gICAgICAgIG9wYWNpdHk6IGRpc2FibGVkID8gJzAnIDogJzEnLFxuICAgICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gQ2FyZCh7XG4gIG9uQ2xpY2ssXG4gIHNlbGVjdGVkLFxuICB0aXRsZSxcbiAgaXRlbUlkLFxufToge1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIG9uQ2xpY2s6IEZ1bmN0aW9uO1xuICBzZWxlY3RlZDogYm9vbGVhbjtcbiAgdGl0bGU6IHN0cmluZztcbiAgaXRlbUlkOiBzdHJpbmc7XG59KSB7XG4gIGNvbnN0IHZpc2liaWxpdHkgPSBSZWFjdC51c2VDb250ZXh0KFZpc2liaWxpdHlDb250ZXh0KTtcblxuICBjb25zdCB2aXNpYmxlID1cbiAgICAhdmlzaWJpbGl0eS5pbml0Q29tcGxldGUgfHxcbiAgICAodmlzaWJpbGl0eS5pbml0Q29tcGxldGUgJiYgdmlzaWJpbGl0eS5pc0l0ZW1WaXNpYmxlKGl0ZW1JZCkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgZGF0YS1jeT17aXRlbUlkfVxuICAgICAgb25DbGljaz17KCkgPT4gb25DbGljayh2aXNpYmlsaXR5KX1cbiAgICAgIG9uS2V5RG93bj17KGV2KSA9PiB7XG4gICAgICAgIGV2LmNvZGUgPT09ICdFbnRlcicgJiYgb25DbGljayh2aXNpYmlsaXR5KTtcbiAgICAgIH19XG4gICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCcsXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBtYXJnaW46ICcwIDEwcHgnLFxuICAgICAgICB3aWR0aDogJzE2MHB4JyxcbiAgICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgfX1cbiAgICAgIHRhYkluZGV4PXswfVxuICAgICAgY2xhc3NOYW1lPVwiY2FyZFwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICA8ZGl2Pnt0aXRsZX08L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IHZpc2libGUgPyAndHJhbnNwYXJlbnQnIDogJ2dyYXknIH19PlxuICAgICAgICAgIHZpc2libGU6IHtKU09OLnN0cmluZ2lmeSh2aXNpYmxlKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+c2VsZWN0ZWQ6IHtKU09OLnN0cmluZ2lmeSghIXNlbGVjdGVkKX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogc2VsZWN0ZWQgPyAnZ3JlZW4nIDogJ2Jpc3F1ZScsXG4gICAgICAgICAgaGVpZ2h0OiAnMjAwcHgnLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuLy8gVE9ETzogbmV4dGpzIGNvbXBsYWlucyBhYm91dCB1c2VMYXlvdXRFZmZlY3RcbmNvbnN0IFdyYXBwZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFttb3VudGVkLCBzZXRNb3VudGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldE1vdW50ZWQodHJ1ZSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gbW91bnRlZCA/IDxBcHAgLz4gOiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV3JhcHBlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})
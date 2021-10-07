webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_safari_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/safari-polyfill */ \"./helpers/safari-polyfill.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/throttle */ \"./node_modules/lodash/throttle.js\");\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _helpers_useHideBodyScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/useHideBodyScroll */ \"./helpers/useHideBodyScroll/index.ts\");\n/* harmony import */ var _helpers_useDrag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/useDrag */ \"./helpers/useDrag.ts\");\n/* harmony import */ var react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-horizontal-scrolling-menu */ \"./node_modules/react-horizontal-scrolling-menu/dist/index.umd.js\");\n/* harmony import */ var react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/home/alex/react-horizontal-scrolling-menu/example-nextjs/pages/index.tsx\",\n    _process,\n    _process$env,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$(),\n    _s4 = $RefreshSig$(),\n    _s5 = $RefreshSig$();\n\n\n\n // NOTE: prevent scrolling on main page\n\n // NOTE drag with mouse\n\n // NOTE hide scrollbar in _app.js\n\n\nconst isTest = (_process = process) === null || _process === void 0 ? void 0 : (_process$env = _process.env) === null || _process$env === void 0 ? void 0 : _process$env.NEXT_PUBLIC_IS_TEST;\nconst elemPrefix = 'test';\n\nconst getId = index => \"\".concat(elemPrefix).concat(index);\n\nconst getItems = () => Array(180).fill(0).map((_, ind) => ({\n  id: getId(ind)\n}));\n\nconst onWheel = (apiObj, ev) => {\n  // NOTE: no good standart way to distinguish touchpad scrolling gestures\n  // but can assume that gesture will affect X axis, mouse scroll only Y axis\n  // of if deltaY too small probably is it touchpad\n  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;\n\n  if (isThouchpad) {\n    ev.stopPropagation();\n    return;\n  }\n\n  if (ev.deltaY < 0) {\n    apiObj.scrollNext();\n  } else if (ev.deltaY > 0) {\n    apiObj.scrollPrev();\n  }\n};\n\nfunction App() {\n  _s();\n\n  const [items, setItems] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(getItems);\n  const [selected, setSelected] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]);\n  const [position, setPosition] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0); // NOTE: for add more items when last item reached\n  // const onUpdate = ({ isLastItemVisible }: scrollVisibilityApiType) => {\n  //   if (isLastItemVisible) {\n  //     const newItems = items.concat(\n  //       Array(5)\n  //         .fill(0)\n  //         .map((_, ind) => ({ id: getId(items.length + ind) }))\n  //     );\n  //     console.log('push new items');\n  //     setItems(newItems);\n  //   }\n  // };\n\n  const isItemSelected = id => !!selected.find(el => el === id);\n\n  const {\n    dragStart,\n    dragStop,\n    dragMove,\n    dragging\n  } = Object(_helpers_useDrag__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(); // const handleDrag =\n  //   ({ scrollContainer }: scrollVisibilityApiType) =>\n  //   (ev: React.MouseEvent) =>\n  //     dragMove(ev, (newPos) => {\n  //       if (scrollContainer.current) {\n  //         scrollContainer.current.scrollLeft += newPos;\n  //       }\n  //     });\n\n  const handleDrag = ({\n    scrollContainer\n  }) => ev => {\n    dragMove(ev, newPos => {\n      if (scrollContainer.current) {\n        const {\n          scrollLeft\n        } = scrollContainer.current;\n        console.log({\n          scrollLeft,\n          newPos\n        });\n        scrollContainer.current.scrollLeft += newPos;\n      }\n    });\n  };\n\n  const handleItemClick = itemId => ({\n    getItemById,\n    scrollToItem\n  }) => {\n    if (dragging) {\n      return false;\n    }\n\n    const itemSelected = isItemSelected(itemId);\n    setSelected(currentSelected => itemSelected ? currentSelected.filter(el => el !== itemId) : currentSelected.concat(itemId));\n\n    if (!itemSelected) {\n      // NOTE: center item on select\n      scrollToItem(getItemById(itemId), 'smooth', 'center', 'nearest');\n    }\n  };\n\n  const restorePosition = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(({\n    scrollContainer,\n    getItemById,\n    scrollToItem\n  }) => {// NOTE: scroll to item, auto/smooth for animation\n    // scrollToItem(getItemById('test15'), 'auto');\n    // NOTE: or restore exact position by pixels\n    // scrollContainer.current.scrollLeft = position;\n  }, [position]); // eslint-disable-next-line react-hooks/exhaustive-deps\n\n  const savePosition = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default()(({\n    scrollContainer\n  }) => !!scrollContainer.current && setPosition(scrollContainer.current.scrollLeft), 500), []);\n  const {\n    hideScroll,\n    showScroll\n  } = Object(_helpers_useHideBodyScroll__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"example\",\n      style: {\n        height: '200vh',\n        paddingTop: '200px'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        onMouseEnter: hideScroll,\n        onMouseLeave: showScroll,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          onMouseLeave: dragStop,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__[\"ScrollMenu\"], {\n            LeftArrow: LeftArrow,\n            RightArrow: RightArrow,\n            onInit: restorePosition // onUpdate={onUpdate}\n            ,\n            onScroll: savePosition,\n            onWheel: onWheel,\n            onMouseDown: () => ev => dragStart(ev),\n            onMouseUp: () => dragStop,\n            onMouseMove: handleDrag,\n            children: items.map(({\n              id\n            }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Card, {\n              title: id,\n              itemId: id // NOTE: itemId is required for track items\n              ,\n              onClick: handleItemClick(id),\n              selected: isItemSelected(id)\n            }, id, false, {\n              fileName: _jsxFileName,\n              lineNumber: 158,\n              columnNumber: 17\n            }, this))\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 146,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 145,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 144,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 142,\n    columnNumber: 5\n  }, this);\n}\n\n_s(App, \"QIAnfwbrBz/QVir/CKzTIkppIhs=\", false, function () {\n  return [_helpers_useDrag__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _helpers_useHideBodyScroll__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n});\n\n_c = App;\n\nfunction LeftArrow() {\n  _s2();\n\n  const {\n    initComplete,\n    isFirstItemVisible,\n    scrollPrev\n  } = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__[\"VisibilityContext\"]); // NOTE initComplete is a hack for  prevent blinking on init\n  // Can get visibility of item only after it's rendered\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Arrow, {\n    disabled: !initComplete || initComplete && isFirstItemVisible,\n    onClick: () => scrollPrev(isTest ? 'auto' : 'smooth'),\n    children: \"Left\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 181,\n    columnNumber: 5\n  }, this);\n}\n\n_s2(LeftArrow, \"2u9dvBRCES5pVRMXIGOF3Ug5BzY=\");\n\n_c2 = LeftArrow;\n\nfunction RightArrow() {\n  _s3();\n\n  const {\n    initComplete,\n    isLastItemVisible,\n    scrollNext\n  } = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__[\"VisibilityContext\"]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Arrow, {\n    disabled: initComplete && isLastItemVisible,\n    onClick: () => scrollNext(isTest ? 'auto' : 'smooth'),\n    children: \"Right\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 195,\n    columnNumber: 5\n  }, this);\n}\n\n_s3(RightArrow, \"PATf83e6EP2QcNJjlk2fI328v74=\");\n\n_c3 = RightArrow;\n\nfunction Arrow({\n  children,\n  disabled,\n  onClick\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n    disabled: disabled,\n    onClick: onClick,\n    style: {\n      cursor: 'pointer',\n      display: 'flex',\n      flexDirection: 'column',\n      justifyContent: 'center',\n      right: '1%',\n      opacity: disabled ? '0' : '1',\n      userSelect: 'none'\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 214,\n    columnNumber: 5\n  }, this);\n}\n\n_c4 = Arrow;\n\nfunction Card({\n  onClick,\n  selected,\n  title,\n  itemId\n}) {\n  _s4();\n\n  const visibility = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__[\"VisibilityContext\"]);\n  const visible = !visibility.initComplete || visibility.initComplete && visibility.isItemVisible(itemId);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    \"data-cy\": itemId,\n    onClick: () => onClick(visibility),\n    onKeyDown: ev => {\n      ev.code === 'Enter' && onClick(visibility);\n    },\n    role: \"button\",\n    style: {\n      border: '1px solid',\n      display: 'inline-block',\n      margin: '0 10px',\n      width: '160px',\n      userSelect: 'none'\n    },\n    tabIndex: 0,\n    className: \"card\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"card-header\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 269,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          backgroundColor: visible ? 'transparent' : 'gray'\n        },\n        children: [\"visible: \", JSON.stringify(visible)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 270,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [\"selected: \", JSON.stringify(!!selected)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 273,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 268,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        backgroundColor: selected ? 'green' : 'bisque',\n        height: '200px'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 275,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 251,\n    columnNumber: 5\n  }, this);\n} // TODO: nextjs complains about useLayoutEffect\n\n\n_s4(Card, \"wzCNnUK2b4GmsbLaFyuDONa1PJI=\");\n\n_c5 = Card;\n\nconst Wrapper = () => {\n  _s5();\n\n  const [mounted, setMounted] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false);\n  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(() => {\n    setMounted(true);\n  }, []);\n  return mounted ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(App, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 293,\n    columnNumber: 20\n  }, undefined) : null;\n};\n\n_s5(Wrapper, \"LrrVfNW3d1raFE0BNzCTILYmIfo=\");\n\n_c6 = Wrapper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wrapper);\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"App\");\n$RefreshReg$(_c2, \"LeftArrow\");\n$RefreshReg$(_c3, \"RightArrow\");\n$RefreshReg$(_c4, \"Arrow\");\n$RefreshReg$(_c5, \"Card\");\n$RefreshReg$(_c6, \"Wrapper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiaXNUZXN0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0lTX1RFU1QiLCJlbGVtUHJlZml4IiwiZ2V0SWQiLCJpbmRleCIsImdldEl0ZW1zIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImluZCIsImlkIiwib25XaGVlbCIsImFwaU9iaiIsImV2IiwiaXNUaG91Y2hwYWQiLCJNYXRoIiwiYWJzIiwiZGVsdGFYIiwiZGVsdGFZIiwic3RvcFByb3BhZ2F0aW9uIiwic2Nyb2xsTmV4dCIsInNjcm9sbFByZXYiLCJBcHAiLCJpdGVtcyIsInNldEl0ZW1zIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJwb3NpdGlvbiIsInNldFBvc2l0aW9uIiwiaXNJdGVtU2VsZWN0ZWQiLCJmaW5kIiwiZWwiLCJkcmFnU3RhcnQiLCJkcmFnU3RvcCIsImRyYWdNb3ZlIiwiZHJhZ2dpbmciLCJ1c2VEcmFnIiwiaGFuZGxlRHJhZyIsInNjcm9sbENvbnRhaW5lciIsIm5ld1BvcyIsImN1cnJlbnQiLCJzY3JvbGxMZWZ0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUl0ZW1DbGljayIsIml0ZW1JZCIsImdldEl0ZW1CeUlkIiwic2Nyb2xsVG9JdGVtIiwiaXRlbVNlbGVjdGVkIiwiY3VycmVudFNlbGVjdGVkIiwiZmlsdGVyIiwiY29uY2F0IiwicmVzdG9yZVBvc2l0aW9uIiwidXNlQ2FsbGJhY2siLCJzYXZlUG9zaXRpb24iLCJ0aHJvdHRsZSIsImhpZGVTY3JvbGwiLCJzaG93U2Nyb2xsIiwidXNlSGlkZUJvZHlTY3JvbGwiLCJoZWlnaHQiLCJwYWRkaW5nVG9wIiwiTGVmdEFycm93IiwiUmlnaHRBcnJvdyIsImluaXRDb21wbGV0ZSIsImlzRmlyc3RJdGVtVmlzaWJsZSIsInVzZUNvbnRleHQiLCJWaXNpYmlsaXR5Q29udGV4dCIsImlzTGFzdEl0ZW1WaXNpYmxlIiwiQXJyb3ciLCJjaGlsZHJlbiIsImRpc2FibGVkIiwib25DbGljayIsImN1cnNvciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJyaWdodCIsIm9wYWNpdHkiLCJ1c2VyU2VsZWN0IiwiQ2FyZCIsInRpdGxlIiwidmlzaWJpbGl0eSIsInZpc2libGUiLCJpc0l0ZW1WaXNpYmxlIiwiY29kZSIsImJvcmRlciIsIm1hcmdpbiIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiSlNPTiIsInN0cmluZ2lmeSIsIldyYXBwZXIiLCJtb3VudGVkIiwic2V0TW91bnRlZCIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0NBSUE7O0NBR0E7O0NBR0E7O0FBRUE7QUFFQSxNQUFNQSxNQUFNLGVBQUdDLE9BQUgsNkRBQUcsU0FBU0MsR0FBWixpREFBRyxhQUFjQyxtQkFBN0I7QUFJQSxNQUFNQyxVQUFVLEdBQUcsTUFBbkI7O0FBQ0EsTUFBTUMsS0FBSyxHQUFJQyxLQUFELGNBQXNCRixVQUF0QixTQUFtQ0UsS0FBbkMsQ0FBZDs7QUFFQSxNQUFNQyxRQUFRLEdBQUcsTUFDZkMsS0FBSyxDQUFDLEdBQUQsQ0FBTCxDQUNHQyxJQURILENBQ1EsQ0FEUixFQUVHQyxHQUZILENBRU8sQ0FBQ0MsQ0FBRCxFQUFJQyxHQUFKLE1BQWE7QUFBRUMsSUFBRSxFQUFFUixLQUFLLENBQUNPLEdBQUQ7QUFBWCxDQUFiLENBRlAsQ0FERjs7QUFLQSxNQUFNRSxPQUFPLEdBQUcsQ0FDZEMsTUFEYyxFQUVkQyxFQUZjLEtBR0w7QUFDVDtBQUNBO0FBQ0E7QUFDQSxRQUFNQyxXQUFXLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTSCxFQUFFLENBQUNJLE1BQVosTUFBd0IsQ0FBeEIsSUFBNkJGLElBQUksQ0FBQ0MsR0FBTCxDQUFTSCxFQUFFLENBQUNLLE1BQVosSUFBc0IsRUFBdkU7O0FBRUEsTUFBSUosV0FBSixF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QUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUssYUFBSyxFQUFFO0FBQUVRLHlCQUFlLEVBQUVOLE9BQU8sR0FBRyxhQUFILEdBQW1CO0FBQTdDLFNBQVo7QUFBQSxnQ0FDWU8sSUFBSSxDQUFDQyxTQUFMLENBQWVSLE9BQWYsQ0FEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUtFO0FBQUEsaUNBQWdCTyxJQUFJLENBQUNDLFNBQUwsQ0FBZSxDQUFDLENBQUNqRSxRQUFqQixDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQkYsZUF3QkU7QUFDRSxXQUFLLEVBQUU7QUFDTCtELHVCQUFlLEVBQUUvRCxRQUFRLEdBQUcsT0FBSCxHQUFhLFFBRGpDO0FBRUxrQyxjQUFNLEVBQUU7QUFGSDtBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpQ0QsQyxDQUVEOzs7SUFyRFNvQixJOztNQUFBQSxJOztBQXNEVCxNQUFNWSxPQUFPLEdBQUcsTUFBTTtBQUFBOztBQUNwQixRQUFNLENBQUNDLE9BQUQsRUFBVUMsVUFBVixJQUF3QnRFLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBQTlCO0FBRUFELDhDQUFLLENBQUN1RSxTQUFOLENBQWdCLE1BQU07QUFDcEJELGNBQVUsQ0FBQyxJQUFELENBQVY7QUFDRCxHQUZELEVBRUcsRUFGSDtBQUlBLFNBQU9ELE9BQU8sZ0JBQUcscUVBQUMsR0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUgsR0FBYSxJQUEzQjtBQUNELENBUkQ7O0lBQU1ELE87O01BQUFBLE87QUFVU0Esc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL2hlbHBlcnMvc2FmYXJpLXBvbHlmaWxsJztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHRocm90dGxlIGZyb20gJ2xvZGFzaC90aHJvdHRsZSc7XG5cbi8vIE5PVEU6IHByZXZlbnQgc2Nyb2xsaW5nIG9uIG1haW4gcGFnZVxuaW1wb3J0IHVzZUhpZGVCb2R5U2Nyb2xsIGZyb20gJy4uL2hlbHBlcnMvdXNlSGlkZUJvZHlTY3JvbGwnO1xuXG4vLyBOT1RFIGRyYWcgd2l0aCBtb3VzZVxuaW1wb3J0IHVzZURyYWcgZnJvbSAnLi4vaGVscGVycy91c2VEcmFnJztcblxuLy8gTk9URSBoaWRlIHNjcm9sbGJhciBpbiBfYXBwLmpzXG5cbmltcG9ydCB7IFNjcm9sbE1lbnUsIFZpc2liaWxpdHlDb250ZXh0IH0gZnJvbSAncmVhY3QtaG9yaXpvbnRhbC1zY3JvbGxpbmctbWVudSc7XG5cbmNvbnN0IGlzVGVzdCA9IHByb2Nlc3M/LmVudj8uTkVYVF9QVUJMSUNfSVNfVEVTVDtcblxudHlwZSBzY3JvbGxWaXNpYmlsaXR5QXBpVHlwZSA9IFJlYWN0LkNvbnRleHRUeXBlPHR5cGVvZiBWaXNpYmlsaXR5Q29udGV4dD47XG5cbmNvbnN0IGVsZW1QcmVmaXggPSAndGVzdCc7XG5jb25zdCBnZXRJZCA9IChpbmRleDogbnVtYmVyKSA9PiBgJHtlbGVtUHJlZml4fSR7aW5kZXh9YDtcblxuY29uc3QgZ2V0SXRlbXMgPSAoKSA9PlxuICBBcnJheSgxODApXG4gICAgLmZpbGwoMClcbiAgICAubWFwKChfLCBpbmQpID0+ICh7IGlkOiBnZXRJZChpbmQpIH0pKTtcblxuY29uc3Qgb25XaGVlbCA9IChcbiAgYXBpT2JqOiBzY3JvbGxWaXNpYmlsaXR5QXBpVHlwZSxcbiAgZXY6IFJlYWN0LldoZWVsRXZlbnRcbik6IHZvaWQgPT4ge1xuICAvLyBOT1RFOiBubyBnb29kIHN0YW5kYXJ0IHdheSB0byBkaXN0aW5ndWlzaCB0b3VjaHBhZCBzY3JvbGxpbmcgZ2VzdHVyZXNcbiAgLy8gYnV0IGNhbiBhc3N1bWUgdGhhdCBnZXN0dXJlIHdpbGwgYWZmZWN0IFggYXhpcywgbW91c2Ugc2Nyb2xsIG9ubHkgWSBheGlzXG4gIC8vIG9mIGlmIGRlbHRhWSB0b28gc21hbGwgcHJvYmFibHkgaXMgaXQgdG91Y2hwYWRcbiAgY29uc3QgaXNUaG91Y2hwYWQgPSBNYXRoLmFicyhldi5kZWx0YVgpICE9PSAwIHx8IE1hdGguYWJzKGV2LmRlbHRhWSkgPCAxNTtcblxuICBpZiAoaXNUaG91Y2hwYWQpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZXYuZGVsdGFZIDwgMCkge1xuICAgIGFwaU9iai5zY3JvbGxOZXh0KCk7XG4gIH0gZWxzZSBpZiAoZXYuZGVsdGFZID4gMCkge1xuICAgIGFwaU9iai5zY3JvbGxQcmV2KCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSBSZWFjdC51c2VTdGF0ZShnZXRJdGVtcyk7XG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcbiAgY29uc3QgW3Bvc2l0aW9uLCBzZXRQb3NpdGlvbl0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcblxuICAvLyBOT1RFOiBmb3IgYWRkIG1vcmUgaXRlbXMgd2hlbiBsYXN0IGl0ZW0gcmVhY2hlZFxuICAvLyBjb25zdCBvblVwZGF0ZSA9ICh7IGlzTGFzdEl0ZW1WaXNpYmxlIH06IHNjcm9sbFZpc2liaWxpdHlBcGlUeXBlKSA9PiB7XG4gIC8vICAgaWYgKGlzTGFzdEl0ZW1WaXNpYmxlKSB7XG4gIC8vICAgICBjb25zdCBuZXdJdGVtcyA9IGl0ZW1zLmNvbmNhdChcbiAgLy8gICAgICAgQXJyYXkoNSlcbiAgLy8gICAgICAgICAuZmlsbCgwKVxuICAvLyAgICAgICAgIC5tYXAoKF8sIGluZCkgPT4gKHsgaWQ6IGdldElkKGl0ZW1zLmxlbmd0aCArIGluZCkgfSkpXG4gIC8vICAgICApO1xuICAvLyAgICAgY29uc29sZS5sb2coJ3B1c2ggbmV3IGl0ZW1zJyk7XG4gIC8vICAgICBzZXRJdGVtcyhuZXdJdGVtcyk7XG4gIC8vICAgfVxuICAvLyB9O1xuXG4gIGNvbnN0IGlzSXRlbVNlbGVjdGVkID0gKGlkOiBzdHJpbmcpOiBib29sZWFuID0+XG4gICAgISFzZWxlY3RlZC5maW5kKChlbCkgPT4gZWwgPT09IGlkKTtcblxuICBjb25zdCB7IGRyYWdTdGFydCwgZHJhZ1N0b3AsIGRyYWdNb3ZlLCBkcmFnZ2luZyB9ID0gdXNlRHJhZygpO1xuXG4gIC8vIGNvbnN0IGhhbmRsZURyYWcgPVxuICAvLyAgICh7IHNjcm9sbENvbnRhaW5lciB9OiBzY3JvbGxWaXNpYmlsaXR5QXBpVHlwZSkgPT5cbiAgLy8gICAoZXY6IFJlYWN0Lk1vdXNlRXZlbnQpID0+XG4gIC8vICAgICBkcmFnTW92ZShldiwgKG5ld1BvcykgPT4ge1xuICAvLyAgICAgICBpZiAoc2Nyb2xsQ29udGFpbmVyLmN1cnJlbnQpIHtcbiAgLy8gICAgICAgICBzY3JvbGxDb250YWluZXIuY3VycmVudC5zY3JvbGxMZWZ0ICs9IG5ld1BvcztcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfSk7XG5cbiAgY29uc3QgaGFuZGxlRHJhZyA9XG4gICAgKHsgc2Nyb2xsQ29udGFpbmVyIH06IHNjcm9sbFZpc2liaWxpdHlBcGlUeXBlKSA9PlxuICAgIChldjogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgZHJhZ01vdmUoZXYsIChuZXdQb3MpID0+IHtcbiAgICAgICAgaWYgKHNjcm9sbENvbnRhaW5lci5jdXJyZW50KSB7XG4gICAgICAgICAgY29uc3QgeyBzY3JvbGxMZWZ0IH0gPSBzY3JvbGxDb250YWluZXIuY3VycmVudDtcbiAgICAgICAgICBjb25zb2xlLmxvZyh7IHNjcm9sbExlZnQsIG5ld1BvcyB9KTtcbiAgICAgICAgICBzY3JvbGxDb250YWluZXIuY3VycmVudC5zY3JvbGxMZWZ0ICs9IG5ld1BvcztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICBjb25zdCBoYW5kbGVJdGVtQ2xpY2sgPVxuICAgIChpdGVtSWQ6IHN0cmluZykgPT5cbiAgICAoeyBnZXRJdGVtQnlJZCwgc2Nyb2xsVG9JdGVtIH06IHNjcm9sbFZpc2liaWxpdHlBcGlUeXBlKSA9PiB7XG4gICAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgY29uc3QgaXRlbVNlbGVjdGVkID0gaXNJdGVtU2VsZWN0ZWQoaXRlbUlkKTtcblxuICAgICAgc2V0U2VsZWN0ZWQoKGN1cnJlbnRTZWxlY3RlZDogc3RyaW5nW10pID0+XG4gICAgICAgIGl0ZW1TZWxlY3RlZFxuICAgICAgICAgID8gY3VycmVudFNlbGVjdGVkLmZpbHRlcigoZWwpID0+IGVsICE9PSBpdGVtSWQpXG4gICAgICAgICAgOiBjdXJyZW50U2VsZWN0ZWQuY29uY2F0KGl0ZW1JZClcbiAgICAgICk7XG5cbiAgICAgIGlmICghaXRlbVNlbGVjdGVkKSB7XG4gICAgICAgIC8vIE5PVEU6IGNlbnRlciBpdGVtIG9uIHNlbGVjdFxuICAgICAgICBzY3JvbGxUb0l0ZW0oZ2V0SXRlbUJ5SWQoaXRlbUlkKSwgJ3Ntb290aCcsICdjZW50ZXInLCAnbmVhcmVzdCcpO1xuICAgICAgfVxuICAgIH07XG5cbiAgY29uc3QgcmVzdG9yZVBvc2l0aW9uID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKHtcbiAgICAgIHNjcm9sbENvbnRhaW5lcixcbiAgICAgIGdldEl0ZW1CeUlkLFxuICAgICAgc2Nyb2xsVG9JdGVtLFxuICAgIH06IHNjcm9sbFZpc2liaWxpdHlBcGlUeXBlKSA9PiB7XG4gICAgICAvLyBOT1RFOiBzY3JvbGwgdG8gaXRlbSwgYXV0by9zbW9vdGggZm9yIGFuaW1hdGlvblxuICAgICAgLy8gc2Nyb2xsVG9JdGVtKGdldEl0ZW1CeUlkKCd0ZXN0MTUnKSwgJ2F1dG8nKTtcbiAgICAgIC8vIE5PVEU6IG9yIHJlc3RvcmUgZXhhY3QgcG9zaXRpb24gYnkgcGl4ZWxzXG4gICAgICAvLyBzY3JvbGxDb250YWluZXIuY3VycmVudC5zY3JvbGxMZWZ0ID0gcG9zaXRpb247XG4gICAgfSxcbiAgICBbcG9zaXRpb25dXG4gICk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICBjb25zdCBzYXZlUG9zaXRpb24gPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICB0aHJvdHRsZShcbiAgICAgICh7IHNjcm9sbENvbnRhaW5lciB9OiBzY3JvbGxWaXNpYmlsaXR5QXBpVHlwZSkgPT5cbiAgICAgICAgISFzY3JvbGxDb250YWluZXIuY3VycmVudCAmJlxuICAgICAgICBzZXRQb3NpdGlvbihzY3JvbGxDb250YWluZXIuY3VycmVudC5zY3JvbGxMZWZ0KSxcbiAgICAgIDUwMFxuICAgICksXG4gICAgW11cbiAgKTtcblxuICBjb25zdCB7IGhpZGVTY3JvbGwsIHNob3dTY3JvbGwgfSA9IHVzZUhpZGVCb2R5U2Nyb2xsKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJleGFtcGxlXCIgc3R5bGU9e3sgaGVpZ2h0OiAnMjAwdmgnLCBwYWRkaW5nVG9wOiAnMjAwcHgnIH19PlxuICAgICAgICA8ZGl2IG9uTW91c2VFbnRlcj17aGlkZVNjcm9sbH0gb25Nb3VzZUxlYXZlPXtzaG93U2Nyb2xsfT5cbiAgICAgICAgICA8ZGl2IG9uTW91c2VMZWF2ZT17ZHJhZ1N0b3B9PlxuICAgICAgICAgICAgPFNjcm9sbE1lbnVcbiAgICAgICAgICAgICAgTGVmdEFycm93PXtMZWZ0QXJyb3d9XG4gICAgICAgICAgICAgIFJpZ2h0QXJyb3c9e1JpZ2h0QXJyb3d9XG4gICAgICAgICAgICAgIG9uSW5pdD17cmVzdG9yZVBvc2l0aW9ufVxuICAgICAgICAgICAgICAvLyBvblVwZGF0ZT17b25VcGRhdGV9XG4gICAgICAgICAgICAgIG9uU2Nyb2xsPXtzYXZlUG9zaXRpb259XG4gICAgICAgICAgICAgIG9uV2hlZWw9e29uV2hlZWx9XG4gICAgICAgICAgICAgIG9uTW91c2VEb3duPXsoKSA9PiAoZXYpID0+IGRyYWdTdGFydChldil9XG4gICAgICAgICAgICAgIG9uTW91c2VVcD17KCkgPT4gZHJhZ1N0b3B9XG4gICAgICAgICAgICAgIG9uTW91c2VNb3ZlPXtoYW5kbGVEcmFnfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7aXRlbXMubWFwKCh7IGlkIH0pID0+IChcbiAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAgdGl0bGU9e2lkfVxuICAgICAgICAgICAgICAgICAgaXRlbUlkPXtpZH0gLy8gTk9URTogaXRlbUlkIGlzIHJlcXVpcmVkIGZvciB0cmFjayBpdGVtc1xuICAgICAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUl0ZW1DbGljayhpZCl9XG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZD17aXNJdGVtU2VsZWN0ZWQoaWQpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9TY3JvbGxNZW51PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBMZWZ0QXJyb3coKSB7XG4gIGNvbnN0IHsgaW5pdENvbXBsZXRlLCBpc0ZpcnN0SXRlbVZpc2libGUsIHNjcm9sbFByZXYgfSA9XG4gICAgUmVhY3QudXNlQ29udGV4dChWaXNpYmlsaXR5Q29udGV4dCk7XG4gIC8vIE5PVEUgaW5pdENvbXBsZXRlIGlzIGEgaGFjayBmb3IgIHByZXZlbnQgYmxpbmtpbmcgb24gaW5pdFxuICAvLyBDYW4gZ2V0IHZpc2liaWxpdHkgb2YgaXRlbSBvbmx5IGFmdGVyIGl0J3MgcmVuZGVyZWRcblxuICByZXR1cm4gKFxuICAgIDxBcnJvd1xuICAgICAgZGlzYWJsZWQ9eyFpbml0Q29tcGxldGUgfHwgKGluaXRDb21wbGV0ZSAmJiBpc0ZpcnN0SXRlbVZpc2libGUpfVxuICAgICAgb25DbGljaz17KCkgPT4gc2Nyb2xsUHJldihpc1Rlc3QgPyAnYXV0bycgOiAnc21vb3RoJyl9XG4gICAgPlxuICAgICAgTGVmdFxuICAgIDwvQXJyb3c+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFJpZ2h0QXJyb3coKSB7XG4gIGNvbnN0IHsgaW5pdENvbXBsZXRlLCBpc0xhc3RJdGVtVmlzaWJsZSwgc2Nyb2xsTmV4dCB9ID1cbiAgICBSZWFjdC51c2VDb250ZXh0KFZpc2liaWxpdHlDb250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDxBcnJvd1xuICAgICAgZGlzYWJsZWQ9e2luaXRDb21wbGV0ZSAmJiBpc0xhc3RJdGVtVmlzaWJsZX1cbiAgICAgIG9uQ2xpY2s9eygpID0+IHNjcm9sbE5leHQoaXNUZXN0ID8gJ2F1dG8nIDogJ3Ntb290aCcpfVxuICAgID5cbiAgICAgIFJpZ2h0XG4gICAgPC9BcnJvdz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gQXJyb3coe1xuICBjaGlsZHJlbixcbiAgZGlzYWJsZWQsXG4gIG9uQ2xpY2ssXG59OiB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIGRpc2FibGVkOiBib29sZWFuO1xuICBvbkNsaWNrOiBWb2lkRnVuY3Rpb247XG59KSB7XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgIHJpZ2h0OiAnMSUnLFxuICAgICAgICBvcGFjaXR5OiBkaXNhYmxlZCA/ICcwJyA6ICcxJyxcbiAgICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9idXR0b24+XG4gICk7XG59XG5cbmZ1bmN0aW9uIENhcmQoe1xuICBvbkNsaWNrLFxuICBzZWxlY3RlZCxcbiAgdGl0bGUsXG4gIGl0ZW1JZCxcbn06IHtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBvbkNsaWNrOiBGdW5jdGlvbjtcbiAgc2VsZWN0ZWQ6IGJvb2xlYW47XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGl0ZW1JZDogc3RyaW5nO1xufSkge1xuICBjb25zdCB2aXNpYmlsaXR5ID0gUmVhY3QudXNlQ29udGV4dChWaXNpYmlsaXR5Q29udGV4dCk7XG5cbiAgY29uc3QgdmlzaWJsZSA9XG4gICAgIXZpc2liaWxpdHkuaW5pdENvbXBsZXRlIHx8XG4gICAgKHZpc2liaWxpdHkuaW5pdENvbXBsZXRlICYmIHZpc2liaWxpdHkuaXNJdGVtVmlzaWJsZShpdGVtSWQpKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGRhdGEtY3k9e2l0ZW1JZH1cbiAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2sodmlzaWJpbGl0eSl9XG4gICAgICBvbktleURvd249eyhldikgPT4ge1xuICAgICAgICBldi5jb2RlID09PSAnRW50ZXInICYmIG9uQ2xpY2sodmlzaWJpbGl0eSk7XG4gICAgICB9fVxuICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICBzdHlsZT17e1xuICAgICAgICBib3JkZXI6ICcxcHggc29saWQnLFxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgbWFyZ2luOiAnMCAxMHB4JyxcbiAgICAgICAgd2lkdGg6ICcxNjBweCcsXG4gICAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgIH19XG4gICAgICB0YWJJbmRleD17MH1cbiAgICAgIGNsYXNzTmFtZT1cImNhcmRcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgPGRpdj57dGl0bGV9PC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiB2aXNpYmxlID8gJ3RyYW5zcGFyZW50JyA6ICdncmF5JyB9fT5cbiAgICAgICAgICB2aXNpYmxlOiB7SlNPTi5zdHJpbmdpZnkodmlzaWJsZSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PnNlbGVjdGVkOiB7SlNPTi5zdHJpbmdpZnkoISFzZWxlY3RlZCl9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHNlbGVjdGVkID8gJ2dyZWVuJyA6ICdiaXNxdWUnLFxuICAgICAgICAgIGhlaWdodDogJzIwMHB4JyxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbi8vIFRPRE86IG5leHRqcyBjb21wbGFpbnMgYWJvdXQgdXNlTGF5b3V0RWZmZWN0XG5jb25zdCBXcmFwcGVyID0gKCkgPT4ge1xuICBjb25zdCBbbW91bnRlZCwgc2V0TW91bnRlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRNb3VudGVkKHRydWUpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIG1vdW50ZWQgPyA8QXBwIC8+IDogbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdyYXBwZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})
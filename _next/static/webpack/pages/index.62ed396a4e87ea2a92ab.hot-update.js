webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_safari_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/safari-polyfill */ \"./helpers/safari-polyfill.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/throttle */ \"./node_modules/lodash/throttle.js\");\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _helpers_useHideBodyScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/useHideBodyScroll */ \"./helpers/useHideBodyScroll/index.ts\");\n/* harmony import */ var _helpers_useDrag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/useDrag */ \"./helpers/useDrag.ts\");\n/* harmony import */ var react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-horizontal-scrolling-menu */ \"./node_modules/react-horizontal-scrolling-menu/dist/index.umd.js\");\n/* harmony import */ var react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/home/alex/react-horizontal-scrolling-menu/example-nextjs/pages/index.tsx\",\n    _process,\n    _process$env,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$(),\n    _s4 = $RefreshSig$(),\n    _s5 = $RefreshSig$();\n\n\n\n // NOTE: prevent scrolling on main page\n\n // NOTE drag with mouse\n\n // NOTE hide scrollbar in _app.js\n\n\nconst isTest = (_process = process) === null || _process === void 0 ? void 0 : (_process$env = _process.env) === null || _process$env === void 0 ? void 0 : _process$env.NEXT_PUBLIC_IS_TEST;\nconst elemPrefix = 'test';\n\nconst getId = index => \"\".concat(elemPrefix).concat(index);\n\nconst getItems = () => Array(170).fill(0).map((_, ind) => ({\n  id: getId(ind)\n}));\n\nconst onWheel = (apiObj, ev) => {\n  // NOTE: no good standart way to distinguish touchpad scrolling gestures\n  // but can assume that gesture will affect X axis, mouse scroll only Y axis\n  // of if deltaY too small probably is it touchpad\n  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;\n\n  if (isThouchpad) {\n    ev.stopPropagation();\n    return;\n  }\n\n  if (ev.deltaY < 0) {\n    apiObj.scrollNext();\n  } else if (ev.deltaY > 0) {\n    apiObj.scrollPrev();\n  }\n};\n\nfunction App() {\n  _s();\n\n  const [items, setItems] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(getItems);\n  const [selected, setSelected] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]);\n  const [position, setPosition] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0); // NOTE: for add more items when last item reached\n  // const onUpdate = ({ isLastItemVisible }: scrollVisibilityApiType) => {\n  //   if (isLastItemVisible) {\n  //     const newItems = items.concat(\n  //       Array(5)\n  //         .fill(0)\n  //         .map((_, ind) => ({ id: getId(items.length + ind) }))\n  //     );\n  //     console.log('push new items');\n  //     setItems(newItems);\n  //   }\n  // };\n\n  const isItemSelected = id => !!selected.find(el => el === id);\n\n  const {\n    dragStart,\n    dragStop,\n    dragMove,\n    dragging\n  } = Object(_helpers_useDrag__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n  const onMouseUp = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(() => dragStop, [dragStop]);\n  const onMouseDown = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(() => dragStart, [dragStart]);\n  const pos = {\n    current: 0\n  };\n\n  const handleDrag = ({\n    scrollContainer\n  }) => ev => dragMove(ev, diff => {\n    if (scrollContainer.current) {\n      const {\n        scrollLeft\n      } = scrollContainer.current;\n      const newPos = pos.current + diff;\n      pos.current = diff;\n      scrollContainer.current.scrollLeft += diff;\n    }\n  });\n\n  const handleItemClick = itemId => ({\n    getItemById,\n    scrollToItem\n  }) => {\n    if (dragging) {\n      return false;\n    }\n\n    const itemSelected = isItemSelected(itemId);\n    setSelected(currentSelected => itemSelected ? currentSelected.filter(el => el !== itemId) : currentSelected.concat(itemId));\n\n    if (!itemSelected) {\n      // NOTE: center item on select\n      scrollToItem(getItemById(itemId), 'smooth', 'center', 'nearest');\n    }\n  };\n\n  const restorePosition = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(({\n    scrollContainer,\n    getItemById,\n    scrollToItem\n  }) => {// NOTE: scroll to item, auto/smooth for animation\n    // scrollToItem(getItemById('test15'), 'auto');\n    // NOTE: or restore exact position by pixels\n    // scrollContainer.current.scrollLeft = position;\n  }, [position]); // eslint-disable-next-line react-hooks/exhaustive-deps\n\n  const savePosition = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default()(({\n    scrollContainer\n  }) => !!scrollContainer.current && setPosition(scrollContainer.current.scrollLeft), 500), []);\n  const {\n    hideScroll,\n    showScroll\n  } = Object(_helpers_useHideBodyScroll__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"example\",\n      style: {\n        height: '200vh',\n        paddingTop: '200px'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        onMouseEnter: hideScroll,\n        onMouseLeave: showScroll,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          onMouseLeave: dragStop,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__[\"ScrollMenu\"], {\n            LeftArrow: LeftArrow,\n            RightArrow: RightArrow,\n            onInit: restorePosition // onUpdate={onUpdate}\n            ,\n            onScroll: savePosition,\n            onWheel: onWheel,\n            onMouseDown: onMouseDown,\n            onMouseUp: onMouseUp,\n            onMouseMove: handleDrag,\n            children: items.map(({\n              id\n            }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Card, {\n              title: id,\n              itemId: id // NOTE: itemId is required for track items\n              ,\n              onClick: handleItemClick(id),\n              selected: isItemSelected(id)\n            }, id, false, {\n              fileName: _jsxFileName,\n              lineNumber: 152,\n              columnNumber: 17\n            }, this))\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 140,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 139,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 138,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 136,\n    columnNumber: 5\n  }, this);\n}\n\n_s(App, \"Jro51pFq0RYQw3sW1MVxRBkKz0o=\", false, function () {\n  return [_helpers_useDrag__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _helpers_useHideBodyScroll__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n});\n\n_c = App;\n\nfunction LeftArrow() {\n  _s2();\n\n  const {\n    initComplete,\n    isFirstItemVisible,\n    scrollPrev\n  } = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__[\"VisibilityContext\"]); // NOTE initComplete is a hack for  prevent blinking on init\n  // Can get visibility of item only after it's rendered\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Arrow, {\n    disabled: !initComplete || initComplete && isFirstItemVisible,\n    onClick: () => scrollPrev(isTest ? 'auto' : 'smooth'),\n    children: \"Left\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 175,\n    columnNumber: 5\n  }, this);\n}\n\n_s2(LeftArrow, \"2u9dvBRCES5pVRMXIGOF3Ug5BzY=\");\n\n_c2 = LeftArrow;\n\nfunction RightArrow() {\n  _s3();\n\n  const {\n    initComplete,\n    isLastItemVisible,\n    scrollNext\n  } = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__[\"VisibilityContext\"]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Arrow, {\n    disabled: initComplete && isLastItemVisible,\n    onClick: () => scrollNext(isTest ? 'auto' : 'smooth'),\n    children: \"Right\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 189,\n    columnNumber: 5\n  }, this);\n}\n\n_s3(RightArrow, \"PATf83e6EP2QcNJjlk2fI328v74=\");\n\n_c3 = RightArrow;\n\nfunction Arrow({\n  children,\n  disabled,\n  onClick\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n    disabled: disabled,\n    onClick: onClick,\n    style: {\n      cursor: 'pointer',\n      display: 'flex',\n      flexDirection: 'column',\n      justifyContent: 'center',\n      right: '1%',\n      opacity: disabled ? '0' : '1',\n      userSelect: 'none'\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 208,\n    columnNumber: 5\n  }, this);\n}\n\n_c4 = Arrow;\n\nfunction Card({\n  onClick,\n  selected,\n  title,\n  itemId\n}) {\n  _s4();\n\n  const visibility = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__[\"VisibilityContext\"]);\n  const visible = !visibility.initComplete || visibility.initComplete && visibility.isItemVisible(itemId);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    \"data-cy\": itemId,\n    onClick: () => onClick(visibility),\n    onKeyDown: ev => {\n      ev.code === 'Enter' && onClick(visibility);\n    },\n    role: \"button\",\n    style: {\n      border: '1px solid',\n      display: 'inline-block',\n      margin: '0 10px',\n      width: '160px',\n      userSelect: 'none'\n    },\n    tabIndex: 0,\n    className: \"card\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"card-header\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 263,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          backgroundColor: visible ? 'transparent' : 'gray'\n        },\n        children: [\"visible: \", JSON.stringify(visible)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 264,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [\"selected: \", JSON.stringify(!!selected)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 267,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 262,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        backgroundColor: selected ? 'green' : 'bisque',\n        height: '200px'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 269,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 245,\n    columnNumber: 5\n  }, this);\n} // TODO: nextjs complains about useLayoutEffect\n\n\n_s4(Card, \"wzCNnUK2b4GmsbLaFyuDONa1PJI=\");\n\n_c5 = Card;\n\nconst Wrapper = () => {\n  _s5();\n\n  const [mounted, setMounted] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false);\n  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(() => {\n    setMounted(true);\n  }, []);\n  return mounted ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(App, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 287,\n    columnNumber: 20\n  }, undefined) : null;\n};\n\n_s5(Wrapper, \"LrrVfNW3d1raFE0BNzCTILYmIfo=\");\n\n_c6 = Wrapper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wrapper);\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"App\");\n$RefreshReg$(_c2, \"LeftArrow\");\n$RefreshReg$(_c3, \"RightArrow\");\n$RefreshReg$(_c4, \"Arrow\");\n$RefreshReg$(_c5, \"Card\");\n$RefreshReg$(_c6, \"Wrapper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiaXNUZXN0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0lTX1RFU1QiLCJlbGVtUHJlZml4IiwiZ2V0SWQiLCJpbmRleCIsImdldEl0ZW1zIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImluZCIsImlkIiwib25XaGVlbCIsImFwaU9iaiIsImV2IiwiaXNUaG91Y2hwYWQiLCJNYXRoIiwiYWJzIiwiZGVsdGFYIiwiZGVsdGFZIiwic3RvcFByb3BhZ2F0aW9uIiwic2Nyb2xsTmV4dCIsInNjcm9sbFByZXYiLCJBcHAiLCJpdGVtcyIsInNldEl0ZW1zIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJwb3NpdGlvbiIsInNldFBvc2l0aW9uIiwiaXNJdGVtU2VsZWN0ZWQiLCJmaW5kIiwiZWwiLCJkcmFnU3RhcnQiLCJkcmFnU3RvcCIsImRyYWdNb3ZlIiwiZHJhZ2dpbmciLCJ1c2VEcmFnIiwib25Nb3VzZVVwIiwidXNlQ2FsbGJhY2siLCJvbk1vdXNlRG93biIsInBvcyIsImN1cnJlbnQiLCJoYW5kbGVEcmFnIiwic2Nyb2xsQ29udGFpbmVyIiwiZGlmZiIsInNjcm9sbExlZnQiLCJuZXdQb3MiLCJoYW5kbGVJdGVtQ2xpY2siLCJpdGVtSWQiLCJnZXRJdGVtQnlJZCIsInNjcm9sbFRvSXRlbSIsIml0ZW1TZWxlY3RlZCIsImN1cnJlbnRTZWxlY3RlZCIsImZpbHRlciIsImNvbmNhdCIsInJlc3RvcmVQb3NpdGlvbiIsInNhdmVQb3NpdGlvbiIsInRocm90dGxlIiwiaGlkZVNjcm9sbCIsInNob3dTY3JvbGwiLCJ1c2VIaWRlQm9keVNjcm9sbCIsImhlaWdodCIsInBhZGRpbmdUb3AiLCJMZWZ0QXJyb3ciLCJSaWdodEFycm93IiwiaW5pdENvbXBsZXRlIiwiaXNGaXJzdEl0ZW1WaXNpYmxlIiwidXNlQ29udGV4dCIsIlZpc2liaWxpdHlDb250ZXh0IiwiaXNMYXN0SXRlbVZpc2libGUiLCJBcnJvdyIsImNoaWxkcmVuIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwiY3Vyc29yIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsInJpZ2h0Iiwib3BhY2l0eSIsInVzZXJTZWxlY3QiLCJDYXJkIiwidGl0bGUiLCJ2aXNpYmlsaXR5IiwidmlzaWJsZSIsImlzSXRlbVZpc2libGUiLCJjb2RlIiwiYm9yZGVyIiwibWFyZ2luIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJKU09OIiwic3RyaW5naWZ5IiwiV3JhcHBlciIsIm1vdW50ZWQiLCJzZXRNb3VudGVkIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7Q0FJQTs7Q0FHQTs7Q0FHQTs7QUFFQTtBQUVBLE1BQU1BLE1BQU0sZUFBR0MsT0FBSCw2REFBRyxTQUFTQyxHQUFaLGlEQUFHLGFBQWNDLG1CQUE3QjtBQUlBLE1BQU1DLFVBQVUsR0FBRyxNQUFuQjs7QUFDQSxNQUFNQyxLQUFLLEdBQUlDLEtBQUQsY0FBc0JGLFVBQXRCLFNBQW1DRSxLQUFuQyxDQUFkOztBQUVBLE1BQU1DLFFBQVEsR0FBRyxNQUNmQyxLQUFLLENBQUMsR0FBRCxDQUFMLENBQ0dDLElBREgsQ0FDUSxDQURSLEVBRUdDLEdBRkgsQ0FFTyxDQUFDQyxDQUFELEVBQUlDLEdBQUosTUFBYTtBQUFFQyxJQUFFLEVBQUVSLEtBQUssQ0FBQ08sR0FBRDtBQUFYLENBQWIsQ0FGUCxDQURGOztBQUtBLE1BQU1FLE9BQU8sR0FBRyxDQUNkQyxNQURjLEVBRWRDLEVBRmMsS0FHTDtBQUNUO0FBQ0E7QUFDQTtBQUNBLFFBQU1DLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVNILEVBQUUsQ0FBQ0ksTUFBWixNQUF3QixDQUF4QixJQUE2QkYsSUFBSSxDQUFDQyxHQUFMLENBQVNILEVBQUUsQ0FBQ0ssTUFBWixJQUFzQixF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QUFDRCxDQVJEOztJQUFNRCxPOztNQUFBQSxPO0FBVVNBLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9oZWxwZXJzL3NhZmFyaS1wb2x5ZmlsbCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB0aHJvdHRsZSBmcm9tICdsb2Rhc2gvdGhyb3R0bGUnO1xuXG4vLyBOT1RFOiBwcmV2ZW50IHNjcm9sbGluZyBvbiBtYWluIHBhZ2VcbmltcG9ydCB1c2VIaWRlQm9keVNjcm9sbCBmcm9tICcuLi9oZWxwZXJzL3VzZUhpZGVCb2R5U2Nyb2xsJztcblxuLy8gTk9URSBkcmFnIHdpdGggbW91c2VcbmltcG9ydCB1c2VEcmFnIGZyb20gJy4uL2hlbHBlcnMvdXNlRHJhZyc7XG5cbi8vIE5PVEUgaGlkZSBzY3JvbGxiYXIgaW4gX2FwcC5qc1xuXG5pbXBvcnQgeyBTY3JvbGxNZW51LCBWaXNpYmlsaXR5Q29udGV4dCB9IGZyb20gJ3JlYWN0LWhvcml6b250YWwtc2Nyb2xsaW5nLW1lbnUnO1xuXG5jb25zdCBpc1Rlc3QgPSBwcm9jZXNzPy5lbnY/Lk5FWFRfUFVCTElDX0lTX1RFU1Q7XG5cbnR5cGUgc2Nyb2xsVmlzaWJpbGl0eUFwaVR5cGUgPSBSZWFjdC5Db250ZXh0VHlwZTx0eXBlb2YgVmlzaWJpbGl0eUNvbnRleHQ+O1xuXG5jb25zdCBlbGVtUHJlZml4ID0gJ3Rlc3QnO1xuY29uc3QgZ2V0SWQgPSAoaW5kZXg6IG51bWJlcikgPT4gYCR7ZWxlbVByZWZpeH0ke2luZGV4fWA7XG5cbmNvbnN0IGdldEl0ZW1zID0gKCkgPT5cbiAgQXJyYXkoMTcwKVxuICAgIC5maWxsKDApXG4gICAgLm1hcCgoXywgaW5kKSA9PiAoeyBpZDogZ2V0SWQoaW5kKSB9KSk7XG5cbmNvbnN0IG9uV2hlZWwgPSAoXG4gIGFwaU9iajogc2Nyb2xsVmlzaWJpbGl0eUFwaVR5cGUsXG4gIGV2OiBSZWFjdC5XaGVlbEV2ZW50XG4pOiB2b2lkID0+IHtcbiAgLy8gTk9URTogbm8gZ29vZCBzdGFuZGFydCB3YXkgdG8gZGlzdGluZ3Vpc2ggdG91Y2hwYWQgc2Nyb2xsaW5nIGdlc3R1cmVzXG4gIC8vIGJ1dCBjYW4gYXNzdW1lIHRoYXQgZ2VzdHVyZSB3aWxsIGFmZmVjdCBYIGF4aXMsIG1vdXNlIHNjcm9sbCBvbmx5IFkgYXhpc1xuICAvLyBvZiBpZiBkZWx0YVkgdG9vIHNtYWxsIHByb2JhYmx5IGlzIGl0IHRvdWNocGFkXG4gIGNvbnN0IGlzVGhvdWNocGFkID0gTWF0aC5hYnMoZXYuZGVsdGFYKSAhPT0gMCB8fCBNYXRoLmFicyhldi5kZWx0YVkpIDwgMTU7XG5cbiAgaWYgKGlzVGhvdWNocGFkKSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGV2LmRlbHRhWSA8IDApIHtcbiAgICBhcGlPYmouc2Nyb2xsTmV4dCgpO1xuICB9IGVsc2UgaWYgKGV2LmRlbHRhWSA+IDApIHtcbiAgICBhcGlPYmouc2Nyb2xsUHJldigpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gUmVhY3QudXNlU3RhdGUoZ2V0SXRlbXMpO1xuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gIGNvbnN0IFtwb3NpdGlvbiwgc2V0UG9zaXRpb25dID0gUmVhY3QudXNlU3RhdGUoMCk7XG5cbiAgLy8gTk9URTogZm9yIGFkZCBtb3JlIGl0ZW1zIHdoZW4gbGFzdCBpdGVtIHJlYWNoZWRcbiAgLy8gY29uc3Qgb25VcGRhdGUgPSAoeyBpc0xhc3RJdGVtVmlzaWJsZSB9OiBzY3JvbGxWaXNpYmlsaXR5QXBpVHlwZSkgPT4ge1xuICAvLyAgIGlmIChpc0xhc3RJdGVtVmlzaWJsZSkge1xuICAvLyAgICAgY29uc3QgbmV3SXRlbXMgPSBpdGVtcy5jb25jYXQoXG4gIC8vICAgICAgIEFycmF5KDUpXG4gIC8vICAgICAgICAgLmZpbGwoMClcbiAgLy8gICAgICAgICAubWFwKChfLCBpbmQpID0+ICh7IGlkOiBnZXRJZChpdGVtcy5sZW5ndGggKyBpbmQpIH0pKVxuICAvLyAgICAgKTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKCdwdXNoIG5ldyBpdGVtcycpO1xuICAvLyAgICAgc2V0SXRlbXMobmV3SXRlbXMpO1xuICAvLyAgIH1cbiAgLy8gfTtcblxuICBjb25zdCBpc0l0ZW1TZWxlY3RlZCA9IChpZDogc3RyaW5nKTogYm9vbGVhbiA9PlxuICAgICEhc2VsZWN0ZWQuZmluZCgoZWwpID0+IGVsID09PSBpZCk7XG5cbiAgY29uc3QgeyBkcmFnU3RhcnQsIGRyYWdTdG9wLCBkcmFnTW92ZSwgZHJhZ2dpbmcgfSA9IHVzZURyYWcoKTtcbiAgY29uc3Qgb25Nb3VzZVVwID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4gZHJhZ1N0b3AsIFtkcmFnU3RvcF0pO1xuICBjb25zdCBvbk1vdXNlRG93biA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IGRyYWdTdGFydCwgW2RyYWdTdGFydF0pO1xuXG4gIGNvbnN0IHBvcyA9IHsgY3VycmVudDogMCB9O1xuICBjb25zdCBoYW5kbGVEcmFnID1cbiAgICAoeyBzY3JvbGxDb250YWluZXIgfTogc2Nyb2xsVmlzaWJpbGl0eUFwaVR5cGUpID0+XG4gICAgKGV2OiBSZWFjdC5Nb3VzZUV2ZW50KSA9PlxuICAgICAgZHJhZ01vdmUoZXYsIChkaWZmKSA9PiB7XG4gICAgICAgIGlmIChzY3JvbGxDb250YWluZXIuY3VycmVudCkge1xuICAgICAgICAgIGNvbnN0IHsgc2Nyb2xsTGVmdCB9ID0gc2Nyb2xsQ29udGFpbmVyLmN1cnJlbnQ7XG4gICAgICAgICAgY29uc3QgbmV3UG9zID0gcG9zLmN1cnJlbnQgKyBkaWZmO1xuICAgICAgICAgIHBvcy5jdXJyZW50ID0gZGlmZjtcbiAgICAgICAgICBzY3JvbGxDb250YWluZXIuY3VycmVudC5zY3JvbGxMZWZ0ICs9IGRpZmY7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gIGNvbnN0IGhhbmRsZUl0ZW1DbGljayA9XG4gICAgKGl0ZW1JZDogc3RyaW5nKSA9PlxuICAgICh7IGdldEl0ZW1CeUlkLCBzY3JvbGxUb0l0ZW0gfTogc2Nyb2xsVmlzaWJpbGl0eUFwaVR5cGUpID0+IHtcbiAgICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBjb25zdCBpdGVtU2VsZWN0ZWQgPSBpc0l0ZW1TZWxlY3RlZChpdGVtSWQpO1xuXG4gICAgICBzZXRTZWxlY3RlZCgoY3VycmVudFNlbGVjdGVkOiBzdHJpbmdbXSkgPT5cbiAgICAgICAgaXRlbVNlbGVjdGVkXG4gICAgICAgICAgPyBjdXJyZW50U2VsZWN0ZWQuZmlsdGVyKChlbCkgPT4gZWwgIT09IGl0ZW1JZClcbiAgICAgICAgICA6IGN1cnJlbnRTZWxlY3RlZC5jb25jYXQoaXRlbUlkKVxuICAgICAgKTtcblxuICAgICAgaWYgKCFpdGVtU2VsZWN0ZWQpIHtcbiAgICAgICAgLy8gTk9URTogY2VudGVyIGl0ZW0gb24gc2VsZWN0XG4gICAgICAgIHNjcm9sbFRvSXRlbShnZXRJdGVtQnlJZChpdGVtSWQpLCAnc21vb3RoJywgJ2NlbnRlcicsICduZWFyZXN0Jyk7XG4gICAgICB9XG4gICAgfTtcblxuICBjb25zdCByZXN0b3JlUG9zaXRpb24gPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoe1xuICAgICAgc2Nyb2xsQ29udGFpbmVyLFxuICAgICAgZ2V0SXRlbUJ5SWQsXG4gICAgICBzY3JvbGxUb0l0ZW0sXG4gICAgfTogc2Nyb2xsVmlzaWJpbGl0eUFwaVR5cGUpID0+IHtcbiAgICAgIC8vIE5PVEU6IHNjcm9sbCB0byBpdGVtLCBhdXRvL3Ntb290aCBmb3IgYW5pbWF0aW9uXG4gICAgICAvLyBzY3JvbGxUb0l0ZW0oZ2V0SXRlbUJ5SWQoJ3Rlc3QxNScpLCAnYXV0bycpO1xuICAgICAgLy8gTk9URTogb3IgcmVzdG9yZSBleGFjdCBwb3NpdGlvbiBieSBwaXhlbHNcbiAgICAgIC8vIHNjcm9sbENvbnRhaW5lci5jdXJyZW50LnNjcm9sbExlZnQgPSBwb3NpdGlvbjtcbiAgICB9LFxuICAgIFtwb3NpdGlvbl1cbiAgKTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIGNvbnN0IHNhdmVQb3NpdGlvbiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIHRocm90dGxlKFxuICAgICAgKHsgc2Nyb2xsQ29udGFpbmVyIH06IHNjcm9sbFZpc2liaWxpdHlBcGlUeXBlKSA9PlxuICAgICAgICAhIXNjcm9sbENvbnRhaW5lci5jdXJyZW50ICYmXG4gICAgICAgIHNldFBvc2l0aW9uKHNjcm9sbENvbnRhaW5lci5jdXJyZW50LnNjcm9sbExlZnQpLFxuICAgICAgNTAwXG4gICAgKSxcbiAgICBbXVxuICApO1xuXG4gIGNvbnN0IHsgaGlkZVNjcm9sbCwgc2hvd1Njcm9sbCB9ID0gdXNlSGlkZUJvZHlTY3JvbGwoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGVcIiBzdHlsZT17eyBoZWlnaHQ6ICcyMDB2aCcsIHBhZGRpbmdUb3A6ICcyMDBweCcgfX0+XG4gICAgICAgIDxkaXYgb25Nb3VzZUVudGVyPXtoaWRlU2Nyb2xsfSBvbk1vdXNlTGVhdmU9e3Nob3dTY3JvbGx9PlxuICAgICAgICAgIDxkaXYgb25Nb3VzZUxlYXZlPXtkcmFnU3RvcH0+XG4gICAgICAgICAgICA8U2Nyb2xsTWVudVxuICAgICAgICAgICAgICBMZWZ0QXJyb3c9e0xlZnRBcnJvd31cbiAgICAgICAgICAgICAgUmlnaHRBcnJvdz17UmlnaHRBcnJvd31cbiAgICAgICAgICAgICAgb25Jbml0PXtyZXN0b3JlUG9zaXRpb259XG4gICAgICAgICAgICAgIC8vIG9uVXBkYXRlPXtvblVwZGF0ZX1cbiAgICAgICAgICAgICAgb25TY3JvbGw9e3NhdmVQb3NpdGlvbn1cbiAgICAgICAgICAgICAgb25XaGVlbD17b25XaGVlbH1cbiAgICAgICAgICAgICAgb25Nb3VzZURvd249e29uTW91c2VEb3dufVxuICAgICAgICAgICAgICBvbk1vdXNlVXA9e29uTW91c2VVcH1cbiAgICAgICAgICAgICAgb25Nb3VzZU1vdmU9e2hhbmRsZURyYWd9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtpdGVtcy5tYXAoKHsgaWQgfSkgPT4gKFxuICAgICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgICB0aXRsZT17aWR9XG4gICAgICAgICAgICAgICAgICBpdGVtSWQ9e2lkfSAvLyBOT1RFOiBpdGVtSWQgaXMgcmVxdWlyZWQgZm9yIHRyYWNrIGl0ZW1zXG4gICAgICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlSXRlbUNsaWNrKGlkKX1cbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtpc0l0ZW1TZWxlY3RlZChpZCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1Njcm9sbE1lbnU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIExlZnRBcnJvdygpIHtcbiAgY29uc3QgeyBpbml0Q29tcGxldGUsIGlzRmlyc3RJdGVtVmlzaWJsZSwgc2Nyb2xsUHJldiB9ID1cbiAgICBSZWFjdC51c2VDb250ZXh0KFZpc2liaWxpdHlDb250ZXh0KTtcbiAgLy8gTk9URSBpbml0Q29tcGxldGUgaXMgYSBoYWNrIGZvciAgcHJldmVudCBibGlua2luZyBvbiBpbml0XG4gIC8vIENhbiBnZXQgdmlzaWJpbGl0eSBvZiBpdGVtIG9ubHkgYWZ0ZXIgaXQncyByZW5kZXJlZFxuXG4gIHJldHVybiAoXG4gICAgPEFycm93XG4gICAgICBkaXNhYmxlZD17IWluaXRDb21wbGV0ZSB8fCAoaW5pdENvbXBsZXRlICYmIGlzRmlyc3RJdGVtVmlzaWJsZSl9XG4gICAgICBvbkNsaWNrPXsoKSA9PiBzY3JvbGxQcmV2KGlzVGVzdCA/ICdhdXRvJyA6ICdzbW9vdGgnKX1cbiAgICA+XG4gICAgICBMZWZ0XG4gICAgPC9BcnJvdz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gUmlnaHRBcnJvdygpIHtcbiAgY29uc3QgeyBpbml0Q29tcGxldGUsIGlzTGFzdEl0ZW1WaXNpYmxlLCBzY3JvbGxOZXh0IH0gPVxuICAgIFJlYWN0LnVzZUNvbnRleHQoVmlzaWJpbGl0eUNvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPEFycm93XG4gICAgICBkaXNhYmxlZD17aW5pdENvbXBsZXRlICYmIGlzTGFzdEl0ZW1WaXNpYmxlfVxuICAgICAgb25DbGljaz17KCkgPT4gc2Nyb2xsTmV4dChpc1Rlc3QgPyAnYXV0bycgOiAnc21vb3RoJyl9XG4gICAgPlxuICAgICAgUmlnaHRcbiAgICA8L0Fycm93PlxuICApO1xufVxuXG5mdW5jdGlvbiBBcnJvdyh7XG4gIGNoaWxkcmVuLFxuICBkaXNhYmxlZCxcbiAgb25DbGljayxcbn06IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIG9uQ2xpY2s6IFZvaWRGdW5jdGlvbjtcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgcmlnaHQ6ICcxJScsXG4gICAgICAgIG9wYWNpdHk6IGRpc2FibGVkID8gJzAnIDogJzEnLFxuICAgICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gQ2FyZCh7XG4gIG9uQ2xpY2ssXG4gIHNlbGVjdGVkLFxuICB0aXRsZSxcbiAgaXRlbUlkLFxufToge1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIG9uQ2xpY2s6IEZ1bmN0aW9uO1xuICBzZWxlY3RlZDogYm9vbGVhbjtcbiAgdGl0bGU6IHN0cmluZztcbiAgaXRlbUlkOiBzdHJpbmc7XG59KSB7XG4gIGNvbnN0IHZpc2liaWxpdHkgPSBSZWFjdC51c2VDb250ZXh0KFZpc2liaWxpdHlDb250ZXh0KTtcblxuICBjb25zdCB2aXNpYmxlID1cbiAgICAhdmlzaWJpbGl0eS5pbml0Q29tcGxldGUgfHxcbiAgICAodmlzaWJpbGl0eS5pbml0Q29tcGxldGUgJiYgdmlzaWJpbGl0eS5pc0l0ZW1WaXNpYmxlKGl0ZW1JZCkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgZGF0YS1jeT17aXRlbUlkfVxuICAgICAgb25DbGljaz17KCkgPT4gb25DbGljayh2aXNpYmlsaXR5KX1cbiAgICAgIG9uS2V5RG93bj17KGV2KSA9PiB7XG4gICAgICAgIGV2LmNvZGUgPT09ICdFbnRlcicgJiYgb25DbGljayh2aXNpYmlsaXR5KTtcbiAgICAgIH19XG4gICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCcsXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBtYXJnaW46ICcwIDEwcHgnLFxuICAgICAgICB3aWR0aDogJzE2MHB4JyxcbiAgICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgfX1cbiAgICAgIHRhYkluZGV4PXswfVxuICAgICAgY2xhc3NOYW1lPVwiY2FyZFwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICA8ZGl2Pnt0aXRsZX08L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IHZpc2libGUgPyAndHJhbnNwYXJlbnQnIDogJ2dyYXknIH19PlxuICAgICAgICAgIHZpc2libGU6IHtKU09OLnN0cmluZ2lmeSh2aXNpYmxlKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+c2VsZWN0ZWQ6IHtKU09OLnN0cmluZ2lmeSghIXNlbGVjdGVkKX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogc2VsZWN0ZWQgPyAnZ3JlZW4nIDogJ2Jpc3F1ZScsXG4gICAgICAgICAgaGVpZ2h0OiAnMjAwcHgnLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuLy8gVE9ETzogbmV4dGpzIGNvbXBsYWlucyBhYm91dCB1c2VMYXlvdXRFZmZlY3RcbmNvbnN0IFdyYXBwZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFttb3VudGVkLCBzZXRNb3VudGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldE1vdW50ZWQodHJ1ZSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gbW91bnRlZCA/IDxBcHAgLz4gOiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV3JhcHBlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})
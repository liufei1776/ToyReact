/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _toy_react_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toy-react/index.js */ \"./toy-react/index.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar Square = /*#__PURE__*/function (_Component) {\n  _inherits(Square, _Component);\n\n  var _super = _createSuper(Square);\n\n  function Square(props) {\n    var _this;\n\n    _classCallCheck(this, Square);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      value: null\n    };\n    return _this;\n  }\n\n  _createClass(Square, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return _toy_react_index_js__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"button\", {\n        className: \"square\",\n        onClick: function onClick() {\n          return _this2.setState({\n            value: 'X'\n          });\n        }\n      }, this.state.value ? this.state.value : '');\n    }\n  }]);\n\n  return Square;\n}(_toy_react_index_js__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar Board = /*#__PURE__*/function (_Component2) {\n  _inherits(Board, _Component2);\n\n  var _super2 = _createSuper(Board);\n\n  function Board() {\n    _classCallCheck(this, Board);\n\n    return _super2.apply(this, arguments);\n  }\n\n  _createClass(Board, [{\n    key: \"renderSquare\",\n    value: function renderSquare(i) {\n      return _toy_react_index_js__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(Square, {\n        value: i\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var status = 'Next player: X';\n      return _toy_react_index_js__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"div\", null, _toy_react_index_js__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"div\", {\n        className: \"status\"\n      }, status), _toy_react_index_js__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"div\", {\n        className: \"board-row\"\n      }, this.renderSquare(0), this.renderSquare(1), this.renderSquare(2)), _toy_react_index_js__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"div\", {\n        className: \"board-row\"\n      }, this.renderSquare(3), this.renderSquare(4), this.renderSquare(5)), _toy_react_index_js__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"div\", {\n        className: \"board-row\"\n      }, this.renderSquare(6), this.renderSquare(7), this.renderSquare(8)));\n    }\n  }]);\n\n  return Board;\n}(_toy_react_index_js__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar a = _toy_react_index_js__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(Board, null);\n_toy_react_index_js__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].render(a, document.body);\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./toy-react/index.js":
/*!****************************!*\
  !*** ./toy-react/index.js ***!
  \****************************/
/*! exports provided: ToyReact, Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ToyReact\", function() { return ToyReact; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar ElementWrapper = /*#__PURE__*/function () {\n  function ElementWrapper(type) {\n    _classCallCheck(this, ElementWrapper);\n\n    this.root = document.createElement(type);\n  }\n\n  _createClass(ElementWrapper, [{\n    key: \"setAttribute\",\n    value: function setAttribute(name, value) {\n      if (name.match(/^on([\\w\\W]+)$/)) {\n        //console.log('Element Wrapper', RegExp.$1);\n        // 注意，事件名要转换成小写\n        // onClick -> Click -> click\n        this.root.addEventListener(RegExp.$1.toLocaleLowerCase(), value); // 事件需要加到属性当中\n\n        return;\n      } // 处理 className 细节\n\n\n      if (name == 'className') {\n        name = 'class';\n      }\n\n      this.root.setAttribute(name, value);\n    } // appendChild(vchild) {\n    //     vchild.mountTo(this.root);\n    // }\n\n  }, {\n    key: \"appendChild\",\n    value: function appendChild(vchild) {\n      var range = document.createRange(); // 确定 range 范围\n      // 如果已经有子元素了，range 就从 lastChild起\n\n      if (this.root.children.length) {\n        // 防止 lastChild 不存在 （为null）\n        // 就是添加到 lastChild 后面\n        range.setStartAfter(this.root.lastChild);\n        range.setEndAfter(this.root.lastChild);\n      } // 否则range就是第一子元素\n      else {\n          range.setStart(this.root, 0);\n          range.setEnd(this.root, 0);\n        }\n\n      vchild.mountTo(range);\n    } // mountTo(parent) {\n    //     parent.appendChild(this.root);\n    // }\n\n  }, {\n    key: \"mountTo\",\n    value: function mountTo(range) {\n      range.deleteContents(); // 在range内部永远插入节点\n\n      range.insertNode(this.root);\n    } // 没有render方法， 因为它已经是一个真实DOM了\n\n  }]);\n\n  return ElementWrapper;\n}();\n\nvar TextWrapper = /*#__PURE__*/function () {\n  function TextWrapper(content) {\n    _classCallCheck(this, TextWrapper);\n\n    this.textNode = document.createTextNode(content);\n  }\n\n  _createClass(TextWrapper, [{\n    key: \"mountTo\",\n    value: function mountTo(range) {\n      range.deleteContents();\n      range.insertNode(this.textNode);\n    }\n  }]);\n\n  return TextWrapper;\n}(); // 组件的一些常用方法都是一样的，因此提取出来\n\n\nvar Component = /*#__PURE__*/function () {\n  function Component() {\n    _classCallCheck(this, Component);\n\n    this.children = []; // 创建一个“干净”的对象\n\n    this.props = Object.create(null);\n    this.range = null;\n  }\n\n  _createClass(Component, [{\n    key: \"appendChild\",\n    value: function appendChild(vchild) {\n      this.children.push(vchild);\n    }\n  }, {\n    key: \"setAttribute\",\n    value: function setAttribute(name, value) {\n      this.props[name] = value;\n      this[name] = value;\n    } // 将 moutTo 拆解位 mountTo 和 update\n    // mountTo(parent) {\n    //     // render 返回的 的是JSX\n    //     let vdom = this.render();  // JSX解析之后，就变成了实DOM\n    //     vdom.mountTo(parent);\n    // }\n\n  }, {\n    key: \"mountTo\",\n    value: function mountTo(range) {\n      this.range = range;\n      this.update();\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      var placeholder = document.createComment('placeholder');\n      var range = document.createRange();\n      range.setStart(this.range.endContainer, this.range.endOffset);\n      range.setEnd(this.range.endContainer, this.range.endOffset);\n      range.insertNode(placeholder); // 先清理 -》 具备更新的能力了\n\n      this.range.deleteContents(); // render再次获得JSX，并解析成实DOM，即ElementWrapper\n\n      var vdom = this.render();\n      vdom.mountTo(this.range);\n      placeholder.parentNode.removeChild(placeholder);\n    } // 模拟 React 的 setState 功能 \n\n  }, {\n    key: \"setState\",\n    value: function setState(state) {\n      // Winter 的代码\n      // function merge(oldState, newState) {\n      //     for(let key in newState) {\n      //         if(typeof newState[key] === 'object') {\n      //             if(typeof oldState[p] !== 'object') {\n      //                 oldState[p] = {};\n      //             }\n      //             merge(oldState[p], newState[p]);\n      //         }\n      //         else {\n      //             oldState[p] = newState[p];\n      //         }\n      //     }\n      // }\n      // // 如果this.state 没有定义？\n      // if(!this.state && state) {\n      //     this.state = {};\n      // }\n      // merge(this.state, state);\n      if (!this.state && state) {\n        this.state = {};\n      } // 这里对深拷贝应该不那么严格？\n\n\n      Object.assign(this.state, state);\n      console.log(this.state);\n      this.update();\n    }\n  }]);\n\n  return Component;\n}();\n\nvar ToyReact = {\n  // 解析组件或者JSX\n  createElement: function createElement(type, attributes) {\n    //console.log(children);\n    var element;\n\n    if (typeof type === 'string') {\n      element = new ElementWrapper(type); //console.log('Not a component')\n    } else if (typeof type === 'function') {\n      element = new type(); //console.log('A component');\n    }\n\n    for (var key in attributes) {\n      element.setAttribute(key, attributes[key]);\n    }\n\n    var insertChildren = function insertChildren(children) {\n      var _iterator = _createForOfIteratorHelper(children),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var child = _step.value;\n\n          if (Array.isArray(child)) {\n            insertChildren(child);\n          } else {\n            // 对于不是上面三种类型的，强制转换成String\n            if (!(child instanceof Component) && !(child instanceof ElementWrapper) && !(child instanceof TextWrapper)) {\n              child = String(child);\n            }\n\n            if (typeof child === 'string') {\n              child = new TextWrapper(child);\n            }\n\n            element.appendChild(child);\n          }\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    };\n\n    for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n      children[_key - 2] = arguments[_key];\n    }\n\n    insertChildren(children); //console.log(element);\n\n    return element;\n  },\n  // render(vdom, element) {\n  //     vdom.mountTo(element);\n  // }\n  render: function render(vdom, element) {\n    var range = document.createRange(); // 确定 Range 的 范围\n\n    if (element.children.length) {\n      // 防止 lastChild 不存在 （为null）\n      // 就是添加到 lastChild 后面:  lastChild + (start,end)\n      range.setStartAfter(element.lastChild);\n      range.setEndAfter(element.lastChild);\n    } else {\n      range.setStart(element, 0);\n      range.setEnd(element, 0);\n    } // 将 vdom 加到 range 中\n\n\n    vdom.mountTo(range);\n  }\n};\n\n\n//# sourceURL=webpack:///./toy-react/index.js?");

/***/ })

/******/ });
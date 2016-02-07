(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vuestrapDocs"] = factory();
	else
		root["vuestrapDocs"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * IMPORT EACH COMPONENT
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _srcComponentsDemo = __webpack_require__(1);

	var _srcComponentsDemo2 = _interopRequireDefault(_srcComponentsDemo);

	var _srcComponentsSearch = __webpack_require__(7);

	var _srcComponentsSearch2 = _interopRequireDefault(_srcComponentsSearch);

	var _srcComponentsDocs = __webpack_require__(11);

	var _srcComponentsDocs2 = _interopRequireDefault(_srcComponentsDocs);

	var vuestrapDocs = {
	  demo: _srcComponentsDemo2['default'],
	  search: _srcComponentsSearch2['default'],
	  docs: _srcComponentsDocs2['default']
	};

	exports['default'] = vuestrapDocs;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(2);

	var _demoHtml = __webpack_require__(6);

	var _demoHtml2 = _interopRequireDefault(_demoHtml);

	// export component object
	exports['default'] = {
	    template: _demoHtml2['default'],
	    replace: true,
	    props: {
	        meta: {
	            type: Object,
	            'default': {},
	            required: true
	        },
	        snippet: {
	            type: String,
	            'default': '',
	            required: true
	        }
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vuestrap-theme-loader/index.js!./demo.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vuestrap-theme-loader/index.js!./demo.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".vuestrap-docs-demo {\n  margin-bottom: 4rem; }\n  .vuestrap-docs-demo .code-demo {\n    position: relative;\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: 2rem;\n    padding: 1rem;\n    padding-bottom: 0;\n    border: solid #f7f7f9;\n    border-width: .2rem; }\n    .vuestrap-docs-demo .code-demo > .inverse {\n      background-color: #898989;\n      padding: 0.2em; }\n  .vuestrap-docs-demo .highlight {\n    padding: 1rem;\n    margin: 1rem -1rem;\n    background-color: #f7f7f9;\n    margin-bottom: 0; }\n    .vuestrap-docs-demo .highlight pre {\n      margin-bottom: 0; }\n  .vuestrap-docs-demo .options > table code {\n    display: inline-block;\n    margin-right: 2px;\n    margin-bottom: 2px; }\n  .vuestrap-docs-demo .options > table td {\n    width: 10%; }\n    .vuestrap-docs-demo .options > table td p {\n      margin: 0; }\n    .vuestrap-docs-demo .options > table td p + p {\n      margin-top: 10px; }\n  .vuestrap-docs-demo .options > table td:nth-child(1) {\n    min-width: 150px;\n    color: #563d7c; }\n  .vuestrap-docs-demo .options > table td:nth-child(5) {\n    width: 50%; }\n  .vuestrap-docs-demo [slot=\"controls\"] {\n    background-color: #f7f7f9;\n    padding: 1rem; }\n  .vuestrap-docs-demo [slot=\"controls\"] label {\n    margin-bottom: 0;\n    margin-right: 0.5rem; }\n  .vuestrap-docs-demo label.btn {\n    margin-bottom: 0; }\n  .vuestrap-docs-demo .label {\n    margin-right: 0.5rem; }\n  .vuestrap-docs-demo > .label {\n    background-color: #563d7c; }\n  .vuestrap-docs-demo > .alert {\n    border-right-color: #e6e6ec;\n    border-top-color: #e6e6ec;\n    border-bottom-color: #e6e6ec;\n    border-left-width: 5px;\n    background-color: transparent; }\n    .vuestrap-docs-demo > .alert .icons {\n      vertical-align: text-bottom; }\n  .vuestrap-docs-demo .tab-content .tab-pane {\n    padding: 1em 0; }\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "<section class=\"vuestrap-docs-demo\" id=\"{{meta.name}}\">\r\n\r\n\t<!-- Meta title -->\r\n\t<h2>{{meta.title}}</h2>\r\n\t<p v-html=\"meta.description\"></p>\r\n\r\n\t<div class=\"m-b\"></div>\r\n\r\n\t<div class=\"alert alert-info\" role=\"alert\" v-if=\"meta.note\">\r\n  \t<!--<icon background=\"circle-outline\" size=\"sm\" variant=\"info\" text=\"i\"></icon>--> <span v-html=\"meta.note\"></span>\r\n\t</div>\r\n\r\n\t<div class=\"m-b-md\"></div>\r\n\r\n\t<!-- Component manipulators -->\r\n\t<slot name=\"controls\"></slot>\r\n\r\n\t<!-- Output & Code sample -->\r\n\t<div class=\"code-demo\">\r\n\r\n\t\t<slot class=\"markup\" name=\"markup\"></slot>\r\n\r\n\t\t<div class=\"highlight\">\r\n\t\t\t<pre><code v-html=\"snippet\"></code></pre>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<!-- Options -->\r\n\t<div class=\"options\" v-if=\"meta.options.length\">\r\n\t\t<h3>Options</h3>\r\n\t\t<table class='table table-responsive'>\r\n\t\t\t<tr>\r\n\t\t\t\t<th>Name</th>\r\n\t\t\t\t<th>Type</th>\r\n\t\t\t\t<th>Default</th>\r\n\t\t\t\t<th>Required</th>\r\n\t\t\t\t<th>Description</th>\r\n\t\t\t</tr>\r\n\t\t\t<tr v-for=\"item in meta.options\">\r\n\t\t\t\t<td>{{item.name}}</td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<code v-html=\"item.type\"></code>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td><code v-if=\"item.default\" v-html=\"item.default\"></code></td>\r\n\t\t\t\t<td>{{item.required == true ? 'yes' : ''}}</td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<p v-html=\"item.description\"></p>\r\n\t\t\t\t\t<p v-if=\"item.values\">\r\n\t\t\t\t\t\tPosible values:\r\n\t\t\t\t\t\t<code v-for=\"item in item.values\">{{item}}</code>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t</table>\t\r\n\t</div>\r\n\r\n\t<!-- Accessibility -->\r\n\t<div class=\"accessibility\" v-if=\"meta.accessibility\">\r\n\t\t<h3>Accessibility</h3>\r\n\t\t<p v-html=\"meta.accessibility\"></p>\r\n\t</div>\r\n\r\n\t<div class=\"m-b-md\"></div>\r\n\r\n\t<!-- Browser Support -->\r\n\t<div class=\"browserSupport\" v-if=\"meta.browserSupport\">\r\n\t\t<h3>Browser Support</h3>\r\n\t\t<span class=\"label label-primary\" v-for=\"item in meta.browserSupport.browsers\">{{ item }}</span>\r\n\t\t<p><small v-html=\"meta.browserSupport.note\"></small></p>\r\n\t</div>\r\n</section>\r\n";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(8);

	var _searchHtml = __webpack_require__(10);

	var _searchHtml2 = _interopRequireDefault(_searchHtml);

	// export component object
	exports['default'] = {
	    template: _searchHtml2['default'],
	    replace: true,
	    data: function data() {
	        return {
	            search: ''
	        };
	    },
	    filters: {
	        skipIntro: function skipIntro(elements) {
	            var filtered = [];
	            elements.forEach(function (element) {
	                if (element.name !== 'introduction') {
	                    filtered.push(element);
	                }
	            });
	            return filtered;
	        }
	    },
	    props: {
	        showSearch: {
	            type: Number,
	            'default': 5
	        },
	        list: {
	            type: Array,
	            'default': []
	        },
	        currentView: {
	            type: String,
	            'default': null
	        }
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vuestrap-theme-loader/index.js!./search.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vuestrap-theme-loader/index.js!./search.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".vuestrap-docs-search .list-group-search {\n  background: #f7f7f9; }\n\n.vuestrap-docs-search .list-group-item.active {\n  color: #42b983;\n  background-color: transparent;\n  border-color: #42b983; }\n", ""]);

	// exports


/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<div class=\"vuestrap-docs-search list-group\">\r\n  <!-- search -->\r\n  <div class=\"list-group-item list-group-search\" v-if=\"list.length > showSearch\">\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" v-model=\"search\" autocomplete=\"off\">\r\n  </div>\r\n  <!-- components -->\r\n  <a href=\"#{{item.url}}\" \r\n    v-bind:class=\"{\r\n      'list-group-item': true, \r\n      active: currentView && item.id === currentView,\r\n    }\" \r\n    v-for=\"item in list | skipIntro | filterBy search in 'title'\">\r\n    {{item.title}}\r\n  </a>\r\n</div>";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(12);

	var _docsHtml = __webpack_require__(14);

	var _docsHtml2 = _interopRequireDefault(_docsHtml);

	// import external dependencies

	var _search = __webpack_require__(7);

	var _search2 = _interopRequireDefault(_search);

	// import utils

	var _utils = __webpack_require__(15);

	// import package.json meta data

	var _packageJson = __webpack_require__(17);

	var _packageJson2 = _interopRequireDefault(_packageJson);

	var _gritcodeComponentsSrcComponentsOffcanvasDrawer = __webpack_require__(18);

	// export component object
	exports['default'] = {
	    template: _docsHtml2['default'],
	    replace: true,
	    data: function data() {
	        return {
	            currentView: '',
	            pkg: _packageJson2['default']
	        };
	    },
	    props: {
	        routes: {
	            type: Array,
	            required: true
	        },
	        pageTitle: {
	            type: String,
	            required: true
	        }
	    },
	    components: {
	        docsSearch: _search2['default'],
	        vsOffcanvasDrawer: _gritcodeComponentsSrcComponentsOffcanvasDrawer.offcanvasDrawer,
	        vsOffcanvasWrapper: _gritcodeComponentsSrcComponentsOffcanvasDrawer.offcanvasWrapper
	    },
	    methods: {
	        changeRoute: function changeRoute(route) {
	            window.scrollTo(0, 0);
	            this.$set('currentView', route.id);
	            this.$set('pageTitle', route.pageTitle);
	        }
	    },
	    ready: function ready() {
	        var _this = this;

	        // set routes for each page
	        this.routes.forEach(function (route) {
	            // Adhoc Routing
	            _utils.router.on(route.url, function () {
	                if (route.redirect) {
	                    // if route has redirect param, redirect to the spcified route
	                    _utils.router.setRoute(route.redirect);
	                }
	                _this.changeRoute(route);
	            });
	        });

	        // init router
	        _utils.router.init('/');
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vuestrap-theme-loader/index.js!./docs.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vuestrap-theme-loader/index.js!./docs.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "html, body {\n  height: 100%; }\n\nhtml {\n  font-size: 16px; }\n  @media (max-width: 480px) {\n    html {\n      font-size: 14px; } }\n\nbody {\n  margin: auto;\n  padding: 0;\n  overflow-x: hidden; }\n\nh1, h2, h3 {\n  font-family: 'Source Sans Pro', sans-serif;\n  color: #563d7c; }\n\nh2 {\n  padding-bottom: 0.3rem;\n  border-bottom: 1px solid #42b983; }\n\nh3 {\n  font-size: 1.3rem !important; }\n\n#main > .navbar {\n  padding: 0.2em 0 !important;\n  line-height: 3em; }\n  #main > .navbar .navbar-brand {\n    padding: 0 !important; }\n    #main > .navbar .navbar-brand img {\n      height: 2.5em; }\n\n#main > .container {\n  padding-top: 5em; }\n\n.offcanvas-drawer .close {\n  padding-top: 0.35em; }\n\n[v-cloak] {\n  display: none; }\n\n.list-group-item.active {\n  color: #42b983 !important;\n  border-color: #42b983 !important;\n  background-color: transparent !important; }\n\n/* offcanvas menu */\n.navbar a.list-group-item {\n  width: 100%;\n  color: #C5C5C5;\n  text-align: inherit;\n  background-color: rgba(255, 255, 255, 0);\n  border: 1px solid rgba(221, 221, 221, 0.04);\n  border-right: 0;\n  border-left: 0; }\n", ""]);

	// exports


/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "<!-- offcanvas wrapper -->\r\n<vs-offcanvas-wrapper id=\"main\" animation=\"ease\" align=\"right\">\r\n\r\n\t<vs-offcanvas-drawer>\r\n\t\t<!-- header mobile - drawer with navbar -->\r\n\t\t<div class=\"navbar navbar-collapse navbar-dark navbar-primary bg-inverse navbar-static-top navbar-full navbar-offcanvas-drawer\">\r\n\t\t\t<a href=\"{{pkg.homepage}}\" class=\"btn btn-success pull-left\" target=\"_blank\" v-on:click=\"$root.$broadcast('toggle::offcanvas-drawer', 'main')\">\r\n\t    \t&#9733; Github\r\n\t    </a>\r\n\t    <!-- close button -->\r\n\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" v-on:click=\"$root.$broadcast('toggle::offcanvas-drawer', 'main')\">\r\n        <span aria-hidden=\"true\">×</span>\r\n        <span class=\"sr-only\">Close</span>\r\n\t    </button>\r\n\t    <div class=\"m-b clearfix\"></div>\r\n\t    <div class=\"list-group list-group-flush\">\r\n\t\t\t  <a href=\"#{{item.url}}\" \r\n\t\t\t    v-bind:class=\"{\r\n\t\t\t      'list-group-item': true, \r\n\t\t\t    }\" \r\n\t\t\t    v-for=\"item in routes\"\r\n\t\t\t    v-on:click=\"$root.$broadcast('toggle::offcanvas-drawer', 'main')\">\r\n\t\t\t    {{item.title}}\r\n\t\t\t  </a>\r\n\t\t\t</div>\r\n\t  </div>\r\n\t</vs-offcanvas-drawer>\r\n\r\n\t<!-- header desktop -->\r\n\t<nav class=\"navbar navbar-fixed-top navbar-light bg-faded\">\r\n\t  <div class=\"container\">\r\n\t      <a class=\"navbar-brand text-center\" href=\"#/\">\r\n\t\t\t\t\t<img v-bind:src=\"'assets/vuestrap-logo.svg'\" alt=\"Vuestrap logo\">\r\n\t\t\t\t</a>\r\n\t\t\t\t<a class=\"navbar-brand text-center hidden-sm-down\" href=\"#/\">\r\n\t\t\t\t\tDocumentation\r\n\t\t\t\t</a>\r\n\t\t\t\t<ul class=\"nav navbar-nav pull-right\">\r\n\t\t\t\t\t<li class=\"nav-item hidden-sm-down\">\r\n\t\t\t\t\t\t<a href=\"#/\" class=\"btn\">Introduction</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"nav-item hidden-sm-down\">\r\n\t\t\t\t\t\t<a href=\"{{pkg.homepage}}\" class=\"btn btn-success\" target=\"_blank\">&#9733; Github</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"nav-item hidden-md-up\">\r\n\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-success\" target=\"_blank\" v-on:click.stop.prevent=\"$root.$broadcast('toggle::offcanvas-drawer', 'main')\">&#9776;</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t  </div><!-- /.container -->\r\n\t</nav><!-- /.navbar -->\r\n\r\n\t<!-- content -->\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row row-offcanvas row-offcanvas-right\">\r\n\t\t\t<div class=\"col-xs-12 col-md-9\">\r\n\t\t\t\t<component :is=\"currentView\"></component>\r\n\t    </div><!-- /col-xs-12 -->\r\n\r\n\t\t\t<!-- sidebar -->\r\n\t\t\t<div class=\"col-xs-12 col-md-3 sidebar-offcanvas hidden-sm-down\" id=\"sidebar\">\r\n\t\t\t\t<docs-search :list=\"routes\" :current-view=\"currentView\"></docs-search>\r\n\t\t\t</div><!--/sidebar-->\r\n\r\n\t\t</div><!--/row-->\r\n\t</div><!--/container-->\r\n\r\n</vs-offcanvas-wrapper>";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Routes helper
	 */

	// import router
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _director = __webpack_require__(16);

	var _director2 = _interopRequireDefault(_director);

	// create director instance
	var router = new _director2['default'].Router().configure({ strict: false });

	exports.router = router;
	// gets routes info from the nested array of pages
	var getRoutes = function getRoutes(arr) {
	  var parentId = '';
	  var parentTitle = '';
	  var parentUrl = '';
	  var routes = [];
	  var extractRoutes = function extractRoutes(data) {
	    for (var i = 0; i < data.pages.length; i++) {
	      var route = data.pages[i].route;
	      if (!route) throw new Error('Route object is missing.');
	      if (!route.name) throw new Error('Route object is missing "name" parameter.');
	      if (!route.url) throw new Error('Route object is missing "url" parameter.');
	      route.id = parentId ? parentId + route.name : route.name;
	      route.pageTitle = parentTitle ? parentTitle + route.title : route.title;
	      route.url = parentUrl ? parentUrl + route.url : route.url;

	      // add route to components object
	      route.component = data.pages[i];

	      // add route to the routes collection
	      routes.push(route);

	      // go to nested pages
	      if (data.pages[i].pages instanceof Array) {
	        parentId += route.name + '.';
	        parentTitle += route.title + ' - ';
	        parentUrl += route.url;
	        extractRoutes(data.pages[i]);
	      }
	    }
	  };

	  // get all routes from nested objects
	  extractRoutes(arr);
	  return routes;
	};
	exports.getRoutes = getRoutes;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	

	//
	// Generated on Tue Dec 16 2014 12:13:47 GMT+0100 (CET) by Charlie Robbins, Paolo Fragomeni & the Contributors (Using Codesurgeon).
	// Version 1.2.6
	//

	(function (exports) {

	/*
	 * browser.js: Browser specific functionality for director.
	 *
	 * (C) 2011, Charlie Robbins, Paolo Fragomeni, & the Contributors.
	 * MIT LICENSE
	 *
	 */

	var dloc = document.location;

	function dlocHashEmpty() {
	  // Non-IE browsers return '' when the address bar shows '#'; Director's logic
	  // assumes both mean empty.
	  return dloc.hash === '' || dloc.hash === '#';
	}

	var listener = {
	  mode: 'modern',
	  hash: dloc.hash,
	  history: false,

	  check: function () {
	    var h = dloc.hash;
	    if (h != this.hash) {
	      this.hash = h;
	      this.onHashChanged();
	    }
	  },

	  fire: function () {
	    if (this.mode === 'modern') {
	      this.history === true ? window.onpopstate() : window.onhashchange();
	    }
	    else {
	      this.onHashChanged();
	    }
	  },

	  init: function (fn, history) {
	    var self = this;
	    this.history = history;

	    if (!Router.listeners) {
	      Router.listeners = [];
	    }

	    function onchange(onChangeEvent) {
	      for (var i = 0, l = Router.listeners.length; i < l; i++) {
	        Router.listeners[i](onChangeEvent);
	      }
	    }

	    //note IE8 is being counted as 'modern' because it has the hashchange event
	    if ('onhashchange' in window && (document.documentMode === undefined
	      || document.documentMode > 7)) {
	      // At least for now HTML5 history is available for 'modern' browsers only
	      if (this.history === true) {
	        // There is an old bug in Chrome that causes onpopstate to fire even
	        // upon initial page load. Since the handler is run manually in init(),
	        // this would cause Chrome to run it twise. Currently the only
	        // workaround seems to be to set the handler after the initial page load
	        // http://code.google.com/p/chromium/issues/detail?id=63040
	        setTimeout(function() {
	          window.onpopstate = onchange;
	        }, 500);
	      }
	      else {
	        window.onhashchange = onchange;
	      }
	      this.mode = 'modern';
	    }
	    else {
	      //
	      // IE support, based on a concept by Erik Arvidson ...
	      //
	      var frame = document.createElement('iframe');
	      frame.id = 'state-frame';
	      frame.style.display = 'none';
	      document.body.appendChild(frame);
	      this.writeFrame('');

	      if ('onpropertychange' in document && 'attachEvent' in document) {
	        document.attachEvent('onpropertychange', function () {
	          if (event.propertyName === 'location') {
	            self.check();
	          }
	        });
	      }

	      window.setInterval(function () { self.check(); }, 50);

	      this.onHashChanged = onchange;
	      this.mode = 'legacy';
	    }

	    Router.listeners.push(fn);

	    return this.mode;
	  },

	  destroy: function (fn) {
	    if (!Router || !Router.listeners) {
	      return;
	    }

	    var listeners = Router.listeners;

	    for (var i = listeners.length - 1; i >= 0; i--) {
	      if (listeners[i] === fn) {
	        listeners.splice(i, 1);
	      }
	    }
	  },

	  setHash: function (s) {
	    // Mozilla always adds an entry to the history
	    if (this.mode === 'legacy') {
	      this.writeFrame(s);
	    }

	    if (this.history === true) {
	      window.history.pushState({}, document.title, s);
	      // Fire an onpopstate event manually since pushing does not obviously
	      // trigger the pop event.
	      this.fire();
	    } else {
	      dloc.hash = (s[0] === '/') ? s : '/' + s;
	    }
	    return this;
	  },

	  writeFrame: function (s) {
	    // IE support...
	    var f = document.getElementById('state-frame');
	    var d = f.contentDocument || f.contentWindow.document;
	    d.open();
	    d.write("<script>_hash = '" + s + "'; onload = parent.listener.syncHash;<script>");
	    d.close();
	  },

	  syncHash: function () {
	    // IE support...
	    var s = this._hash;
	    if (s != dloc.hash) {
	      dloc.hash = s;
	    }
	    return this;
	  },

	  onHashChanged: function () {}
	};

	var Router = exports.Router = function (routes) {
	  if (!(this instanceof Router)) return new Router(routes);

	  this.params   = {};
	  this.routes   = {};
	  this.methods  = ['on', 'once', 'after', 'before'];
	  this.scope    = [];
	  this._methods = {};

	  this._insert = this.insert;
	  this.insert = this.insertEx;

	  this.historySupport = (window.history != null ? window.history.pushState : null) != null

	  this.configure();
	  this.mount(routes || {});
	};

	Router.prototype.init = function (r) {
	  var self = this
	    , routeTo;
	  this.handler = function(onChangeEvent) {
	    var newURL = onChangeEvent && onChangeEvent.newURL || window.location.hash;
	    var url = self.history === true ? self.getPath() : newURL.replace(/.*#/, '');
	    self.dispatch('on', url.charAt(0) === '/' ? url : '/' + url);
	  };

	  listener.init(this.handler, this.history);

	  if (this.history === false) {
	    if (dlocHashEmpty() && r) {
	      dloc.hash = r;
	    } else if (!dlocHashEmpty()) {
	      self.dispatch('on', '/' + dloc.hash.replace(/^(#\/|#|\/)/, ''));
	    }
	  }
	  else {
	    if (this.convert_hash_in_init) {
	      // Use hash as route
	      routeTo = dlocHashEmpty() && r ? r : !dlocHashEmpty() ? dloc.hash.replace(/^#/, '') : null;
	      if (routeTo) {
	        window.history.replaceState({}, document.title, routeTo);
	      }
	    }
	    else {
	      // Use canonical url
	      routeTo = this.getPath();
	    }

	    // Router has been initialized, but due to the chrome bug it will not
	    // yet actually route HTML5 history state changes. Thus, decide if should route.
	    if (routeTo || this.run_in_init === true) {
	      this.handler();
	    }
	  }

	  return this;
	};

	Router.prototype.explode = function () {
	  var v = this.history === true ? this.getPath() : dloc.hash;
	  if (v.charAt(1) === '/') { v=v.slice(1) }
	  return v.slice(1, v.length).split("/");
	};

	Router.prototype.setRoute = function (i, v, val) {
	  var url = this.explode();

	  if (typeof i === 'number' && typeof v === 'string') {
	    url[i] = v;
	  }
	  else if (typeof val === 'string') {
	    url.splice(i, v, s);
	  }
	  else {
	    url = [i];
	  }

	  listener.setHash(url.join('/'));
	  return url;
	};

	//
	// ### function insertEx(method, path, route, parent)
	// #### @method {string} Method to insert the specific `route`.
	// #### @path {Array} Parsed path to insert the `route` at.
	// #### @route {Array|function} Route handlers to insert.
	// #### @parent {Object} **Optional** Parent "routes" to insert into.
	// insert a callback that will only occur once per the matched route.
	//
	Router.prototype.insertEx = function(method, path, route, parent) {
	  if (method === "once") {
	    method = "on";
	    route = function(route) {
	      var once = false;
	      return function() {
	        if (once) return;
	        once = true;
	        return route.apply(this, arguments);
	      };
	    }(route);
	  }
	  return this._insert(method, path, route, parent);
	};

	Router.prototype.getRoute = function (v) {
	  var ret = v;

	  if (typeof v === "number") {
	    ret = this.explode()[v];
	  }
	  else if (typeof v === "string"){
	    var h = this.explode();
	    ret = h.indexOf(v);
	  }
	  else {
	    ret = this.explode();
	  }

	  return ret;
	};

	Router.prototype.destroy = function () {
	  listener.destroy(this.handler);
	  return this;
	};

	Router.prototype.getPath = function () {
	  var path = window.location.pathname;
	  if (path.substr(0, 1) !== '/') {
	    path = '/' + path;
	  }
	  return path;
	};
	function _every(arr, iterator) {
	  for (var i = 0; i < arr.length; i += 1) {
	    if (iterator(arr[i], i, arr) === false) {
	      return;
	    }
	  }
	}

	function _flatten(arr) {
	  var flat = [];
	  for (var i = 0, n = arr.length; i < n; i++) {
	    flat = flat.concat(arr[i]);
	  }
	  return flat;
	}

	function _asyncEverySeries(arr, iterator, callback) {
	  if (!arr.length) {
	    return callback();
	  }
	  var completed = 0;
	  (function iterate() {
	    iterator(arr[completed], function(err) {
	      if (err || err === false) {
	        callback(err);
	        callback = function() {};
	      } else {
	        completed += 1;
	        if (completed === arr.length) {
	          callback();
	        } else {
	          iterate();
	        }
	      }
	    });
	  })();
	}

	function paramifyString(str, params, mod) {
	  mod = str;
	  for (var param in params) {
	    if (params.hasOwnProperty(param)) {
	      mod = params[param](str);
	      if (mod !== str) {
	        break;
	      }
	    }
	  }
	  return mod === str ? "([._a-zA-Z0-9-%()]+)" : mod;
	}

	function regifyString(str, params) {
	  var matches, last = 0, out = "";
	  while (matches = str.substr(last).match(/[^\w\d\- %@&]*\*[^\w\d\- %@&]*/)) {
	    last = matches.index + matches[0].length;
	    matches[0] = matches[0].replace(/^\*/, "([_.()!\\ %@&a-zA-Z0-9-]+)");
	    out += str.substr(0, matches.index) + matches[0];
	  }
	  str = out += str.substr(last);
	  var captures = str.match(/:([^\/]+)/ig), capture, length;
	  if (captures) {
	    length = captures.length;
	    for (var i = 0; i < length; i++) {
	      capture = captures[i];
	      if (capture.slice(0, 2) === "::") {
	        str = capture.slice(1);
	      } else {
	        str = str.replace(capture, paramifyString(capture, params));
	      }
	    }
	  }
	  return str;
	}

	function terminator(routes, delimiter, start, stop) {
	  var last = 0, left = 0, right = 0, start = (start || "(").toString(), stop = (stop || ")").toString(), i;
	  for (i = 0; i < routes.length; i++) {
	    var chunk = routes[i];
	    if (chunk.indexOf(start, last) > chunk.indexOf(stop, last) || ~chunk.indexOf(start, last) && !~chunk.indexOf(stop, last) || !~chunk.indexOf(start, last) && ~chunk.indexOf(stop, last)) {
	      left = chunk.indexOf(start, last);
	      right = chunk.indexOf(stop, last);
	      if (~left && !~right || !~left && ~right) {
	        var tmp = routes.slice(0, (i || 1) + 1).join(delimiter);
	        routes = [ tmp ].concat(routes.slice((i || 1) + 1));
	      }
	      last = (right > left ? right : left) + 1;
	      i = 0;
	    } else {
	      last = 0;
	    }
	  }
	  return routes;
	}

	var QUERY_SEPARATOR = /\?.*/;

	Router.prototype.configure = function(options) {
	  options = options || {};
	  for (var i = 0; i < this.methods.length; i++) {
	    this._methods[this.methods[i]] = true;
	  }
	  this.recurse = options.recurse || this.recurse || false;
	  this.async = options.async || false;
	  this.delimiter = options.delimiter || "/";
	  this.strict = typeof options.strict === "undefined" ? true : options.strict;
	  this.notfound = options.notfound;
	  this.resource = options.resource;
	  this.history = options.html5history && this.historySupport || false;
	  this.run_in_init = this.history === true && options.run_handler_in_init !== false;
	  this.convert_hash_in_init = this.history === true && options.convert_hash_in_init !== false;
	  this.every = {
	    after: options.after || null,
	    before: options.before || null,
	    on: options.on || null
	  };
	  return this;
	};

	Router.prototype.param = function(token, matcher) {
	  if (token[0] !== ":") {
	    token = ":" + token;
	  }
	  var compiled = new RegExp(token, "g");
	  this.params[token] = function(str) {
	    return str.replace(compiled, matcher.source || matcher);
	  };
	  return this;
	};

	Router.prototype.on = Router.prototype.route = function(method, path, route) {
	  var self = this;
	  if (!route && typeof path == "function") {
	    route = path;
	    path = method;
	    method = "on";
	  }
	  if (Array.isArray(path)) {
	    return path.forEach(function(p) {
	      self.on(method, p, route);
	    });
	  }
	  if (path.source) {
	    path = path.source.replace(/\\\//ig, "/");
	  }
	  if (Array.isArray(method)) {
	    return method.forEach(function(m) {
	      self.on(m.toLowerCase(), path, route);
	    });
	  }
	  path = path.split(new RegExp(this.delimiter));
	  path = terminator(path, this.delimiter);
	  this.insert(method, this.scope.concat(path), route);
	};

	Router.prototype.path = function(path, routesFn) {
	  var self = this, length = this.scope.length;
	  if (path.source) {
	    path = path.source.replace(/\\\//ig, "/");
	  }
	  path = path.split(new RegExp(this.delimiter));
	  path = terminator(path, this.delimiter);
	  this.scope = this.scope.concat(path);
	  routesFn.call(this, this);
	  this.scope.splice(length, path.length);
	};

	Router.prototype.dispatch = function(method, path, callback) {
	  var self = this, fns = this.traverse(method, path.replace(QUERY_SEPARATOR, ""), this.routes, ""), invoked = this._invoked, after;
	  this._invoked = true;
	  if (!fns || fns.length === 0) {
	    this.last = [];
	    if (typeof this.notfound === "function") {
	      this.invoke([ this.notfound ], {
	        method: method,
	        path: path
	      }, callback);
	    }
	    return false;
	  }
	  if (this.recurse === "forward") {
	    fns = fns.reverse();
	  }
	  function updateAndInvoke() {
	    self.last = fns.after;
	    self.invoke(self.runlist(fns), self, callback);
	  }
	  after = this.every && this.every.after ? [ this.every.after ].concat(this.last) : [ this.last ];
	  if (after && after.length > 0 && invoked) {
	    if (this.async) {
	      this.invoke(after, this, updateAndInvoke);
	    } else {
	      this.invoke(after, this);
	      updateAndInvoke();
	    }
	    return true;
	  }
	  updateAndInvoke();
	  return true;
	};

	Router.prototype.invoke = function(fns, thisArg, callback) {
	  var self = this;
	  var apply;
	  if (this.async) {
	    apply = function(fn, next) {
	      if (Array.isArray(fn)) {
	        return _asyncEverySeries(fn, apply, next);
	      } else if (typeof fn == "function") {
	        fn.apply(thisArg, (fns.captures || []).concat(next));
	      }
	    };
	    _asyncEverySeries(fns, apply, function() {
	      if (callback) {
	        callback.apply(thisArg, arguments);
	      }
	    });
	  } else {
	    apply = function(fn) {
	      if (Array.isArray(fn)) {
	        return _every(fn, apply);
	      } else if (typeof fn === "function") {
	        return fn.apply(thisArg, fns.captures || []);
	      } else if (typeof fn === "string" && self.resource) {
	        self.resource[fn].apply(thisArg, fns.captures || []);
	      }
	    };
	    _every(fns, apply);
	  }
	};

	Router.prototype.traverse = function(method, path, routes, regexp, filter) {
	  var fns = [], current, exact, match, next, that;
	  function filterRoutes(routes) {
	    if (!filter) {
	      return routes;
	    }
	    function deepCopy(source) {
	      var result = [];
	      for (var i = 0; i < source.length; i++) {
	        result[i] = Array.isArray(source[i]) ? deepCopy(source[i]) : source[i];
	      }
	      return result;
	    }
	    function applyFilter(fns) {
	      for (var i = fns.length - 1; i >= 0; i--) {
	        if (Array.isArray(fns[i])) {
	          applyFilter(fns[i]);
	          if (fns[i].length === 0) {
	            fns.splice(i, 1);
	          }
	        } else {
	          if (!filter(fns[i])) {
	            fns.splice(i, 1);
	          }
	        }
	      }
	    }
	    var newRoutes = deepCopy(routes);
	    newRoutes.matched = routes.matched;
	    newRoutes.captures = routes.captures;
	    newRoutes.after = routes.after.filter(filter);
	    applyFilter(newRoutes);
	    return newRoutes;
	  }
	  if (path === this.delimiter && routes[method]) {
	    next = [ [ routes.before, routes[method] ].filter(Boolean) ];
	    next.after = [ routes.after ].filter(Boolean);
	    next.matched = true;
	    next.captures = [];
	    return filterRoutes(next);
	  }
	  for (var r in routes) {
	    if (routes.hasOwnProperty(r) && (!this._methods[r] || this._methods[r] && typeof routes[r] === "object" && !Array.isArray(routes[r]))) {
	      current = exact = regexp + this.delimiter + r;
	      if (!this.strict) {
	        exact += "[" + this.delimiter + "]?";
	      }
	      match = path.match(new RegExp("^" + exact));
	      if (!match) {
	        continue;
	      }
	      if (match[0] && match[0] == path && routes[r][method]) {
	        next = [ [ routes[r].before, routes[r][method] ].filter(Boolean) ];
	        next.after = [ routes[r].after ].filter(Boolean);
	        next.matched = true;
	        next.captures = match.slice(1);
	        if (this.recurse && routes === this.routes) {
	          next.push([ routes.before, routes.on ].filter(Boolean));
	          next.after = next.after.concat([ routes.after ].filter(Boolean));
	        }
	        return filterRoutes(next);
	      }
	      next = this.traverse(method, path, routes[r], current);
	      if (next.matched) {
	        if (next.length > 0) {
	          fns = fns.concat(next);
	        }
	        if (this.recurse) {
	          fns.push([ routes[r].before, routes[r].on ].filter(Boolean));
	          next.after = next.after.concat([ routes[r].after ].filter(Boolean));
	          if (routes === this.routes) {
	            fns.push([ routes["before"], routes["on"] ].filter(Boolean));
	            next.after = next.after.concat([ routes["after"] ].filter(Boolean));
	          }
	        }
	        fns.matched = true;
	        fns.captures = next.captures;
	        fns.after = next.after;
	        return filterRoutes(fns);
	      }
	    }
	  }
	  return false;
	};

	Router.prototype.insert = function(method, path, route, parent) {
	  var methodType, parentType, isArray, nested, part;
	  path = path.filter(function(p) {
	    return p && p.length > 0;
	  });
	  parent = parent || this.routes;
	  part = path.shift();
	  if (/\:|\*/.test(part) && !/\\d|\\w/.test(part)) {
	    part = regifyString(part, this.params);
	  }
	  if (path.length > 0) {
	    parent[part] = parent[part] || {};
	    return this.insert(method, path, route, parent[part]);
	  }
	  if (!part && !path.length && parent === this.routes) {
	    methodType = typeof parent[method];
	    switch (methodType) {
	     case "function":
	      parent[method] = [ parent[method], route ];
	      return;
	     case "object":
	      parent[method].push(route);
	      return;
	     case "undefined":
	      parent[method] = route;
	      return;
	    }
	    return;
	  }
	  parentType = typeof parent[part];
	  isArray = Array.isArray(parent[part]);
	  if (parent[part] && !isArray && parentType == "object") {
	    methodType = typeof parent[part][method];
	    switch (methodType) {
	     case "function":
	      parent[part][method] = [ parent[part][method], route ];
	      return;
	     case "object":
	      parent[part][method].push(route);
	      return;
	     case "undefined":
	      parent[part][method] = route;
	      return;
	    }
	  } else if (parentType == "undefined") {
	    nested = {};
	    nested[method] = route;
	    parent[part] = nested;
	    return;
	  }
	  throw new Error("Invalid route context: " + parentType);
	};



	Router.prototype.extend = function(methods) {
	  var self = this, len = methods.length, i;
	  function extend(method) {
	    self._methods[method] = true;
	    self[method] = function() {
	      var extra = arguments.length === 1 ? [ method, "" ] : [ method ];
	      self.on.apply(self, extra.concat(Array.prototype.slice.call(arguments)));
	    };
	  }
	  for (i = 0; i < len; i++) {
	    extend(methods[i]);
	  }
	};

	Router.prototype.runlist = function(fns) {
	  var runlist = this.every && this.every.before ? [ this.every.before ].concat(_flatten(fns)) : _flatten(fns);
	  if (this.every && this.every.on) {
	    runlist.push(this.every.on);
	  }
	  runlist.captures = fns.captures;
	  runlist.source = fns.source;
	  return runlist;
	};

	Router.prototype.mount = function(routes, path) {
	  if (!routes || typeof routes !== "object" || Array.isArray(routes)) {
	    return;
	  }
	  var self = this;
	  path = path || [];
	  if (!Array.isArray(path)) {
	    path = path.split(self.delimiter);
	  }
	  function insertOrMount(route, local) {
	    var rename = route, parts = route.split(self.delimiter), routeType = typeof routes[route], isRoute = parts[0] === "" || !self._methods[parts[0]], event = isRoute ? "on" : rename;
	    if (isRoute) {
	      rename = rename.slice((rename.match(new RegExp("^" + self.delimiter)) || [ "" ])[0].length);
	      parts.shift();
	    }
	    if (isRoute && routeType === "object" && !Array.isArray(routes[route])) {
	      local = local.concat(parts);
	      self.mount(routes[route], local);
	      return;
	    }
	    if (isRoute) {
	      local = local.concat(rename.split(self.delimiter));
	      local = terminator(local, self.delimiter);
	    }
	    self.insert(event, local, routes[route]);
	  }
	  for (var route in routes) {
	    if (routes.hasOwnProperty(route)) {
	      insertOrMount(route, path.slice(0));
	    }
	  }
	};



	}( true ? exports : window));

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = {
		"name": "vuestrap-docs",
		"version": "0.4.0",
		"description": "Vuestrap Docs Components are useed in docs pages to showcase web components.",
		"library": "vuestrapDocs",
		"repository": {
			"type": "git",
			"url": "git+https://github.com/kzima/vuestrap-docs.git"
		},
		"scripts": {
			"build": "npm run docs && npm run dev && npm run dev-bundle && npm run dist && npm run dist-bundle",
			"dist": "webpack --colors --progress --config webpack.build.js --env production",
			"dist-bundle": "webpack --colors --progress --config webpack.build.js --env production --bundle true",
			"dev": "webpack --colors --progress --config webpack.build.js --env development",
			"dev-bundle": "webpack --colors --progress --config webpack.build.js --env development --bundle true",
			"docs": "webpack --colors --progress --config  webpack.build.js --env docs",
			"serve-docs": "webpack-dev-server --port 8083 --inline --hot --quiet --config webpack.build.js --env docs"
		},
		"keywords": [
			"Bootstrap4",
			"Web",
			"Components",
			"Polymer"
		],
		"author": {
			"name": "Kris Zima",
			"email": "kris@mosquito.ie",
			"url": "https://github.com/kzima"
		},
		"license": "MIT",
		"bugs": {
			"url": "https://github.com/kzima/vuestrap-docs/issues"
		},
		"dependencies": {
			"vue": "^1.0.16"
		},
		"devDependencies": {
			"autoprefixer-loader": "^3.1.0",
			"babel-core": "^5.8.33",
			"babel-eslint": "^4.1.3",
			"babel-loader": "^5.3.3",
			"css-loader": "^0.21.0",
			"director": "^1.2.8",
			"event-stream": "^3.3.2",
			"extract-text-webpack-plugin": "^0.8.2",
			"gritcode-components": "^0.3.5",
			"highlightjs-loader": "^0.2.3",
			"html-loader": "^0.3.0",
			"json-loader": "^0.5.4",
			"node-sass": "^3.4.1",
			"optimist": "^0.6.1",
			"sass-loader": "^3.1.1",
			"style-loader": "^0.13.0",
			"vuestrap": "^1.0.1",
			"vuestrap-theme-loader": "^0.1.2",
			"webpack": "^1.12.9",
			"webpack-dev-server": "^1.12.1"
		},
		"homepage": "https://github.com/kzima/vuestrap-docs#readme"
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// import styling
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(19);

	// import template

	var _offcanvasDrawerHtml = __webpack_require__(21);

	var _offcanvasDrawerHtml2 = _interopRequireDefault(_offcanvasDrawerHtml);

	var offcanvasWrapper = {
	  template: _offcanvasDrawerHtml2['default'],
	  replace: true,
	  data: function data() {
	    return {
	      show: false
	    };
	  },
	  props: {
	    id: {
	      type: String,
	      required: true,
	      'default': ''
	    },
	    animation: {
	      type: String,
	      'default': 'ease'
	    },
	    align: {
	      type: String,
	      'default': 'left'
	    }
	  },
	  methods: {
	    toggle: function toggle() {
	      this.show = !this.show;
	      if (this.show) {
	        this.$dispatch('shown::offcanvas-drawer', this.id);
	      } else {
	        this.$dispatch('hiden::offcanvas-drawer', this.id);
	      }
	    }
	  },
	  events: {
	    'toggle::offcanvas-drawer': function toggleOffcanvasDrawer(id) {
	      if (id === this.id) {
	        this.toggle();
	      }
	    }
	  }
	};

	exports.offcanvasWrapper = offcanvasWrapper;
	var offcanvasDrawer = {
	  template: '<div class="offcanvas-drawer"><slot></slot></div>',
	  replace: true
	};
	exports.offcanvasDrawer = offcanvasDrawer;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(20);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../css-loader/index.js!./../../../../autoprefixer-loader/index.js!./../../../../sass-loader/index.js!./../../../../vuestrap-theme-loader/index.js!./offcanvas-drawer.scss", function() {
				var newContent = require("!!./../../../../css-loader/index.js!./../../../../autoprefixer-loader/index.js!./../../../../sass-loader/index.js!./../../../../vuestrap-theme-loader/index.js!./offcanvas-drawer.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "/*\r\n * Off Canvas drawer\r\n * based on https://scotch.io/tutorials/off-canvas-drawers-with-css3-transitions-and-transforms\r\n * --------------------------------------------------\r\n */\n.gritcode-offcanvas-drawer {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  -webkit-transform: translate(0, 0);\n      -ms-transform: translate(0, 0);\n          transform: translate(0, 0);\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -ms-transform: translate(0, 0);\n  -webkit-transition: 300ms ease transform;\n  transition: 300ms ease transform;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden; }\n  .gritcode-offcanvas-drawer .offcanvas-drawer {\n    width: 100%;\n    left: -100%;\n    height: 100%;\n    position: fixed;\n    top: 0;\n    z-index: 9999; }\n    .gritcode-offcanvas-drawer .offcanvas-drawer .close {\n      color: #fff; }\n    .gritcode-offcanvas-drawer .offcanvas-drawer .navbar {\n      height: 100%; }\n    @media (min-width: 360px) {\n      .gritcode-offcanvas-drawer .offcanvas-drawer {\n        width: 300px;\n        left: -300px; } }\n  .gritcode-offcanvas-drawer.active {\n    -webkit-transform: translate(100%, 0);\n        -ms-transform: translate(100%, 0);\n            transform: translate(100%, 0);\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n    -ms-transform: translate(100%, 0); }\n    @media (min-width: 360px) {\n      .gritcode-offcanvas-drawer.active {\n        -webkit-transform: translate(300px, 0);\n            -ms-transform: translate(300px, 0);\n                transform: translate(300px, 0);\n        -webkit-transform: translate3d(300px, 0, 0);\n                transform: translate3d(300px, 0, 0);\n        -ms-transform: translate(300px, 0); } }\n\n.gritcode-offcanvas-drawer.right .offcanvas-drawer {\n  left: auto;\n  right: -100%; }\n  @media (min-width: 360px) {\n    .gritcode-offcanvas-drawer.right .offcanvas-drawer {\n      left: auto;\n      right: -300px; } }\n\n.gritcode-offcanvas-drawer.right.active {\n  -webkit-transform: translate(-100%, 0);\n      -ms-transform: translate(-100%, 0);\n          transform: translate(-100%, 0);\n  -webkit-transform: translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0);\n  -ms-transform: translate(-100%, 0); }\n  @media (min-width: 360px) {\n    .gritcode-offcanvas-drawer.right.active {\n      -webkit-transform: translate(-300px, 0);\n          -ms-transform: translate(-300px, 0);\n              transform: translate(-300px, 0);\n      -webkit-transform: translate3d(-300px, 0, 0);\n              transform: translate3d(-300px, 0, 0);\n      -ms-transform: translate(-300px, 0); } }\n\n.gritcode-offcanvas-drawer.ease {\n  -webkit-transition: 300ms ease transform;\n  transition: 300ms ease transform; }\n\n.gritcode-offcanvas-drawer.linear {\n  -webkit-transition: 300ms linear transform;\n  transition: 300ms linear transform; }\n\n.gritcode-offcanvas-drawer.ease-in {\n  -webkit-transition: 300ms ease-in transform;\n  transition: 300ms ease-in transform; }\n\n.gritcode-offcanvas-drawer.ease-out {\n  -webkit-transition: 300ms ease-out transform;\n  transition: 300ms ease-out transform; }\n\n.gritcode-offcanvas-drawer.ease-in-out {\n  -webkit-transition: 300ms ease-out transform;\n  transition: 300ms ease-out transform; }\n\n.gritcode-offcanvas-drawer.bounce {\n  -webkit-transition: -webkit-transform 300ms cubic-bezier(0.32, 1.25, 0.375, 1.15);\n  transition: -webkit-transform 300ms cubic-bezier(0.32, 1.25, 0.375, 1.15);\n  transition: transform 300ms cubic-bezier(0.32, 1.25, 0.375, 1.15);\n  transition: transform 300ms cubic-bezier(0.32, 1.25, 0.375, 1.15), -webkit-transform 300ms cubic-bezier(0.32, 1.25, 0.375, 1.15); }\n\n.gritcode-offcanvas-drawer.snappy {\n  -webkit-transition: -webkit-transform 300ms cubic-bezier(0.694, 0.0482, 0.335, 1);\n  transition: -webkit-transform 300ms cubic-bezier(0.694, 0.0482, 0.335, 1);\n  transition: transform 300ms cubic-bezier(0.694, 0.0482, 0.335, 1);\n  transition: transform 300ms cubic-bezier(0.694, 0.0482, 0.335, 1), -webkit-transform 300ms cubic-bezier(0.694, 0.0482, 0.335, 1); }\n\n.gritcode-offcanvas-drawer.out-of-orbit {\n  -webkit-transition: -webkit-transform 300ms cubic-bezier(1, 0, 0.61, 0.15);\n  transition: -webkit-transform 300ms cubic-bezier(1, 0, 0.61, 0.15);\n  transition: transform 300ms cubic-bezier(1, 0, 0.61, 0.15);\n  transition: transform 300ms cubic-bezier(1, 0, 0.61, 0.15), -webkit-transform 300ms cubic-bezier(1, 0, 0.61, 0.15); }\n\n.gritcode-offcanvas-drawer.none {\n  -webkit-transition: none;\n  transition: none; }\n\n.lt-ie10 .gritcode-offcanvas-drawer.active .offcanvas-drawer, .ie9 .gritcode-offcanvas-drawer.active .offcanvas-drawer, .oldie .gritcode-offcanvas-drawer.active .offcanvas-drawer, .no-csstransitions .gritcode-offcanvas-drawer.active .offcanvas-drawer {\n  left: 0; }\n\n.lt-ie10 .gritcode-offcanvas-drawer.active .navbar-fixed-top, .lt-ie10 .gritcode-offcanvas-drawer.active .navbar-fixed-bottom, .ie9 .gritcode-offcanvas-drawer.active .navbar-fixed-top, .ie9 .gritcode-offcanvas-drawer.active .navbar-fixed-bottom, .oldie .gritcode-offcanvas-drawer.active .navbar-fixed-top, .oldie .gritcode-offcanvas-drawer.active .navbar-fixed-bottom, .no-csstransitions .gritcode-offcanvas-drawer.active .navbar-fixed-top, .no-csstransitions .gritcode-offcanvas-drawer.active .navbar-fixed-bottom {\n  left: 300px;\n  right: auto;\n  width: 100%; }\n\n.lt-ie10 .gritcode-offcanvas-drawer.active.right .offcanvas-drawer, .ie9 .gritcode-offcanvas-drawer.active.right .offcanvas-drawer, .oldie .gritcode-offcanvas-drawer.active.right .offcanvas-drawer, .no-csstransitions .gritcode-offcanvas-drawer.active.right .offcanvas-drawer {\n  left: auto;\n  right: 0; }\n\n.lt-ie10 .gritcode-offcanvas-drawer.active.right .navbar-fixed-top, .lt-ie10 .gritcode-offcanvas-drawer.active.right .navbar-fixed-bottom, .ie9 .gritcode-offcanvas-drawer.active.right .navbar-fixed-top, .ie9 .gritcode-offcanvas-drawer.active.right .navbar-fixed-bottom, .oldie .gritcode-offcanvas-drawer.active.right .navbar-fixed-top, .oldie .gritcode-offcanvas-drawer.active.right .navbar-fixed-bottom, .no-csstransitions .gritcode-offcanvas-drawer.active.right .navbar-fixed-top, .no-csstransitions .gritcode-offcanvas-drawer.active.right .navbar-fixed-bottom {\n  left: -300px;\n  right: auto;\n  width: 100%; }\n", ""]);

	// exports


/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "<div id=\"{{id}}\" class=\"gritcode-offcanvas-drawer {{animation}} {{align}} {{show ? 'active' : ''}}\">\r\n  <slot></slot>\r\n</div>\r\n";

/***/ }
/******/ ])
});
;
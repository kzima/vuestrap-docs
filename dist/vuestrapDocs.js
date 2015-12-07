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
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * IMPORT GLOBAL STYLING
	 */
	// import normalize, grid, utilities and
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(1);
	
	/**
	 * IMPORT EACH COMPONENT
	 */
	
	var _srcComponentsDemo = __webpack_require__(6);
	
	var _srcComponentsDemo2 = _interopRequireDefault(_srcComponentsDemo);
	
	var _srcComponentsSearch = __webpack_require__(18);
	
	var _srcComponentsSearch2 = _interopRequireDefault(_srcComponentsSearch);
	
	var _srcComponentsDocs = __webpack_require__(30);
	
	var _srcComponentsDocs2 = _interopRequireDefault(_srcComponentsDocs);
	
	var vuestrapDocs = {
	  demo: _srcComponentsDemo2['default'],
	  search: _srcComponentsSearch2['default'],
	  docs: _srcComponentsDocs2['default']
	};
	
	module.exports = vuestrapDocs;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// import core stuff
	'use strict';
	
	__webpack_require__(2);

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(7);
	
	var _demoHtml = __webpack_require__(9);
	
	var _demoHtml2 = _interopRequireDefault(_demoHtml);
	
	__webpack_require__(10);
	
	__webpack_require__(13);
	
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
	            'default': "",
	            required: true
	        }
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 8 */,
/* 9 */
/***/ function(module, exports) {

	module.exports = "<section class=\"vuestrap-docs-demo\" id=\"{{meta.name}}\">\r\n\r\n\t<!-- Meta title -->\r\n\t<h2>{{meta.title}}</h2>\r\n\t<p v-html=\"meta.description\"></p>\r\n\r\n\t<div class=\"m-b\"></div>\r\n\r\n\t<div class=\"alert alert-info\" role=\"alert\" v-if=\"meta.note\">\r\n  \t<icon background=\"circle-outline\" size=\"sm\" variant=\"info\" text=\"i\"></icon> <span v-html=\"meta.note\"></span>\r\n\t</div>\r\n\r\n\t<div class=\"m-b-md\"></div>\r\n\r\n\t<!-- Component manipulators -->\r\n\t<slot name=\"controls\"></slot>\r\n\r\n\t<!-- Output & Code sample -->\r\n\t<div class=\"code-demo\">\r\n\r\n\t\t<slot class=\"markup\" name=\"markup\"></slot>\r\n\r\n\t\t<div class=\"highlight\">\r\n\t\t\t<pre><code v-html=\"snippet\"></code></pre>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<!-- Options -->\r\n\t<div class=\"options\" v-if=\"meta.options.length\">\r\n\t\t<h3>Options</h3>\r\n\t\t<table class='table table-responsive'>\r\n\t\t\t<tr>\r\n\t\t\t\t<th>Name</th>\r\n\t\t\t\t<th>Type</th>\r\n\t\t\t\t<th>Default</th>\r\n\t\t\t\t<th>Required</th>\r\n\t\t\t\t<th>Description</th>\r\n\t\t\t</tr>\r\n\t\t\t<tr v-for=\"item in meta.options\">\r\n\t\t\t\t<td>{{item.name}}</td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<code v-html=\"item.type\"></code>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td><code v-if=\"item.default\" v-html=\"item.default\"></code></td>\r\n\t\t\t\t<td>{{item.required == true ? 'yes' : ''}}</td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<p v-html=\"item.description\"></p>\r\n\t\t\t\t\t<p v-if=\"item.values\">\r\n\t\t\t\t\t\tPosible values:\r\n\t\t\t\t\t\t<code v-for=\"item in item.values\">{{item}}</code>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t</table>\t\r\n\t</div>\r\n\r\n\t<!-- Accessibility -->\r\n\t<div class=\"accessibility\" v-if=\"meta.accessibility\">\r\n\t\t<h3>Accessibility</h3>\r\n\t\t<p v-html=\"meta.accessibility\"></p>\r\n\t</div>\r\n\r\n\t<div class=\"m-b-md\"></div>\r\n\r\n\t<!-- Browser Support -->\r\n\t<div class=\"browserSupport\" v-if=\"meta.browserSupport\">\r\n\t\t<h3>Browser Support</h3>\r\n\t\t<span class=\"label label-primary\" v-for=\"item in meta.browserSupport.browsers\">{{ item }}</span>\r\n\t\t<p><small v-html=\"meta.browserSupport.note\"></small></p>\r\n\t</div>\r\n</section>\r\n";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	__webpack_require__(11);

/***/ },
/* 11 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 12 */,
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	__webpack_require__(14);
	
	__webpack_require__(16);

/***/ },
/* 14 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 15 */,
/* 16 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 17 */,
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(19);
	
	var _searchHtml = __webpack_require__(21);
	
	var _searchHtml2 = _interopRequireDefault(_searchHtml);
	
	__webpack_require__(22);
	
	__webpack_require__(25);
	
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
/* 19 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 20 */,
/* 21 */
/***/ function(module, exports) {

	module.exports = "<div class=\"vuestrap-docs-search list-group\">\r\n  <!-- search -->\r\n  <div class=\"list-group-item list-group-search\" v-if=\"list.length > showSearch\">\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" v-model=\"search\" autocomplete=\"off\">\r\n  </div>\r\n  <!-- components -->\r\n  <a href=\"#{{item.url}}\" \r\n    v-bind:class=\"{\r\n      'list-group-item': true, \r\n      active: currentView && item.id === currentView,\r\n    }\" \r\n    v-for=\"item in list | skipIntro | filterBy search in 'title'\">\r\n    {{item.title}}\r\n  </a>\r\n</div>";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	__webpack_require__(23);
	
	__webpack_require__(11);

/***/ },
/* 23 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 24 */,
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	__webpack_require__(16);
	
	__webpack_require__(26);
	
	__webpack_require__(28);

/***/ },
/* 26 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 27 */,
/* 28 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 29 */,
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(31);
	
	var _docsHtml = __webpack_require__(33);
	
	var _docsHtml2 = _interopRequireDefault(_docsHtml);
	
	// import vuestrap dependencies
	
	__webpack_require__(34);
	
	__webpack_require__(37);
	
	__webpack_require__(40);
	
	// import external dependencies
	
	var _search = __webpack_require__(18);
	
	var _search2 = _interopRequireDefault(_search);
	
	// import utils
	
	var _utils = __webpack_require__(41);
	
	// import package.json meta data
	
	var _packageJson = __webpack_require__(43);
	
	var _packageJson2 = _interopRequireDefault(_packageJson);
	
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
	        }
	    },
	    components: {
	        docsSearch: _search2['default']
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
/* 31 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 32 */,
/* 33 */
/***/ function(module, exports) {

	module.exports = "<!-- header -->\r\n<nav class=\"navbar navbar-fixed-top navbar-light bg-faded\">\r\n  <div class=\"container\">\r\n      <a class=\"navbar-brand text-center\" href=\"#/\">\r\n\t\t\t\t<img v-bind:src=\"'assets/vuestrap-logo.svg'\" alt=\"Vuestrap logo\">\r\n\t\t\t</a>\r\n\t\t\t<a class=\"navbar-brand text-center\" href=\"#/\">\r\n\t\t\t\tDocumentation\r\n\t\t\t</a>\r\n\t\t\t<ul class=\"nav navbar-nav pull-right\">\r\n\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t\t<a href=\"#/\" class=\"btn\">Introduction</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t\t<a href=\"{{pkg.homepage}}\" class=\"btn btn-success\" target=\"_blank\">Github</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n  </div><!-- /.container -->\r\n</nav><!-- /.navbar -->\r\n\r\n<!-- content -->\r\n<div class=\"container\">\r\n\t<div class=\"row row-offcanvas row-offcanvas-right\">\r\n\t\t<div class=\"col-xs-12 col-sm-9\">\r\n\t\t\t<component :is=\"currentView\"></component>\r\n    </div><!-- /col-xs-12 -->\r\n\r\n\t\t<!-- sidebar -->\r\n\t\t<div class=\"col-xs-6 col-sm-3 sidebar-offcanvas\" id=\"sidebar\">\r\n\t\t\t<docs-search :list=\"routes\" :current-view=\"currentView\"></docs-search>\r\n\t\t</div><!--/sidebar-->\r\n\r\n\t</div><!--/row-->\r\n</div><!--/container-->";

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	__webpack_require__(35);

/***/ },
/* 35 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 36 */,
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	__webpack_require__(38);
	
	__webpack_require__(16);
	
	__webpack_require__(35);
	
	__webpack_require__(26);

/***/ },
/* 38 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 39 */,
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	__webpack_require__(16);

/***/ },
/* 41 */
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
	
	var _director = __webpack_require__(42);
	
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
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	
	
	//
	// Generated on Tue Dec 16 2014 12:13:47 GMT+0100 (CET) by Charlie Robbins, Paolo Fragomeni & the Contributors (Using Codesurgeon).
	// Version 1.2.6
	'use strict';
	
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
	
	    check: function check() {
	      var h = dloc.hash;
	      if (h != this.hash) {
	        this.hash = h;
	        this.onHashChanged();
	      }
	    },
	
	    fire: function fire() {
	      if (this.mode === 'modern') {
	        this.history === true ? window.onpopstate() : window.onhashchange();
	      } else {
	        this.onHashChanged();
	      }
	    },
	
	    init: function init(fn, history) {
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
	      if ('onhashchange' in window && (document.documentMode === undefined || document.documentMode > 7)) {
	        // At least for now HTML5 history is available for 'modern' browsers only
	        if (this.history === true) {
	          // There is an old bug in Chrome that causes onpopstate to fire even
	          // upon initial page load. Since the handler is run manually in init(),
	          // this would cause Chrome to run it twise. Currently the only
	          // workaround seems to be to set the handler after the initial page load
	          // http://code.google.com/p/chromium/issues/detail?id=63040
	          setTimeout(function () {
	            window.onpopstate = onchange;
	          }, 500);
	        } else {
	          window.onhashchange = onchange;
	        }
	        this.mode = 'modern';
	      } else {
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
	
	        window.setInterval(function () {
	          self.check();
	        }, 50);
	
	        this.onHashChanged = onchange;
	        this.mode = 'legacy';
	      }
	
	      Router.listeners.push(fn);
	
	      return this.mode;
	    },
	
	    destroy: function destroy(fn) {
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
	
	    setHash: function setHash(s) {
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
	        dloc.hash = s[0] === '/' ? s : '/' + s;
	      }
	      return this;
	    },
	
	    writeFrame: function writeFrame(s) {
	      // IE support...
	      var f = document.getElementById('state-frame');
	      var d = f.contentDocument || f.contentWindow.document;
	      d.open();
	      d.write("<script>_hash = '" + s + "'; onload = parent.listener.syncHash;<script>");
	      d.close();
	    },
	
	    syncHash: function syncHash() {
	      // IE support...
	      var s = this._hash;
	      if (s != dloc.hash) {
	        dloc.hash = s;
	      }
	      return this;
	    },
	
	    onHashChanged: function onHashChanged() {}
	  };
	
	  var Router = exports.Router = function (routes) {
	    if (!(this instanceof Router)) return new Router(routes);
	
	    this.params = {};
	    this.routes = {};
	    this.methods = ['on', 'once', 'after', 'before'];
	    this.scope = [];
	    this._methods = {};
	
	    this._insert = this.insert;
	    this.insert = this.insertEx;
	
	    this.historySupport = (window.history != null ? window.history.pushState : null) != null;
	
	    this.configure();
	    this.mount(routes || {});
	  };
	
	  Router.prototype.init = function (r) {
	    var self = this,
	        routeTo;
	    this.handler = function (onChangeEvent) {
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
	    } else {
	      if (this.convert_hash_in_init) {
	        // Use hash as route
	        routeTo = dlocHashEmpty() && r ? r : !dlocHashEmpty() ? dloc.hash.replace(/^#/, '') : null;
	        if (routeTo) {
	          window.history.replaceState({}, document.title, routeTo);
	        }
	      } else {
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
	    if (v.charAt(1) === '/') {
	      v = v.slice(1);
	    }
	    return v.slice(1, v.length).split("/");
	  };
	
	  Router.prototype.setRoute = function (i, v, val) {
	    var url = this.explode();
	
	    if (typeof i === 'number' && typeof v === 'string') {
	      url[i] = v;
	    } else if (typeof val === 'string') {
	      url.splice(i, v, s);
	    } else {
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
	  Router.prototype.insertEx = function (method, path, route, parent) {
	    if (method === "once") {
	      method = "on";
	      route = (function (route) {
	        var once = false;
	        return function () {
	          if (once) return;
	          once = true;
	          return route.apply(this, arguments);
	        };
	      })(route);
	    }
	    return this._insert(method, path, route, parent);
	  };
	
	  Router.prototype.getRoute = function (v) {
	    var ret = v;
	
	    if (typeof v === "number") {
	      ret = this.explode()[v];
	    } else if (typeof v === "string") {
	      var h = this.explode();
	      ret = h.indexOf(v);
	    } else {
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
	      iterator(arr[completed], function (err) {
	        if (err || err === false) {
	          callback(err);
	          callback = function () {};
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
	    var matches,
	        last = 0,
	        out = "";
	    while (matches = str.substr(last).match(/[^\w\d\- %@&]*\*[^\w\d\- %@&]*/)) {
	      last = matches.index + matches[0].length;
	      matches[0] = matches[0].replace(/^\*/, "([_.()!\\ %@&a-zA-Z0-9-]+)");
	      out += str.substr(0, matches.index) + matches[0];
	    }
	    str = out += str.substr(last);
	    var captures = str.match(/:([^\/]+)/ig),
	        capture,
	        length;
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
	    var last = 0,
	        left = 0,
	        right = 0,
	        start = (start || "(").toString(),
	        stop = (stop || ")").toString(),
	        i;
	    for (i = 0; i < routes.length; i++) {
	      var chunk = routes[i];
	      if (chunk.indexOf(start, last) > chunk.indexOf(stop, last) || ~chunk.indexOf(start, last) && ! ~chunk.indexOf(stop, last) || ! ~chunk.indexOf(start, last) && ~chunk.indexOf(stop, last)) {
	        left = chunk.indexOf(start, last);
	        right = chunk.indexOf(stop, last);
	        if (~left && ! ~right || ! ~left && ~right) {
	          var tmp = routes.slice(0, (i || 1) + 1).join(delimiter);
	          routes = [tmp].concat(routes.slice((i || 1) + 1));
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
	
	  Router.prototype.configure = function (options) {
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
	
	  Router.prototype.param = function (token, matcher) {
	    if (token[0] !== ":") {
	      token = ":" + token;
	    }
	    var compiled = new RegExp(token, "g");
	    this.params[token] = function (str) {
	      return str.replace(compiled, matcher.source || matcher);
	    };
	    return this;
	  };
	
	  Router.prototype.on = Router.prototype.route = function (method, path, route) {
	    var self = this;
	    if (!route && typeof path == "function") {
	      route = path;
	      path = method;
	      method = "on";
	    }
	    if (Array.isArray(path)) {
	      return path.forEach(function (p) {
	        self.on(method, p, route);
	      });
	    }
	    if (path.source) {
	      path = path.source.replace(/\\\//ig, "/");
	    }
	    if (Array.isArray(method)) {
	      return method.forEach(function (m) {
	        self.on(m.toLowerCase(), path, route);
	      });
	    }
	    path = path.split(new RegExp(this.delimiter));
	    path = terminator(path, this.delimiter);
	    this.insert(method, this.scope.concat(path), route);
	  };
	
	  Router.prototype.path = function (path, routesFn) {
	    var self = this,
	        length = this.scope.length;
	    if (path.source) {
	      path = path.source.replace(/\\\//ig, "/");
	    }
	    path = path.split(new RegExp(this.delimiter));
	    path = terminator(path, this.delimiter);
	    this.scope = this.scope.concat(path);
	    routesFn.call(this, this);
	    this.scope.splice(length, path.length);
	  };
	
	  Router.prototype.dispatch = function (method, path, callback) {
	    var self = this,
	        fns = this.traverse(method, path.replace(QUERY_SEPARATOR, ""), this.routes, ""),
	        invoked = this._invoked,
	        after;
	    this._invoked = true;
	    if (!fns || fns.length === 0) {
	      this.last = [];
	      if (typeof this.notfound === "function") {
	        this.invoke([this.notfound], {
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
	    after = this.every && this.every.after ? [this.every.after].concat(this.last) : [this.last];
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
	
	  Router.prototype.invoke = function (fns, thisArg, callback) {
	    var self = this;
	    var apply;
	    if (this.async) {
	      apply = function (fn, next) {
	        if (Array.isArray(fn)) {
	          return _asyncEverySeries(fn, apply, next);
	        } else if (typeof fn == "function") {
	          fn.apply(thisArg, (fns.captures || []).concat(next));
	        }
	      };
	      _asyncEverySeries(fns, apply, function () {
	        if (callback) {
	          callback.apply(thisArg, arguments);
	        }
	      });
	    } else {
	      apply = function (fn) {
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
	
	  Router.prototype.traverse = function (method, path, routes, regexp, filter) {
	    var fns = [],
	        current,
	        exact,
	        match,
	        next,
	        that;
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
	      next = [[routes.before, routes[method]].filter(Boolean)];
	      next.after = [routes.after].filter(Boolean);
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
	          next = [[routes[r].before, routes[r][method]].filter(Boolean)];
	          next.after = [routes[r].after].filter(Boolean);
	          next.matched = true;
	          next.captures = match.slice(1);
	          if (this.recurse && routes === this.routes) {
	            next.push([routes.before, routes.on].filter(Boolean));
	            next.after = next.after.concat([routes.after].filter(Boolean));
	          }
	          return filterRoutes(next);
	        }
	        next = this.traverse(method, path, routes[r], current);
	        if (next.matched) {
	          if (next.length > 0) {
	            fns = fns.concat(next);
	          }
	          if (this.recurse) {
	            fns.push([routes[r].before, routes[r].on].filter(Boolean));
	            next.after = next.after.concat([routes[r].after].filter(Boolean));
	            if (routes === this.routes) {
	              fns.push([routes["before"], routes["on"]].filter(Boolean));
	              next.after = next.after.concat([routes["after"]].filter(Boolean));
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
	
	  Router.prototype.insert = function (method, path, route, parent) {
	    var methodType, parentType, isArray, nested, part;
	    path = path.filter(function (p) {
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
	          parent[method] = [parent[method], route];
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
	          parent[part][method] = [parent[part][method], route];
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
	
	  Router.prototype.extend = function (methods) {
	    var self = this,
	        len = methods.length,
	        i;
	    function extend(method) {
	      self._methods[method] = true;
	      self[method] = function () {
	        var extra = arguments.length === 1 ? [method, ""] : [method];
	        self.on.apply(self, extra.concat(Array.prototype.slice.call(arguments)));
	      };
	    }
	    for (i = 0; i < len; i++) {
	      extend(methods[i]);
	    }
	  };
	
	  Router.prototype.runlist = function (fns) {
	    var runlist = this.every && this.every.before ? [this.every.before].concat(_flatten(fns)) : _flatten(fns);
	    if (this.every && this.every.on) {
	      runlist.push(this.every.on);
	    }
	    runlist.captures = fns.captures;
	    runlist.source = fns.source;
	    return runlist;
	  };
	
	  Router.prototype.mount = function (routes, path) {
	    if (!routes || typeof routes !== "object" || Array.isArray(routes)) {
	      return;
	    }
	    var self = this;
	    path = path || [];
	    if (!Array.isArray(path)) {
	      path = path.split(self.delimiter);
	    }
	    function insertOrMount(route, local) {
	      var rename = route,
	          parts = route.split(self.delimiter),
	          routeType = typeof routes[route],
	          isRoute = parts[0] === "" || !self._methods[parts[0]],
	          event = isRoute ? "on" : rename;
	      if (isRoute) {
	        rename = rename.slice((rename.match(new RegExp("^" + self.delimiter)) || [""])[0].length);
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
	})( true ? exports : window);
	//

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = {
		"name": "vuestrap-docs",
		"version": "0.2.0",
		"description": "Vuestrap Docs Components are useed in docs pages to showcase web components.",
		"library": "vuestrapDocs",
		"repository": {
			"type": "git",
			"url": "git+https://github.com/kzima/vuestrap-docs.git"
		},
		"scripts": {
			"dev": "webpack -w --colors --progress --config webpack.build.js --env dev",
			"dist": "webpack --colors --progress --config  webpack.build.js --env docs && webpack --colors --progress --config webpack.build.js --env dev && webpack --colors --progress --config webpack.build.js --env dist",
			"docs": "webpack-dev-server --inline --hot --quiet --config webpack.build.js --env docs"
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
			"vue": "^1.0.10"
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
			"highlightjs-loader": "^0.2.3",
			"html-loader": "^0.3.0",
			"json-loader": "^0.5.4",
			"node-sass": "^3.4.1",
			"optimist": "^0.6.1",
			"sass-loader": "^3.1.1",
			"style-loader": "^0.13.0",
			"vuestrap": "^1.0.0",
			"vuestrap-theme-loader": "^0.1.2",
			"webpack": "^1.12.9",
			"webpack-dev-server": "^1.12.1"
		},
		"homepage": "https://github.com/kzima/vuestrap-docs#readme"
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vuestrapDocs.js.map
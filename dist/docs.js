/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";

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

	// import external dependencies
	// docs component handles routing and demo pages

	var _srcComponentsDocs = __webpack_require__(6);

	var _srcComponentsDocs2 = _interopRequireDefault(_srcComponentsDocs);

	var _gritcodeComponentsSrcComponentsOffcanvasDrawer = __webpack_require__(17);

	// import demo pages compatibile with docs component

	var _srcDocs = __webpack_require__(21);

	var _srcDocs2 = _interopRequireDefault(_srcDocs);

	// import utils

	var _utils = __webpack_require__(14);

	// import package.json meta data

	var _packageJson = __webpack_require__(16);

	var _packageJson2 = _interopRequireDefault(_packageJson);

	// get list of the route objects
	var routes = (0, _utils.getRoutes)(_srcDocs2['default']);

	// create components from routes and attach it to the docs.components object
	routes.forEach(function (route) {
		_srcComponentsDocs2['default'].components[route.id] = route.component;
	});

	// start docs instance
	window.docs = new Vue({
		el: '#docs',
		data: {
			routes: routes,
			pageTitle: 'Vuestrap Docs',
			pkg: _packageJson2['default']
		},
		components: {
			docsPages: _srcComponentsDocs2['default'],
			vsOffcanvasDrawer: _gritcodeComponentsSrcComponentsOffcanvasDrawer.offcanvasDrawer,
			vsOffcanvasWrapper: _gritcodeComponentsSrcComponentsOffcanvasDrawer.offcanvasWrapper
		}
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// import core stuff
	'use strict';

	__webpack_require__(2);

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
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_core.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_core.scss");
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
	exports.push([module.id, "/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\nhtml {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%; }\n\nbody {\n  margin: 0; }\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline; }\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n[hidden],\ntemplate {\n  display: none; }\n\na {\n  background-color: transparent; }\n\na:active {\n  outline: 0; }\n\na:hover {\n  outline: 0; }\n\nabbr[title] {\n  border-bottom: 1px dotted; }\n\nb,\nstrong {\n  font-weight: bold; }\n\ndfn {\n  font-style: italic; }\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\nmark {\n  background: #ff0;\n  color: #000; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\nimg {\n  border: 0; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\nfigure {\n  margin: 1em 40px; }\n\nhr {\n  box-sizing: content-box;\n  height: 0; }\n\npre {\n  overflow: auto; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  font: inherit;\n  margin: 0; }\n\nbutton {\n  overflow: visible; }\n\nbutton,\nselect {\n  text-transform: none; }\n\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer; }\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\ninput {\n  line-height: normal; }\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0; }\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  box-sizing: content-box; }\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\nlegend {\n  border: 0;\n  padding: 0; }\n\ntextarea {\n  overflow: auto; }\n\noptgroup {\n  font-weight: bold; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    text-shadow: none !important;\n    box-shadow: none !important; }\n  a,\n  a:visited {\n    text-decoration: underline; }\n  abbr[title]::after {\n    content: \" (\" attr(title) \")\"; }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid; }\n  thead {\n    display: table-header-group; }\n  tr,\n  img {\n    page-break-inside: avoid; }\n  img {\n    max-width: 100% !important; }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3; }\n  h2,\n  h3 {\n    page-break-after: avoid; }\n  .navbar {\n    display: none; }\n  .btn > .caret,\n  .dropup > .btn > .caret {\n    border-top-color: #000 !important; }\n  .label {\n    border: 1px solid #000; }\n  .table {\n    border-collapse: collapse !important; }\n    .table td,\n    .table th {\n      background-color: #fff !important; }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important; } }\n\nhtml {\n  box-sizing: border-box; }\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit; }\n\n@-moz-viewport {\n  width: device-width; }\n\n@-ms-viewport {\n  width: device-width; }\n\n@-o-viewport {\n  width: device-width; }\n\n@-webkit-viewport {\n  width: device-width; }\n\n@viewport {\n  width: device-width; }\n\nhtml {\n  font-size: 16px;\n  -webkit-tap-highlight-color: transparent; }\n\nbody {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #373a3c;\n  background-color: #fff; }\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: .5rem; }\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #818a91; }\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit; }\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0; }\n\ndt {\n  font-weight: bold; }\n\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0; }\n\nblockquote {\n  margin: 0 0 1rem; }\n\na {\n  color: #563d7c;\n  text-decoration: none; }\n  a:focus, a:hover {\n    color: #322449;\n    text-decoration: underline; }\n  a:focus {\n    outline: thin dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px; }\n\npre {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nfigure {\n  margin: 0 0 1rem; }\n\nimg {\n  vertical-align: middle; }\n\n[role=\"button\"] {\n  cursor: pointer; }\n\na,\narea,\nbutton,\n[role=\"button\"],\ninput,\nlabel,\nselect,\nsummary,\ntextarea {\n  -ms-touch-action: manipulation;\n      touch-action: manipulation; }\n\ntable {\n  background-color: transparent; }\n\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #818a91;\n  text-align: left;\n  caption-side: bottom; }\n\nth {\n  text-align: left; }\n\nlabel {\n  display: inline-block;\n  margin-bottom: .5rem; }\n\ninput,\nbutton,\nselect,\ntextarea {\n  margin: 0;\n  line-height: inherit;\n  border-radius: 0; }\n\ntextarea {\n  resize: vertical; }\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0; }\n\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit; }\n\ninput[type=\"search\"] {\n  box-sizing: inherit;\n  -webkit-appearance: none; }\n\noutput {\n  display: inline-block; }\n\n[hidden] {\n  display: none !important; }\n\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity .15s linear;\n  transition: opacity .15s linear; }\n  .fade.in {\n    opacity: 1; }\n\n.collapse {\n  display: none; }\n  .collapse.in {\n    display: block; }\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition-timing-function: ease;\n          transition-timing-function: ease;\n  -webkit-transition-duration: .35s;\n          transition-duration: .35s;\n  -webkit-transition-property: height;\n  transition-property: height; }\n\n.close {\n  float: right;\n  font-size: 1.5rem;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: .2; }\n  .close:focus, .close:hover {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n    opacity: .5; }\n\nbutton.close {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace; }\n\ncode {\n  padding: .2rem .4rem;\n  font-size: 90%;\n  color: #bd4147;\n  background-color: #f7f7f9;\n  border-radius: 0.25rem; }\n\nkbd {\n  padding: .2rem .4rem;\n  font-size: 90%;\n  color: #fff;\n  background-color: #333;\n  border-radius: 0.2rem; }\n  kbd kbd {\n    padding: 0;\n    font-size: 100%;\n    font-weight: bold; }\n\npre {\n  display: block;\n  margin-top: 0;\n  margin-bottom: 1rem;\n  font-size: 90%;\n  line-height: 1.5;\n  color: #373a3c; }\n  pre code {\n    padding: 0;\n    font-size: inherit;\n    color: inherit;\n    background-color: transparent;\n    border-radius: 0; }\n\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll; }\n\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate; }\n  .input-group .form-control {\n    position: relative;\n    z-index: 2;\n    float: left;\n    width: 100%;\n    margin-bottom: 0; }\n\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell; }\n  .input-group-addon:not(:first-child):not(:last-child),\n  .input-group-btn:not(:first-child):not(:last-child),\n  .input-group .form-control:not(:first-child):not(:last-child) {\n    border-radius: 0; }\n\n.input-group-addon,\n.input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle; }\n\n.input-group-addon {\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: normal;\n  line-height: 1;\n  color: #55595c;\n  text-align: center;\n  background-color: #eceeef;\n  border: 1px solid #ccc;\n  border-radius: 0.25rem; }\n  .input-group-addon.form-control-sm,\n  .input-group-sm > .input-group-addon,\n  .input-group-sm > .input-group-btn > .input-group-addon.btn {\n    padding: 0.275rem 0.75rem;\n    font-size: 0.875rem;\n    border-radius: 0.2rem; }\n  .input-group-addon.form-control-lg,\n  .input-group-lg > .input-group-addon,\n  .input-group-lg > .input-group-btn > .input-group-addon.btn {\n    padding: 0.75rem 1.25rem;\n    font-size: 1.25rem;\n    border-radius: 0.3rem; }\n  .input-group-addon input[type=\"radio\"],\n  .input-group-addon input[type=\"checkbox\"] {\n    margin-top: 0; }\n\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group > .btn,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0; }\n\n.input-group-addon:first-child {\n  border-right: 0; }\n\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group > .btn,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child),\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.input-group-addon:last-child {\n  border-left: 0; }\n\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap; }\n  .input-group-btn > .btn {\n    position: relative; }\n    .input-group-btn > .btn + .btn {\n      margin-left: -1px; }\n    .input-group-btn > .btn:focus, .input-group-btn > .btn:active, .input-group-btn > .btn:hover {\n      z-index: 2; }\n  .input-group-btn:first-child > .btn,\n  .input-group-btn:first-child > .btn-group {\n    margin-right: -1px; }\n  .input-group-btn:last-child > .btn,\n  .input-group-btn:last-child > .btn-group {\n    z-index: 2;\n    margin-left: -1px; }\n\n.embed-responsive {\n  position: relative;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden; }\n  .embed-responsive .embed-responsive-item,\n  .embed-responsive iframe,\n  .embed-responsive embed,\n  .embed-responsive object,\n  .embed-responsive video {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border: 0; }\n\n.embed-responsive-21by9 {\n  padding-bottom: 42.85714%; }\n\n.embed-responsive-16by9 {\n  padding-bottom: 56.25%; }\n\n.embed-responsive-4by3 {\n  padding-bottom: 75%; }\n\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 0.5rem;\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit; }\n\nh1 {\n  font-size: 2.5rem; }\n\nh2 {\n  font-size: 2rem; }\n\nh3 {\n  font-size: 1.75rem; }\n\nh4 {\n  font-size: 1.5rem; }\n\nh5 {\n  font-size: 1.25rem; }\n\nh6 {\n  font-size: 1rem; }\n\n.h1 {\n  font-size: 2.5rem; }\n\n.h2 {\n  font-size: 2rem; }\n\n.h3 {\n  font-size: 1.75rem; }\n\n.h4 {\n  font-size: 1.5rem; }\n\n.h5 {\n  font-size: 1.25rem; }\n\n.h6 {\n  font-size: 1rem; }\n\n.lead {\n  font-size: 1.25rem;\n  font-weight: 300; }\n\n.display-1 {\n  font-size: 6rem;\n  font-weight: 300; }\n\n.display-2 {\n  font-size: 5.5rem;\n  font-weight: 300; }\n\n.display-3 {\n  font-size: 4.5rem;\n  font-weight: 300; }\n\n.display-4 {\n  font-size: 3.5rem;\n  font-weight: 300; }\n\nhr {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1); }\n\nsmall,\n.small {\n  font-size: 80%;\n  font-weight: normal; }\n\nmark,\n.mark {\n  padding: .2em;\n  background-color: #fcf8e3; }\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none; }\n\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n  margin-left: -5px; }\n  .list-inline > li {\n    display: inline-block;\n    padding-right: 5px;\n    padding-left: 5px; }\n\n.dl-horizontal {\n  margin-right: -1.875rem;\n  margin-left: -1.875rem; }\n  .dl-horizontal::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase; }\n\n.blockquote {\n  padding: 0.5rem 1rem;\n  margin-bottom: 1rem;\n  font-size: 1.25rem;\n  border-left: 0.25rem solid #eceeef; }\n  .blockquote p:last-child,\n  .blockquote ul:last-child,\n  .blockquote ol:last-child {\n    margin-bottom: 0; }\n  .blockquote footer {\n    display: block;\n    font-size: 80%;\n    line-height: 1.5;\n    color: #818a91; }\n    .blockquote footer::before {\n      content: \"\\2014   \\A0\"; }\n\n.blockquote-reverse {\n  padding-right: 1rem;\n  padding-left: 0;\n  text-align: right;\n  border-right: 0.25rem solid #eceeef;\n  border-left: 0; }\n  .blockquote-reverse footer::before {\n    content: \"\"; }\n  .blockquote-reverse footer::after {\n    content: \"\\A0   \\2014\"; }\n\n.bg-inverse {\n  color: #eceeef;\n  background-color: #373a3c; }\n\n.bg-faded {\n  background-color: #f7f7f9; }\n\n.bg-primary {\n  color: #fff !important;\n  background-color: #563d7c !important; }\n\na.bg-primary:focus, a.bg-primary:hover {\n  background-color: #3e2c5a; }\n\n.bg-success {\n  color: #fff !important;\n  background-color: #42b983 !important; }\n\na.bg-success:focus, a.bg-success:hover {\n  background-color: #359368; }\n\n.bg-info {\n  color: #fff !important;\n  background-color: #5bc0de !important; }\n\na.bg-info:focus, a.bg-info:hover {\n  background-color: #31b0d5; }\n\n.bg-warning {\n  color: #fff !important;\n  background-color: #f0ad4e !important; }\n\na.bg-warning:focus, a.bg-warning:hover {\n  background-color: #ec971f; }\n\n.bg-danger {\n  color: #fff !important;\n  background-color: #d9534f !important; }\n\na.bg-danger:focus, a.bg-danger:hover {\n  background-color: #c9302c; }\n\n.hidden-xs-up {\n  display: none !important; }\n\n@media (max-width: 543px) {\n  .hidden-xs-down {\n    display: none !important; } }\n\n@media (min-width: 544px) {\n  .hidden-sm-up {\n    display: none !important; } }\n\n@media (max-width: 767px) {\n  .hidden-sm-down {\n    display: none !important; } }\n\n@media (min-width: 768px) {\n  .hidden-md-up {\n    display: none !important; } }\n\n@media (max-width: 991px) {\n  .hidden-md-down {\n    display: none !important; } }\n\n@media (min-width: 992px) {\n  .hidden-lg-up {\n    display: none !important; } }\n\n@media (max-width: 1199px) {\n  .hidden-lg-down {\n    display: none !important; } }\n\n@media (min-width: 1200px) {\n  .hidden-xl-up {\n    display: none !important; } }\n\n.hidden-xl-down {\n  display: none !important; }\n\n.visible-print-block {\n  display: none !important; }\n  @media print {\n    .visible-print-block {\n      display: block !important; } }\n\n.visible-print-inline {\n  display: none !important; }\n  @media print {\n    .visible-print-inline {\n      display: inline !important; } }\n\n.visible-print-inline-block {\n  display: none !important; }\n  @media print {\n    .visible-print-inline-block {\n      display: inline-block !important; } }\n\n@media print {\n  .hidden-print {\n    display: none !important; } }\n\n.m-a-0 {\n  margin: 0 !important; }\n\n.m-t-0 {\n  margin-top: 0 !important; }\n\n.m-r-0 {\n  margin-right: 0 !important; }\n\n.m-b-0 {\n  margin-bottom: 0 !important; }\n\n.m-l-0 {\n  margin-left: 0 !important; }\n\n.m-x-0 {\n  margin-right: 0 !important;\n  margin-left: 0 !important; }\n\n.m-y-0 {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important; }\n\n.m-a {\n  margin: 1rem !important; }\n\n.m-t {\n  margin-top: 1rem !important; }\n\n.m-r {\n  margin-right: 1rem !important; }\n\n.m-b {\n  margin-bottom: 1rem !important; }\n\n.m-l {\n  margin-left: 1rem !important; }\n\n.m-x {\n  margin-right: 1rem !important;\n  margin-left: 1rem !important; }\n\n.m-y {\n  margin-top: 1rem !important;\n  margin-bottom: 1rem !important; }\n\n.m-x-auto {\n  margin-right: auto !important;\n  margin-left: auto !important; }\n\n.m-a-md {\n  margin: 1.5rem !important; }\n\n.m-t-md {\n  margin-top: 1.5rem !important; }\n\n.m-r-md {\n  margin-right: 1.5rem !important; }\n\n.m-b-md {\n  margin-bottom: 1.5rem !important; }\n\n.m-l-md {\n  margin-left: 1.5rem !important; }\n\n.m-x-md {\n  margin-right: 1.5rem !important;\n  margin-left: 1.5rem !important; }\n\n.m-y-md {\n  margin-top: 1.5rem !important;\n  margin-bottom: 1.5rem !important; }\n\n.m-a-lg {\n  margin: 3rem !important; }\n\n.m-t-lg {\n  margin-top: 3rem !important; }\n\n.m-r-lg {\n  margin-right: 3rem !important; }\n\n.m-b-lg {\n  margin-bottom: 3rem !important; }\n\n.m-l-lg {\n  margin-left: 3rem !important; }\n\n.m-x-lg {\n  margin-right: 3rem !important;\n  margin-left: 3rem !important; }\n\n.m-y-lg {\n  margin-top: 3rem !important;\n  margin-bottom: 3rem !important; }\n\n.p-a-0 {\n  padding: 0 !important; }\n\n.p-t-0 {\n  padding-top: 0 !important; }\n\n.p-r-0 {\n  padding-right: 0 !important; }\n\n.p-b-0 {\n  padding-bottom: 0 !important; }\n\n.p-l-0 {\n  padding-left: 0 !important; }\n\n.p-x-0 {\n  padding-right: 0 !important;\n  padding-left: 0 !important; }\n\n.p-y-0 {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important; }\n\n.p-a {\n  padding: 1rem !important; }\n\n.p-t {\n  padding-top: 1rem !important; }\n\n.p-r {\n  padding-right: 1rem !important; }\n\n.p-b {\n  padding-bottom: 1rem !important; }\n\n.p-l {\n  padding-left: 1rem !important; }\n\n.p-x {\n  padding-right: 1rem !important;\n  padding-left: 1rem !important; }\n\n.p-y {\n  padding-top: 1rem !important;\n  padding-bottom: 1rem !important; }\n\n.p-a-md {\n  padding: 1.5rem !important; }\n\n.p-t-md {\n  padding-top: 1.5rem !important; }\n\n.p-r-md {\n  padding-right: 1.5rem !important; }\n\n.p-b-md {\n  padding-bottom: 1.5rem !important; }\n\n.p-l-md {\n  padding-left: 1.5rem !important; }\n\n.p-x-md {\n  padding-right: 1.5rem !important;\n  padding-left: 1.5rem !important; }\n\n.p-y-md {\n  padding-top: 1.5rem !important;\n  padding-bottom: 1.5rem !important; }\n\n.p-a-lg {\n  padding: 3rem !important; }\n\n.p-t-lg {\n  padding-top: 3rem !important; }\n\n.p-r-lg {\n  padding-right: 3rem !important; }\n\n.p-b-lg {\n  padding-bottom: 3rem !important; }\n\n.p-l-lg {\n  padding-left: 3rem !important; }\n\n.p-x-lg {\n  padding-right: 3rem !important;\n  padding-left: 3rem !important; }\n\n.p-y-lg {\n  padding-top: 3rem !important;\n  padding-bottom: 3rem !important; }\n\n.pos-f-t {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n\n.clearfix::after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n.pull-right {\n  float: right !important; }\n\n.pull-left {\n  float: left !important; }\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto; }\n\n.invisible {\n  visibility: hidden !important; }\n\n.text-hide {\n  font: \"0/0\" a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0; }\n\n.text-left {\n  text-align: left !important; }\n\n.text-right {\n  text-align: right !important; }\n\n.text-center {\n  text-align: center !important; }\n\n.text-justify {\n  text-align: justify !important; }\n\n.text-nowrap {\n  white-space: nowrap !important; }\n\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.text-xs-left {\n  text-align: left !important; }\n\n.text-xs-right {\n  text-align: right !important; }\n\n.text-xs-center {\n  text-align: center !important; }\n\n@media (min-width: 544px) {\n  .text-sm-left {\n    text-align: left !important; }\n  .text-sm-right {\n    text-align: right !important; }\n  .text-sm-center {\n    text-align: center !important; } }\n\n@media (min-width: 768px) {\n  .text-md-left {\n    text-align: left !important; }\n  .text-md-right {\n    text-align: right !important; }\n  .text-md-center {\n    text-align: center !important; } }\n\n@media (min-width: 992px) {\n  .text-lg-left {\n    text-align: left !important; }\n  .text-lg-right {\n    text-align: right !important; }\n  .text-lg-center {\n    text-align: center !important; } }\n\n@media (min-width: 1200px) {\n  .text-xl-left {\n    text-align: left !important; }\n  .text-xl-right {\n    text-align: right !important; }\n  .text-xl-center {\n    text-align: center !important; } }\n\n.text-lowercase {\n  text-transform: lowercase !important; }\n\n.text-uppercase {\n  text-transform: uppercase !important; }\n\n.text-capitalize {\n  text-transform: capitalize !important; }\n\n.text-muted {\n  color: #818a91; }\n\n.text-primary {\n  color: #563d7c !important; }\n\na.text-primary:focus, a.text-primary:hover {\n  color: #3e2c5a; }\n\n.text-success {\n  color: #42b983 !important; }\n\na.text-success:focus, a.text-success:hover {\n  color: #359368; }\n\n.text-info {\n  color: #5bc0de !important; }\n\na.text-info:focus, a.text-info:hover {\n  color: #31b0d5; }\n\n.text-warning {\n  color: #f0ad4e !important; }\n\na.text-warning:focus, a.text-warning:hover {\n  color: #ec971f; }\n\n.text-danger {\n  color: #d9534f !important; }\n\na.text-danger:focus, a.text-danger:hover {\n  color: #c9302c; }\n\n.container {\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 0.9375rem;\n  padding-right: 0.9375rem; }\n  .container::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  @media (min-width: 544px) {\n    .container {\n      max-width: 576px; } }\n  @media (min-width: 768px) {\n    .container {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .container {\n      max-width: 940px; } }\n  @media (min-width: 1200px) {\n    .container {\n      max-width: 1140px; } }\n\n.container-fluid {\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 0.9375rem;\n  padding-right: 0.9375rem; }\n  .container-fluid::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n\n.row {\n  margin-left: -0.9375rem;\n  margin-right: -0.9375rem; }\n  .row::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 0.9375rem;\n  padding-right: 0.9375rem; }\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left; }\n\n.col-xs-1 {\n  width: 8.33333%; }\n\n.col-xs-2 {\n  width: 16.66667%; }\n\n.col-xs-3 {\n  width: 25%; }\n\n.col-xs-4 {\n  width: 33.33333%; }\n\n.col-xs-5 {\n  width: 41.66667%; }\n\n.col-xs-6 {\n  width: 50%; }\n\n.col-xs-7 {\n  width: 58.33333%; }\n\n.col-xs-8 {\n  width: 66.66667%; }\n\n.col-xs-9 {\n  width: 75%; }\n\n.col-xs-10 {\n  width: 83.33333%; }\n\n.col-xs-11 {\n  width: 91.66667%; }\n\n.col-xs-12 {\n  width: 100%; }\n\n.col-xs-pull-0 {\n  right: auto; }\n\n.col-xs-pull-1 {\n  right: 8.33333%; }\n\n.col-xs-pull-2 {\n  right: 16.66667%; }\n\n.col-xs-pull-3 {\n  right: 25%; }\n\n.col-xs-pull-4 {\n  right: 33.33333%; }\n\n.col-xs-pull-5 {\n  right: 41.66667%; }\n\n.col-xs-pull-6 {\n  right: 50%; }\n\n.col-xs-pull-7 {\n  right: 58.33333%; }\n\n.col-xs-pull-8 {\n  right: 66.66667%; }\n\n.col-xs-pull-9 {\n  right: 75%; }\n\n.col-xs-pull-10 {\n  right: 83.33333%; }\n\n.col-xs-pull-11 {\n  right: 91.66667%; }\n\n.col-xs-pull-12 {\n  right: 100%; }\n\n.col-xs-push-0 {\n  left: auto; }\n\n.col-xs-push-1 {\n  left: 8.33333%; }\n\n.col-xs-push-2 {\n  left: 16.66667%; }\n\n.col-xs-push-3 {\n  left: 25%; }\n\n.col-xs-push-4 {\n  left: 33.33333%; }\n\n.col-xs-push-5 {\n  left: 41.66667%; }\n\n.col-xs-push-6 {\n  left: 50%; }\n\n.col-xs-push-7 {\n  left: 58.33333%; }\n\n.col-xs-push-8 {\n  left: 66.66667%; }\n\n.col-xs-push-9 {\n  left: 75%; }\n\n.col-xs-push-10 {\n  left: 83.33333%; }\n\n.col-xs-push-11 {\n  left: 91.66667%; }\n\n.col-xs-push-12 {\n  left: 100%; }\n\n.col-xs-offset-0 {\n  margin-left: 0%; }\n\n.col-xs-offset-1 {\n  margin-left: 8.33333%; }\n\n.col-xs-offset-2 {\n  margin-left: 16.66667%; }\n\n.col-xs-offset-3 {\n  margin-left: 25%; }\n\n.col-xs-offset-4 {\n  margin-left: 33.33333%; }\n\n.col-xs-offset-5 {\n  margin-left: 41.66667%; }\n\n.col-xs-offset-6 {\n  margin-left: 50%; }\n\n.col-xs-offset-7 {\n  margin-left: 58.33333%; }\n\n.col-xs-offset-8 {\n  margin-left: 66.66667%; }\n\n.col-xs-offset-9 {\n  margin-left: 75%; }\n\n.col-xs-offset-10 {\n  margin-left: 83.33333%; }\n\n.col-xs-offset-11 {\n  margin-left: 91.66667%; }\n\n.col-xs-offset-12 {\n  margin-left: 100%; }\n\n@media (min-width: 544px) {\n  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n    float: left; }\n  .col-sm-1 {\n    width: 8.33333%; }\n  .col-sm-2 {\n    width: 16.66667%; }\n  .col-sm-3 {\n    width: 25%; }\n  .col-sm-4 {\n    width: 33.33333%; }\n  .col-sm-5 {\n    width: 41.66667%; }\n  .col-sm-6 {\n    width: 50%; }\n  .col-sm-7 {\n    width: 58.33333%; }\n  .col-sm-8 {\n    width: 66.66667%; }\n  .col-sm-9 {\n    width: 75%; }\n  .col-sm-10 {\n    width: 83.33333%; }\n  .col-sm-11 {\n    width: 91.66667%; }\n  .col-sm-12 {\n    width: 100%; }\n  .col-sm-pull-0 {\n    right: auto; }\n  .col-sm-pull-1 {\n    right: 8.33333%; }\n  .col-sm-pull-2 {\n    right: 16.66667%; }\n  .col-sm-pull-3 {\n    right: 25%; }\n  .col-sm-pull-4 {\n    right: 33.33333%; }\n  .col-sm-pull-5 {\n    right: 41.66667%; }\n  .col-sm-pull-6 {\n    right: 50%; }\n  .col-sm-pull-7 {\n    right: 58.33333%; }\n  .col-sm-pull-8 {\n    right: 66.66667%; }\n  .col-sm-pull-9 {\n    right: 75%; }\n  .col-sm-pull-10 {\n    right: 83.33333%; }\n  .col-sm-pull-11 {\n    right: 91.66667%; }\n  .col-sm-pull-12 {\n    right: 100%; }\n  .col-sm-push-0 {\n    left: auto; }\n  .col-sm-push-1 {\n    left: 8.33333%; }\n  .col-sm-push-2 {\n    left: 16.66667%; }\n  .col-sm-push-3 {\n    left: 25%; }\n  .col-sm-push-4 {\n    left: 33.33333%; }\n  .col-sm-push-5 {\n    left: 41.66667%; }\n  .col-sm-push-6 {\n    left: 50%; }\n  .col-sm-push-7 {\n    left: 58.33333%; }\n  .col-sm-push-8 {\n    left: 66.66667%; }\n  .col-sm-push-9 {\n    left: 75%; }\n  .col-sm-push-10 {\n    left: 83.33333%; }\n  .col-sm-push-11 {\n    left: 91.66667%; }\n  .col-sm-push-12 {\n    left: 100%; }\n  .col-sm-offset-0 {\n    margin-left: 0%; }\n  .col-sm-offset-1 {\n    margin-left: 8.33333%; }\n  .col-sm-offset-2 {\n    margin-left: 16.66667%; }\n  .col-sm-offset-3 {\n    margin-left: 25%; }\n  .col-sm-offset-4 {\n    margin-left: 33.33333%; }\n  .col-sm-offset-5 {\n    margin-left: 41.66667%; }\n  .col-sm-offset-6 {\n    margin-left: 50%; }\n  .col-sm-offset-7 {\n    margin-left: 58.33333%; }\n  .col-sm-offset-8 {\n    margin-left: 66.66667%; }\n  .col-sm-offset-9 {\n    margin-left: 75%; }\n  .col-sm-offset-10 {\n    margin-left: 83.33333%; }\n  .col-sm-offset-11 {\n    margin-left: 91.66667%; }\n  .col-sm-offset-12 {\n    margin-left: 100%; } }\n\n@media (min-width: 768px) {\n  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\n    float: left; }\n  .col-md-1 {\n    width: 8.33333%; }\n  .col-md-2 {\n    width: 16.66667%; }\n  .col-md-3 {\n    width: 25%; }\n  .col-md-4 {\n    width: 33.33333%; }\n  .col-md-5 {\n    width: 41.66667%; }\n  .col-md-6 {\n    width: 50%; }\n  .col-md-7 {\n    width: 58.33333%; }\n  .col-md-8 {\n    width: 66.66667%; }\n  .col-md-9 {\n    width: 75%; }\n  .col-md-10 {\n    width: 83.33333%; }\n  .col-md-11 {\n    width: 91.66667%; }\n  .col-md-12 {\n    width: 100%; }\n  .col-md-pull-0 {\n    right: auto; }\n  .col-md-pull-1 {\n    right: 8.33333%; }\n  .col-md-pull-2 {\n    right: 16.66667%; }\n  .col-md-pull-3 {\n    right: 25%; }\n  .col-md-pull-4 {\n    right: 33.33333%; }\n  .col-md-pull-5 {\n    right: 41.66667%; }\n  .col-md-pull-6 {\n    right: 50%; }\n  .col-md-pull-7 {\n    right: 58.33333%; }\n  .col-md-pull-8 {\n    right: 66.66667%; }\n  .col-md-pull-9 {\n    right: 75%; }\n  .col-md-pull-10 {\n    right: 83.33333%; }\n  .col-md-pull-11 {\n    right: 91.66667%; }\n  .col-md-pull-12 {\n    right: 100%; }\n  .col-md-push-0 {\n    left: auto; }\n  .col-md-push-1 {\n    left: 8.33333%; }\n  .col-md-push-2 {\n    left: 16.66667%; }\n  .col-md-push-3 {\n    left: 25%; }\n  .col-md-push-4 {\n    left: 33.33333%; }\n  .col-md-push-5 {\n    left: 41.66667%; }\n  .col-md-push-6 {\n    left: 50%; }\n  .col-md-push-7 {\n    left: 58.33333%; }\n  .col-md-push-8 {\n    left: 66.66667%; }\n  .col-md-push-9 {\n    left: 75%; }\n  .col-md-push-10 {\n    left: 83.33333%; }\n  .col-md-push-11 {\n    left: 91.66667%; }\n  .col-md-push-12 {\n    left: 100%; }\n  .col-md-offset-0 {\n    margin-left: 0%; }\n  .col-md-offset-1 {\n    margin-left: 8.33333%; }\n  .col-md-offset-2 {\n    margin-left: 16.66667%; }\n  .col-md-offset-3 {\n    margin-left: 25%; }\n  .col-md-offset-4 {\n    margin-left: 33.33333%; }\n  .col-md-offset-5 {\n    margin-left: 41.66667%; }\n  .col-md-offset-6 {\n    margin-left: 50%; }\n  .col-md-offset-7 {\n    margin-left: 58.33333%; }\n  .col-md-offset-8 {\n    margin-left: 66.66667%; }\n  .col-md-offset-9 {\n    margin-left: 75%; }\n  .col-md-offset-10 {\n    margin-left: 83.33333%; }\n  .col-md-offset-11 {\n    margin-left: 91.66667%; }\n  .col-md-offset-12 {\n    margin-left: 100%; } }\n\n@media (min-width: 992px) {\n  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {\n    float: left; }\n  .col-lg-1 {\n    width: 8.33333%; }\n  .col-lg-2 {\n    width: 16.66667%; }\n  .col-lg-3 {\n    width: 25%; }\n  .col-lg-4 {\n    width: 33.33333%; }\n  .col-lg-5 {\n    width: 41.66667%; }\n  .col-lg-6 {\n    width: 50%; }\n  .col-lg-7 {\n    width: 58.33333%; }\n  .col-lg-8 {\n    width: 66.66667%; }\n  .col-lg-9 {\n    width: 75%; }\n  .col-lg-10 {\n    width: 83.33333%; }\n  .col-lg-11 {\n    width: 91.66667%; }\n  .col-lg-12 {\n    width: 100%; }\n  .col-lg-pull-0 {\n    right: auto; }\n  .col-lg-pull-1 {\n    right: 8.33333%; }\n  .col-lg-pull-2 {\n    right: 16.66667%; }\n  .col-lg-pull-3 {\n    right: 25%; }\n  .col-lg-pull-4 {\n    right: 33.33333%; }\n  .col-lg-pull-5 {\n    right: 41.66667%; }\n  .col-lg-pull-6 {\n    right: 50%; }\n  .col-lg-pull-7 {\n    right: 58.33333%; }\n  .col-lg-pull-8 {\n    right: 66.66667%; }\n  .col-lg-pull-9 {\n    right: 75%; }\n  .col-lg-pull-10 {\n    right: 83.33333%; }\n  .col-lg-pull-11 {\n    right: 91.66667%; }\n  .col-lg-pull-12 {\n    right: 100%; }\n  .col-lg-push-0 {\n    left: auto; }\n  .col-lg-push-1 {\n    left: 8.33333%; }\n  .col-lg-push-2 {\n    left: 16.66667%; }\n  .col-lg-push-3 {\n    left: 25%; }\n  .col-lg-push-4 {\n    left: 33.33333%; }\n  .col-lg-push-5 {\n    left: 41.66667%; }\n  .col-lg-push-6 {\n    left: 50%; }\n  .col-lg-push-7 {\n    left: 58.33333%; }\n  .col-lg-push-8 {\n    left: 66.66667%; }\n  .col-lg-push-9 {\n    left: 75%; }\n  .col-lg-push-10 {\n    left: 83.33333%; }\n  .col-lg-push-11 {\n    left: 91.66667%; }\n  .col-lg-push-12 {\n    left: 100%; }\n  .col-lg-offset-0 {\n    margin-left: 0%; }\n  .col-lg-offset-1 {\n    margin-left: 8.33333%; }\n  .col-lg-offset-2 {\n    margin-left: 16.66667%; }\n  .col-lg-offset-3 {\n    margin-left: 25%; }\n  .col-lg-offset-4 {\n    margin-left: 33.33333%; }\n  .col-lg-offset-5 {\n    margin-left: 41.66667%; }\n  .col-lg-offset-6 {\n    margin-left: 50%; }\n  .col-lg-offset-7 {\n    margin-left: 58.33333%; }\n  .col-lg-offset-8 {\n    margin-left: 66.66667%; }\n  .col-lg-offset-9 {\n    margin-left: 75%; }\n  .col-lg-offset-10 {\n    margin-left: 83.33333%; }\n  .col-lg-offset-11 {\n    margin-left: 91.66667%; }\n  .col-lg-offset-12 {\n    margin-left: 100%; } }\n\n@media (min-width: 1200px) {\n  .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12 {\n    float: left; }\n  .col-xl-1 {\n    width: 8.33333%; }\n  .col-xl-2 {\n    width: 16.66667%; }\n  .col-xl-3 {\n    width: 25%; }\n  .col-xl-4 {\n    width: 33.33333%; }\n  .col-xl-5 {\n    width: 41.66667%; }\n  .col-xl-6 {\n    width: 50%; }\n  .col-xl-7 {\n    width: 58.33333%; }\n  .col-xl-8 {\n    width: 66.66667%; }\n  .col-xl-9 {\n    width: 75%; }\n  .col-xl-10 {\n    width: 83.33333%; }\n  .col-xl-11 {\n    width: 91.66667%; }\n  .col-xl-12 {\n    width: 100%; }\n  .col-xl-pull-0 {\n    right: auto; }\n  .col-xl-pull-1 {\n    right: 8.33333%; }\n  .col-xl-pull-2 {\n    right: 16.66667%; }\n  .col-xl-pull-3 {\n    right: 25%; }\n  .col-xl-pull-4 {\n    right: 33.33333%; }\n  .col-xl-pull-5 {\n    right: 41.66667%; }\n  .col-xl-pull-6 {\n    right: 50%; }\n  .col-xl-pull-7 {\n    right: 58.33333%; }\n  .col-xl-pull-8 {\n    right: 66.66667%; }\n  .col-xl-pull-9 {\n    right: 75%; }\n  .col-xl-pull-10 {\n    right: 83.33333%; }\n  .col-xl-pull-11 {\n    right: 91.66667%; }\n  .col-xl-pull-12 {\n    right: 100%; }\n  .col-xl-push-0 {\n    left: auto; }\n  .col-xl-push-1 {\n    left: 8.33333%; }\n  .col-xl-push-2 {\n    left: 16.66667%; }\n  .col-xl-push-3 {\n    left: 25%; }\n  .col-xl-push-4 {\n    left: 33.33333%; }\n  .col-xl-push-5 {\n    left: 41.66667%; }\n  .col-xl-push-6 {\n    left: 50%; }\n  .col-xl-push-7 {\n    left: 58.33333%; }\n  .col-xl-push-8 {\n    left: 66.66667%; }\n  .col-xl-push-9 {\n    left: 75%; }\n  .col-xl-push-10 {\n    left: 83.33333%; }\n  .col-xl-push-11 {\n    left: 91.66667%; }\n  .col-xl-push-12 {\n    left: 100%; }\n  .col-xl-offset-0 {\n    margin-left: 0%; }\n  .col-xl-offset-1 {\n    margin-left: 8.33333%; }\n  .col-xl-offset-2 {\n    margin-left: 16.66667%; }\n  .col-xl-offset-3 {\n    margin-left: 25%; }\n  .col-xl-offset-4 {\n    margin-left: 33.33333%; }\n  .col-xl-offset-5 {\n    margin-left: 41.66667%; }\n  .col-xl-offset-6 {\n    margin-left: 50%; }\n  .col-xl-offset-7 {\n    margin-left: 58.33333%; }\n  .col-xl-offset-8 {\n    margin-left: 66.66667%; }\n  .col-xl-offset-9 {\n    margin-left: 75%; }\n  .col-xl-offset-10 {\n    margin-left: 83.33333%; }\n  .col-xl-offset-11 {\n    margin-left: 91.66667%; }\n  .col-xl-offset-12 {\n    margin-left: 100%; } }\n", ""]);

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
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(7);

	var _docsHtml = __webpack_require__(9);

	var _docsHtml2 = _interopRequireDefault(_docsHtml);

	// import external dependencies

	var _search = __webpack_require__(10);

	var _search2 = _interopRequireDefault(_search);

	// import utils

	var _utils = __webpack_require__(14);

	// import package.json meta data

	var _packageJson = __webpack_require__(16);

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
	        },
	        pageTitle: {
	            type: String,
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(8);
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "html, body {\n  height: 100%; }\n\nhtml {\n  font-size: 16px; }\n\nbody {\n  margin: auto;\n  padding: 0;\n  overflow-x: hidden; }\n\nh1, h2, h3 {\n  font-family: 'Source Sans Pro', sans-serif;\n  color: #563d7c; }\n\nh2 {\n  padding-bottom: 0.3rem;\n  border-bottom: 1px solid #42b983; }\n\nh3 {\n  font-size: 1.3rem !important; }\n\n#docs-pages > .navbar {\n  padding: 0.2em 0 !important;\n  line-height: 3em; }\n  #docs-pages > .navbar .navbar-brand {\n    padding: 0 !important; }\n    #docs-pages > .navbar .navbar-brand img {\n      height: 2.5em; }\n\n#docs-pages > .container {\n  padding-top: 5em; }\n\n.offcanvas-drawer .close {\n  padding-top: 0.35em; }\n\n[v-cloak] {\n  display: none; }\n\n.list-group-item.active {\n  color: #42b983 !important;\n  border-color: #42b983 !important;\n  background-color: transparent !important; }\n\n/* offcanvas menu */\n.navbar a.list-group-item {\n  width: 100%;\n  color: #C5C5C5;\n  text-align: inherit;\n  background-color: rgba(255, 255, 255, 0);\n  border: 1px solid rgba(221, 221, 221, 0.04);\n  border-right: 0;\n  border-left: 0; }\n", ""]);

	// exports


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<!-- header -->\r\n<nav class=\"navbar navbar-fixed-top navbar-light bg-faded\">\r\n  <div class=\"container\">\r\n      <a class=\"navbar-brand text-center\" href=\"#/\">\r\n\t\t\t\t<img v-bind:src=\"'assets/vuestrap-logo.svg'\" alt=\"Vuestrap logo\">\r\n\t\t\t</a>\r\n\t\t\t<a class=\"navbar-brand text-center hidden-sm-down\" href=\"#/\">\r\n\t\t\t\tDocumentation\r\n\t\t\t</a>\r\n\t\t\t<ul class=\"nav navbar-nav pull-right\">\r\n\t\t\t\t<li class=\"nav-item hidden-sm-down\">\r\n\t\t\t\t\t<a href=\"#/\" class=\"btn\">Introduction</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"nav-item hidden-sm-down\">\r\n\t\t\t\t\t<a href=\"{{pkg.homepage}}\" class=\"btn btn-success\" target=\"_blank\">&#9733; Github</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"nav-item hidden-md-up\">\r\n\t\t\t\t\t<a href=\"#\" class=\"btn btn-success\" target=\"_blank\" v-on:click.stop.prevent=\"$root.$broadcast('toggle::offcanvas-drawer', 'main')\">&#9776;</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n  </div><!-- /.container -->\r\n</nav><!-- /.navbar -->\r\n\r\n<!-- content -->\r\n<div class=\"container\">\r\n\t<div class=\"row row-offcanvas row-offcanvas-right\">\r\n\t\t<div class=\"col-xs-12 col-md-9\">\r\n\t\t\t<component :is=\"currentView\"></component>\r\n    </div><!-- /col-xs-12 -->\r\n\r\n\t\t<!-- sidebar -->\r\n\t\t<div class=\"col-xs-12 col-md-3 sidebar-offcanvas hidden-sm-down\" id=\"sidebar\">\r\n\t\t\t<docs-search :list=\"routes\" :current-view=\"currentView\"></docs-search>\r\n\t\t</div><!--/sidebar-->\r\n\r\n\t</div><!--/row-->\r\n</div><!--/container-->";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(11);

	var _searchHtml = __webpack_require__(13);

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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(12);
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".vuestrap-docs-search .list-group-search {\n  background: #f7f7f9; }\n\n.vuestrap-docs-search .list-group-item.active {\n  color: #42b983;\n  background-color: transparent;\n  border-color: #42b983; }\n", ""]);

	// exports


/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "<div class=\"vuestrap-docs-search list-group\">\r\n  <!-- search -->\r\n  <div class=\"list-group-item list-group-search\" v-if=\"list.length > showSearch\">\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" v-model=\"search\" autocomplete=\"off\">\r\n  </div>\r\n  <!-- components -->\r\n  <a href=\"#{{item.url}}\" \r\n    v-bind:class=\"{\r\n      'list-group-item': true, \r\n      active: currentView && item.id === currentView,\r\n    }\" \r\n    v-for=\"item in list | skipIntro | filterBy search in 'title'\">\r\n    {{item.title}}\r\n  </a>\r\n</div>";

/***/ },
/* 14 */
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

	var _director = __webpack_require__(15);

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
/* 15 */
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
/* 16 */
/***/ function(module, exports) {

	module.exports = {
		"name": "vuestrap-docs",
		"version": "0.3.1",
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// import styling
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(18);

	// import template

	var _offcanvasDrawerHtml = __webpack_require__(20);

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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(19);
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "/*\r\n * Off Canvas drawer\r\n * based on https://scotch.io/tutorials/off-canvas-drawers-with-css3-transitions-and-transforms\r\n * --------------------------------------------------\r\n */\n.gritcode-offcanvas-drawer {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  -webkit-transform: translate(0, 0);\n      -ms-transform: translate(0, 0);\n          transform: translate(0, 0);\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -ms-transform: translate(0, 0);\n  -webkit-transition: 300ms ease transform;\n  transition: 300ms ease transform;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden; }\n  .gritcode-offcanvas-drawer .offcanvas-drawer {\n    width: 100%;\n    left: -100%;\n    height: 100%;\n    position: fixed;\n    top: 0;\n    z-index: 9999; }\n    .gritcode-offcanvas-drawer .offcanvas-drawer .close {\n      color: #fff; }\n    .gritcode-offcanvas-drawer .offcanvas-drawer .navbar {\n      height: 100%; }\n    @media (min-width: 360px) {\n      .gritcode-offcanvas-drawer .offcanvas-drawer {\n        width: 300px;\n        left: -300px; } }\n  .gritcode-offcanvas-drawer.active {\n    -webkit-transform: translate(100%, 0);\n        -ms-transform: translate(100%, 0);\n            transform: translate(100%, 0);\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n    -ms-transform: translate(100%, 0); }\n    @media (min-width: 360px) {\n      .gritcode-offcanvas-drawer.active {\n        -webkit-transform: translate(300px, 0);\n            -ms-transform: translate(300px, 0);\n                transform: translate(300px, 0);\n        -webkit-transform: translate3d(300px, 0, 0);\n                transform: translate3d(300px, 0, 0);\n        -ms-transform: translate(300px, 0); } }\n\n.gritcode-offcanvas-drawer.right .offcanvas-drawer {\n  left: auto;\n  right: -100%; }\n  @media (min-width: 360px) {\n    .gritcode-offcanvas-drawer.right .offcanvas-drawer {\n      left: auto;\n      right: -300px; } }\n\n.gritcode-offcanvas-drawer.right.active {\n  -webkit-transform: translate(-100%, 0);\n      -ms-transform: translate(-100%, 0);\n          transform: translate(-100%, 0);\n  -webkit-transform: translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0);\n  -ms-transform: translate(-100%, 0); }\n  @media (min-width: 360px) {\n    .gritcode-offcanvas-drawer.right.active {\n      -webkit-transform: translate(-300px, 0);\n          -ms-transform: translate(-300px, 0);\n              transform: translate(-300px, 0);\n      -webkit-transform: translate3d(-300px, 0, 0);\n              transform: translate3d(-300px, 0, 0);\n      -ms-transform: translate(-300px, 0); } }\n\n.gritcode-offcanvas-drawer.ease {\n  -webkit-transition: 300ms ease transform;\n  transition: 300ms ease transform; }\n\n.gritcode-offcanvas-drawer.linear {\n  -webkit-transition: 300ms linear transform;\n  transition: 300ms linear transform; }\n\n.gritcode-offcanvas-drawer.ease-in {\n  -webkit-transition: 300ms ease-in transform;\n  transition: 300ms ease-in transform; }\n\n.gritcode-offcanvas-drawer.ease-out {\n  -webkit-transition: 300ms ease-out transform;\n  transition: 300ms ease-out transform; }\n\n.gritcode-offcanvas-drawer.ease-in-out {\n  -webkit-transition: 300ms ease-out transform;\n  transition: 300ms ease-out transform; }\n\n.gritcode-offcanvas-drawer.bounce {\n  -webkit-transition: -webkit-transform 300ms cubic-bezier(0.32, 1.25, 0.375, 1.15);\n  transition: -webkit-transform 300ms cubic-bezier(0.32, 1.25, 0.375, 1.15);\n  transition: transform 300ms cubic-bezier(0.32, 1.25, 0.375, 1.15);\n  transition: transform 300ms cubic-bezier(0.32, 1.25, 0.375, 1.15), -webkit-transform 300ms cubic-bezier(0.32, 1.25, 0.375, 1.15); }\n\n.gritcode-offcanvas-drawer.snappy {\n  -webkit-transition: -webkit-transform 300ms cubic-bezier(0.694, 0.0482, 0.335, 1);\n  transition: -webkit-transform 300ms cubic-bezier(0.694, 0.0482, 0.335, 1);\n  transition: transform 300ms cubic-bezier(0.694, 0.0482, 0.335, 1);\n  transition: transform 300ms cubic-bezier(0.694, 0.0482, 0.335, 1), -webkit-transform 300ms cubic-bezier(0.694, 0.0482, 0.335, 1); }\n\n.gritcode-offcanvas-drawer.out-of-orbit {\n  -webkit-transition: -webkit-transform 300ms cubic-bezier(1, 0, 0.61, 0.15);\n  transition: -webkit-transform 300ms cubic-bezier(1, 0, 0.61, 0.15);\n  transition: transform 300ms cubic-bezier(1, 0, 0.61, 0.15);\n  transition: transform 300ms cubic-bezier(1, 0, 0.61, 0.15), -webkit-transform 300ms cubic-bezier(1, 0, 0.61, 0.15); }\n\n.gritcode-offcanvas-drawer.none {\n  -webkit-transition: none;\n  transition: none; }\n\n.lt-ie10 .gritcode-offcanvas-drawer.active .offcanvas-drawer, .ie9 .gritcode-offcanvas-drawer.active .offcanvas-drawer, .oldie .gritcode-offcanvas-drawer.active .offcanvas-drawer, .no-csstransitions .gritcode-offcanvas-drawer.active .offcanvas-drawer {\n  left: 0; }\n\n.lt-ie10 .gritcode-offcanvas-drawer.active .navbar-fixed-top, .lt-ie10 .gritcode-offcanvas-drawer.active .navbar-fixed-bottom, .ie9 .gritcode-offcanvas-drawer.active .navbar-fixed-top, .ie9 .gritcode-offcanvas-drawer.active .navbar-fixed-bottom, .oldie .gritcode-offcanvas-drawer.active .navbar-fixed-top, .oldie .gritcode-offcanvas-drawer.active .navbar-fixed-bottom, .no-csstransitions .gritcode-offcanvas-drawer.active .navbar-fixed-top, .no-csstransitions .gritcode-offcanvas-drawer.active .navbar-fixed-bottom {\n  left: 300px;\n  right: auto;\n  width: 100%; }\n\n.lt-ie10 .gritcode-offcanvas-drawer.active.right .offcanvas-drawer, .ie9 .gritcode-offcanvas-drawer.active.right .offcanvas-drawer, .oldie .gritcode-offcanvas-drawer.active.right .offcanvas-drawer, .no-csstransitions .gritcode-offcanvas-drawer.active.right .offcanvas-drawer {\n  left: auto;\n  right: 0; }\n\n.lt-ie10 .gritcode-offcanvas-drawer.active.right .navbar-fixed-top, .lt-ie10 .gritcode-offcanvas-drawer.active.right .navbar-fixed-bottom, .ie9 .gritcode-offcanvas-drawer.active.right .navbar-fixed-top, .ie9 .gritcode-offcanvas-drawer.active.right .navbar-fixed-bottom, .oldie .gritcode-offcanvas-drawer.active.right .navbar-fixed-top, .oldie .gritcode-offcanvas-drawer.active.right .navbar-fixed-bottom, .no-csstransitions .gritcode-offcanvas-drawer.active.right .navbar-fixed-top, .no-csstransitions .gritcode-offcanvas-drawer.active.right .navbar-fixed-bottom {\n  left: -300px;\n  right: auto;\n  width: 100%; }\n", ""]);

	// exports


/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "<div id=\"{{id}}\" class=\"gritcode-offcanvas-drawer {{animation}} {{align}} {{show ? 'active' : ''}}\">\r\n  <slot></slot>\r\n</div>\r\n";

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// import modules and pages
	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _introduction = __webpack_require__(22);

	var _introduction2 = _interopRequireDefault(_introduction);

	var _docs = __webpack_require__(24);

	var _docs2 = _interopRequireDefault(_docs);

	var _demo = __webpack_require__(32);

	var _demo2 = _interopRequireDefault(_demo);

	var _search = __webpack_require__(36);

	var _search2 = _interopRequireDefault(_search);

	// import vuestrap dependencies

	__webpack_require__(42);

	__webpack_require__(45);

	__webpack_require__(52);

	__webpack_require__(53);

	__webpack_require__(58);

	__webpack_require__(61);

	__webpack_require__(62);

	__webpack_require__(65);

	exports['default'] = {
		pages: [_introduction2['default'], _docs2['default'], _demo2['default'], _search2['default']]
	};
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _introductionHtml = __webpack_require__(23);

	var _introductionHtml2 = _interopRequireDefault(_introductionHtml);

	exports['default'] = {
		route: {
			url: '/',
			name: 'introduction',
			title: 'Intoduction'
		},
		template: _introductionHtml2['default'],
		data: function data() {
			return {
				pkg: this.$parent.pkg
			};
		}
	};
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "<div class=\"jumbotron\">\r\n  <h1>{{pkg.name}} <span class=\"label label-success\">{{pkg.version}}</span></h1>\r\n  <p>{{pkg.description}}</p>\r\n</div>\r\n\r\n<div class=\"m-b-lg\"></div>\r\n<h2>Create custom component with docs</h2>\r\n<ol>\r\n  <li>download initial component template structure from <a href=\"https://github.com/kzima/vuestrap-template-component#readme\">vuestrap-component-template github page</a></li>\r\n  <li>run <code>npm install</code></li>\r\n  <li>run <code>npm run docs</code></li>\r\n  <li>navigate to yout browser http://localhost:8080</li>\r\n  <li>add your component (logic, html and scss) in <code>src/components/componentname</code> folder</li>\r\n  <li>add demo page in <code>src/docs/democomponentname</code> folder with additional route info</li>\r\n  <li>Update introduction page in <code>src/docs/introduction/introduction.html</code> with your installation and examples details</li>\r\n  <li>Update package.json file</li>\r\n  <li>build package with <code>npm run dist</code></li>\r\n  <li>create repo on github and commit your code base</li>\r\n  <li>create gh-pages branch and push your code there as well</li>\r\n  <li>publish your component to NPM <code>npm publish</code></li>\r\n  <li>publish your component to Bower <code>bower register componentName git://github.com/username/componentName.git</code></li>\r\n  <li>(optional) create a pull request on <a href=\"https://github.com/kzima/vuestrap-docs#readme\">vuestrap page</a> and add a link to your newly created gh-pages demo page</li>\r\n</ol>\r\n\r\n<p>If you done everything correctly, you should now see your docs live at http://username.github.io/reponame.</p>\r\n\r\n<p>Note: <a href=\"https://github.com/kzima/vuestrap-template-component#readme\">vuestrap-component-template</a> includes everything you need to kick start your development. Remember to check the sample 'Hello World' component and read some comments before you start :)</p>\r\n\r\n<p>Check other webcomponents with docs:</p>\r\n<ul>\r\n  <li>Base Vuestrap Components - <a href=\"http://kzima.github.io/vuestrap-base-components/#/alert\">http://kzima.github.io/vuestrap-base-components/#/alert</a></li>\r\n  <li>Vuestrap Icons - <a href=\"http://kzima.github.io/vuestrap-icons/#/icons\">http://kzima.github.io/vuestrap-icons/#/icons</a></li>\r\n</ul>";

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _snippetHtml = __webpack_require__(25);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _docsHtml = __webpack_require__(26);

	var _docsHtml2 = _interopRequireDefault(_docsHtml);

	var _docsJson = __webpack_require__(27);

	var _docsJson2 = _interopRequireDefault(_docsJson);

	var _srcComponentsDemo = __webpack_require__(28);

	var _srcComponentsDemo2 = _interopRequireDefault(_srcComponentsDemo);

	exports['default'] = {
		route: {
			url: '/docs',
			name: 'docs',
			title: 'Docs'
		},
		template: _docsHtml2['default'],
		data: function data() {
			return {
				meta: _docsJson2['default'],
				snippet: _snippetHtml2['default']
			};
		},
		components: {
			docsDemo: _srcComponentsDemo2['default']
		}
	};
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">docs-pages</span> <span class=\"hljs-attribute\">:routes</span>=<span class=\"hljs-value\">\"routes\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">docs-pages</span>&gt;</span>\r\n";

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "<!-- demo component -->\r\n<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\">\r\n\t\tIt works! This section and sidebar is rendered thanks to this `docs` component.\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n</docs-demo>";

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = {
		"name": "docs",
		"title": "Docs Component",
		"description": "Wraps demo content and sidebar components into one view. It also handles routing for each demo component.",
		"dependencies": [
			"vuestrap-docs/search",
			"vuestrap-docs/search",
			"vuestrap/icons"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "routes",
				"type": "Array",
				"required": true,
				"description": "An Array with routes objects generated from each demo component placed in src/docs directory. Note that each demo object need to have route data attached, i.e. <code>route: {name: compName, url: '/compName', title: 'Comp Name'}</code>"
			}
		]
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(29);

	var _demoHtml = __webpack_require__(31);

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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(30);
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".vuestrap-docs-demo {\n  margin-bottom: 4rem; }\n  .vuestrap-docs-demo .code-demo {\n    position: relative;\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: 2rem;\n    padding: 1rem;\n    padding-bottom: 0;\n    border: solid #f7f7f9;\n    border-width: .2rem; }\n    .vuestrap-docs-demo .code-demo > .inverse {\n      background-color: #898989;\n      padding: 0.2em; }\n  .vuestrap-docs-demo .highlight {\n    padding: 1rem;\n    margin: 1rem -1rem;\n    background-color: #f7f7f9;\n    margin-bottom: 0; }\n    .vuestrap-docs-demo .highlight pre {\n      margin-bottom: 0; }\n  .vuestrap-docs-demo .options > table code {\n    display: inline-block;\n    margin-right: 2px;\n    margin-bottom: 2px; }\n  .vuestrap-docs-demo .options > table td {\n    width: 10%; }\n    .vuestrap-docs-demo .options > table td p {\n      margin: 0; }\n    .vuestrap-docs-demo .options > table td p + p {\n      margin-top: 10px; }\n  .vuestrap-docs-demo .options > table td:nth-child(1) {\n    min-width: 150px;\n    color: #563d7c; }\n  .vuestrap-docs-demo .options > table td:nth-child(5) {\n    width: 50%; }\n  .vuestrap-docs-demo [slot=\"controls\"] {\n    background-color: #f7f7f9;\n    padding: 1rem; }\n  .vuestrap-docs-demo [slot=\"controls\"] label {\n    margin-bottom: 0;\n    margin-right: 0.5rem; }\n  .vuestrap-docs-demo label.btn {\n    margin-bottom: 0; }\n  .vuestrap-docs-demo .label {\n    margin-right: 0.5rem; }\n  .vuestrap-docs-demo > .label {\n    background-color: #563d7c; }\n  .vuestrap-docs-demo > .alert {\n    border-right-color: #e6e6ec;\n    border-top-color: #e6e6ec;\n    border-bottom-color: #e6e6ec;\n    border-left-width: 5px;\n    background-color: transparent; }\n    .vuestrap-docs-demo > .alert .icons {\n      vertical-align: text-bottom; }\n  .vuestrap-docs-demo .tab-content .tab-pane {\n    padding: 1em 0; }\n", ""]);

	// exports


/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "<section class=\"vuestrap-docs-demo\" id=\"{{meta.name}}\">\r\n\r\n\t<!-- Meta title -->\r\n\t<h2>{{meta.title}}</h2>\r\n\t<p v-html=\"meta.description\"></p>\r\n\r\n\t<div class=\"m-b\"></div>\r\n\r\n\t<div class=\"alert alert-info\" role=\"alert\" v-if=\"meta.note\">\r\n  \t<!--<icon background=\"circle-outline\" size=\"sm\" variant=\"info\" text=\"i\"></icon>--> <span v-html=\"meta.note\"></span>\r\n\t</div>\r\n\r\n\t<div class=\"m-b-md\"></div>\r\n\r\n\t<!-- Component manipulators -->\r\n\t<slot name=\"controls\"></slot>\r\n\r\n\t<!-- Output & Code sample -->\r\n\t<div class=\"code-demo\">\r\n\r\n\t\t<slot class=\"markup\" name=\"markup\"></slot>\r\n\r\n\t\t<div class=\"highlight\">\r\n\t\t\t<pre><code v-html=\"snippet\"></code></pre>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<!-- Options -->\r\n\t<div class=\"options\" v-if=\"meta.options.length\">\r\n\t\t<h3>Options</h3>\r\n\t\t<table class='table table-responsive'>\r\n\t\t\t<tr>\r\n\t\t\t\t<th>Name</th>\r\n\t\t\t\t<th>Type</th>\r\n\t\t\t\t<th>Default</th>\r\n\t\t\t\t<th>Required</th>\r\n\t\t\t\t<th>Description</th>\r\n\t\t\t</tr>\r\n\t\t\t<tr v-for=\"item in meta.options\">\r\n\t\t\t\t<td>{{item.name}}</td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<code v-html=\"item.type\"></code>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td><code v-if=\"item.default\" v-html=\"item.default\"></code></td>\r\n\t\t\t\t<td>{{item.required == true ? 'yes' : ''}}</td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<p v-html=\"item.description\"></p>\r\n\t\t\t\t\t<p v-if=\"item.values\">\r\n\t\t\t\t\t\tPosible values:\r\n\t\t\t\t\t\t<code v-for=\"item in item.values\">{{item}}</code>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t</table>\t\r\n\t</div>\r\n\r\n\t<!-- Accessibility -->\r\n\t<div class=\"accessibility\" v-if=\"meta.accessibility\">\r\n\t\t<h3>Accessibility</h3>\r\n\t\t<p v-html=\"meta.accessibility\"></p>\r\n\t</div>\r\n\r\n\t<div class=\"m-b-md\"></div>\r\n\r\n\t<!-- Browser Support -->\r\n\t<div class=\"browserSupport\" v-if=\"meta.browserSupport\">\r\n\t\t<h3>Browser Support</h3>\r\n\t\t<span class=\"label label-primary\" v-for=\"item in meta.browserSupport.browsers\">{{ item }}</span>\r\n\t\t<p><small v-html=\"meta.browserSupport.note\"></small></p>\r\n\t</div>\r\n</section>\r\n";

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _snippetHtml = __webpack_require__(33);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _demoHtml = __webpack_require__(34);

	var _demoHtml2 = _interopRequireDefault(_demoHtml);

	var _demoJson = __webpack_require__(35);

	var _demoJson2 = _interopRequireDefault(_demoJson);

	var _srcComponentsDemo = __webpack_require__(28);

	var _srcComponentsDemo2 = _interopRequireDefault(_srcComponentsDemo);

	exports['default'] = {
		route: {
			url: '/demo',
			name: 'demo',
			title: 'Demo'
		},
		template: _demoHtml2['default'],
		data: function data() {
			return {
				meta: _demoJson2['default'],
				snippet: _snippetHtml2['default']
			};
		},
		components: {
			'docs-demo': _srcComponentsDemo2['default']
		}
	};
	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">docs-demo</span> <span class=\"hljs-attribute\">:meta</span>=<span class=\"hljs-value\">\"meta\"</span> <span class=\"hljs-attribute\">:snippet</span>=<span class=\"hljs-value\">\"snippet\"</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"controls\"</span>&gt;</span>\r\n  <span class=\"hljs-comment\">&lt;!-- Html controls start--&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"controls\"</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"controls\"</span>&gt;</span>\r\n    Controls go here...\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n  <span class=\"hljs-comment\">&lt;!-- Html controls end--&gt;</span>\r\n  \r\n  <span class=\"hljs-comment\">&lt;!-- Html markup start--&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"markup\"</span>&gt;</span>\r\n    Demo Component's markup go here...\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n  <span class=\"hljs-comment\">&lt;!-- Html markup end--&gt;</span> \r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">docs-demo</span>&gt;</span>";

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = "<!-- demo component -->\r\n<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<!-- Html controls start-->\r\n\t<div slot=\"controls\">\r\n\t\tControls go here...\r\n\t</div>\r\n\t<!-- Html controls end-->\r\n\t\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\">\r\n\t\tDemo Component's markup go here...\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n</docs-demo>";

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = {
		"name": "demo",
		"title": "Demo Component",
		"description": "Used in docs to showcase markup, snippet and API options.",
		"dependencies": [
			"vuestrap/labels",
			"vuestrap/alert",
			"vuestrap/icons"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "meta",
				"type": "Object",
				"default": "{}",
				"required": true,
				"description": "An object data describing component (based on JSON file)."
			},
			{
				"name": "snippet",
				"type": "String",
				"default": "",
				"required": false,
				"description": "Code examples showing sample usage of the component."
			}
		]
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _snippetHtml = __webpack_require__(37);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _searchHtml = __webpack_require__(38);

	var _searchHtml2 = _interopRequireDefault(_searchHtml);

	var _searchJson = __webpack_require__(39);

	var _searchJson2 = _interopRequireDefault(_searchJson);

	__webpack_require__(40);

	var _srcComponentsDemo = __webpack_require__(28);

	var _srcComponentsDemo2 = _interopRequireDefault(_srcComponentsDemo);

	var _srcComponentsSearch = __webpack_require__(10);

	var _srcComponentsSearch2 = _interopRequireDefault(_srcComponentsSearch);

	exports['default'] = {
		route: {
			url: '/search',
			name: 'search',
			title: 'Search'
		},
		template: _searchHtml2['default'],
		data: function data() {
			return {
				meta: _searchJson2['default'],
				snippet: _snippetHtml2['default'],
				list: [{ id: 'component-a', title: 'Component A' }, { id: 'component-b', title: 'Component B' }, { id: 'other', title: 'Other' }]
			};
		},
		components: {
			search: _srcComponentsSearch2['default'],
			demo: _srcComponentsDemo2['default']
		}
	};
	module.exports = exports['default'];

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">docs-search</span> \r\n  <span class=\"hljs-attribute\">:list</span>=<span class=\"hljs-value\">\"[\r\n    {id: 'component-a', title: 'Component A'}, \r\n    {id: 'component-b', title: 'Component B'}, \r\n    {id: 'other', title: 'Other'}]\"</span> \r\n  <span class=\"hljs-attribute\">:current-view</span>=<span class=\"hljs-value\">\"'component-a'\"</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">docs-search</span>&gt;</span>\r\n";

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = "<!-- demo component -->\r\n<demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\">\r\n\t\t<search :show-search=\"1\" :list=\"list\" current-view=\"component-a\"></search>\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n</demo>";

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = {
		"name": "search",
		"title": "Search Component",
		"description": "Used in docs to list and search components.",
		"dependencies": [
			"vuestrap/list-group",
			"vuestrap/forms"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "show-search",
				"type": "Number",
				"default": 5,
				"required": true,
				"description": "Show search box only if number of components is more than number specified."
			},
			{
				"name": "list",
				"type": "Array",
				"default": "",
				"description": "List of components with <code>title</code> and <code>name</code> attributes."
			},
			{
				"name": "current-view",
				"type": "String",
				"default": "",
				"description": "Sets active state on the matching component. Expected value is a name of the component as string, i.e. `component-a`."
			}
		]
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(41);
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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".code-demo .vuestrap-docs-search {\n  max-width: 350px; }\n", ""]);

	// exports


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(43);

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(44);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_nav.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_nav.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".nav {\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n\n.nav-link {\n  display: inline-block; }\n  .nav-link:focus, .nav-link:hover {\n    text-decoration: none; }\n  .nav-link.disabled {\n    color: #818a91; }\n    .nav-link.disabled, .nav-link.disabled:focus, .nav-link.disabled:hover {\n      color: #818a91;\n      cursor: not-allowed;\n      background-color: transparent; }\n\n.nav-inline .nav-link + .nav-link {\n  margin-left: 1rem; }\n\n.nav-tabs {\n  border-bottom: 1px solid #ddd; }\n  .nav-tabs::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .nav-tabs .nav-item {\n    float: left;\n    margin-bottom: -1px; }\n    .nav-tabs .nav-item + .nav-item {\n      margin-left: .2rem; }\n  .nav-tabs .nav-link {\n    display: block;\n    padding: 0.5em 1em;\n    border: 1px solid transparent;\n    border-radius: 0.25rem 0.25rem 0 0; }\n    .nav-tabs .nav-link:focus, .nav-tabs .nav-link:hover {\n      border-color: #eceeef #eceeef #ddd; }\n    .nav-tabs .nav-link.disabled, .nav-tabs .nav-link.disabled:focus, .nav-tabs .nav-link.disabled:hover {\n      color: #818a91;\n      background-color: transparent;\n      border-color: transparent; }\n  .nav-tabs .nav-link.active, .nav-tabs .nav-link.active:focus, .nav-tabs .nav-link.active:hover,\n  .nav-tabs .nav-item.open .nav-link,\n  .nav-tabs .nav-item.open .nav-link:focus,\n  .nav-tabs .nav-item.open .nav-link:hover {\n    color: #55595c;\n    background-color: #fff;\n    border-color: #ddd #ddd transparent; }\n\n.nav-pills::after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.nav-pills .nav-item {\n  float: left; }\n  .nav-pills .nav-item + .nav-item {\n    margin-left: .2rem; }\n\n.nav-pills .nav-link {\n  display: block;\n  padding: 0.5em 1em;\n  border-radius: 0.25rem; }\n\n.nav-pills .nav-link.active, .nav-pills .nav-link.active:focus, .nav-pills .nav-link.active:hover,\n.nav-pills .nav-item.open .nav-link,\n.nav-pills .nav-item.open .nav-link:focus,\n.nav-pills .nav-item.open .nav-link:hover {\n  color: #fff;\n  cursor: default;\n  background-color: #563d7c; }\n\n.nav-stacked .nav-item {\n  display: block;\n  float: none; }\n  .nav-stacked .nav-item + .nav-item {\n    margin-top: .2rem;\n    margin-left: 0; }\n\n.tab-content > .tab-pane {\n  display: none; }\n\n.tab-content > .active {\n  display: block; }\n\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n", ""]);

	// exports


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(46);

	__webpack_require__(48);

	__webpack_require__(43);

	__webpack_require__(50);

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(47);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_navbar.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_navbar.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".navbar {\n  position: relative;\n  padding: 0.5rem 1rem; }\n  .navbar::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  @media (min-width: 544px) {\n    .navbar {\n      border-radius: 0.25rem; } }\n\n.navbar-full {\n  z-index: 1000; }\n  @media (min-width: 544px) {\n    .navbar-full {\n      border-radius: 0; } }\n\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n  @media (min-width: 544px) {\n    .navbar-fixed-top,\n    .navbar-fixed-bottom {\n      border-radius: 0; } }\n\n.navbar-fixed-top {\n  top: 0; }\n\n.navbar-fixed-bottom {\n  bottom: 0; }\n\n.navbar-sticky-top {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1030;\n  width: 100%; }\n  @media (min-width: 544px) {\n    .navbar-sticky-top {\n      border-radius: 0; } }\n\n.navbar-brand {\n  float: left;\n  padding-top: .25rem;\n  padding-bottom: .25rem;\n  margin-right: 1rem;\n  font-size: 1.25rem; }\n  .navbar-brand:focus, .navbar-brand:hover {\n    text-decoration: none; }\n  .navbar-brand > img {\n    display: block; }\n\n.navbar-divider {\n  float: left;\n  width: 1px;\n  padding-top: .425rem;\n  padding-bottom: .425rem;\n  margin-right: 1rem;\n  margin-left: 1rem;\n  overflow: hidden; }\n  .navbar-divider::before {\n    content: \"\\A0\"; }\n\n.navbar-toggler {\n  padding: .5rem .75rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  background: none;\n  border: 1px solid transparent;\n  border-radius: 0.25rem; }\n  .navbar-toggler:focus, .navbar-toggler:hover {\n    text-decoration: none; }\n\n@media (min-width: 544px) {\n  .navbar-toggleable-xs {\n    display: block !important; } }\n\n@media (min-width: 768px) {\n  .navbar-toggleable-sm {\n    display: block !important; } }\n\n@media (min-width: 992px) {\n  .navbar-toggleable-md {\n    display: block !important; } }\n\n.navbar-nav .nav-item {\n  float: left; }\n\n.navbar-nav .nav-link {\n  display: block;\n  padding-top: .425rem;\n  padding-bottom: .425rem; }\n  .navbar-nav .nav-link + .nav-link {\n    margin-left: 1rem; }\n\n.navbar-nav .nav-item + .nav-item {\n  margin-left: 1rem; }\n\n.navbar-light .navbar-brand {\n  color: rgba(0, 0, 0, 0.8); }\n  .navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover {\n    color: rgba(0, 0, 0, 0.8); }\n\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.3); }\n  .navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {\n    color: rgba(0, 0, 0, 0.6); }\n\n.navbar-light .navbar-nav .open > .nav-link, .navbar-light .navbar-nav .open > .nav-link:focus, .navbar-light .navbar-nav .open > .nav-link:hover,\n.navbar-light .navbar-nav .active > .nav-link,\n.navbar-light .navbar-nav .active > .nav-link:focus,\n.navbar-light .navbar-nav .active > .nav-link:hover,\n.navbar-light .navbar-nav .nav-link.open,\n.navbar-light .navbar-nav .nav-link.open:focus,\n.navbar-light .navbar-nav .nav-link.open:hover,\n.navbar-light .navbar-nav .nav-link.active,\n.navbar-light .navbar-nav .nav-link.active:focus,\n.navbar-light .navbar-nav .nav-link.active:hover {\n  color: rgba(0, 0, 0, 0.8); }\n\n.navbar-light .navbar-divider {\n  background-color: rgba(0, 0, 0, 0.075); }\n\n.navbar-dark .navbar-brand {\n  color: white; }\n  .navbar-dark .navbar-brand:focus, .navbar-dark .navbar-brand:hover {\n    color: white; }\n\n.navbar-dark .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 0.5); }\n  .navbar-dark .navbar-nav .nav-link:focus, .navbar-dark .navbar-nav .nav-link:hover {\n    color: rgba(255, 255, 255, 0.75); }\n\n.navbar-dark .navbar-nav .open > .nav-link, .navbar-dark .navbar-nav .open > .nav-link:focus, .navbar-dark .navbar-nav .open > .nav-link:hover,\n.navbar-dark .navbar-nav .active > .nav-link,\n.navbar-dark .navbar-nav .active > .nav-link:focus,\n.navbar-dark .navbar-nav .active > .nav-link:hover,\n.navbar-dark .navbar-nav .nav-link.open,\n.navbar-dark .navbar-nav .nav-link.open:focus,\n.navbar-dark .navbar-nav .nav-link.open:hover,\n.navbar-dark .navbar-nav .nav-link.active,\n.navbar-dark .navbar-nav .nav-link.active:focus,\n.navbar-dark .navbar-nav .nav-link.active:hover {\n  color: white; }\n\n.navbar-dark .navbar-divider {\n  background-color: rgba(255, 255, 255, 0.075); }\n", ""]);

	// exports


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(49);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_buttons.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_buttons.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".btn {\n  display: inline-block;\n  font-weight: normal;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border: 1px solid transparent;\n  padding: 0.375rem 1rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem; }\n  .btn:focus, .btn.focus, .btn:active:focus, .btn:active.focus, .btn.active:focus, .btn.active.focus {\n    outline: thin dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px; }\n  .btn:focus, .btn:hover {\n    text-decoration: none; }\n  .btn.focus {\n    text-decoration: none; }\n  .btn:active, .btn.active {\n    background-image: none;\n    outline: 0; }\n  .btn.disabled, .btn:disabled {\n    cursor: not-allowed;\n    opacity: .65; }\n\na.btn.disabled,\nfieldset[disabled] a.btn {\n  pointer-events: none; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #563d7c;\n  border-color: #563d7c; }\n  .btn-primary:hover {\n    color: #fff;\n    background-color: #3e2c5a;\n    border-color: #3a2953; }\n  .btn-primary:focus, .btn-primary.focus {\n    color: #fff;\n    background-color: #3e2c5a;\n    border-color: #3a2953; }\n  .btn-primary:active, .btn-primary.active,\n  .open > .btn-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #3e2c5a;\n    border-color: #3a2953;\n    background-image: none; }\n    .btn-primary:active:hover, .btn-primary:active:focus, .btn-primary:active.focus, .btn-primary.active:hover, .btn-primary.active:focus, .btn-primary.active.focus,\n    .open > .btn-primary.dropdown-toggle:hover,\n    .open > .btn-primary.dropdown-toggle:focus,\n    .open > .btn-primary.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #2e2042;\n      border-color: #1b1327; }\n  .btn-primary.disabled:focus, .btn-primary.disabled.focus, .btn-primary:disabled:focus, .btn-primary:disabled.focus {\n    background-color: #563d7c;\n    border-color: #563d7c; }\n  .btn-primary.disabled:hover, .btn-primary:disabled:hover {\n    background-color: #563d7c;\n    border-color: #563d7c; }\n\n.btn-secondary {\n  color: #373a3c;\n  background-color: #fff;\n  border-color: #ccc; }\n  .btn-secondary:hover {\n    color: #373a3c;\n    background-color: #e6e6e6;\n    border-color: #adadad; }\n  .btn-secondary:focus, .btn-secondary.focus {\n    color: #373a3c;\n    background-color: #e6e6e6;\n    border-color: #adadad; }\n  .btn-secondary:active, .btn-secondary.active,\n  .open > .btn-secondary.dropdown-toggle {\n    color: #373a3c;\n    background-color: #e6e6e6;\n    border-color: #adadad;\n    background-image: none; }\n    .btn-secondary:active:hover, .btn-secondary:active:focus, .btn-secondary:active.focus, .btn-secondary.active:hover, .btn-secondary.active:focus, .btn-secondary.active.focus,\n    .open > .btn-secondary.dropdown-toggle:hover,\n    .open > .btn-secondary.dropdown-toggle:focus,\n    .open > .btn-secondary.dropdown-toggle.focus {\n      color: #373a3c;\n      background-color: #d4d4d4;\n      border-color: #8c8c8c; }\n  .btn-secondary.disabled:focus, .btn-secondary.disabled.focus, .btn-secondary:disabled:focus, .btn-secondary:disabled.focus {\n    background-color: #fff;\n    border-color: #ccc; }\n  .btn-secondary.disabled:hover, .btn-secondary:disabled:hover {\n    background-color: #fff;\n    border-color: #ccc; }\n\n.btn-info {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #5bc0de; }\n  .btn-info:hover {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #2aabd2; }\n  .btn-info:focus, .btn-info.focus {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #2aabd2; }\n  .btn-info:active, .btn-info.active,\n  .open > .btn-info.dropdown-toggle {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #2aabd2;\n    background-image: none; }\n    .btn-info:active:hover, .btn-info:active:focus, .btn-info:active.focus, .btn-info.active:hover, .btn-info.active:focus, .btn-info.active.focus,\n    .open > .btn-info.dropdown-toggle:hover,\n    .open > .btn-info.dropdown-toggle:focus,\n    .open > .btn-info.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #269abc;\n      border-color: #1f7e9a; }\n  .btn-info.disabled:focus, .btn-info.disabled.focus, .btn-info:disabled:focus, .btn-info:disabled.focus {\n    background-color: #5bc0de;\n    border-color: #5bc0de; }\n  .btn-info.disabled:hover, .btn-info:disabled:hover {\n    background-color: #5bc0de;\n    border-color: #5bc0de; }\n\n.btn-success {\n  color: #fff;\n  background-color: #42b983;\n  border-color: #42b983; }\n  .btn-success:hover {\n    color: #fff;\n    background-color: #359368;\n    border-color: #328c63; }\n  .btn-success:focus, .btn-success.focus {\n    color: #fff;\n    background-color: #359368;\n    border-color: #328c63; }\n  .btn-success:active, .btn-success.active,\n  .open > .btn-success.dropdown-toggle {\n    color: #fff;\n    background-color: #359368;\n    border-color: #328c63;\n    background-image: none; }\n    .btn-success:active:hover, .btn-success:active:focus, .btn-success:active.focus, .btn-success.active:hover, .btn-success.active:focus, .btn-success.active.focus,\n    .open > .btn-success.dropdown-toggle:hover,\n    .open > .btn-success.dropdown-toggle:focus,\n    .open > .btn-success.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #2b7956;\n      border-color: #205b40; }\n  .btn-success.disabled:focus, .btn-success.disabled.focus, .btn-success:disabled:focus, .btn-success:disabled.focus {\n    background-color: #42b983;\n    border-color: #42b983; }\n  .btn-success.disabled:hover, .btn-success:disabled:hover {\n    background-color: #42b983;\n    border-color: #42b983; }\n\n.btn-warning {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #f0ad4e; }\n  .btn-warning:hover {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #eb9316; }\n  .btn-warning:focus, .btn-warning.focus {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #eb9316; }\n  .btn-warning:active, .btn-warning.active,\n  .open > .btn-warning.dropdown-toggle {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #eb9316;\n    background-image: none; }\n    .btn-warning:active:hover, .btn-warning:active:focus, .btn-warning:active.focus, .btn-warning.active:hover, .btn-warning.active:focus, .btn-warning.active.focus,\n    .open > .btn-warning.dropdown-toggle:hover,\n    .open > .btn-warning.dropdown-toggle:focus,\n    .open > .btn-warning.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #d58512;\n      border-color: #b06d0f; }\n  .btn-warning.disabled:focus, .btn-warning.disabled.focus, .btn-warning:disabled:focus, .btn-warning:disabled.focus {\n    background-color: #f0ad4e;\n    border-color: #f0ad4e; }\n  .btn-warning.disabled:hover, .btn-warning:disabled:hover {\n    background-color: #f0ad4e;\n    border-color: #f0ad4e; }\n\n.btn-danger {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d9534f; }\n  .btn-danger:hover {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #c12e2a; }\n  .btn-danger:focus, .btn-danger.focus {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #c12e2a; }\n  .btn-danger:active, .btn-danger.active,\n  .open > .btn-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #c12e2a;\n    background-image: none; }\n    .btn-danger:active:hover, .btn-danger:active:focus, .btn-danger:active.focus, .btn-danger.active:hover, .btn-danger.active:focus, .btn-danger.active.focus,\n    .open > .btn-danger.dropdown-toggle:hover,\n    .open > .btn-danger.dropdown-toggle:focus,\n    .open > .btn-danger.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #ac2925;\n      border-color: #8b211e; }\n  .btn-danger.disabled:focus, .btn-danger.disabled.focus, .btn-danger:disabled:focus, .btn-danger:disabled.focus {\n    background-color: #d9534f;\n    border-color: #d9534f; }\n  .btn-danger.disabled:hover, .btn-danger:disabled:hover {\n    background-color: #d9534f;\n    border-color: #d9534f; }\n\n.btn-primary-outline {\n  color: #563d7c;\n  background-image: none;\n  background-color: transparent;\n  border-color: #563d7c; }\n  .btn-primary-outline:focus, .btn-primary-outline.focus, .btn-primary-outline:active, .btn-primary-outline.active,\n  .open > .btn-primary-outline.dropdown-toggle {\n    color: #fff;\n    background-color: #563d7c;\n    border-color: #563d7c; }\n  .btn-primary-outline:hover {\n    color: #fff;\n    background-color: #563d7c;\n    border-color: #563d7c; }\n  .btn-primary-outline.disabled:focus, .btn-primary-outline.disabled.focus, .btn-primary-outline:disabled:focus, .btn-primary-outline:disabled.focus {\n    border-color: #886ab5; }\n  .btn-primary-outline.disabled:hover, .btn-primary-outline:disabled:hover {\n    border-color: #886ab5; }\n\n.btn-secondary-outline {\n  color: #ccc;\n  background-image: none;\n  background-color: transparent;\n  border-color: #ccc; }\n  .btn-secondary-outline:focus, .btn-secondary-outline.focus, .btn-secondary-outline:active, .btn-secondary-outline.active,\n  .open > .btn-secondary-outline.dropdown-toggle {\n    color: #fff;\n    background-color: #ccc;\n    border-color: #ccc; }\n  .btn-secondary-outline:hover {\n    color: #fff;\n    background-color: #ccc;\n    border-color: #ccc; }\n  .btn-secondary-outline.disabled:focus, .btn-secondary-outline.disabled.focus, .btn-secondary-outline:disabled:focus, .btn-secondary-outline:disabled.focus {\n    border-color: white; }\n  .btn-secondary-outline.disabled:hover, .btn-secondary-outline:disabled:hover {\n    border-color: white; }\n\n.btn-info-outline {\n  color: #5bc0de;\n  background-image: none;\n  background-color: transparent;\n  border-color: #5bc0de; }\n  .btn-info-outline:focus, .btn-info-outline.focus, .btn-info-outline:active, .btn-info-outline.active,\n  .open > .btn-info-outline.dropdown-toggle {\n    color: #fff;\n    background-color: #5bc0de;\n    border-color: #5bc0de; }\n  .btn-info-outline:hover {\n    color: #fff;\n    background-color: #5bc0de;\n    border-color: #5bc0de; }\n  .btn-info-outline.disabled:focus, .btn-info-outline.disabled.focus, .btn-info-outline:disabled:focus, .btn-info-outline:disabled.focus {\n    border-color: #b0e1ef; }\n  .btn-info-outline.disabled:hover, .btn-info-outline:disabled:hover {\n    border-color: #b0e1ef; }\n\n.btn-success-outline {\n  color: #42b983;\n  background-image: none;\n  background-color: transparent;\n  border-color: #42b983; }\n  .btn-success-outline:focus, .btn-success-outline.focus, .btn-success-outline:active, .btn-success-outline.active,\n  .open > .btn-success-outline.dropdown-toggle {\n    color: #fff;\n    background-color: #42b983;\n    border-color: #42b983; }\n  .btn-success-outline:hover {\n    color: #fff;\n    background-color: #42b983;\n    border-color: #42b983; }\n  .btn-success-outline.disabled:focus, .btn-success-outline.disabled.focus, .btn-success-outline:disabled:focus, .btn-success-outline:disabled.focus {\n    border-color: #8bd6b4; }\n  .btn-success-outline.disabled:hover, .btn-success-outline:disabled:hover {\n    border-color: #8bd6b4; }\n\n.btn-warning-outline {\n  color: #f0ad4e;\n  background-image: none;\n  background-color: transparent;\n  border-color: #f0ad4e; }\n  .btn-warning-outline:focus, .btn-warning-outline.focus, .btn-warning-outline:active, .btn-warning-outline.active,\n  .open > .btn-warning-outline.dropdown-toggle {\n    color: #fff;\n    background-color: #f0ad4e;\n    border-color: #f0ad4e; }\n  .btn-warning-outline:hover {\n    color: #fff;\n    background-color: #f0ad4e;\n    border-color: #f0ad4e; }\n  .btn-warning-outline.disabled:focus, .btn-warning-outline.disabled.focus, .btn-warning-outline:disabled:focus, .btn-warning-outline:disabled.focus {\n    border-color: #f8d9ac; }\n  .btn-warning-outline.disabled:hover, .btn-warning-outline:disabled:hover {\n    border-color: #f8d9ac; }\n\n.btn-danger-outline {\n  color: #d9534f;\n  background-image: none;\n  background-color: transparent;\n  border-color: #d9534f; }\n  .btn-danger-outline:focus, .btn-danger-outline.focus, .btn-danger-outline:active, .btn-danger-outline.active,\n  .open > .btn-danger-outline.dropdown-toggle {\n    color: #fff;\n    background-color: #d9534f;\n    border-color: #d9534f; }\n  .btn-danger-outline:hover {\n    color: #fff;\n    background-color: #d9534f;\n    border-color: #d9534f; }\n  .btn-danger-outline.disabled:focus, .btn-danger-outline.disabled.focus, .btn-danger-outline:disabled:focus, .btn-danger-outline:disabled.focus {\n    border-color: #eba5a3; }\n  .btn-danger-outline.disabled:hover, .btn-danger-outline:disabled:hover {\n    border-color: #eba5a3; }\n\n.btn-link {\n  font-weight: normal;\n  color: #563d7c;\n  border-radius: 0; }\n  .btn-link, .btn-link:active, .btn-link.active, .btn-link:disabled {\n    background-color: transparent; }\n  .btn-link, .btn-link:focus, .btn-link:active {\n    border-color: transparent; }\n  .btn-link:hover {\n    border-color: transparent; }\n  .btn-link:focus, .btn-link:hover {\n    color: #322449;\n    text-decoration: underline;\n    background-color: transparent; }\n  .btn-link:disabled:focus, .btn-link:disabled:hover {\n    color: #818a91;\n    text-decoration: none; }\n\n.btn-lg {\n  padding: 0.75rem 1.25rem;\n  font-size: 1.25rem;\n  line-height: 1.33333;\n  border-radius: 0.3rem; }\n\n.btn-sm {\n  padding: 0.25rem 0.75rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem; }\n\n.btn-block {\n  display: block;\n  width: 100%; }\n\n.btn-block + .btn-block {\n  margin-top: 5px; }\n\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%; }\n", ""]);

	// exports


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(51);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_forms.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_forms.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".form-control {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #55595c;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 0.25rem; }\n  .form-control::-ms-expand {\n    background-color: transparent;\n    border: 0; }\n  .form-control:focus {\n    border-color: #66afe9;\n    outline: none; }\n  .form-control::-webkit-input-placeholder {\n    color: #999;\n    opacity: 1; }\n  .form-control::-moz-placeholder {\n    color: #999;\n    opacity: 1; }\n  .form-control:-ms-input-placeholder {\n    color: #999;\n    opacity: 1; }\n  .form-control::placeholder {\n    color: #999;\n    opacity: 1; }\n  .form-control:disabled, .form-control[readonly] {\n    background-color: #eceeef;\n    opacity: 1; }\n  .form-control:disabled {\n    cursor: not-allowed; }\n\n.form-control-file,\n.form-control-range {\n  display: block; }\n\n.form-control-label {\n  padding: 0.375rem 0.75rem;\n  margin-bottom: 0; }\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"].form-control,\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].form-control {\n    line-height: 2.25rem; }\n  input[type=\"date\"].input-sm,\n  .input-group-sm input[type=\"date\"].form-control,\n  input[type=\"time\"].input-sm,\n  .input-group-sm\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].input-sm,\n  .input-group-sm\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].input-sm,\n  .input-group-sm\n  input[type=\"month\"].form-control {\n    line-height: 1.8625rem; }\n  input[type=\"date\"].input-lg,\n  .input-group-lg input[type=\"date\"].form-control,\n  input[type=\"time\"].input-lg,\n  .input-group-lg\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].input-lg,\n  .input-group-lg\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].input-lg,\n  .input-group-lg\n  input[type=\"month\"].form-control {\n    line-height: 3.16667rem; } }\n\n.form-control-static {\n  min-height: 2.25rem;\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  margin-bottom: 0; }\n  .form-control-static.form-control-sm, .form-control-static.form-control-lg {\n    padding-right: 0;\n    padding-left: 0; }\n\n.form-control-sm {\n  padding: 0.275rem 0.75rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem; }\n\n.form-control-lg {\n  padding: 0.75rem 1.25rem;\n  font-size: 1.25rem;\n  line-height: 1.33333;\n  border-radius: 0.3rem; }\n\n.form-group {\n  margin-bottom: 1rem; }\n\n.radio,\n.checkbox {\n  position: relative;\n  display: block;\n  margin-bottom: 0.75rem; }\n  .radio label,\n  .checkbox label {\n    padding-left: 1.25rem;\n    margin-bottom: 0;\n    font-weight: normal;\n    cursor: pointer; }\n    .radio label input:only-child,\n    .checkbox label input:only-child {\n      position: static; }\n\n.radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"],\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-top: .25rem;\n  margin-left: -1.25rem; }\n\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -.25rem; }\n\n.radio-inline,\n.checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 1.25rem;\n  margin-bottom: 0;\n  font-weight: normal;\n  vertical-align: middle;\n  cursor: pointer; }\n\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: .75rem; }\n\ninput[type=\"radio\"]:disabled, input[type=\"radio\"].disabled,\ninput[type=\"checkbox\"]:disabled,\ninput[type=\"checkbox\"].disabled {\n  cursor: not-allowed; }\n\n.radio-inline.disabled,\n.checkbox-inline.disabled {\n  cursor: not-allowed; }\n\n.radio.disabled label,\n.checkbox.disabled label {\n  cursor: not-allowed; }\n\n.form-control-success,\n.form-control-warning,\n.form-control-danger {\n  padding-right: 2.25rem;\n  background-repeat: no-repeat;\n  background-position: center right 0.5625rem;\n  background-size: 1.4625rem 1.4625rem; }\n\n.has-success .text-help,\n.has-success .form-control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline,\n.has-success.radio label,\n.has-success.checkbox label,\n.has-success.radio-inline label,\n.has-success.checkbox-inline label {\n  color: #42b983; }\n\n.has-success .form-control {\n  border-color: #42b983; }\n\n.has-success .input-group-addon {\n  color: #42b983;\n  border-color: #42b983;\n  background-color: #d6f1e5; }\n\n.has-success .form-control-feedback {\n  color: #42b983; }\n\n.has-success .form-control-success {\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MTIgNzkyIj48cGF0aCBmaWxsPSIjNWNiODVjIiBkPSJNMjMzLjggNjEwYy0xMy4zIDAtMjYtNi0zNC0xNi44TDkwLjUgNDQ4LjhDNzYuMyA0MzAgODAgNDAzLjMgOTguOCAzODljMTguOC0xNC4yIDQ1LjUtMTAuNCA1OS44IDguNGw3MiA5NUw0NTEuMyAyNDJjMTIuNS0yMCAzOC44LTI2LjIgNTguOC0xMy43IDIwIDEyLjQgMjYgMzguNyAxMy43IDU4LjhMMjcwIDU5MGMtNy40IDEyLTIwLjIgMTkuNC0zNC4zIDIwaC0yeiIvPjwvc3ZnPg==\"); }\n\n.has-warning .text-help,\n.has-warning .form-control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline,\n.has-warning.radio label,\n.has-warning.checkbox label,\n.has-warning.radio-inline label,\n.has-warning.checkbox-inline label {\n  color: #f0ad4e; }\n\n.has-warning .form-control {\n  border-color: #f0ad4e; }\n\n.has-warning .input-group-addon {\n  color: #f0ad4e;\n  border-color: #f0ad4e;\n  background-color: white; }\n\n.has-warning .form-control-feedback {\n  color: #f0ad4e; }\n\n.has-warning .form-control-warning {\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MTIgNzkyIj48cGF0aCBmaWxsPSIjZjBhZDRlIiBkPSJNNjAzIDY0MC4ybC0yNzguNS01MDljLTMuOC02LjYtMTAuOC0xMC42LTE4LjUtMTAuNnMtMTQuNyA0LTE4LjUgMTAuNkw5IDY0MC4yYy0zLjcgNi41LTMuNiAxNC40LjIgMjAuOCAzLjggNi41IDEwLjggMTAuNCAxOC4zIDEwLjRoNTU3YzcuNiAwIDE0LjYtNCAxOC40LTEwLjQgMy41LTYuNCAzLjYtMTQuNCAwLTIwLjh6bS0yNjYuNC0zMGgtNjEuMlY1NDloNjEuMnY2MS4yem0wLTEwN2gtNjEuMlYzMDRoNjEuMnYxOTl6Ii8+PC9zdmc+\"); }\n\n.has-danger .text-help,\n.has-danger .form-control-label,\n.has-danger .radio,\n.has-danger .checkbox,\n.has-danger .radio-inline,\n.has-danger .checkbox-inline,\n.has-danger.radio label,\n.has-danger.checkbox label,\n.has-danger.radio-inline label,\n.has-danger.checkbox-inline label {\n  color: #d9534f; }\n\n.has-danger .form-control {\n  border-color: #d9534f; }\n\n.has-danger .input-group-addon {\n  color: #d9534f;\n  border-color: #d9534f;\n  background-color: #fdf7f7; }\n\n.has-danger .form-control-feedback {\n  color: #d9534f; }\n\n.has-danger .form-control-danger {\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MTIgNzkyIj48cGF0aCBmaWxsPSIjZDk1MzRmIiBkPSJNNDQ3IDU0NC40Yy0xNC40IDE0LjQtMzcuNiAxNC40LTUyIDBsLTg5LTkyLjctODkgOTIuN2MtMTQuNSAxNC40LTM3LjcgMTQuNC01MiAwLTE0LjQtMTQuNC0xNC40LTM3LjYgMC01Mmw5Mi40LTk2LjMtOTIuNC05Ni4zYy0xNC40LTE0LjQtMTQuNC0zNy42IDAtNTJzMzcuNi0xNC4zIDUyIDBsODkgOTIuOCA4OS4yLTkyLjdjMTQuNC0xNC40IDM3LjYtMTQuNCA1MiAwIDE0LjMgMTQuNCAxNC4zIDM3LjYgMCA1MkwzNTQuNiAzOTZsOTIuNCA5Ni40YzE0LjQgMTQuNCAxNC40IDM3LjYgMCA1MnoiLz48L3N2Zz4=\"); }\n\n@media (min-width: 544px) {\n  .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle; }\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle; }\n  .form-inline .form-control-static {\n    display: inline-block; }\n  .form-inline .input-group {\n    display: inline-table;\n    vertical-align: middle; }\n    .form-inline .input-group .input-group-addon,\n    .form-inline .input-group .input-group-btn,\n    .form-inline .input-group .form-control {\n      width: auto; }\n  .form-inline .input-group > .form-control {\n    width: 100%; }\n  .form-inline .form-control-label {\n    margin-bottom: 0;\n    vertical-align: middle; }\n  .form-inline .radio,\n  .form-inline .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle; }\n    .form-inline .radio label,\n    .form-inline .checkbox label {\n      padding-left: 0; }\n  .form-inline .radio input[type=\"radio\"],\n  .form-inline .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0; }\n  .form-inline .has-feedback .form-control-feedback {\n    top: 0; } }\n", ""]);

	// exports


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(48);

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(54);

	__webpack_require__(56);

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(55);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_list-group.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_list-group.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".list-group {\n  padding-left: 0;\n  margin-bottom: 0; }\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: .75rem 1.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #ddd; }\n  .list-group-item:first-child {\n    border-top-right-radius: 0.25rem;\n    border-top-left-radius: 0.25rem; }\n  .list-group-item:last-child {\n    margin-bottom: 0;\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem; }\n\n.list-group-flush .list-group-item {\n  border-width: 1px 0;\n  border-radius: 0; }\n\na.list-group-item,\nbutton.list-group-item {\n  width: 100%;\n  color: #555;\n  text-align: inherit; }\n  a.list-group-item .list-group-item-heading,\n  button.list-group-item .list-group-item-heading {\n    color: #333; }\n  a.list-group-item:focus, a.list-group-item:hover,\n  button.list-group-item:focus,\n  button.list-group-item:hover {\n    color: #555;\n    text-decoration: none;\n    background-color: #f5f5f5; }\n\n.list-group-item.disabled, .list-group-item.disabled:focus, .list-group-item.disabled:hover {\n  color: #818a91;\n  cursor: not-allowed;\n  background-color: #eceeef; }\n  .list-group-item.disabled .list-group-item-heading, .list-group-item.disabled:focus .list-group-item-heading, .list-group-item.disabled:hover .list-group-item-heading {\n    color: inherit; }\n  .list-group-item.disabled .list-group-item-text, .list-group-item.disabled:focus .list-group-item-text, .list-group-item.disabled:hover .list-group-item-text {\n    color: #818a91; }\n\n.list-group-item.active, .list-group-item.active:focus, .list-group-item.active:hover {\n  z-index: 2;\n  color: #fff;\n  background-color: #563d7c;\n  border-color: #563d7c; }\n  .list-group-item.active .list-group-item-heading,\n  .list-group-item.active .list-group-item-heading > small,\n  .list-group-item.active .list-group-item-heading > .small, .list-group-item.active:focus .list-group-item-heading,\n  .list-group-item.active:focus .list-group-item-heading > small,\n  .list-group-item.active:focus .list-group-item-heading > .small, .list-group-item.active:hover .list-group-item-heading,\n  .list-group-item.active:hover .list-group-item-heading > small,\n  .list-group-item.active:hover .list-group-item-heading > .small {\n    color: inherit; }\n  .list-group-item.active .list-group-item-text, .list-group-item.active:focus .list-group-item-text, .list-group-item.active:hover .list-group-item-text {\n    color: #beaed7; }\n\n.list-group-item-success {\n  color: #3c763d;\n  background-color: #dff0d8; }\n\na.list-group-item-success,\nbutton.list-group-item-success {\n  color: #3c763d; }\n  a.list-group-item-success .list-group-item-heading,\n  button.list-group-item-success .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-success:focus, a.list-group-item-success:hover,\n  button.list-group-item-success:focus,\n  button.list-group-item-success:hover {\n    color: #3c763d;\n    background-color: #d0e9c6; }\n  a.list-group-item-success.active, a.list-group-item-success.active:focus, a.list-group-item-success.active:hover,\n  button.list-group-item-success.active,\n  button.list-group-item-success.active:focus,\n  button.list-group-item-success.active:hover {\n    color: #fff;\n    background-color: #3c763d;\n    border-color: #3c763d; }\n\n.list-group-item-info {\n  color: #31708f;\n  background-color: #d9edf7; }\n\na.list-group-item-info,\nbutton.list-group-item-info {\n  color: #31708f; }\n  a.list-group-item-info .list-group-item-heading,\n  button.list-group-item-info .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-info:focus, a.list-group-item-info:hover,\n  button.list-group-item-info:focus,\n  button.list-group-item-info:hover {\n    color: #31708f;\n    background-color: #c4e3f3; }\n  a.list-group-item-info.active, a.list-group-item-info.active:focus, a.list-group-item-info.active:hover,\n  button.list-group-item-info.active,\n  button.list-group-item-info.active:focus,\n  button.list-group-item-info.active:hover {\n    color: #fff;\n    background-color: #31708f;\n    border-color: #31708f; }\n\n.list-group-item-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3; }\n\na.list-group-item-warning,\nbutton.list-group-item-warning {\n  color: #8a6d3b; }\n  a.list-group-item-warning .list-group-item-heading,\n  button.list-group-item-warning .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-warning:focus, a.list-group-item-warning:hover,\n  button.list-group-item-warning:focus,\n  button.list-group-item-warning:hover {\n    color: #8a6d3b;\n    background-color: #faf2cc; }\n  a.list-group-item-warning.active, a.list-group-item-warning.active:focus, a.list-group-item-warning.active:hover,\n  button.list-group-item-warning.active,\n  button.list-group-item-warning.active:focus,\n  button.list-group-item-warning.active:hover {\n    color: #fff;\n    background-color: #8a6d3b;\n    border-color: #8a6d3b; }\n\n.list-group-item-danger {\n  color: #a94442;\n  background-color: #f2dede; }\n\na.list-group-item-danger,\nbutton.list-group-item-danger {\n  color: #a94442; }\n  a.list-group-item-danger .list-group-item-heading,\n  button.list-group-item-danger .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-danger:focus, a.list-group-item-danger:hover,\n  button.list-group-item-danger:focus,\n  button.list-group-item-danger:hover {\n    color: #a94442;\n    background-color: #ebcccc; }\n  a.list-group-item-danger.active, a.list-group-item-danger.active:focus, a.list-group-item-danger.active:hover,\n  button.list-group-item-danger.active,\n  button.list-group-item-danger.active:focus,\n  button.list-group-item-danger.active:hover {\n    color: #fff;\n    background-color: #a94442;\n    border-color: #a94442; }\n\n.list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px; }\n\n.list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3; }\n", ""]);

	// exports


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(57);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_labels.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_labels.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".label {\n  display: inline-block;\n  padding: .25em .4em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25rem; }\n  .label:empty {\n    display: none; }\n\n.btn .label {\n  position: relative;\n  top: -1px; }\n\na.label:focus, a.label:hover {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer; }\n\n.label-pill {\n  padding-right: .6em;\n  padding-left: .6em;\n  border-radius: 10rem; }\n\n.label-default {\n  background-color: #818a91; }\n  .label-default[href]:focus, .label-default[href]:hover {\n    background-color: #687077; }\n\n.label-primary {\n  background-color: #563d7c; }\n  .label-primary[href]:focus, .label-primary[href]:hover {\n    background-color: #3e2c5a; }\n\n.label-success {\n  background-color: #42b983; }\n  .label-success[href]:focus, .label-success[href]:hover {\n    background-color: #359368; }\n\n.label-info {\n  background-color: #5bc0de; }\n  .label-info[href]:focus, .label-info[href]:hover {\n    background-color: #31b0d5; }\n\n.label-warning {\n  background-color: #f0ad4e; }\n  .label-warning[href]:focus, .label-warning[href]:hover {\n    background-color: #ec971f; }\n\n.label-danger {\n  background-color: #d9534f; }\n  .label-danger[href]:focus, .label-danger[href]:hover {\n    background-color: #c9302c; }\n", ""]);

	// exports


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(48);

	__webpack_require__(50);

	__webpack_require__(59);

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(60);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_custom-forms.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_custom-forms.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".c-input {\n  position: relative;\n  display: inline;\n  padding-left: 1.5rem;\n  cursor: pointer; }\n  .c-input > input {\n    position: absolute;\n    z-index: -1;\n    opacity: 0; }\n    .c-input > input:checked ~ .c-indicator {\n      color: #fff;\n      background-color: #0074d9; }\n    .c-input > input:focus ~ .c-indicator {\n      box-shadow: 0 0 0 .075rem #fff, 0 0 0 .2rem #0074d9; }\n    .c-input > input:active ~ .c-indicator {\n      color: #fff;\n      background-color: #84c6ff; }\n  .c-input + .c-input {\n    margin-left: 1rem; }\n\n.c-indicator {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  font-size: 65%;\n  line-height: 1rem;\n  color: #eee;\n  text-align: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: #eee;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 50% 50%; }\n\n.c-checkbox .c-indicator {\n  border-radius: .25rem; }\n\n.c-checkbox input:checked ~ .c-indicator {\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgOCA4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA4IDgiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTYuNCwxTDUuNywxLjdMMi45LDQuNUwyLjEsMy43TDEuNCwzTDAsNC40bDAuNywwLjdsMS41LDEuNWwwLjcsMC43bDAuNy0wLjdsMy41LTMuNWwwLjctMC43TDYuNCwxTDYuNCwxeiINCgkvPg0KPC9zdmc+DQo=); }\n\n.c-checkbox input:indeterminate ~ .c-indicator {\n  background-color: #0074d9;\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iOHB4IiBoZWlnaHQ9IjhweCIgdmlld0JveD0iMCAwIDggOCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgOCA4IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0wLDN2Mmg4VjNIMHoiLz4NCjwvc3ZnPg0K); }\n\n.c-radio .c-indicator {\n  border-radius: 50%; }\n\n.c-radio input:checked ~ .c-indicator {\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgOCA4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA4IDgiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQsMUMyLjMsMSwxLDIuMywxLDRzMS4zLDMsMywzczMtMS4zLDMtM1M1LjcsMSw0LDF6Ii8+DQo8L3N2Zz4NCg==); }\n\n.c-inputs-stacked .c-input {\n  display: inline; }\n  .c-inputs-stacked .c-input::after {\n    display: block;\n    margin-bottom: .25rem;\n    content: \"\"; }\n  .c-inputs-stacked .c-input + .c-input {\n    margin-left: 0; }\n\n.c-select {\n  display: inline-block;\n  max-width: 100%;\n  padding: .375rem 1.75rem .375rem .75rem;\n  padding-right: .75rem \\9;\n  vertical-align: middle;\n  background: #fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAMAAACzvE1FAAAADFBMVEUzMzMzMzMzMzMzMzMKAG/3AAAAA3RSTlMAf4C/aSLHAAAAPElEQVR42q3NMQ4AIAgEQTn//2cLdRKppSGzBYwzVXvznNWs8C58CiussPJj8h6NwgorrKRdTvuV9v16Afn0AYFOB7aYAAAAAElFTkSuQmCC) no-repeat right 0.75rem center;\n  background-image: none \\9;\n  background-size: 8px 10px;\n  border: 1px solid #ccc;\n  -moz-appearance: none;\n  -webkit-appearance: none; }\n  .c-select:focus {\n    border-color: #51a7e8;\n    outline: none; }\n  .c-select::-ms-expand {\n    opacity: 0; }\n\n.c-select-sm {\n  padding-top: 3px;\n  padding-bottom: 3px;\n  font-size: 12px; }\n  .c-select-sm:not([multiple]) {\n    height: 26px;\n    min-height: 26px; }\n\n.file {\n  position: relative;\n  display: inline-block;\n  height: 2.5rem;\n  cursor: pointer; }\n\n.file input {\n  min-width: 14rem;\n  margin: 0;\n  filter: alpha(opacity=0);\n  opacity: 0; }\n\n.file-custom {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 5;\n  height: 2.5rem;\n  padding: .5rem 1rem;\n  line-height: 1.5;\n  color: #555;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: #fff;\n  border: .075rem solid #ddd;\n  border-radius: .25rem; }\n\n.file-custom::after {\n  content: \"Choose file...\"; }\n\n.file-custom::before {\n  position: absolute;\n  top: -.075rem;\n  right: -.075rem;\n  bottom: -.075rem;\n  z-index: 6;\n  display: block;\n  height: 2.5rem;\n  padding: .5rem 1rem;\n  line-height: 1.5;\n  color: #555;\n  content: \"Browse\";\n  background-color: #eee;\n  border: .075rem solid #ddd;\n  border-radius: 0 .25rem .25rem 0; }\n", ""]);

	// exports


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(56);

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(63);

	__webpack_require__(48);

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(64);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_alert.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_alert.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".alert {\n  padding: 15px;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem; }\n  .alert > p,\n  .alert > ul {\n    margin-bottom: 0; }\n  .alert > p + p {\n    margin-top: 5px; }\n\n.alert-heading {\n  color: inherit; }\n\n.alert-link {\n  font-weight: bold; }\n\n.alert-dismissible {\n  padding-right: 35px; }\n  .alert-dismissible .close {\n    position: relative;\n    top: -2px;\n    right: -21px;\n    color: inherit; }\n\n.alert-success {\n  background-color: #dff0d8;\n  border-color: #d0e9c6;\n  color: #3c763d; }\n  .alert-success hr {\n    border-top-color: #c1e2b3; }\n  .alert-success .alert-link {\n    color: #2b542c; }\n\n.alert-info {\n  background-color: #d9edf7;\n  border-color: #bcdff1;\n  color: #31708f; }\n  .alert-info hr {\n    border-top-color: #a6d5ec; }\n  .alert-info .alert-link {\n    color: #245269; }\n\n.alert-warning {\n  background-color: #fcf8e3;\n  border-color: #faf2cc;\n  color: #8a6d3b; }\n  .alert-warning hr {\n    border-top-color: #f7ecb5; }\n  .alert-warning .alert-link {\n    color: #66512c; }\n\n.alert-danger {\n  background-color: #f2dede;\n  border-color: #ebcccc;\n  color: #a94442; }\n  .alert-danger hr {\n    border-top-color: #e4b9b9; }\n  .alert-danger .alert-link {\n    color: #843534; }\n", ""]);

	// exports


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(66);

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(67);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_tables.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_tables.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem; }\n  .table th,\n  .table td {\n    padding: 0.75rem;\n    line-height: 1.5;\n    vertical-align: top;\n    border-top: 1px solid #eceeef; }\n  .table thead th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #eceeef; }\n  .table tbody + tbody {\n    border-top: 2px solid #eceeef; }\n  .table .table {\n    background-color: #fff; }\n\n.table-sm th,\n.table-sm td {\n  padding: 0.3rem; }\n\n.table-bordered {\n  border: 1px solid #eceeef; }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #eceeef; }\n  .table-bordered thead th,\n  .table-bordered thead td {\n    border-bottom-width: 2px; }\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: #f9f9f9; }\n\n.table-hover tbody tr:hover {\n  background-color: #f5f5f5; }\n\n.table-active,\n.table-active > th,\n.table-active > td {\n  background-color: #f5f5f5; }\n\n.table-hover .table-active:hover {\n  background-color: #e8e8e8; }\n  .table-hover .table-active:hover > td,\n  .table-hover .table-active:hover > th {\n    background-color: #e8e8e8; }\n\n.table-success,\n.table-success > th,\n.table-success > td {\n  background-color: #dff0d8; }\n\n.table-hover .table-success:hover {\n  background-color: #d0e9c6; }\n  .table-hover .table-success:hover > td,\n  .table-hover .table-success:hover > th {\n    background-color: #d0e9c6; }\n\n.table-info,\n.table-info > th,\n.table-info > td {\n  background-color: #d9edf7; }\n\n.table-hover .table-info:hover {\n  background-color: #c4e3f3; }\n  .table-hover .table-info:hover > td,\n  .table-hover .table-info:hover > th {\n    background-color: #c4e3f3; }\n\n.table-warning,\n.table-warning > th,\n.table-warning > td {\n  background-color: #fcf8e3; }\n\n.table-hover .table-warning:hover {\n  background-color: #faf2cc; }\n  .table-hover .table-warning:hover > td,\n  .table-hover .table-warning:hover > th {\n    background-color: #faf2cc; }\n\n.table-danger,\n.table-danger > th,\n.table-danger > td {\n  background-color: #f2dede; }\n\n.table-hover .table-danger:hover {\n  background-color: #ebcccc; }\n  .table-hover .table-danger:hover > td,\n  .table-hover .table-danger:hover > th {\n    background-color: #ebcccc; }\n\n.table-responsive {\n  display: block;\n  width: 100%;\n  min-height: 0.01%;\n  overflow-x: auto; }\n\n.thead-inverse th {\n  color: #fff;\n  background-color: #373a3c; }\n\n.thead-default th {\n  color: #55595c;\n  background-color: #eceeef; }\n\n.table-inverse {\n  color: #eceeef;\n  background-color: #373a3c; }\n  .table-inverse.table-bordered {\n    border: 0; }\n  .table-inverse th,\n  .table-inverse td,\n  .table-inverse thead th {\n    border-color: #55595c; }\n\n.table-reflow thead {\n  float: left; }\n\n.table-reflow tbody {\n  display: block;\n  white-space: nowrap; }\n\n.table-reflow th,\n.table-reflow td {\n  border-top: 1px solid #eceeef;\n  border-left: 1px solid #eceeef; }\n  .table-reflow th:last-child,\n  .table-reflow td:last-child {\n    border-right: 1px solid #eceeef; }\n\n.table-reflow thead:last-child tr:last-child th,\n.table-reflow thead:last-child tr:last-child td,\n.table-reflow tbody:last-child tr:last-child th,\n.table-reflow tbody:last-child tr:last-child td,\n.table-reflow tfoot:last-child tr:last-child th,\n.table-reflow tfoot:last-child tr:last-child td {\n  border-bottom: 1px solid #eceeef; }\n\n.table-reflow tr {\n  float: left; }\n  .table-reflow tr th,\n  .table-reflow tr td {\n    display: block !important;\n    border: 1px solid #eceeef; }\n", ""]);

	// exports


/***/ }
/******/ ]);
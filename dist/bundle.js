(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _post = require("./post");

var _post2 = _interopRequireDefault(_post);

var _ui = require("./ui");

var _ui2 = _interopRequireDefault(_ui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Punto de entrada de la aplicacion
 */

_post2.default.findAll().then(_ui2.default.renderPosts).catch(function (error) {
	console.log(error);
});

console.log('end');

},{"./post":2,"./ui":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * modulo para obtener los posts y gestionarlos
 */

var Post = {
	findAll: function findAll() {
		return new Promise(function (resolve, reject) {
			// la uri dada por json-server, de npm instalacion global
			var uri = "http://localhost:3000/posts";
			var request = new XMLHttpRequest();

			request.open("GET", uri, true);

			request.onload = function () {
				if (request.status >= 200 && request.status < 400) {
					resolve(JSON.parse(request.response));
				}
			};

			request.onerror = function () {
				reject(new Error("Something wrong with API"));
			};

			request.send();
		});
	}
};

exports.default = Post;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * modulo para renderizar los posts
 */

var ui = {
	renderPosts: function renderPosts(posts) {
		var elements = posts.map(function (post) {
			var title = post.title;
			var lastReply = post.lastReply;


			return articleTemplate(title, lastReply);
		});

		var target = document.querySelector(".container");
		target.innerHTML = elements.join("");
	}
};

function articleTemplate(title, lastReply) {
	var template = "\n\t\t<article class='post'>\n\t\t\t<h2 class='post-title'>\n\t\t\t\t" + title + "\n\t\t\t</h2>\n\t\t\t<p class='post-meta'>\n\t\t\t\t" + lastReply + "\n\t\t\t</p>\n\t\t</article>";

	return template;
}

exports.default = ui;

},{}]},{},[1]);

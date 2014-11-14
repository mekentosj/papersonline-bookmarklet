(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var init = require('./init');
var ReadingList = require('./readinglist');

init(function() {
  window.papersOnlineBookmarklet = ReadingList.save();
});

},{"./init":2,"./readinglist":3}],2:[function(require,module,exports){
module.exports = init;

var jQueryVersion = '1.11.1';

function init(done) {
  if (window.jQuery === undefined || window.jQuery.fn.jquery < jQueryVersion) {
    var done = false;
    var script = document.createElement('script');
    script.src = '//ajax.googleapis.com/ajax/libs/jquery/' + jQueryVersion + '/jquery.min.js';
    script.onload = script.onreadystatechange = function(){
      if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
        done = true;
        done();
      }
    };

    document.getElementsByTagName('head')[0].appendChild(script);
  } else {
    done();
  }
}

},{}],3:[function(require,module,exports){
module.exports = ReadingList;

function ReadingList() {
}

ReadingList.save = function() {
  alert('Not implemented');
};

},{}]},{},[1,2,3]);

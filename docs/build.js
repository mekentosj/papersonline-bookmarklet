#!/usr/bin/env node
var fs = require('fs');

var start = fs.readFileSync('docs/start.html', { encoding: 'utf8' }).trim();
var bookmarklet = fs.readFileSync('bookmarklet.min.js', { encoding: 'utf8' }).trim();

var end = fs.readFileSync('docs/end.html', { encoding: 'utf8' }).trim();

console.log(start + bookmarklet + end);

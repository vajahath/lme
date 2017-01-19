'use strict';

var logUtil = require('./logUtil');
var linesUtil = require('./linesUtil');
var config = require('./config');

var m = {
	//////////////////
	// main methods //
	//////////////////

	// default
	d: function() {
		logUtil.logWithColor(config.colors.default, arguments);
	},
	// success
	s: function() {
		logUtil.logWithColor(config.colors.success, arguments);
	},
	// warning
	w: function() {
		logUtil.logWithColor(config.colors.warning, arguments);
	},
	// err
	e: function() {
		logUtil.logWithColor(config.colors.error, arguments);
	},
	// highlight
	h: function() {
		logUtil.logWithColor(config.colors.highlight, arguments);
	},
	//info
	i: function() {
		logUtil.logWithColor(config.colors.info, arguments);
	},
	//trace:
	t: function() {
		logUtil.logTraceWithColor(config.colors.trace, arguments);
	},

	///////////
	// lines //
	///////////

	// default
	line: function(char, length) {
		linesUtil.logLine(char, length, this.e, this.w);
	},
	// default - another
	dline: function(char, length) {
		linesUtil.logLine(char, length, this.e, this.w);
	},
	// success
	sline: function(char, length) {
		linesUtil.logLine(char, length, this.e, this.w, config.colors.success);
	},
	// warning
	wline: function(char, length) {
		linesUtil.logLine(char, length, this.e, this.w, config.colors.warning);
	},
	// error
	eline: function(char, length) {
		linesUtil.logLine(char, length, this.e, this.w, config.colors.error);
	},
	// highlight
	hline: function(char, length) {
		linesUtil.logLine(char, length, this.e, this.w, config.colors.highlight);
	}
};

module.exports = m;

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
		logUtil.logWithColor(config.colors.logs.default, arguments);
	},
	// success
	s: function() {
		logUtil.logWithColor(config.colors.logs.success, arguments);
	},
	// warning
	w: function() {
		logUtil.logWithColor(config.colors.logs.warning, arguments);
	},
	// err
	e: function() {
		logUtil.logWithColor(config.colors.logs.error, arguments);
	},
	// highlight
	h: function() {
		logUtil.logWithColor(config.colors.logs.highlight, arguments);
	},
	//info
	i: function() {
		logUtil.logWithColor(config.colors.logs.info, arguments);
	},
	//trace:
	t: function() {
		logUtil.logTraceWithColor(config.colors.logs.trace, arguments);
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
		linesUtil.logLine(char, length, this.e, this.w, config.colors.logs.success);
	},
	// warning
	wline: function(char, length) {
		linesUtil.logLine(char, length, this.e, this.w, config.colors.logs.warning);
	},
	// error
	eline: function(char, length) {
		linesUtil.logLine(char, length, this.e, this.w, config.colors.logs.error);
	},
	// highlight
	hline: function(char, length) {
		linesUtil.logLine(char, length, this.e, this.w, config.colors.logs.highlight);
	}
};

module.exports = m;

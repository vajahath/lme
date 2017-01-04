'use strict';

var logUtil = require('./logUtil');
var linesUtil = require('./linesUtil');
var config = require('./config');

var m = {
	//////////////////
	// main methods //
	//////////////////

	// default
	d: function(msg) {
		logUtil.logWithColor(config.colors.default, msg);
	},
	// success
	s: function(msg) {
		logUtil.logWithColor(config.colors.success, msg);
	},
	// warning
	w: function(msg) {
		logUtil.logWithColor(config.colors.warning, msg);
	},
	// err
	e: function(msg) {
		logUtil.logWithColor(config.colors.error, msg);
	},
	// highlight
	h: function(msg) {
		logUtil.logWithColor(config.colors.highlight, msg);
	},
	//info
	i: function(msg) {
		logUtil.logWithColor(config.colors.info, msg);
	},
	//trace:
	t: function(msg) {
		logUtil.logTraceWithColor(config.colors.trace, msg);
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
}

module.exports = m;

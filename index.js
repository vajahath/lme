'use strict';
var chalk = require('chalk');
var logUtil = require('./logUtil');
var linesUtil = require('./linesUtil');
var extend = require('util')._extend;

var defaultColors = {
	d: chalk.white,
	s: chalk.bold.green,
	w: chalk.bgYellow.black,
	e: chalk.bgRed.white,
	h: chalk.bgCyan.black,
	i: chalk.bold.cyan,
	t: chalk.green
};

function moduleSetup(colors) {
	return {
		//////////////////
		// main methods //
		//////////////////

		// default
		d: function(msg) {
			logUtil.logWithColor(colors.d, msg);
		},
		// success
		s: function(msg) {
			logUtil.logWithColor(colors.s, msg);
		},
		// warning
		w: function(msg) {
			logUtil.logWithColor(colors.w, msg);
		},
		// err
		e: function(msg) {
			logUtil.logWithColor(colors.e, msg);
		},
		// highlight
		h: function(msg) {
			logUtil.logWithColor(colors.h, msg);
		},
		//info
		i: function(msg) {
			logUtil.logWithColor(colors.i, msg);
		},
		//trace:
		t: function(msg) {
			logUtil.logTraceWithColor(colors.t, msg);
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
			linesUtil.logLine(char, length, this.e, this.w, colors.s);
		},
		// warning
		wline: function(char, length) {
			linesUtil.logLine(char, length, this.e, this.w, colors.w);
		},
		// error
		eline: function(char, length) {
			linesUtil.logLine(char, length, this.e, this.w, colors.e);
		},
		// highlight
		hline: function(char, length) {
			linesUtil.logLine(char, length, this.e, this.w, colors.h);
		}
	}
}

function customColors(options) {
  //lets use the default colors, unless otherwise specified (options override)
	var colors = extend(defaultColors, options);
	return moduleSetup(colors);
}

var m = moduleSetup(extend({}, defaultColors));
m.customColors = customColors;

module.exports = m;

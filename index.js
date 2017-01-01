'use strict';

var chalk = require('chalk');
var logUtil = require('./logUtil');
var linesUtil = require('./linesUtil');

var m = {
	//////////////////
	// main methods //
	//////////////////

	// default
	d: function(msg) {
		logUtil.logWithColor(chalk.white, msg);
	},
	// success
	s: function(msg) {
		logUtil.logWithColor(chalk.bold.green, msg);
	},
	// warning
	w: function(msg) {
		logUtil.logWithColor(chalk.bgYellow.black, msg);
	},
	// err
	e: function(msg) {
		logUtil.logWithColor(chalk.bgRed.white, msg);
	},
	// highlight
	h: function(msg) {
		logUtil.logWithColor(chalk.bgCyan.black, msg);
	},
	//info
	i: function(msg) {
		logUtil.logWithColor(chalk.bold.cyan, msg);
	},
	//trace:
	t: function(msg) {
		logUtil.logTraceWithColor(chalk.green, msg);
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
		linesUtil.logLine(char, length, this.e, this.w, chalk.bold.green);
	},
	// warning
	wline: function(char, length) {
		linesUtil.logLine(char, length, this.e, this.w, chalk.bgYellow.black);
	},
	// error
	eline: function(char, length) {
		linesUtil.logLine(char, length, this.e, this.w, chalk.bgRed.white);
	},
	// highlight
	hline: function(char, length) {
		linesUtil.logLine(char, length, this.e, this.w, chalk.bgCyan.black);
	}
};

module.exports = m;

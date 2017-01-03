'use strict';

var chalk = require('chalk');
var logUtil = require('./logUtil');
var linesUtil = require('./linesUtil');

// configuration variable
var config;

try {
	// try to get the config file from root file of the application.
	config = require('app-root-path').require("lmeconfig.json");
} catch (e) {
	// delete the line below before publishing <<<<<<<<<<<<<<<<<<
	console.log("Since local config is not found in the app-root-path, lme is using the default config. [need to delete this output before publishing.]")

	// if it fails use the default configuration provided with this package.
	config = require("./lmeDefaultConfig.json");
}

// make the read file understandable to chalk.
for (var i in config.colors) {
	if (config.colors.hasOwnProperty(i)) {
		var temp = chalk;
		config.colors[i].forEach(function(style) {
			temp = temp[style];
		});
		config.colors[i] = temp;
	}
}

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

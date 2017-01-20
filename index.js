'use strict';

var logUtil = require('./logUtil');
var linesUtil = require('./linesUtil');
var config = require('./config');

function getLogLevel() {
	var level = process.env.LOG_LEVEL;
	if (level) {
		level = config._logLevels[level.toLowerCase()];
	} else {
		//default log level
		level = 7;
	}
	return level;
}

function meetsLogLevelRequirement(loggerLevel) {
	return config._logLevels[loggerLevel] <= getLogLevel();
}

var m = {
	//////////////////
	// main methods //
	//////////////////

	// default
	d: function() {
		if (meetsLogLevelRequirement('default')) {
			logUtil.logWithColor(config.colors.default, arguments);
		}
	},
	// success
	s: function() {
		if (meetsLogLevelRequirement('success')) {
			logUtil.logWithColor(config.colors.success, arguments);
		}
	},
	// warning
	w: function() {
		if(meetsLogLevelRequirement('warning')) {
			logUtil.logWithColor(config.colors.warning, arguments);
		}
	},
	// err
	e: function() {
		if (meetsLogLevelRequirement('error')) {
			logUtil.logWithColor(config.colors.error, arguments);
		}
	},
	// highlight
	h: function() {
		if(meetsLogLevelRequirement('highlight')) {
			logUtil.logWithColor(config.colors.highlight, arguments);
		}
	},
	//info
	i: function() {
		if (meetsLogLevelRequirement('info')) {
			logUtil.logWithColor(config.colors.info, arguments);
		}
	},
	//trace:
	t: function() {
		if (meetsLogLevelRequirement('trace')) {
			logUtil.logTraceWithColor(config.colors.trace, arguments);
		}
	},

	///////////
	// lines //
	///////////

	// default
	line: function(char, length) {
		if (meetsLogLevelRequirement('default')) {
			linesUtil.logLine(char, length, this.e, this.w);
		}
	},
	// default - another
	dline: function(char, length) {
		if (meetsLogLevelRequirement('default')) {
			linesUtil.logLine(char, length, this.e, this.w);
		}
	},
	// success
	sline: function(char, length) {
		if (meetsLogLevelRequirement('success')) {
			linesUtil.logLine(char, length, this.e, this.w, config.colors.success);
		}
	},
	// warning
	wline: function(char, length) {
		if(meetsLogLevelRequirement('warning')) {
			linesUtil.logLine(char, length, this.e, this.w, config.colors.warning);
		}
	},
	// error
	eline: function(char, length) {
		if (meetsLogLevelRequirement('error')) {
			linesUtil.logLine(char, length, this.e, this.w, config.colors.error);
		}
	},
	// highlight
	hline: function(char, length) {
		if(meetsLogLevelRequirement('highlight')) {
			linesUtil.logLine(char, length, this.e, this.w, config.colors.highlight);
		}
	},
	// info
	iline: function(char, length) {
		if (meetsLogLevelRequirement('info')) {
			linesUtil.logLine(char, length, this.e, this.w, config.colors.info);
		}
	},
	// trace
	tline: function(char, length) {
		if (meetsLogLevelRequirement('trace')) {
			linesUtil.logLineWithTrace(char, length, this.e, this.w, config.colors.trace);
		}
	}
};

module.exports = m;

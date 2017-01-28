var logUtil = require('./logUtil');
var linesUtil = require('./linesUtil');
var config = require('./config');

var loggingFunctions = [];
Object.keys(config._logLevels).forEach(function(logLevel) {

	loggingFunctions.push({
		logFunction: logLevel === 'trace' ? logUtil.logTraceWithColor : logUtil.logWithColor,
		level: config._logLevels[logLevel].level,
		functionName: config._logLevels[logLevel].letter,
		color: config._types.log === 0 ? config.colors.logs[logLevel] : config.colors.lines[logLevel],
		type: config._types.log
	});
	loggingFunctions.push({
		logFunction: logLevel === 'trace' ? linesUtil.logLineWithTrace : linesUtil.logLine,
		level: config._logLevels[logLevel].level,
		functionName: config._logLevels[logLevel].letter + 'line',
		color: config._types.log === 0 ? config.colors.logs[logLevel] : config.colors.lines[logLevel],
		type: config._types.line
	});
});

//lines have an extra default function
loggingFunctions.push({
	logFunction: linesUtil.logLine,
	level: config._logLevels.default.level,
	functionName: 'line',
	color: config.colors.lines.default,
	type: config._types.line
});

module.exports = loggingFunctions;

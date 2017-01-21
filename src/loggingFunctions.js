var logUtil = require('./logUtil');
var linesUtil = require('./linesUtil');
var config = require('./config');

module.exports = [
	//////////////////
	// main methods //
	//////////////////

	{	//default
		logFunction: logUtil.logWithColor,
		level: config._logLevels.default,
		functionName: 'd',
		color: config.colors.default,
		type: config._types.log
	}, {//success
		logFunction: logUtil.logWithColor,
		level: config._logLevels.success,
		functionName: 's',
		color: config.colors.success,
		type: config._types.log
	}, {//warning
		logFunction: logUtil.logWithColor,
		level: config._logLevels.warning,
		functionName: 'w',
		color: config.colors.warning,
		type: config._types.log
	}, {//error
		logFunction: logUtil.logWithColor,
		level: config._logLevels.error,
		functionName: 'e',
		color: config.colors.error,
		type: config._types.log
	}, {//highlight
		logFunction: logUtil.logWithColor,
		level: config._logLevels.highlight,
		functionName: 'h',
		color: config.colors.highlight,
		type: config._types.log
	}, {//info
		logFunction: logUtil.logWithColor,
		level: config._logLevels.info,
		functionName: 'i',
		color: config.colors.info,
		type: config._types.log
	}, {//trace
		logFunction: logUtil.logTraceWithColor,
		level: config._logLevels.trace,
		functionName: 't',
		color: config.colors.trace,
		type: config._types.log
	},
	///////////
	// lines //
	///////////

	{	//default
		logFunction: linesUtil.logLine,
		level: config._logLevels.default,
		functionName: 'line',
		color: config.colors.default,
		type: config._types.line
	}, {//default - another
		logFunction: linesUtil.logLine,
		level: config._logLevels.default,
		functionName: 'dline',
		color: config.colors.default,
		type: config._types.line
	}, {//success
		logFunction: linesUtil.logLine,
		level: config._logLevels.success,
		functionName: 'sline',
		color: config.colors.success,
		type: config._types.line
	}, {//warning
		logFunction: linesUtil.logLine,
		level: config._logLevels.warning,
		functionName: 'wline',
		color: config.colors.warning,
		type: config._types.line
	}, {//error
		logFunction: linesUtil.logLine,
		level: config._logLevels.error,
		functionName: 'eline',
		color: config.colors.error,
		type: config._types.line
	}, {//highlight
		logFunction: linesUtil.logLine,
		level: config._logLevels.highlight,
		functionName: 'hline',
		color: config.colors.highlight,
		type: config._types.line
	}, {//info
		logFunction: linesUtil.logLine,
		level: config._logLevels.info,
		functionName: 'iline',
		color: config.colors.info,
		type: config._types.line
	}, {//trace
		logFunction: linesUtil.logLineWithTrace,
		level: config._logLevels.trace,
		functionName: 'tline',
		color: config.colors.trace,
		type: config._types.line
	}
];

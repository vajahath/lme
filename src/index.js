'use strict';

var config = require('./config');
var loggingFunctions = require('./loggingFunctions');

function getLogLevel() {
	var level = process.env.LOG_LEVEL;
	if (level) {
		level = config._logLevels[level.toLowerCase()].level;
	}
	return level || config._logLevels.trace.level;
}

function meetsLogLevelRequirement(loggerLevel) {
	return loggerLevel <= getLogLevel();
}

function createLogFunction(loggingFunctionParams) {
	if (loggingFunctionParams.type === config._types.log) {
		return function() {
			if (meetsLogLevelRequirement(loggingFunctionParams.level)) {
				loggingFunctionParams.logFunction(loggingFunctionParams.color, arguments);
			}
		};
	} else if (loggingFunctionParams.type === config._types.line) {
		return function(char, length) {
			if (meetsLogLevelRequirement(loggingFunctionParams.level)) {
				loggingFunctionParams.logFunction(char, length, m.e, m.w, loggingFunctionParams.color);
			}
		};
	}

}

var m = {};
loggingFunctions.forEach(function(loggingFunctionParams) {
	m[loggingFunctionParams.functionName] = createLogFunction(loggingFunctionParams);
});

module.exports = m;

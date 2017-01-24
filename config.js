var chalk = require('chalk');

function getChalkColors(defaultConfig, overrideConfig) {
	// make the read file understandable to chalk.
	var chalkColors = buildChalkFunction(defaultConfig);
	var overrideChalkColors = buildChalkFunction(overrideConfig);
	return Object.assign({}, chalkColors, overrideChalkColors);
}

function buildChalkFunction(config) {
	var chalkColors = {};
	// if config is empty
	if (!config) {
		return {};
	}
	// else
	for (var color in config.logs) {
		if (!config.logs.hasOwnProperty(color))
			continue;

		var colorFunc = chalk;
		//build up the chalk function
		try {
			config.logs[color].forEach(function (style) {
				colorFunc = colorFunc[style];
			});
			if (typeof colorFunc === 'undefined') {
				throw new Error('Unsupported colorFunc');
			}
			chalkColors[color] = colorFunc;
		} catch (err) {
			console.log('Error setting style for ' + color + '. Will use default style.');
		}
	}
	return chalkColors;
}

var configInput = require('./lmeDefaultConfig.json');
var providedConfig = {};
try {
	// try to get the config file from root file of the application.
	providedConfig = require('app-root-path').require('lmeconfig.json');
} catch (e) {
	//it is okay if no override file is provided
}
configInput.colors.logs = getChalkColors(configInput.colors, providedConfig.colors);
module.exports = configInput;

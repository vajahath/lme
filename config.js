var chalk = require('chalk');

function getChalkColors(defaultConfig, overrideConfig) {
	// make the read file understandable to chalk.
	var chalkColors = buildChalkFunction(defaultConfig);
	var overrideChalkColors = buildChalkFunction(overrideConfig);
	return Object.assign({}, chalkColors, overrideChalkColors);
}

function buildChalkFunction(config) {
	var chalkColors = {};
	for (var color in config.colors) {
		if (config.colors.hasOwnProperty(color)) {
			var colorFunc = chalk;
			//build up the chalk function
			try {
				config.colors[color].forEach(function(style) {
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
configInput.colors = getChalkColors(configInput, providedConfig);
configInput._logLevels = {
	'trace': 7,
	'info': 6,
	'success': 5,
	'warning': 4,
	'error': 3,
	'highlight': 2,
	'default': 1
};
module.exports = configInput;

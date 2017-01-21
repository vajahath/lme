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

var configInput = require('../lmeDefaultConfig.json');
var providedConfig = {};
try {
	// try to get the config file from root file of the application.
	providedConfig = require('app-root-path').require('lmeconfig.json');
} catch (e) {
	//it is okay if no override file is provided
}
configInput.colors = getChalkColors(configInput, providedConfig);
configInput._logLevels = {
	'trace': {level: 7, letter: 't'},
	'info': {level: 6, letter: 'i'},
	'success': {level: 5, letter: 's'},
	'warning': {level: 4, letter: 'w'},
	'error': {level: 3, letter: 'e'},
	'highlight': {level: 2, letter: 'h'},
	'default': {level: 1, letter: 'd'}
};
configInput._types = {
	'log': 0,
	'line': 1
};
module.exports = configInput;

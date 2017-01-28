var chalk = require('chalk');

// Produce overrided configuration
function getChalkColors(defaultConfig, overrideConfig) {
	var effectiveConfig = Object.assign({}, defaultConfig, overrideConfig);

	// make the effectiveConfig understandable to chalk
	// and return it
	return buildChalkFunction(effectiveConfig);
}

function buildChalkFunction(config) {
	var chalkColors = {};
	for (var outputMethod in config) {
		if (config.hasOwnProperty(outputMethod)) {
			var colorFunc = chalk;
			//build up the chalk function
			try {
				config[outputMethod].forEach(function (style) {
					colorFunc = colorFunc[style];
				});
				if (typeof colorFunc === 'undefined') {
					throw new Error('Unsupported colorFunc');
				}
				chalkColors[outputMethod] = colorFunc;
			} catch (err) {
				console.log('Error setting style for ' + outputMethod + '. Will use default style.');
			}
		}
	}
	// console.log(chalkColors.default("fsd"));
	return chalkColors;
}

// require default configuration
var configInput = require('../lmeDefaultConfig.json');
var providedConfig = {};
try {
	// try to get the config file from root file of the application.
	providedConfig = require('app-root-path').require('lmeconfig.json');

	// mock provided config: comment out this block before releasing it to production.
	// providedConfig = {
	// 	"colors": {
	// 		"logs": {
	// 			"default": ["cyan"],
	// 			"success": ["bold", "yellow"],
	// 			"error": ["underline", "red"]
	// 		},
	// 		"line": {
	// 			"default": ["cyan"],
	// 			"error": ["red"],
	// 			"warning": ["underline", "cyan"]
	// 		}
	// 	}
	// }

} catch (e) {
	//it is okay if no override file is provided
}

if(!providedConfig.colors){
	providedConfig = {
		colors: {
			logs:{},
			lines:{}
		}
	}
}

// get color info for logs
configInput.colors.logs = getChalkColors(configInput.colors.logs, providedConfig.colors.logs);

// get color info for lines
configInput.colors.lines = getChalkColors(configInput.colors.lines, providedConfig.colors.lines);

configInput._logLevels = {
	'trace': { level: 7, letter: 't' },
	'info': { level: 6, letter: 'i' },
	'success': { level: 5, letter: 's' },
	'warning': { level: 4, letter: 'w' },
	'error': { level: 3, letter: 'e' },
	'highlight': { level: 2, letter: 'h' },
	'default': { level: 1, letter: 'd' }
};
configInput._types = {
	'log': 0,
	'line': 1
};
module.exports = configInput;

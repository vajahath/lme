var chalk = require('chalk');

function getChalkColors(configInput) {
  // make the read file understandable to chalk.
  var chalkColors = {};
  for (var color in configInput.colors) {
  	if (configInput.colors.hasOwnProperty(color)) {
  		var colorFunc = chalk;
      //build up the chalk function
      configInput.colors[color].forEach(function(style) {
  			colorFunc = colorFunc[style];
  		});
  		chalkColors[color] = colorFunc;
  	}
  }
  return chalkColors;
}

var configInput = require("./lmeDefaultConfig.json");
try {
	// try to get the config file from root file of the application.
	var providedConfig = require('app-root-path').require("lmeconfig.json");
  configInput.colors = Object.assign({}, configInput.colors, providedConfig.colors);
} catch (e) {
	//it is okay if no override file is provided
}

configInput.colors = getChalkColors(configInput);
module.exports = configInput;

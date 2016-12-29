function logWithColor(colorFunc, msg) {
	logMessage(colorFunc, msg, console.log);
}

function logTraceWithColor(colorFunc, msg) {
	console.log(colorFunc("\n<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< BEGIN"));
	logMessage(colorFunc, msg, console.trace);
	console.log(colorFunc(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END\n"));
}

function logMessage(colorFunc, msg, consoleFunc) {
	if (typeof(msg) == 'object') {
		consoleFunc(colorFunc('\n' + JSON.stringify(msg, null, 2)));
	} else {
		consoleFunc(colorFunc(msg));
	}
}

module.exports = {
	logWithColor,
	logTraceWithColor
}

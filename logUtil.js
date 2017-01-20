function getMessageArgs(args) {
	args = Array.prototype.slice.call(args, 1);
	return Array.prototype.slice.call(args[0]);
}

function logWithColor(colorFunc) {
	var args = getMessageArgs(arguments);
	logMessage(colorFunc, args, console.log);
}

function logTraceWithColor(colorFunc) {
	var args = getMessageArgs(arguments);

	console.log(colorFunc('\n<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< BEGIN'));
	logMessage(colorFunc, args, console.trace);
	console.log(colorFunc('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END\n'));
}

function logMessage(colorFunc, msgArgs, consoleFunc) {
	var outputArgs = [];

	msgArgs.forEach(function(arg) {
		if (typeof(arg) == 'object') {
			outputArgs.push('\n' + JSON.stringify(arg, null, 2));
		} else {
			outputArgs.push(arg);
		}
	});
	consoleFunc(colorFunc.apply(this, outputArgs));
}

module.exports = {
	logWithColor: logWithColor,
	logTraceWithColor: logTraceWithColor
};

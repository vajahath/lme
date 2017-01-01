var defaultChar = '-';
var defaultLength = 30;

function getChar(char, errLogFunc) {
	if (!char) {
		char = defaultChar;
	} else if (typeof(char) == 'object') {
		errLogFunc("ERROR: the line() functions can't accept objects!");
		char = defaultChar; //continue working with default behaviour.
	}

	return char;
}

function getLength(length, warnLogFunc) {
	if (!length) {
		length = defaultLength;
	} else if (length > 100) {
		// warnLogFunc("WARNING: ");
	};

	return length;
}

function buildLine(char, length) {
	var theLine = "";
	for (var i = 0; i < length; i++) {
		theLine = theLine + char;
	};
	return theLine
}

function createLine(char, length, errLogFunc, warnLogFunc) {
	var options = {};
	options.char = getChar(char, errLogFunc);
	options.length = getLength(length, warnLogFunc);
	return buildLine(options.char, options.length);
}

function logLine(char, length, errLogFunc, warnLogFunc, colorFunc) {
	var theLine = createLine(char, length, errLogFunc, warnLogFunc);

	if (colorFunc) {
		theLine = colorFunc(theLine);
	}

	console.log(theLine);
}

module.exports = {
	logLine
}

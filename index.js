var chalk = require('chalk');

var m = {
	// default
	d: function(msg) {
		if (typeof(msg) == 'object') {
			console.log(chalk.white('\n' + JSON.stringify(msg, null, 2)));
		} else {
			console.log(chalk.white(msg));
		}
	},
	// err
	e: function(msg) {
		if (typeof(msg) == 'object') {
			console.log(chalk.bgRed.white('\n' + JSON.stringify(msg, null, 2)));
		} else {
			console.log(chalk.bgRed.white(msg));
		}
	},
	// success
	s: function(msg) {
		if (typeof(msg) == 'object') {
			console.log(chalk.bold.green('\n' + JSON.stringify(msg, null, 2)));
		} else {
			console.log(chalk.bold.green(msg));
		}
	},
	// warning
	w: function(msg) {
		if (typeof(msg) == 'object') {
			console.log(chalk.bgYellow.black('\n' + JSON.stringify(msg, null, 2)));
		} else {
			console.log(chalk.bgYellow.black(msg));
		}
	},
	// highlight
	h: function(msg) {
		if (typeof(msg) == 'object') {
			console.log(chalk.bgCyan.black('\n' + JSON.stringify(msg, null, 2)));
		} else {
			console.log(chalk.bgCyan.black(msg));
		}
	},
	// lines
	line: function(char = '-', length = 30) {
		if (typeof(char) == 'object') {
			this.e("ERROR: the line() function can't accept objects!");
			char = '-';
		} else {
			if (length > 100) {
				// this.w("WARNING: Do you really need the line's length more than 100 ?");
			}
			var theLine = "";
			for (var i = 0; i < length; i++) {
				theLine = theLine + char;
			};
			console.log(theLine);
		}
	},
	dline: function(char = '-', length = 30) {
		if (typeof(char) == 'object') {
			this.e("ERROR: the line() functions can't accept objects!");
			char = '-';
		} else {
			if (length > 100) {
				// this.w("WARNING: Do you really need the line's length more than 100 ?");
			}
			var theLine = "";
			for (var i = 0; i < length; i++) {
				theLine = theLine + char;
			};
			console.log(theLine);
		}
	},
	eline: function(char = '-', length = 30) {
		if (typeof(char) == 'object') {
			this.e("ERROR: the line() functions can't accept objects!");
			char = '-';
		} else {
			if (length > 100) {
				// this.w("WARNING: Do you really need the line's length more than 100 ?");
			}
			var theLine = "";
			for (var i = 0; i < length; i++) {
				theLine = theLine + char;
			};
			console.log(chalk.bgRed.white(theLine));
		}
	},
	wline: function(char = '-', length = 30) {
		if (typeof(char) == 'object') {
			this.e("ERROR: the line() functions can't accept objects!");
			char = '-';
		} else {
			if (length > 100) {
				// this.w("WARNING: Do you really need the line's length more than 100 ?");
			}
			var theLine = "";
			for (var i = 0; i < length; i++) {
				theLine = theLine + char;
			};
			console.log(chalk.bgYellow.black(theLine));
		}
	},
	sline: function(char = '-', length = 30) {
		if (typeof(char) == 'object') {
			this.e("ERROR: the line() functions can't accept objects!");
			char = '-';
		} else {
			if (length > 100) {
				// this.w("WARNING: Do you really need the line's length more than 100 ?");
			}
			var theLine = "";
			for (var i = 0; i < length; i++) {
				theLine = theLine + char;
			};
			console.log(chalk.bold.green(theLine));
		}
	},
	hline: function(char = '-', length = 30) {
		if (typeof(char) == 'object') {
			this.e("ERROR: the line() functions can't accept objects!");
			char = '-';
		} else {
			if (length > 100) {
				// this.w("WARNING: Do you really need the line's length more than 100 ?");
			}
			var theLine = "";
			for (var i = 0; i < length; i++) {
				theLine = theLine + char;
			};
			console.log(chalk.bgCyan.black(theLine));
		}
	}

}

module.exports = m;

var chalk = require('chalk');

var m = {
	//////////////////
	// main methods //
	//////////////////

	// default
	d: function(msg) {
		if (typeof(msg) == 'object') {
			console.log(chalk.white('\n' + JSON.stringify(msg, null, 2)));
		} else {
			console.log(chalk.white(msg));
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
	// err
	e: function(msg) {
		if (typeof(msg) == 'object') {
			console.log(chalk.bgRed.white('\n' + JSON.stringify(msg, null, 2)));
		} else {
			console.log(chalk.bgRed.white(msg));
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
	//info
	i: function(msg) {
		if (typeof(msg) == 'object') {
			console.info(chalk.bold.cyan('\n' + JSON.stringify(msg, null, 2)));
		} else {
			console.info(chalk.bold.cyan(msg));
		}
	},
	//trace:
	t: function(msg) {
		if (typeof(msg) == 'object') {
			console.log(chalk.green("\n<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< BEGIN"));
			console.trace(chalk.bgGreen.white('\n' + JSON.stringify(msg, null, 2)));
			console.log(chalk.green(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END\n"));
		} else {
			console.log(chalk.green("\n<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< BEGIN"));
			console.trace(chalk.bgGreen.white(msg));
			console.log(chalk.green(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END\n"));
		}
	},

	///////////
	// lines //
	///////////

	// default
	line: function(char = '-', length = 30) {
		if (typeof(char) == 'object') {
			this.e("ERROR: the line() function can't accept objects!");
			char = '-';
		} else {
			if (length > 100) {
				// this.w("WARNING: ");
			}
			var theLine = "";
			for (var i = 0; i < length; i++) {
				theLine = theLine + char;
			};
			console.log(theLine);
		}
	},
	// default - another
	dline: function(char = '-', length = 30) {
		if (typeof(char) == 'object') {
			this.e("ERROR: the line() functions can't accept objects!");
			char = '-';
		} else {
			if (length > 100) {
				// this.w("WARNING: ");
			}
			var theLine = "";
			for (var i = 0; i < length; i++) {
				theLine = theLine + char;
			};
			console.log(theLine);
		}
	},
	// success
	sline: function(char = '-', length = 30) {
		if (typeof(char) == 'object') {
			this.e("ERROR: the line() functions can't accept objects!");
			char = '-';
		} else {
			if (length > 100) {
				// this.w("WARNING: ");
			}
			var theLine = "";
			for (var i = 0; i < length; i++) {
				theLine = theLine + char;
			};
			console.log(chalk.bold.green(theLine));
		}
	},
	// warning
	wline: function(char = '-', length = 30) {
		if (typeof(char) == 'object') {
			this.e("ERROR: the line() functions can't accept objects!");
			char = '-';
		} else {
			if (length > 100) {
				// this.w("WARNING: ");
			}
			var theLine = "";
			for (var i = 0; i < length; i++) {
				theLine = theLine + char;
			};
			console.log(chalk.bgYellow.black(theLine));
		}
	},
	// error
	eline: function(char = '-', length = 30) {
		if (typeof(char) == 'object') {
			this.e("ERROR: the line() functions can't accept objects!");
			char = '-';
		} else {
			if (length > 100) {
				// this.w("WARNING: ");
			}
			var theLine = "";
			for (var i = 0; i < length; i++) {
				theLine = theLine + char;
			};
			console.log(chalk.bgRed.white(theLine));
		}
	},
	// highlight
	hline: function(char = '-', length = 30) {
		if (typeof(char) == 'object') {
			this.e("ERROR: the line() functions can't accept objects!");
			char = '-';
		} else {
			if (length > 100) {
				// this.w("WARNING: ");
			}
			var theLine = "";
			for (var i = 0; i < length; i++) {
				theLine = theLine + char;
			};
			console.log(chalk.bgCyan.black(theLine));
		}
	}
};

module.exports = m;

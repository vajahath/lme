const chalk = require('chalk');

let m = {
	// default
	d: function(msg) {
		if (typeof(msg) == 'object') {
			console.log(chalk.white('\n'+JSON.stringify(msg, null, 2)));
		} else {
			console.log(chalk.white(msg));
		}
	},
	// err
	e: function(msg) {
		if (typeof(msg) == 'object') {
			console.log(chalk.bgRed.white('\n'+JSON.stringify(msg, null, 2)));
		} else {
			console.log(chalk.bgRed(msg));
		}
	},
	// success
	s: function(msg) {
		if (typeof(msg) == 'object') {
			console.log(chalk.bold.green('\n'+JSON.stringify(msg, null, 2)));
		} else {
			console.log(chalk.bold.green(msg));
		}
	},
	// warning
	w: function(msg) {
		if (typeof(msg) == 'object') {
			console.log(chalk.bgYellow.red('\n'+JSON.stringify(msg, null, 2)));
		} else {
			console.log(chalk.bgYellow.red.bold(msg));
		}
	},
	// highlight
	h: function(msg) {
		if (typeof(msg) == 'object') {
			console.log(chalk.bgCyan.black('\n'+JSON.stringify(msg, null, 2)));
		} else {
			console.log(chalk.bgCyan.bold(msg));
		}
	},

}

module.exports =  m;

// sample tests

// m.e({ya:"this", me:"ts"});
// m.w({ya:"this", me:"ts"});
// m.h({ya:"this", me:"ts"});
// m.s({ya:"this", me:"ts"});
// m.d({ya:"this", me:"ts"});
// m.d('\n');
// m.e('hello');
// m.w('hello');
// m.s('hello');
// m.d('hello');
// m.h('hello');

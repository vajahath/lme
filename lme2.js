// raw form

const chalk = require('chalk');

let lme = {
	properties: ["d"],
	message: "",
	d: function(msg) {
		if (msg) {
			this.message = msg;
		}
		this.properties.push("d");
		return this;
	},
	e: function(msg) {
		if (msg) {
			this.message = msg;
		}
		// this.message = chalk.red(this.message);
		this.properties.push("e");
		return this;
	},
	bold: function(msg) {
		if (msg) {
			this.message = msg;
		}
		// this.message = chalk.bold(this.message);
		this.properties.push("bold");
		return this;
	}
}

function print(raw) {
	raw.properties.forEach(function(property) {
		switch (property) {
			case 'd':
				break;
			case 'e':
				raw.message = chalk.bgRed.white(raw.message);
				break;
			case 'bold':
				raw.message = chalk.bold(raw.message);
				break
		}
	});
	console.log(raw.message);
}
print(lme.bold("hi"));
// default
// b.err("err"); //err
// Myclass.high("high"); // highlight
// Myclass.succ("succ"); //succ

// Myclass.line(); // default line
// Myclass.line('*'); // default line with *
// Myclass.succ.line(); // default line

// Myclass.decorate(); // decorations

// add.one.one(7)

//////////////////
// sample tests //
//////////////////
/**

run:
node test.js

*/

var lme = require('lme');

//////////////////
// sample tests //
//////////////////
/**

run:
node test.js

*/

function testAllLogFunctions() {
	var args = Array.prototype.slice.call(arguments);
	lme.d.apply(lme, args);
	lme.s.apply(lme, args);
	lme.w.apply(lme, args);
	lme.e.apply(lme, args);
	lme.h.apply(lme, args);
	lme.i.apply(lme, args);
	lme.t.apply(lme, args);
	lme.d('\n');
}

function testAllLineFunctions() {
	var args = Array.prototype.slice.call(arguments);
	lme.line.apply(lme, args);
	lme.dline.apply(lme, args);
	lme.sline.apply(lme, args);
	lme.wline.apply(lme, args);
	lme.eline.apply(lme, args);
	lme.hline.apply(lme, args);
}

// objects
lme.h('objects');
testAllLogFunctions({ kity: 'is pinky', fluffy: 'is funny!' });

// strings
lme.h('strings');
testAllLogFunctions('mango is sweet!');

//Multiple Params
lme.h('multiple params');
testAllLogFunctions('mango is sweet!', { mango: 'sweet' });
testAllLogFunctions('mango is sweet!', '!!!');
testAllLogFunctions({ 'mango is': 'sweet' }, { 'mango is': 'sweet' });


// lines
lme.h('lines');
testAllLineFunctions();
testAllLineFunctions('*', 10);
testAllLineFunctions('*', 110);

// error-ed outputs for lines
lme.i('\nerror-ed outputs');

testAllLineFunctions({ yu: 1 });

lme.i('test finished');

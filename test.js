// sample tests
/**

run:
node test.js

*/

const lme = require('./index');

lme.e({ya:"this", me:"ts"});

lme.w({ya:"this", me:"ts"});
lme.h({ya:"this", me:"ts"});
lme.s({ya:"this", me:"ts"});
lme.d({ya:"this", me:"ts"});
lme.d('\n');
lme.e('hello');
lme.w('hello');
lme.s('hello');
lme.d('hello');
lme.h('hello');
lme.d('\n');
// lme.line('*', 150);
lme.dline('*',30);
lme.line('*',12);
lme.eline("#");
lme.wline({yu:1});
lme.sline("/");
lme.hline({"o":9});
// lme.eline({ye:"ki"});

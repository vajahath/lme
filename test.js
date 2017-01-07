//////////////////
// sample tests //
//////////////////
/**

run:
node test.js

*/

const lme = require('./index');

// objects
lme.d({ kity: "is pinky", fluffy: "is funny!" });
lme.s({ kity: "is pinky", fluffy: "is funny!" });
lme.w({ kity: "is pinky", fluffy: "is funny!" });
lme.e({ kity: "is pinky", fluffy: "is funny!" });
lme.h({ kity: "is pinky", fluffy: "is funny!" });
lme.i({ kity: "is pinky", fluffy: "is funny!" });
lme.t({ kity: "is pinky", fluffy: "is funny!" });
lme.d('\n');

// strings
lme.d('mango is sweet!');
lme.s('mango is sweet!');
lme.w('mango is sweet!');
lme.e('mango is sweet!');
lme.h('mango is sweet!');
lme.i('mango is sweet!');
lme.t('mango is sweet!');
lme.d('\n');

//Multiple Params
lme.d('mango is sweet!', { mango: 'sweet'});
lme.s('mango is sweet!', { mango: 'sweet'});
lme.w('mango is sweet!', { mango: 'sweet'});
lme.e('mango is sweet!', { mango: 'sweet'});
lme.h('mango is sweet!', { mango: 'sweet'});
lme.i('mango is sweet!', { mango: 'sweet'});
lme.t('mango is sweet!', { mango: 'sweet'});
lme.d('\n');

lme.d('mango is sweet!', '!!!');
lme.s('mango is sweet!', '!!!');
lme.w('mango is sweet!', '!!!');
lme.e('mango is sweet!', '!!!');
lme.h('mango is sweet!', '!!!');
lme.i('mango is sweet!', '!!!');
lme.t('mango is sweet!', '!!!');
lme.d('\n');

// lines
lme.line();
lme.line('*', 10);

lme.dline();
lme.dline('*', 10);

lme.sline();
lme.sline('*', 10);

lme.wline();
lme.wline('*', 10);

lme.eline();
lme.eline('*', 10);

lme.hline();
lme.hline('*', 10);

// error-ed outputs for lines
lme.i("\nerror-ed outputs");
lme.line({ yu: 1 });
lme.dline({ yu: 1 });
lme.sline({ yu: 1 });
lme.wline({ yu: 1 });
lme.eline({ yu: 1 });
lme.hline({ yu: 1 });

lme.i('test finished');

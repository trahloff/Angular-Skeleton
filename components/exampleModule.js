'use strict';

const name = 'exampleModule';

exports.say = stuff => {
    console.log("The friendly module says '" + stuff + "' I'm " + name);
};

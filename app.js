'use strict';


const {publish} = require('./publish');
const {subscribe} = require('./subscribe');

setInterval(() => {
    publish()
}, 1000);

subscribe();
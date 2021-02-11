'use strict';


const {natsClient} = require('./clients/nats');
const {randInt} = require('./services/random');

module.exports = {
    publish: () => {
        const a = randInt(1000);
        const b = randInt(1000);

        console.log(`Publish two numbers: ${a} and ${b}`);

        natsClient.publish('sum-service', {
            a: a,
            b: b
        });
    }
}

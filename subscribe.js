'use strict';


const {natsClient} = require('./clients/nats');
const {sum} = require('./services/math');

module.exports = {
    subscribe: () => {
        natsClient.subscribe('sum-service', (message) => {
            const a = message.a;
            const b = message.b;
            const c = sum(a, b);

            console.log(`Received message: ${a} + ${b} is ${c}`);
        });
    }
}

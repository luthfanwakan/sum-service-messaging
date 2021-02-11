'use strict';


require('dotenv').config()

const nats = require('nats');
const natsClient = nats.connect({
    json: true,
    url: process.env.NATS_URI
});

module.exports = {
    natsClient: natsClient
}
#!/usr/bin/env node

var config = require('./config');

if (!config.dashbutton) {
  console.log('Add your dash button MAC address to ./config.js');
  process.exit();
}

if (!config.uber.clientId || !config.uber.clientSecret || !config.uber.serverToken) {
  console.log('Create an Uber application and add the credentials to ./config.js');
  process.exit();
}

var network = require('./src/network');
var uber    = require('./src/uber');

network.listenForDashPress(config.dashbutton, uber.call);

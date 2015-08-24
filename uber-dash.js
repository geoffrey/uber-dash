#!/usr/bin/env node

var commander = require('commander');
var network   = require('./network');
var uber      = require('./uber');

var DEFAULT_DASHBUTTON_MAC_ADDRESS = 'a0:02:dc:b1:3d:b2';

commander
  .version('1.0.0')
  .option('-m, --mac', 'Dashbutton MAC address')
  .option('-t, --type', 'Type of uber')
  .option('-p, --pickup', 'Pickup location')
  .option('-d`, --drop', 'Dropoff location')
  .parse(process.argv);

var dashbutton = commander.mac || DEFAULT_DASHBUTTON_MAC_ADDRESS;

network.listenForDashPress(dashbutton, uber.pool);

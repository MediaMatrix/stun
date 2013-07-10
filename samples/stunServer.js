/*
 * Copyright (c) 2011 Yutaka Takeda <yt0916 at gmail.com>
 * MIT Licensed
 */

var stun = require('../lib/stun.js');

// Load config file.
var fs = require('fs');
eval(fs.readFileSync('stunServer.conf', encoding="ascii"));

var server = stun.createServer();
server.setAddress0('127.0.0.2');
server.setAddress1('127.0.0.3');
server.setPort0(settings.STUN_SERVER_PORT_0);
server.setPort1(settings.STUN_SERVER_PORT_1);
server.listen();
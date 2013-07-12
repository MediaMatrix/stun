# STUN server for Node.js

## Overview
STUN (Simple Traversal of UDP through NAT: RFC3489) is a protocol that allows a client node to obtain an external IP address and port number assigned by a NAT the client is behind. It can also identify behavioral type of the NAT. It is implemented in JavaScript to run with node.js. I started this work originally to learn node.js and JavaScript, however, this library may help other people who are interested in using STUN.
(This implementation is a packaged version of https://github.com/enobufs/stun so all thanks go to him/her)

## System requirement
* Node.js v0.4 or above
* Two IP addresses on the same machine (for server)

# How to install STUN server
    $ npm install -g stunsrv

## How to run STUN server

(1) execute stunsrv from the command line or
(2) create and handle a stun server through the class from a js file

    # From terminal
    $ stunsrv
    $ stunsrv firstIP secondIP firstPort secondPort

    # Or programmatically
    var stun = require('stunsrv');
    var server = stun.createServer();
    server.setAddress0("externalIP0");
    server.setAddress1("externalIP1");
    server.setPort0(port0);
    server.setPort1(port1);
    server.listen();

That is it!

# Limitations
* Current implementation does not support RFC 5389
* Following attributes are not supported
   * RESPONSE-ADDRESS
   * CHANGED-ADDRESS
   * USERNAME
   * PASSWORD
   * MESSAGE-INTEGRITY
   * ERROR-CODE
   * UNKNOWN-ATTRIBUTE
   * REFLECTED-FROM
   * XOR-MAPPED-ADDRESS (RFC3489bis)

# License
MIT Licensed

# CONTRIBUTORS WANTED!!
Please contact me.


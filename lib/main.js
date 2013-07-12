//main.js

(function ()
{
	var stun = require('./stun');

	console.log('Starting Server . . .');
	
	if ( !process.argv[2] )
	{
		console.log("Running with no parameters.\n First parameter is external IP 1.\n Second Parameter is external IP 2.\n Third Parameter is port 1.\n Fourth parameter is port 2.");
		process.argv[2] = '127.0.0.2';
	}
	if ( !process.argv[3] )
	{
		process.argv[3] = '127.0.0.3';
	}
	if ( !process.argv[4] )
	{
		process.argv[4] = 3478;
	}
	if ( !process.argv[5] )
	{
		process.argv[5] = 3479;
	}
	var server = stun.createServer();
	server.setAddress0(process.argv[2]);
	server.setAddress1(process.argv[3]);
	server.setPort0(process.argv[4]);
	server.setPort1(process.argv[5]);
	server.listen();
	
}).call(this)
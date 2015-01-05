// Dependencies
var express = require('express');
var http = require('http');
var JoustServer = require('./JoustServer.js');


// Properties
var app = express();
var server = http.Server(app);
var joustServer = new JoustServer(server);
var port = (process.env.PORT || 3000);


// Routes
app.get('/', function (request, response) {
    response.sendFile(__dirname + '/public/index.html');
});

app.get('/assets/**/*', function (request, response) {
    response.sendFile(__dirname + '/public/' + request.url);
});


// Start listening
server.listen(port, function () {
    console.log('Listening on ' + port);
});

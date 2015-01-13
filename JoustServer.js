var socketIO = require('socket.io');
var CANNON = require('cannon');

function JoustServer (server) {

    this.io = socketIO(server);

    this.init();
}


JoustServer.prototype.init = function () {
    this.io.on('connection', function (socket) {
        console.log('connection!');
        socket.on('disconnect', function(){
            console.log('disconnect!');
        });
    });
};


module.exports = JoustServer;

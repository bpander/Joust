requirejs.config({

    paths: {

        'threejs': 'vendor/threejs/build/three',
        'socket.io': 'vendor/socket.io-client/socket.io'

    },

    shim: {

        'threejs': {
            exports: 'THREE'
        }

    }

});

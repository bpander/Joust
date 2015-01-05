requirejs.config({

    paths: {

        'cannon': 'vendor/cannon.js/build/cannon',
        'socket.io': 'vendor/socket.io-client/socket.io',
        'threejs': 'vendor/threejs/build/three'

    },

    shim: {

        'threejs': {
            exports: 'THREE'
        },

        'cannon': {
            exports: 'CANNON'
        }

    }

});

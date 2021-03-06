define(function (require) {
    'use strict';

    var CANNON = require('cannon');
    var THREE = require('threejs');


    function Platform () {

        this.body = new CANNON.Body({ mass: 0 });

        this.geometry = new THREE.BoxGeometry(20, 1, 2);

        this.material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

        this.mesh = new THREE.Mesh(this.geometry, this.material);

        this.shape = new CANNON.Box(new CANNON.Vec3(10, 0.5, 1));

        this.init();
    }


    Platform.prototype.init = function () {
        this.body.addShape(this.shape);
    };


    return Platform;
});

define(function (require) {
    'use strict';

    var CANNON = require('cannon');
    var THREE = require('threejs');


    function Platform () {

        this.body = new CANNON.Body({ mass: 1 });

        this.geometry = new THREE.BoxGeometry(2, 2, 2);

        this.material = new THREE.MeshBasicMaterial({ color: 0x0000ff });

        this.mesh = new THREE.Mesh(this.geometry, this.material);

        this.shape = new CANNON.Box(new CANNON.Vec3(1, 1, 1));

        this.init();
    }


    Platform.prototype.init = function () {
        this.body.addShape(this.shape);
    };


    return Platform;
});

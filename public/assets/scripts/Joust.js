define(function (require) {
    'use strict';

    var THREE = require('threejs');
    var io = require('socket.io');


    function Joust () {

        this.camera = new THREE.Camera(75, window.innerWidth / window.innerHeight, 1, 10000);

        this.renderer = new THREE.WebGLRenderer();

        this.scene = new THREE.Scene();

        this.socket = io();

        this.init();
    }


    Joust.prototype.init = function () {
        this.camera.z = 1000;
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
        return this;
    };


    return Joust;
});

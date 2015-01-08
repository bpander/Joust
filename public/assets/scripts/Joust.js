define(function (require) {
    'use strict';

    var Box = require('prefabs/Box');
    var CANNON = require('cannon');
    var Platform = require('prefabs/Platform');
    var THREE = require('threejs');

    function Joust () {

        this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000);

        this.renderer = new THREE.WebGLRenderer();

        this.scene = new THREE.Scene();

        this.world = new CANNON.World();

        // TODO: These should be organized better (in like a `this.prefabs` array or something)
        this.platform = new Platform();
        this.box = new Box();

        this.handleResize = this.handleResize.bind(this);
        this.loop = this.loop.bind(this);

        this.init();
    }


    var TIME_STEP = 1 / 60;


    Joust.prototype.init = function () {
        var self = this;
        document.body.appendChild(this.renderer.domElement);

        // TODO: This block needs to be organized
        this.camera.position.z = 10;
        this.camera.position.y = 1;
        this.world.gravity.set(0, -9.82, 0);
        this.world.add(this.platform.body);
        this.scene.add(this.platform.mesh);
        this.world.add(this.box.body);
        this.scene.add(this.box.mesh);
        this.box.body.position.y = 3;
        this.box.body.position.x = 0;

        this.box.body.fixedRotation = true;
        this.box.body.updateMassProperties();
        document.body.addEventListener('touchstart', function (e) {
            var percentAcross = e.touches[0].pageX / window.innerWidth;
            var max = 200;
            joust.box.body.applyForce(new CANNON.Vec3((percentAcross * max) - (max / 2), 200, 0), new CANNON.Vec3(joust.box.body.position.x, joust.box.body.position.y, joust.box.body.position.z));
        });

        this.updateAspectRatio();
        this.enable();
        this.loop();
        return this;
    };


    ////////////////////
    // Public methods //
    ////////////////////

    Joust.prototype.enable = function () {
        window.addEventListener('resize', this.handleResize);
        return this;
    };


    Joust.prototype.loop = function () {
        this.render();
        window.requestAnimationFrame(this.loop);
    };


    Joust.prototype.render = function () {
        this.world.step(TIME_STEP);


        // TODO: This needs to go in its own method
        this.platform.mesh.position.copy(this.platform.body.position);
        this.platform.mesh.quaternion.copy(this.platform.body.quaternion);
        this.box.mesh.position.copy(this.box.body.position);
        this.box.mesh.quaternion.copy(this.box.body.quaternion);


        this.renderer.render(this.scene, this.camera);
        return this;
    };


    Joust.prototype.updateAspectRatio = function () {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        return this;
    };


    ////////////////////
    // Event handlers //
    ////////////////////

    Joust.prototype.handleResize = function (e) {
        this.updateAspectRatio();
    };


    return Joust;
});

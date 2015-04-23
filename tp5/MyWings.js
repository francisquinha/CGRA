/**
 * MyClockHand
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

//MyClockHand e uma subclasse de CGFobject
function MyWings(scene, width, height) {
	CGFobject.call(this,scene);
	this.width = width;
	this.height = height;
	var XOffset = 0.0;
	var xIncValue = 0.2;

	this.initBuffers();
};

MyWings.prototype = Object.create(CGFobject.prototype);
MyWings.prototype.constructor=MyWings;

MyWings.prototype.initBuffers = function () {
	this.vertices = [
            -0.5, 0, 0,
             0.5, 0, 0,
             0, 4, 0	];

	this.indices = [
            0, 1, 2, 
        ];

    this.normals = [ 0, 0, 1,
                     0, 0, 1,
                     0, 0, 1 ];

	this.primitiveType=this.scene.gl.TRIANGLES;
	this.initGLBuffers();
};

MyWings.prototype.setAngle = function (angle) {
	this.angle = angle * degToRad;
};

MyWings.prototype.setTranslate = function (XOffset) {
	this.XOffset = XOffset;
};

MyWings.prototype.display = function() {
    this.scene.pushMatrix();
	//this.scene.rotate(this.angle, 0, 0, 1);
	this.scene.translate(this.XOffset - this.xIncValue, 0, 0);
	this.scene.scale(this.width, this.height, 1);
	CGFobject.prototype.display.call(this);
    this.scene.popMatrix();
};

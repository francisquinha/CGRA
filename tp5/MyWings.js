/**
 * MyWings
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

function MyWings(scene) {
	CGFobject.call(this,scene);
	this.initBuffers();
};

MyWings.prototype = Object.create(CGFobject.prototype);
MyWings.prototype.constructor=MyWings;

MyWings.prototype.initBuffers = function () {
	this.vertices = [
            0, 0, 0,
             1, 0, 0,
               0, 1, 0 ];

	this.indices = [
            0, 1, 2, 
            0, 2, 1
        ];

    this.normals = [ 0, 0, 1,
                     0, 0, 1,
                     0, 0, 1 ];

	this.primitiveType=this.scene.gl.TRIANGLES;
	this.initGLBuffers();
};


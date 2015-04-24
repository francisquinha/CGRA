/**
 * MyWings
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

function MyWings(scene,minS,maxS,minT,maxT) {
	CGFobject.call(this,scene);

	this.minS = minS || 0;
	this.maxS = maxS || 1;
	this.minT = minT || 0;
	this.maxT = maxT || 1;

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


	this.texCoords = [
    
		this.minS, this.maxT,
		this.maxS, this.maxT,
		this.minS, this.minT,
		this.maxS, this.minT
		];


	this.primitiveType=this.scene.gl.TRIANGLES;
	this.initGLBuffers();
};


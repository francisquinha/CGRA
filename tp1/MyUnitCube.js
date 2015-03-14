/**
 * MyUnitCube
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

//MyUnitCube e uma subclasse de CGFobject
function MyUnitCube(scene) {
	CGFobject.call(this,scene);

	this.initBuffers();
};

MyUnitCube.prototype = Object.create(CGFobject.prototype);
MyUnitCube.prototype.constructor=MyUnitCube;

MyUnitCube.prototype.initBuffers = function () {
	this.vertices = [
            -0.5, -0.5,  0.5, // 0
             0.5, -0.5,  0.5, // 1
            -0.5,  0.5,  0.5, // 2
             0.5,  0.5,  0.5, // 3
            -0.5, -0.5, -0.5, // 4
             0.5, -0.5, -0.5, // 5
            -0.5,  0.5, -0.5, // 6
             0.5,  0.5, -0.5, // 7
			];

	this.indices = [
            0, 1, 2, // frente
			3, 2, 1, // frente
			1, 5, 3, // direita
			3, 5, 7, // direita
			3, 7, 6, // cima
			2, 3, 6, // cima
			2, 6, 4, // esquerda
			0, 2, 4, // esquerda
			0, 4, 1, // baixo
			1, 4, 5, // baixo
			6, 5, 4, // tras
			5, 6, 7  // tras
        ];
		
	this.primitiveType=this.scene.gl.TRIANGLES;
	this.initGLBuffers();
};

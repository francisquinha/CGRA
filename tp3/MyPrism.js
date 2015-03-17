/**
 * MyPrism
 * @constructor
 */
 function MyPrism(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices=slices;
	this.stacks=stacks;

 	this.initBuffers();
 };

 MyPrism.prototype = Object.create(CGFobject.prototype);
 MyPrism.prototype.constructor = MyPrism;

 MyPrism.prototype.initBuffers = function() {
 	/*
 	* TODO:
 	* Replace the following lines in order to build a prism with a **single mesh**.
 	*
 	* How can the vertices, indices and normals arrays be defined to
 	* build a prism with varying number of slices and stacks?
 	*/

	var degToRad = Math.PI / 180.0;

	var ang = 360 * degToRad / this.slices;

	this.vertices = [];
	this.indices = [];
	this.normals = [];

	for (j = 0; j < this.stacks; j++) {

		for (i = 0; i < this.slices; i++) {

			var x0 = Math.cos(ang * i);
			var y0 = Math.sin(ang * i);
			var z0 = j / this.stacks;
			var x1 = Math.cos(ang * (i + 1));
			var y1 = Math.sin(ang * (i + 1));
			var z1 = (j + 1) / this.stacks;

			this.vertices.push(x0);
			this.vertices.push(y0);
			this.vertices.push(z0); // vertice 0

			this.vertices.push(x1);
			this.vertices.push(y1);
			this.vertices.push(z0); // vertice 1

			this.vertices.push(x0)
			this.vertices.push(y0);
			this.vertices.push(z1); // vertice 2

			this.vertices.push(x1);
			this.vertices.push(y1);
 			this.vertices.push(z1); // vertice 3

			this.indices.push(4 * i + j * 4 * this.slices); // 0
			this.indices.push(4 * i + 1 + j * 4 * this.slices); // 1
			this.indices.push(4 * i + 2 + j * 4 * this.slices); // 2

			this.indices.push(4 * i + 3 + j * 4 * this.slices); // 3
			this.indices.push(4 * i + 2 + j * 4 * this.slices); // 2
			this.indices.push(4 * i + 1 + j * 4 * this.slices); // 1

			var xn = Math.cos(ang * (i + 0.5));
			var yn = Math.sin(ang * (i + 0.5));
			var zn = 0;

			for (k = 0; k < 4; k++) {
				this.normals.push(xn)
				this.normals.push(yn)
				this.normals.push(zn);
			}			
		}
	}

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };

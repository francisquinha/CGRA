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

	var degToRad = Math.PI / 180.0;

	var ang = 360 * degToRad / this.slices;
	var half_ang = ang / 2;

	this.vertices = [];
	this.indices = [];
	this.normals = [];

	var ind_j = 0;
	var aux_j = 4 * this.slices;
	
	for (j = 0; j < this.stacks; j++) {
		
		var ang_now = 0;
		var ind_i = 0;

		for (i = 0; i < this.slices; i++) {

			var x0 = Math.cos(ang_now);
			var y0 = Math.sin(ang_now);
			var z0 = j / this.stacks;

			ang_now += ang;

			var x1 = Math.cos(ang_now);
			var y1 = Math.sin(ang_now);
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

 			var ind_i_j = ind_i + ind_j;

			this.indices.push(ind_i_j); // 0
			this.indices.push(ind_i_j + 1); // 1
			this.indices.push(ind_i_j + 2); // 2

			this.indices.push(ind_i_j + 3); // 3
			this.indices.push(ind_i_j + 2); // 2
			this.indices.push(ind_i_j + 1); // 1

			ind_i += 4;

			var ang_aux = ang_now + half_ang;

			var xn = Math.cos(ang_aux);
			var yn = Math.sin(ang_aux);
			var zn = 0;

			for (k = 0; k < 4; k++) {
				this.normals.push(xn);
				this.normals.push(yn);
				this.normals.push(zn);
			}			
		}
		ind_j += aux_j;
	}

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 	
 };

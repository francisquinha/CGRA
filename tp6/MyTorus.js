/**
 * MyTorus
 * @constructor
 */
 function MyTorus(scene, slices, stacks, r) {
 	CGFobject.call(this,scene);
	
	this.slices=slices;
	this.stacks=stacks;
	this.r = r; // 0 < r < 1
	this.R = 1 - r / 2;

 	this.initBuffers();
 };

 MyTorus.prototype = Object.create(CGFobject.prototype);
 MyTorus.prototype.constructor = MyTorus;

 MyTorus.prototype.initBuffers = function() {

	var ang_0 = 360 * degToRad / this.slices;
	var ang_1 = 360 * degToRad / this.stacks;

	this.vertices = [];
	this.indices = [];
	this.normals = [];
	this.texCoords = [];

	var ang_1_now = 0;
	var ang_1_then = ang_1;
	var ind_j = 0;
	var aux_j = 4 * this.slices;
	
	for (j = 0; j < this.stacks; j++) {
		
		var ang_0_now = 0;
		var ind_i = 0;

		for (i = 0; i < this.slices; i++) {

			var cos1n = Math.cos(ang_1_now);
			var cos0n = Math.cos(ang_0_now);
			var sin1n = Math.sin(ang_1_now);
			var sin0n = Math.sin(ang_0_now);
			var cos1t = Math.cos(ang_1_then);
			var sin1t = Math.sin(ang_1_then);

			var x0 = cos1n * (this.R + this.r * cos0n);
			var y0 = - sin1n * (this.R + this.r * cos0n);
			var z0 = this.r * sin0n;

			var nx0 = cos1n * cos0n;
			var ny0 = - sin1n * cos0n;
			var nz0 = sin0n;

			var x2 = cos1t * (this.R + this.r * cos0n);
			var y2 = - sin1t * (this.R + this.r * cos0n);
			var z2 = this.r * sin0n;

			var nx2 = cos1t * cos0n;
			var ny2 = - sin1t * cos0n;
			var nz2 = sin0n;

			ang_0_now += ang_0;
			cos0n = Math.cos(ang_0_now);
			sin0n = Math.sin(ang_0_now);

			var x1 = cos1n * (this.R + this.r * cos0n);
			var y1 = - sin1n * (this.R + this.r * cos0n);
			var z1 = this.r * sin0n;

			var nx1 = cos1n * cos0n;
			var ny1 = - sin1n * cos0n;
			var nz1 = Math.sin(ang_0_now);

			var x3 = cos1t * (this.R + this.r * cos0n);
			var y3 = - sin1t * (this.R + this.r * cos0n);
			var z3 = this.r * sin0n;

			var nx3 = cos1t * cos0n;
			var ny3 = - sin1t * cos0n;
			var nz3 = sin0n;

			this.vertices.push(x0);
			this.vertices.push(y0);
			this.vertices.push(z0); // vertice 0

			this.vertices.push(x1);
			this.vertices.push(y1);
			this.vertices.push(z1); // vertice 1

			this.vertices.push(x2)
			this.vertices.push(y2);
			this.vertices.push(z2); // vertice 2

			this.vertices.push(x3);
			this.vertices.push(y3);
 			this.vertices.push(z3); // vertice 3

 			var ind_i_j = ind_i + ind_j;

			this.indices.push(ind_i_j); 	// 0
			this.indices.push(ind_i_j + 1); // 1
			this.indices.push(ind_i_j + 2); // 2

			this.indices.push(ind_i_j + 3); // 3
			this.indices.push(ind_i_j + 2); // 2
			this.indices.push(ind_i_j + 1); // 1

			ind_i += 4;

			// normal a vertice 0
			this.normals.push(nx0);
			this.normals.push(ny0);
			this.normals.push(nz0);

			// normal a vertice 1
            this.normals.push(nx1);
			this.normals.push(ny1);
			this.normals.push(nz1);

			// normal a vertice 2
			this.normals.push(nx2);
			this.normals.push(ny2);
			this.normals.push(nz2);

			// normal a vertice 3
            this.normals.push(nx3);
			this.normals.push(ny3);
			this.normals.push(nz3);

			// coordenadas textura
			this.texCoords.push(1 - i / this.slices, j / this.stacks);
			this.texCoords.push(1 - (i + 1) / this.slices, j / this.stacks);
			this.texCoords.push(1 - i / this.slices, (j + 1) / this.stacks);
			this.texCoords.push(1 - (i + 1) / this.slices, (j + 1) / this.stacks);
		}			
		ang_1_now += ang_1;
		ang_1_then += ang_1;
		ind_j += aux_j;
	}

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();

 };

/**
 * MyBall
 * @constructor
 */
 function MyBall(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices=slices;
	this.stacks=stacks;
	this.milisegundos = 0;

 	this.initBuffers();
 };

 MyBall.prototype = Object.create(CGFobject.prototype);
 MyBall.prototype.constructor = MyBall;

 MyBall.prototype.initBuffers = function() {

	var ang_0 = 360 * degToRad / this.slices;
	var ang_1 = 180 * degToRad / this.stacks;

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

			var x0 = sin1n * cos0n;
			var y0 = cos1n;
			var z0 = sin1n * sin0n;

			var x2 = sin1t * cos0n;
			var y2 = cos1t;
			var z2 = sin1t * sin0n;

			ang_0_now += ang_0;
			cos0n = Math.cos(ang_0_now);
			sin0n = Math.sin(ang_0_now);

			var x1 = sin1n * cos0n;
			var y1 = cos1n;
			var z1 = sin1n * sin0n;

			var x3 = sin1t * cos0n;
			var y3 = cos1t;
			var z3 = sin1t * sin0n;

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
			this.normals.push(x0);
			this.normals.push(y0);
			this.normals.push(z0);
			
			// normal a vertice 1
            this.normals.push(x1);
			this.normals.push(y1);
			this.normals.push(z1);

			// normal a vertice 2
			this.normals.push(x2);
			this.normals.push(y2);
			this.normals.push(z2);
			
			// normal a vertice 3
            this.normals.push(x3);
			this.normals.push(y3);
			this.normals.push(z3);

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


MyBall.prototype.setAngle = function (angle) {
	this.angle = angle * degToRad;
};

MyBall.prototype.display = function() {
    this.scene.pushMatrix();
	this.scene.rotate(-this.angle, 0, 1, 0);
    CGFobject.prototype.display.call(this);
    this.scene.popMatrix();
};

MyBall.prototype.update = function (currTime) {
	this.angle = (currTime - this.milisegundos) / 2000;
};

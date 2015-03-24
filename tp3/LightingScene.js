var degToRad = Math.PI / 180.0;

var BOARD_WIDTH = 6.0;
var BOARD_HEIGHT = 4.0;

var BOARD_A_DIVISIONS = 10;
var BOARD_B_DIVISIONS = 80;

function LightingScene() {
	CGFscene.call(this);
}

LightingScene.prototype = Object.create(CGFscene.prototype);
LightingScene.prototype.constructor = LightingScene;

LightingScene.prototype.init = function(application) {
	CGFscene.prototype.init.call(this, application);

	this.initCameras();

	this.initLights();

    this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
	this.gl.clearDepth(100.0);
	this.gl.enable(this.gl.DEPTH_TEST);
	this.gl.enable(this.gl.CULL_FACE);
	this.gl.depthFunc(this.gl.LEQUAL);

	this.axis = new CGFaxis(this);

	// Scene elements
	this.lamp = new MyLamp(this, 8, 4);
	this.cylinder = new MyCylinder(this, 8, 20);
	this.prism = new MyPrism(this, 8, 20);
	this.table = new MyTable(this);
	this.chair = new MyChair(this);
	this.wall = new Plane(this);
	this.boardA = new Plane(this, BOARD_A_DIVISIONS);
	this.boardB = new Plane(this, BOARD_B_DIVISIONS);

	// Materials
	this.materialDefault = new CGFappearance(this);
	
	this.materialA = new CGFappearance(this);
	this.materialA.setAmbient(0.3,0.3,0.3,1);
	this.materialA.setDiffuse(0.6,0.6,0.6,1);
	this.materialA.setSpecular(0.2,0.2,0.2,1);
	this.materialA.setShininess(10);

	this.materialB = new CGFappearance(this);
	this.materialB.setAmbient(1.0, 1.0, 1.0, 0.1);
	this.materialB.setDiffuse(1.0, 1.0, 1.0, 0.1);
	this.materialB.setSpecular(1.0, 1.0, 1.0, 1);	
	this.materialB.setShininess(120);
	
	this.materialW = new CGFappearance(this);
	this.materialW.setAmbient(0.6, 0.6, 1.0, 0.2);
	this.materialW.setDiffuse(0.6, 0.6, 1.0, 0.2);
	this.materialW.setSpecular(0.6, 0.6, 1.0, 0.1);
	this.materialW.setShininess(10);

	this.materialF = new CGFappearance(this);
	this.materialF.setAmbient(0.9, 0.9, 0.9, 0.4);
	this.materialF.setDiffuse(0.9, 0.9, 0.9, 0.4);
	this.materialF.setSpecular(0.9, 0.9, 0.9, 1);	
	this.materialF.setShininess(120);

};

LightingScene.prototype.initCameras = function() {
	this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(30, 30, 30), vec3.fromValues(0, 0, 0));
};

LightingScene.prototype.initLights = function() {
	this.setGlobalAmbientLight(0.2, 0.2, 0.2, 1.0);

	this.shader.bind();
	
	// Positions for four lights
	this.lights[0].setPosition(4.5, 6.0, 4.0, 1.0);
	this.lights[1].setPosition(12, 6.0, 4.0, 1.0);
	this.lights[2].setPosition(12, 6.0, 9.0, 1.0);
	this.lights[3].setPosition(4.5, 6.0, 9.0, 1.0);

	this.lights[0].setAmbient(0.0, 0.0, 0.0, 1.0);
	this.lights[0].setDiffuse(1.0, 1.0, 1.0, 0.5);
	this.lights[0].setSpecular(1.0, 1.0, 1.0, 0.5);
	this.lights[0].setConstantAttenuation(0.0);
	this.lights[0].setLinearAttenuation(0.8);
	this.lights[0].setQuadraticAttenuation(0.0);
	this.lights[0].enable()

	this.lights[1].setAmbient(0.0, 0.0, 0.0, 1.0);
	this.lights[1].setDiffuse(1.0, 1.0, 1.0, 0.5);
	this.lights[1].setSpecular(1.0, 1.0, 1.0, 0.5);
	this.lights[1].setConstantAttenuation(0.0);
	this.lights[1].setLinearAttenuation(0.8);
	this.lights[1].setQuadraticAttenuation(0.0);
	this.lights[1].enable();

	this.lights[2].setAmbient(0.0, 0.0, 0.0, 1.0);
	this.lights[2].setDiffuse(1.0, 1.0, 1.0, 0.5);
	this.lights[2].setSpecular(1.0, 1.0, 1.0, 0.5);
	this.lights[2].setConstantAttenuation(0.0);
	this.lights[2].setLinearAttenuation(0.8);
	this.lights[2].setQuadraticAttenuation(0.0);
	this.lights[2].enable();

	this.lights[3].setAmbient(0.0, 0.0, 0.0, 1.0);
	this.lights[3].setDiffuse(1.0, 1.0, 1.0, 0.5);
	this.lights[3].setSpecular(1.0, 1.0, 1.0, 0.5);
	this.lights[3].setConstantAttenuation(0.0);
	this.lights[3].setLinearAttenuation(0.8);
	this.lights[3].setQuadraticAttenuation(0.0);
	this.lights[3].enable();

	this.lights[0].setVisible(true);
	this.lights[1].setVisible(true);
	this.lights[2].setVisible(true);
	this.lights[3].setVisible(true);

	this.shader.unbind();
};

LightingScene.prototype.updateLights = function() {
	for (i = 0; i < this.lights.length; i++)
		this.lights[i].update();
}


LightingScene.prototype.display = function() {
	this.shader.bind();

	// ---- BEGIN Background, camera and axis setup

	// Clear image and depth buffer everytime we update the scene
	this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
	this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

	// Initialize Model-View matrix as identity (no transformation)
	this.updateProjectionMatrix();
	this.loadIdentity();

	// Apply transformations corresponding to the camera position relative to the origin
	this.applyViewMatrix();

	// Update all lights used
	this.updateLights();

	// Draw axis
	this.axis.display();

	this.materialDefault.apply();

	// ---- END Background, camera and axis setup

	
	// ---- BEGIN Geometric transformation section

	// ---- END Geometric transformation section


	// ---- BEGIN Primitive drawing section

	// Floor
	this.pushMatrix();
		this.translate(7.5, 0, 7.5);
		this.rotate(-90 * degToRad, 1, 0, 0);
		this.scale(15, 15, 0.2);
		this.materialF.apply();
		this.wall.display();
	this.popMatrix();

	// Left Wall
	this.pushMatrix();
		this.translate(0, 4, 7.5);
		this.rotate(90 * degToRad, 0, 1, 0);
		this.scale(15, 8, 0.2);
		this.materialW.apply();
		this.wall.display();
	this.popMatrix();

	// Plane Wall
	this.pushMatrix();
		this.translate(7.5, 4, 0);
		this.scale(15, 8, 0.2);
		this.materialW.apply();
		this.wall.display();
	this.popMatrix();

	// First Table
	this.pushMatrix();
		this.translate(5, 0, 8);
		this.table.display();
	this.popMatrix();

	// Second Table
	this.pushMatrix();
		this.translate(12, 0, 8);
		this.table.display();
	this.popMatrix();

	// Board A
	this.pushMatrix();
		this.translate(4, 4.5, 0.2);
		this.scale(BOARD_WIDTH, BOARD_HEIGHT, 1);
		this.materialA.apply();
		this.boardA.display();
	this.popMatrix();

	// Board B
	this.pushMatrix();
		this.translate(10.5, 4.5, 0.2);
		this.scale(BOARD_WIDTH, BOARD_HEIGHT, 1);
		this.materialB.apply();
		this.boardB.display();
	this.popMatrix();

	// Chairs to 1st table

	this.pushMatrix();
		this.translate(6, 0, 6.5);
		this.chair.display();
	this.popMatrix();


	this.pushMatrix();
		this.translate(8, 0, 6.5);
		this.chair.display();
	this.popMatrix();


	this.pushMatrix();
		this.translate(6, 0, 0.5);
		this.rotate(180 * degToRad, 0,1,0);
		this.translate(4, 0, -9);
		this.chair.display();
	this.popMatrix();


	this.pushMatrix();
		this.translate(8, 0, 0.5);
		this.rotate(180 * degToRad, 0,1,0);
		this.translate(4, 0, -9);
		this.chair.display();
	this.popMatrix();


	// Chairs to 2nd table

	this.pushMatrix();
		this.translate(13, 0, 6.5);
		this.chair.display();
	this.popMatrix();

	this.pushMatrix();
		this.translate(15, 0, 6.5);
		this.chair.display();
	this.popMatrix();


	this.pushMatrix();
		this.translate(13, 0, 0.5);
		this.rotate(180 * degToRad, 0,1,0);
		this.translate(4, 0, -9);
		this.chair.display();
	this.popMatrix();


	this.pushMatrix();
		this.translate(15, 0, 0.5);
		this.rotate(180 * degToRad, 0,1,0);
		this.translate(4, 0, -9);
		this.chair.display();
	this.popMatrix();


	// prisma
	this.pushMatrix();
		this.translate(14, 0, 14);
		this.scale(0.5, 8, 0.5)
		this.rotate(-90 * degToRad, 1, 0, 0);
		this.materialF.apply();
		this.prism.display();
	this.popMatrix();

	// cilindro
	this.pushMatrix();
		this.translate(1, 0, 14);
		this.scale(0.5, 8, 0.5)
		this.rotate(-90 * degToRad, 1, 0, 0);
		this.materialF.apply();
		this.cylinder.display();
	this.popMatrix();

	//candeeiros
	this.pushMatrix();
		this.translate(4.5, 6.0, 4.0);
		this.materialF.apply();
		this.lamp.display();
	this.popMatrix();
	
	this.pushMatrix();
		this.translate(12, 6.0, 4.0);
		this.materialF.apply();
		this.lamp.display();
	this.popMatrix();

	this.pushMatrix();
		this.translate(12, 6.0, 9.0);
		this.materialF.apply();
		this.lamp.display();
	this.popMatrix();

	this.pushMatrix();
		this.translate(4.5, 6.0, 9.0);
		this.materialF.apply();
		this.lamp.display();
	this.popMatrix();

	// ---- END Primitive drawing section

	this.shader.unbind();
};

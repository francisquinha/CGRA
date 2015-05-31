var degToRad = Math.PI / 180.0;
var BOARD_WIDTH = 6.0;
var BOARD_HEIGHT = 4.0;
var BOARD_A_DIVISIONS = 5;
var BOARD_B_DIVISIONS = 10;

function LightingScene() {
	CGFscene.call(this);
}

LightingScene.prototype = Object.create(CGFscene.prototype);
LightingScene.prototype.constructor = LightingScene;

LightingScene.prototype.init = function(application) {
	CGFscene.prototype.init.call(this, application);
	this.centerLight = true;
	this.rightBoardLight = true;
	this.leftBoardLight = true;
	this.windowLight = true;
	this.changeColor = [ 0, 128, 255 ]; // RGB array
	this.speedRobot = 0.2;
	this.pauseW = false;
	this.openW = true;
	this.currRobotAppearance = 0;


//////////////////////////////////////////////////
/////////////////////////////////

	this.initCameras();

//TP4
	this.enableTextures(true);
//
	this.initLights();

    this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
	this.gl.clearDepth(100.0);
	this.gl.enable(this.gl.DEPTH_TEST);
	this.gl.enable(this.gl.CULL_FACE);
	this.gl.depthFunc(this.gl.LEQUAL);

	this.axis = new CGFaxis(this);

	// Scene elements

	this.robot = new MyRobot(this, 8.3, 5, 5, -140);
	this.ball = new MyBall(this, 8, 8);
	this.lamp = new MyLamp(this, 8, 4);
	this.cylinder = new MyCylinder(this, 8, 8);
	this.table = new MyTable(this);
	this.chair = new MyChair(this);
	this.clock = new MyClock(this, 12, 2);
	this.paperPlane = new MyPaperPlane(this, 12, 4.4, 10, -0.003, 0.0002, -0.004, 0.0004);
	

	this.floor = new MyQuad(this, 0.0, 10.0, 0.0, 12.0);
	
	if (this.openW) this.leftWall = new MyLeftWindow(this);
	else this.leftWall = new Plane(this, 10, -1, 2, -0.5, 1.5);
	//this.leftWall = new MyQuad(this, -1, 2, -0.5, 1.5);
	this.planeWindow = new Plane(this);

	this.wall = new Plane(this);
	this.boardA = new Plane(this, BOARD_A_DIVISIONS, -0.15, 1.15, 0, 1);
	this.boardB = new Plane(this, BOARD_B_DIVISIONS);
	
	// Materials
	this.materialDefault = new CGFappearance(this);

	this.materialA = new CGFappearance(this);
	this.materialA.setAmbient(0.3,0.3,0.3,1);
	this.materialA.setDiffuse(0.6,0.6,0.6,1);
	this.materialA.setSpecular(0.2,0.2,0.2,1);
	this.materialA.setShininess(10);

	this.materialB = new CGFappearance(this);
	this.materialB.setAmbient(1.0, 1.0, 1.0, 0.9);
	this.materialB.setDiffuse(1.0, 1.0, 1.0, 0.9);
	this.materialB.setSpecular(1.0, 1.0, 1.0, 0.2);	
	this.materialB.setShininess(10);
	
	this.materialW = new CGFappearance(this);
	this.materialW.setAmbient(0, 0, 0, 0.2);
	this.materialW.setDiffuse(0, 0, 0, 0.2);
	this.materialW.setSpecular(0, 0, 0, 0.1);
	this.materialW.setShininess(10);

	this.materialF = new CGFappearance(this);
	this.materialF.setAmbient(0.9, 0.9, 0.9, 0.4);
	this.materialF.setDiffuse(0.9, 0.9, 0.9, 0.4);
	this.materialF.setSpecular(0.9, 0.9, 0.9, 1);	
	this.materialF.setShininess(120);


//TP4
	this.floorAppearance = new CGFappearance(this);
	this.floorAppearance.setAmbient(1, 1, 1, 1);
	this.floorAppearance.setDiffuse(1, 1, 1, 0.4);
	this.floorAppearance.setSpecular(1, 1, 1, 1);	
	this.floorAppearance.setShininess(120);
	this.floorAppearance.setTextureWrap('REPEAT', 'REPEAT');
	this.floorAppearance.loadTexture('../resources/images/floor.png');

	this.windowAppearance = new CGFappearance(this);
	this.windowAppearance.setAmbient(1, 1, 1, 0.2);
	this.windowAppearance.setDiffuse(1, 1, 1, 0.2);
	this.windowAppearance.setSpecular(1, 1, 1, 0.1);
	this.windowAppearance.setShininess(10);
	this.windowAppearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.windowAppearance.loadTexture('../resources/images/window.png');
	
	this.slidesAppearance = new CGFappearance(this);
	this.slidesAppearance.setAmbient(1, 1, 1, 0.2);
	this.slidesAppearance.setDiffuse(1, 1, 1, 0.9);
	this.slidesAppearance.setSpecular(1, 1, 1, 0.1);
	this.slidesAppearance.setShininess(10);
	this.slidesAppearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.slidesAppearance.loadTexture('../resources/images/slides.png');

	this.boardAppearance = new CGFappearance(this);
	this.boardAppearance.setAmbient(1, 1, 1, 0.2);
	this.boardAppearance.setDiffuse(1, 1, 1, 0.2);
	this.boardAppearance.setSpecular(1, 1, 1, 0.6);
	this.boardAppearance.setShininess(120);
	this.boardAppearance.loadTexture('../resources/images/board.png');

	this.cylinderAppearance = new CGFappearance(this);
	this.cylinderAppearance.setAmbient(1, 1, 1, 0.8);
	this.cylinderAppearance.setDiffuse(1, 1, 1, 0.8);
	this.cylinderAppearance.setSpecular(1, 1, 1, 0.6);	
	this.cylinderAppearance.setShininess(10);
	this.cylinderAppearance.loadTexture('../resources/images/cylinder.png');

	this.ballAppearance = new CGFappearance(this);
	this.ballAppearance.setAmbient(1, 1, 1, 0.8);
	this.ballAppearance.setDiffuse(1, 1, 1, 0.8);
	this.ballAppearance.setSpecular(1, 1, 1, 0.6);	
	this.ballAppearance.setShininess(10);
	this.ballAppearance.loadTexture('../resources/images/ball.png');

	this.planeWindowAppearance = new CGFappearance(this);
	this.planeWindowAppearance.setAmbient(1, 1, 1, 1);
	this.planeWindowAppearance.setDiffuse(1, 1, 1, 0.4);
	this.planeWindowAppearance.setSpecular(1, 1, 1, 1);	
	this.planeWindowAppearance.setShininess(120);
	this.planeWindowAppearance.loadTexture('../resources/images/imageWindow.png');


this.setUpdatePeriod(100);

};

LightingScene.prototype.initCameras = function() {
	this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(30, 30, 30), vec3.fromValues(0, 0, 0));
};

LightingScene.prototype.initLights = function() {
	this.setGlobalAmbientLight(0.2, 0.2, 0.2, 1.0);

	this.shader.bind();
	
	// Positions for five lights
	this.lights[0].setPosition(4.5, 6.0, 4.0, 1.0);
	this.lights[1].setPosition(12, 6.0, 4.0, 1.0);
	//this.lights[2].setPosition(12, 6.0, 9.0, 1.0);
	//this.lights[3].setPosition(4.5, 6.0, 9.0, 1.0);
	this.lights[2].setPosition(0, 4.0, 7.5, 1.0);
	this.lights[3].setPosition(8.25, 6.0, 14.0, 1.0);

	this.lights[0].setAmbient(0.0, 0.0, 0.0, 1.0);
	this.lights[0].setDiffuse(1.0, 1.0, 1.0, 0.5);
	this.lights[0].setSpecular(1.0, 1.0, 1.0, 0.5);
	this.lights[0].setConstantAttenuation(0.0);
	this.lights[0].setLinearAttenuation(0.4);
	this.lights[0].setQuadraticAttenuation(0.0);
	//this.lights[0].enable();

	
	this.lights[1].setAmbient(0.0, 0.0, 0.0, 1.0);
	this.lights[1].setDiffuse(1.0, 1.0, 1.0, 0.5);
	this.lights[1].setSpecular(1.0, 1.0, 1.0, 0.5);
	this.lights[1].setConstantAttenuation(0.0);
	this.lights[1].setLinearAttenuation(0.4);
	this.lights[1].setQuadraticAttenuation(0.0);
	//this.lights[1].enable();

	this.lights[2].setAmbient(0.0, 0.0, 0.0, 1.0);
	this.lights[2].setDiffuse(1.0, 1.0, 1.0, 0.5);
	this.lights[2].setSpecular(1.0, 1.0, 1.0, 0.5);
	this.lights[2].setConstantAttenuation(0.0);
	this.lights[2].setLinearAttenuation(0.4);
	this.lights[2].setQuadraticAttenuation(0.0);
	//this.lights[2].enable();

	this.lights[3].setAmbient(0.0, 0.0, 0.0, 1.0);
	this.lights[3].setDiffuse(1.0, 1.0, 1.0, 0.5);
	this.lights[3].setSpecular(1.0, 1.0, 1.0, 0.5);
	this.lights[3].setConstantAttenuation(0.0);
	this.lights[3].setLinearAttenuation(0.4);
	this.lights[3].setQuadraticAttenuation(0.0);
	//this.lights[3].enable();

	this.lights[0].setVisible(true);
	this.lights[1].setVisible(true);
	//this.lights[2].setVisible(true);
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

	// Left Wall
	this.pushMatrix();
		this.translate(0, 4, 7.5);
		this.rotate(90 * degToRad, 0, 1, 0);
		this.scale(15, 8, 0.2);
		this.windowAppearance.apply();
		this.leftWall.display();
	this.popMatrix();

	// Plane by Window
	this.pushMatrix();
		this.translate(-10, 5, 7.5);
		this.rotate(-90 * degToRad, 0, -1, 0);
		this.scale(30, 15, 0.2);
		this.planeWindowAppearance.apply();
		this.planeWindow.display();
	this.popMatrix();

	// Floor
	this.pushMatrix();
		this.translate(7.5, 0, 7.5);
		this.rotate(-90 * degToRad, 1, 0, 0);
		this.scale(15, 15, 0.2);
		this.floorAppearance.apply();
		this.floor.display();
	this.popMatrix();
/*
	// Left Wall
	this.pushMatrix();
		this.translate(0, 4, 7.5);
		this.rotate(90 * degToRad, 0, 1, 0);
		this.scale(15, 8, 0.2);
		this.windowAppearance.apply();
		this.leftWall.display();
	this.popMatrix();
*/
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
		this.slidesAppearance.apply();
		this.boardA.display();
	this.popMatrix();

	// Board B
	this.pushMatrix();
		this.translate(10.5, 4.5, 0.2);
		this.scale(BOARD_WIDTH, BOARD_HEIGHT, 1);
		this.boardAppearance.apply();
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
		this.cylinderAppearance.apply();
		this.cylinder.display();
	this.popMatrix();

	// cilindro
	this.pushMatrix();
		this.translate(1, 0, 14);
		this.scale(0.5, 8, 0.5)
		this.rotate(-90 * degToRad, 1, 0, 0);
		this.cylinderAppearance.apply();
		this.cylinder.display();
	this.popMatrix();

	//candeeiros
	this.pushMatrix();
		this.translate(4.5, 6.0, 4.0);
		this.cylinderAppearance.apply();
		this.lamp.display();
	this.popMatrix();
	
	this.pushMatrix();
		this.translate(12, 6.0, 4.0);
		this.cylinderAppearance.apply();
		this.lamp.display();
	this.popMatrix();

	this.pushMatrix();
		this.translate(8.25, 6.0, 14.0);
		this.cylinderAppearance.apply();
		this.lamp.display();
	this.popMatrix();

// suportes candeeiro

	this.pushMatrix();
		this.translate(4.5, 6.9, 4);
		this.scale(0.1, 1.1, 0.1)
		this.rotate(-90 * degToRad, 1, 0, 0);
		this.cylinderAppearance.apply();
		this.cylinder.display();
	this.popMatrix();

	this.pushMatrix();
		this.translate(12, 6.9, 4);
		this.scale(0.1, 1.1, 0.1)
		this.rotate(-90 * degToRad, 1, 0, 0);
		this.cylinderAppearance.apply();
		this.cylinder.display();
	this.popMatrix();
	
	this.pushMatrix();
		this.translate(8.25, 6.9, 14);
		this.scale(0.1, 1.1, 0.1)
		this.rotate(-90 * degToRad, 1, 0, 0);
		this.cylinderAppearance.apply();
		this.cylinder.display();
	this.popMatrix();

// globo
	this.pushMatrix();
		this.translate(13.5, 0, 1.5);
		this.scale(0.8,0.3,1);
		this.materialA.apply();
		this.lamp.display();
	this.popMatrix();
	this.pushMatrix();
		this.translate(13.5, 0.3, 1.5);
		this.scale(0.1, 1.1, 0.1)
		this.rotate(-90 * degToRad, 1, 0, 0);
		this.materialA.apply();
		this.cylinder.display();
	this.popMatrix();
	this.pushMatrix();
		this.translate(13.5, 1.9, 1.5);
		this.rotate(120 * degToRad, 0, 1, 0);
		this.ballAppearance.apply();
		this.ball.display();
	this.popMatrix();

//clock
	this.pushMatrix();
		this.translate(7.25, 7.2, 0);
		this.scale(0.7, 0.7, 0.2)
		this.clock.display();
	this.popMatrix();


//plane
	this.pushMatrix();
		this.materialB.apply();
		this.paperPlane.display();
	this.popMatrix();

//robot
	this.pushMatrix();
		this.materialA.apply();
		this.robot.display();
	this.popMatrix();

// ---- END Primitive drawing section

	this.shader.unbind();


};

LightingScene.prototype.update = function (currTime) {
	
	this.paperPlane.update(currTime);
	this.ball.update(currTime);
	this.updateBoxLights();
	if(this.pauseW == false)
	this.clock.update(currTime);
};

LightingScene.prototype.updateBoxLights = function (){ 
	if(this.leftBoardLight == true)
	this.lights[0].enable();
	else this.lights[0].disable();

	if(this.rightBoardLight == true)
	this.lights[1].enable();
	else this.lights[1].disable();

	if(this.centerLight == true)
	this.lights[3].enable();
	else this.lights[3].disable();

	if(this.windowLight == true)
	this.lights[2].enable();
	else this.lights[2].disable();
};

LightingScene.prototype.pauseWatch = function (currTime){ 
	if(this.pauseW == true) {this.pauseW = false;}
	else this.pauseW = true;
};

LightingScene.prototype.rotateLeft = function (){ 
	this.robot.rotateLeft();
};


LightingScene.prototype.rotateRight = function (){ 
	this.robot.rotateRight();
};


LightingScene.prototype.translateForward = function (){ 
	this.robot.translateForward();
};


LightingScene.prototype.translateBack = function (){ 
	this.robot.translateBack();
};


LightingScene.prototype.changeTextures = function (currRobotAppearance){ 
	this.robot.setTextures(currRobotAppearance);
//	console.log(currRobotAppearance);
};


LightingScene.prototype.changeColorRobot = function(changeColor){ 
	this.changeColor = changeColor;
	this.robot.setColor(changeColor);
};


LightingScene.prototype.changeSpeedRobot = function(speed){ 
	this.speedRobot = speed;
	this.robot.setSpeed(this.speedRobot);
};

LightingScene.prototype.helloArm = function (){ 
	this.robot.helloArm();
};

LightingScene.prototype.removeAngles = function() {
	this.robot.removeAngles();
}

LightingScene.prototype.openWindow = function (){ 
	if(this.openW == true) 
	{
		this.leftWall = new Plane(this, 10, -1, 2, -0.5, 1.5);
		this.openW = false;
	}
	else 
	{
		this.leftWall = new MyLeftWindow(this);
		this.openW = true;	
	}
};
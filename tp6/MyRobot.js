/**
 * MyRobot
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

//MyRobot e uma subclasse de CGFobject
function MyRobot(scene, xOff, yOff, zOff, angle) {
	CGFobject.call(this,scene);
	this.xOff = xOff;
	this.yOff = yOff;
	this.zOff = zOff;
	this.angle = angle * degToRad;
	this.leftWheelAngle = 0;
	this.rightWheelAngle = 0;
	/*
	this.minS = minS;
	this.maxS = maxS;
	this.minT = minT;
	this.maxT = maxT;
*/


	this.faceRobotAppearance = new CGFappearance(this.scene);
	this.faceRobotAppearance.setAmbient(1, 1, 1, 0.5);
	this.faceRobotAppearance.setDiffuse(1, 1, 1, 0.2);
	this.faceRobotAppearance.setSpecular(1, 1, 1, 0.1);
	this.faceRobotAppearance.setShininess(1);
	this.faceRobotAppearance.loadTexture('../resources/images/bender.png');
	


// Modelacao do robot

	this.body = new MyClosedCylinder(scene,20,1);
	this.leftArm = new MyClosedCylinder(scene,20,1);
	this.rightArm = new MyClosedCylinder(scene,20,1);
	this.head = new MySphere(scene, 16, 16);
	this.leftWheel = new MyWheel(scene, 0);
	this.rightWheel = new MyWheel(scene, 0);
	this.axis = new MyClosedCylinder(scene, 20, 1);
	
	var color;
	this.initBuffers();
};

MyRobot.prototype = Object.create(CGFobject.prototype);
MyRobot.prototype.constructor=MyRobot;

/*
MyRobot.prototype.initBuffers = function () {
	this.vertices = [
           0.5, 0.3, 0,
           -0.5, 0.3, 0,
           0, 0.3, 2
			];

	this.indices = [
            0, 1, 2
			//3, 2, 1,
        ];
		
	this.primitiveType=this.scene.gl.TRIANGLES;

    this.normals = [ 0, 0, 1,
                     0, 0, 1,
                     0, 0, 1
                    // 0, 0, 1 
                    ];


    this.texCoords = [
    
		this.minS, this.maxT,
		this.maxS, this.maxT,
		this.minS, this.minT,
		this.maxS, this.minT
		];

	this.initGLBuffers();
};
*/

MyRobot.prototype.rotateLeft = function () {
	this.angle += 5*degToRad;
	this.leftWheelAngle += 5*degToRad;
	this.rightWheelAngle -= 5*degToRad;
	this.leftWheel.setAngle(this.leftWheelAngle);
	this.rightWheel.setAngle(this.rightWheelAngle);
};

MyRobot.prototype.rotateRight = function () {
	this.angle -= 5*degToRad;
	this.leftWheelAngle -= 5*degToRad;
	this.rightWheelAngle += 5*degToRad;
	this.leftWheel.setAngle(this.leftWheelAngle);
	this.rightWheel.setAngle(this.rightWheelAngle);
};

MyRobot.prototype.translateForward = function () {
	this.xOff += 0.2 * Math.sin(this.angle);
	this.zOff += 0.2 * Math.cos(this.angle);
	this.leftWheelAngle += 0.5;
	this.rightWheelAngle += 0.5;
	this.leftWheel.setAngle(this.leftWheelAngle);
	this.rightWheel.setAngle(this.rightWheelAngle);

};

MyRobot.prototype.translateBack = function () {
	this.xOff -= 0.2 * Math.sin(this.angle);
	this.zOff -= 0.2 * Math.cos(this.angle);
	this.leftWheelAngle -= 0.5;
	this.rightWheelAngle -= 0.5;
	this.leftWheel.setAngle(this.leftWheelAngle);
	this.rightWheel.setAngle(this.rightWheelAngle);
};

MyRobot.prototype.setXZ = function (x, z) {
	this.xOff = x;
	this.zOff = z;
};

MyRobot.prototype.display = function() {
   
    this.scene.translate(this.xOff, this.yOff, this.zOff);
	this.scene.rotate(this.angle, 0, 1, 0);

    this.scene.pushMatrix();
    this.scene.translate(0,-0.4,0);
    this.scene.scale(0.2,3.4,0.2);
    this.scene.rotate(90*degToRad, 1, 0, 0);
    this.body.display();
    this.scene.popMatrix();

	this.scene.pushMatrix();
    this.scene.translate(0,-1.2,0);
    this.scene.rotate(90*degToRad, 0, 1, 0);
    this.scene.rotate(60*degToRad, 1, 0, 0);
    this.scene.scale(0.1,0.1,1.6);
    this.leftArm.display();
    this.scene.popMatrix();

	this.scene.pushMatrix();
    this.scene.translate(0,-1.2,0);
    this.scene.rotate(-90*degToRad, 0, 1, 0);
    this.scene.rotate(60*degToRad, 1, 0, 0);
   	this.scene.scale(0.1,0.1,1.6);
    this.rightArm.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(-1.08, -4, 0);
    this.scene.rotate(90*degToRad, 0, 1, 0);
    this.scene.scale(0.2,0.2,2.16);
    this.axis.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(-1, -4, 0);
    this.scene.scale(0.8,0.8,0.8);
    this.leftWheel.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(1, -4, 0);
    this.scene.scale(0.8,0.8,0.8);
    this.rightWheel.display();
    this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.scale(0.6, 1, 0.6)
	this.scene.rotate(90*degToRad, 0, 1, 0);
	this.faceRobotAppearance.apply();
    this.head.display();
    this.scene.popMatrix();

};

MyRobot.prototype.setColor = function (color) {
	this.color = color;
};
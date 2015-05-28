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
	this.leftArmAngle = 0;
	this.RightArmAngle = 0;
	this.speedRobot = 0.2;

	this.currAppearanceSet = 'undefined';
	/*
	this.minS = minS;
	this.maxS = maxS;
	this.minT = minT;
	this.maxT = maxT;
*/
	
	// Modelacao do robot
	
	this.body = new MyBody(scene);
	this.leftArm = new MyArm(scene, 0);
	this.rightArm = new MyArm(scene, 0);
	this.head = new MyLamp(scene, 32, 16);
	this.leftWheel = new MyWheel(scene, 0);
	this.rightWheel = new MyWheel(scene, 0);
	
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
	this.leftWheelAngle += 12.5*degToRad;
	this.rightWheelAngle -= 12.5*degToRad;
	this.leftWheel.setAngle(this.leftWheelAngle);
	this.rightWheel.setAngle(this.rightWheelAngle);
};

MyRobot.prototype.rotateRight = function () {
	this.angle -= 5*degToRad;
	this.leftWheelAngle -= 12.5*degToRad;
	this.rightWheelAngle += 12.5*degToRad;
	this.leftWheel.setAngle(this.leftWheelAngle);
	this.rightWheel.setAngle(this.rightWheelAngle);
};

MyRobot.prototype.translateForward = function () {
	this.xOff += this.speedRobot * Math.sin(this.angle);
	this.zOff += this.speedRobot * Math.cos(this.angle);
	this.leftWheelAngle += 2.5 * this.speedRobot;
	this.rightWheelAngle += 2.5 * this.speedRobot;
	this.leftWheel.setAngle(this.leftWheelAngle);
	this.rightWheel.setAngle(this.rightWheelAngle);
/*
if(this.leftArmAngle > 60 && this.leftArmAngle >= 0)
	this.leftArmAngle -= 0.2;
else if(this.leftArmAngle < -60 && this.leftArmAngle < 0)
this.leftArmAngle += 0.2;

if(this.rightArmAngle > 60 && this.rightArmAngle > 0)
	this.rightArmAngle -= 0.2;
else if(this.rightArmAngle < -60 && this.rightArmAngle <= 0)
this.rightArmAngle += 0.2;

	this.leftArm.setAngle(this.leftArmAngle, this.xOff, this.yOff, this.zOff);
	this.rightArm.setAngle(this.rightArmAngle, this.xOff, this.yOff, this.zOff);
*/
};

MyRobot.prototype.translateBack = function () {
	this.xOff -= this.speedRobot * Math.sin(this.angle);
	this.zOff -= this.speedRobot * Math.cos(this.angle);
	this.leftWheelAngle -= 2.5 * this.speedRobot;
	this.rightWheelAngle -= 2.5 * this.speedRobot;
	this.leftWheel.setAngle(this.leftWheelAngle);
	this.rightWheel.setAngle(this.rightWheelAngle);

/*	if(this.leftArmAngle > 60 && this.leftArmAngle > 0)
	this.leftArmAngle -= 0.2;
else if(this.leftArmAngle < -60 && this.leftArmAngle <= 0)
this.leftArmAngle += 0.2;

if(this.rightArmAngle > 60 && this.rightArmAngle > 0)
	this.rightArmAngle -= 0.2;
else if(this.rightArmAngle < -60 && this.rightArmAngle <= 0)
this.rightArmAngle += 0.2;

	this.leftArm.setAngle(this.leftArmAngle, this.xOff, this.yOff, this.zOff);
	this.rightArm.setAngle(this.rightArmAngle, this.xOff, this.yOff, this.zOff);*/
};

MyRobot.prototype.setXZ = function (x, z) {
	this.xOff = x;
	this.zOff = z;
};

MyRobot.prototype.display = function() {
   
   	this.scene.translate(this.xOff, this.yOff, this.zOff);
	this.scene.rotate(this.angle, 0, 1, 0);

	this.body.display();

	this.scene.pushMatrix();
    this.scene.translate(-1,-1.2,0);
    this.scene.rotate(90*degToRad, 1, 0, 0);
    this.leftArm.display();
    this.scene.popMatrix();

	this.scene.pushMatrix();
    this.scene.translate(1,-1.2,0);
    this.scene.rotate(90*degToRad, 1, 0, 0);
    this.rightArm.display();
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
    this.scene.translate(0, -0.8, 0);
    this.scene.scale(0.8,0.8,0.8);
//	this.scene.rotate(-90*degToRad, 1, 0, 0);
//	if(this.currAppearanceSet != 'undefined')
//    	this.currAppearanceSet.head.apply();
    this.head.display();
    this.scene.popMatrix();
};

MyRobot.prototype.setColor = function(color) {
	this.body.setColor(color);
};

MyRobot.prototype.setSpeed = function(speed) {
	this.speedRobot = speed;
};

MyRobot.prototype.setTextures = function(appearance) {
	this.currAppearanceSet = appearance;
	this.rightWheel.setAppearance(this.currAppearanceSet.wheel);
	this.leftWheel.setAppearance(this.currAppearanceSet.wheel);
	this.leftArm.setAppearence(this.currAppearanceSet.wheel);
	this.rightArm.setAppearence(this.currAppearanceSet.arm);
	this.head.setAppearence(this.currAppearanceSet.head);
	this.body.setAppearence(this.currAppearanceSet.body);
};

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
	this.rightArmAngle = 0;
	this.going = 1;
	this.forward = 1;
	this.speedRobot = 0.2;
	this.actualColor = [1, 1, 1];
	
	this.faceEva = new CGFappearance(this.scene);
	this.faceEva.setAmbient(1, 1, 1, 0.5);
	this.faceEva.setDiffuse(1, 1, 1, 0.2);
	this.faceEva.setSpecular(1, 1, 1, 0.1);
	this.faceEva.setShininess(1);
	this.faceEva.loadTexture('../resources/images/eva.png');

	this.bodyEva = new CGFappearance(this.scene);
	this.bodyEva.setAmbient(1, 1, 1, 0.5);
	this.bodyEva.setDiffuse(1, 1, 1, 0.2);
	this.bodyEva.setSpecular(1, 1, 1, 0.1);
	this.bodyEva.setShininess(1);

	this.faceClown = new CGFappearance(this.scene);
	this.faceClown.setAmbient(1, 1, 1, 0.5);
	this.faceClown.setDiffuse(1, 1, 1, 0.2);
	this.faceClown.setSpecular(1, 1, 1, 0.1);
	this.faceClown.setShininess(1);
	this.faceClown.loadTexture('../resources/images/clown.png');

	this.bodyClown = new CGFappearance(this.scene);
	this.bodyClown.setAmbient(1, 1, 1, 0.5);
	this.bodyClown.setDiffuse(1, 1, 1, 0.2);
	this.bodyClown.setSpecular(1, 1, 1, 0.1);
	this.bodyClown.setShininess(1);
	this.bodyClown.loadTexture('../resources/images/pattern9.png');

	this.wheelClown = new CGFappearance(this.scene);
	this.wheelClown.setAmbient(1, 1, 1, 0.5);
	this.wheelClown.setDiffuse(1, 1, 1, 0.2);
	this.wheelClown.setSpecular(1, 1, 1, 0.1);
	this.wheelClown.setShininess(1);
	this.wheelClown.loadTexture('../resources/images/pattern1.png');

	this.faceMoustache = new CGFappearance(this.scene);
	this.faceMoustache.setAmbient(1, 1, 1, 0.5);
	this.faceMoustache.setDiffuse(1, 1, 1, 0.2);
	this.faceMoustache.setSpecular(1, 1, 1, 0.1);
	this.faceMoustache.setShininess(1);
	this.faceMoustache.loadTexture('../resources/images/moustache.png');

	this.bodyMoustache = new CGFappearance(this.scene);
	this.bodyMoustache.setAmbient(1, 1, 1, 0.5);
	this.bodyMoustache.setDiffuse(1, 1, 1, 0.2);
	this.bodyMoustache.setSpecular(1, 1, 1, 0.1);
	this.bodyMoustache.setShininess(1);
	this.bodyMoustache.loadTexture('../resources/images/bodymoustache.png');
	
	this.restMoustache = new CGFappearance(this.scene);
	this.restMoustache.setAmbient(1, 1, 1, 0.5);
	this.restMoustache.setDiffuse(1, 1, 1, 0.2);
	this.restMoustache.setSpecular(1, 1, 1, 0.1);
	this.restMoustache.setShininess(1);
	this.restMoustache.loadTexture('../resources/images/restmoustache.png');

	this.wheelMoustache = new CGFappearance(this.scene);
	this.wheelMoustache.setAmbient(1, 1, 1, 0.5);
	this.wheelMoustache.setDiffuse(1, 1, 1, 0.2);
	this.wheelMoustache.setSpecular(1, 1, 1, 0.1);
	this.wheelMoustache.setShininess(1);
	this.wheelMoustache.loadTexture('../resources/images/wheelmoustache.png');

	this.faceBender = new CGFappearance(this.scene);
	this.faceBender.setAmbient(1, 1, 1, 0.5);
	this.faceBender.setDiffuse(1, 1, 1, 0.2);
	this.faceBender.setSpecular(1, 1, 1, 0.1);
	this.faceBender.setShininess(1);
	this.faceBender.loadTexture('../resources/images/bender.png');

	this.bodyBender = new CGFappearance(this.scene);
	this.bodyBender.setAmbient(1, 1, 1, 0.5);
	this.bodyBender.setDiffuse(1, 1, 1, 0.2);
	this.bodyBender.setSpecular(1, 1, 1, 0.1);
	this.bodyBender.setShininess(1);
	this.bodyBender.loadTexture('../resources/images/bodybender.png');

	this.wheelBender = new CGFappearance(this.scene);
	this.wheelBender.setAmbient(1, 1, 1, 0.5);
	this.wheelBender.setDiffuse(1, 1, 1, 0.2);
	this.wheelBender.setSpecular(1, 1, 1, 0.1);
	this.wheelBender.setShininess(1);
	this.wheelBender.loadTexture('../resources/images/wheelbender.png');

	this.faceAppearance = this.faceBender;

	// Appearances for robotAppearances
	this.robotAppearances = [];

	this.robotAppearances[0] =
        {
            head: this.faceBender,
            wheel: this.wheelBender,
            arm: this.bodyBender,
            body: this.bodyBender,
            rest: this.wheelBender
        }

	this.robotAppearances[1] =
        {
            head: this.faceEva,
            wheel: this.bodyEva,
            arm: this.bodyEva,
            body: this.bodyEva,
            rest: this.bodyEva
        };

	this.robotAppearances[2] =
        {
            head: this.faceClown,
            wheel: this.wheelClown,
            arm: this.bodyClown,
            body: this.bodyClown,
            rest: this.bodyClown
        };

	this.robotAppearances[3] =
        {
            head: this.faceMoustache,
            wheel: this.wheelMoustache,
            arm: this.restMoustache,
            body: this.bodyMoustache,
            rest: this.restMoustache
        };
	
	// Modelacao do robot
	
	this.body = new MyBody(scene, this.bodyBender, this.bodyBender);
	this.leftArm = new MyArm(scene, 0, this.bodyBender);
	this.rightArm = new MyArm(scene, 0, this.bodyBender);
	this.head = new MyLamp(scene, 32, 16);
	this.leftWheel = new MyWheel(scene, 0, this.wheelBender, this.bodyBender);
	this.rightWheel = new MyWheel(scene, 0, this.wheelBender, this.bodyBender);
	
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
	this.leftArmAngle = 0;
	this.rightArmAngle = 0;
	this.leftArm.setAngle(this.leftArmAngle);
	this.rightArm.setAngle(this.rightArmAngle);
};

MyRobot.prototype.rotateRight = function () {
	this.angle -= 5*degToRad;
	this.leftWheelAngle -= 12.5*degToRad;
	this.rightWheelAngle += 12.5*degToRad;
	this.leftWheel.setAngle(this.leftWheelAngle);
	this.rightWheel.setAngle(this.rightWheelAngle);
	this.leftArmAngle = 0;
	this.rightArmAngle = 0;
	this.leftArm.setAngle(this.leftArmAngle);
	this.rightArm.setAngle(this.rightArmAngle);
};

MyRobot.prototype.translateForward = function () {
	this.xOff += this.speedRobot * Math.sin(this.angle);
	this.zOff += this.speedRobot * Math.cos(this.angle);
	this.leftWheelAngle += 2.5 * this.speedRobot;
	this.rightWheelAngle += 2.5 * this.speedRobot;
	this.leftWheel.setAngle(this.leftWheelAngle);
	this.rightWheel.setAngle(this.rightWheelAngle);
	
	if (this.forward == 0) this.going = 1 - this.going;
	this.forward = 1;
	if (this.rightArmAngle >= 1 || this.rightArmAngle <= -1) this.going = 1 - this.going;

	if ((this.going == 1 && this.rightArmAngle > -1) || this.rightArmAngle >= 1) this.rightArmAngle -= this.speedRobot;
	else this.rightArmAngle += this.speedRobot;

	if ((this.going == 1 && this.leftArmAngle < 1) || this.leftArmAngle <= -1) this.leftArmAngle += this.speedRobot;
	else this.leftArmAngle -= this.speedRobot;

	this.leftArm.setAngle(this.leftArmAngle);
	this.rightArm.setAngle(this.rightArmAngle);

};

MyRobot.prototype.translateBack = function () {
	this.xOff -= this.speedRobot * Math.sin(this.angle);
	this.zOff -= this.speedRobot * Math.cos(this.angle);
	this.leftWheelAngle -= 2.5 * this.speedRobot;
	this.rightWheelAngle -= 2.5 * this.speedRobot;
	this.leftWheel.setAngle(this.leftWheelAngle);
	this.rightWheel.setAngle(this.rightWheelAngle);

	if (this.forward == 1) this.going = 1 - this.going;
	this.forward = 0;
	if (this.rightArmAngle >= 1 || this.rightArmAngle <= -1) this.going = 1 - this.going;
	
	if ((this.going == 1 && this.rightArmAngle > -1) || this.rightArmAngle >= 1) this.rightArmAngle -= this.speedRobot;
	else this.rightArmAngle += this.speedRobot;

	if ((this.going == 1 && this.leftArmAngle < 1) || this.leftArmAngle <= -1) this.leftArmAngle += this.speedRobot;
	else this.leftArmAngle -= this.speedRobot;

	this.leftArm.setAngle(this.leftArmAngle);
	this.rightArm.setAngle(this.rightArmAngle);
};

MyRobot.prototype.setXZ = function (x, z) {
	this.xOff = x;
	this.zOff = z;
};

MyRobot.prototype.display = function() {
   
   	this.scene.translate(this.xOff, this.yOff, this.zOff);
	this.scene.rotate(this.angle, 0, 1, 0);
	
	this.scene.pushMatrix();
    this.scene.translate(0, -0.8, 0);
    this.scene.rotate(90*degToRad, 0, 1, 0);
    this.scene.scale(0.8,0.8,0.8);
    this.faceAppearance.apply();
    this.head.display();
    this.scene.popMatrix();

	this.scene.pushMatrix();
	this.body.display();
    this.scene.popMatrix();

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
};

MyRobot.prototype.setSpeed = function(speed) {
	this.speedRobot = speed;
};

MyRobot.prototype.setTextures = function(appearance) {
	this.currAppearance = this.robotAppearances[appearance];
	this.rightWheel.setAppearance(this.currAppearance.wheel, this.currAppearance.rest);
	this.leftWheel.setAppearance(this.currAppearance.wheel, this.currAppearance.rest);
	this.leftArm.setAppearance(this.currAppearance.arm);
	this.rightArm.setAppearance(this.currAppearance.arm);
	this.body.setAppearance(this.currAppearance.body, this.currAppearance.rest);
	this.faceAppearance = this.currAppearance.head;
	this.actualColor = [1, 1, 1];
	this.faceAppearance.setAmbient(this.actualColor[0], this.actualColor[1], this.actualColor[2], 0.5);
	this.faceAppearance.setDiffuse(this.actualColor[0], this.actualColor[1], this.actualColor[2], 0.2);
	this.faceAppearance.setSpecular(this.actualColor[0], this.actualColor[1], this.actualColor[2], 0.1);
};

MyRobot.prototype.setColor = function(color) {
	this.actualColor[0] = color[0]/256;	
	this.actualColor[1] = color[1]/256;	
	this.actualColor[2] = color[2]/256;
	this.faceAppearance.setAmbient(this.actualColor[0], this.actualColor[1], this.actualColor[2], 0.5);
	this.faceAppearance.setDiffuse(this.actualColor[0], this.actualColor[1], this.actualColor[2], 0.2);
	this.faceAppearance.setSpecular(this.actualColor[0], this.actualColor[1], this.actualColor[2], 0.1);
	this.body.setColor(color);
	this.leftWheel.setColor(color);
	this.rightWheel.setColor(color);
};

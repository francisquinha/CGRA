/**
 * MyArm
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

//MyArm e uma subclasse de CGFobject
function MyArm(scene, angle, appearance) {
	CGFobject.call(this,scene);
	
	this.angle = angle;
	this.helloAngle = 0;
	this.direction = 1;

	this.armNewAppearance = appearance;
	this.middle = new MyCylinder(scene, 16, 4);
	this.top = new MyLamp(scene, 16, 8);
	this.bottom = new MyLamp(scene, 16, 8);

	this.initBuffers();
};

MyArm.prototype = Object.create(CGFobject.prototype);
MyArm.prototype.constructor=MyArm;

MyArm.prototype.display = function() {
   
	this.armNewAppearance.apply();
    this.scene.rotate(this.angle, 1, 0, 0);
    
   	this.scene.rotate(this.helloAngle, 0, 1, 0);
	
    this.scene.pushMatrix();
    this.scene.scale(0.2,0.2,1.4)
    this.middle.display();
    this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.rotate(90*degToRad, 1, 0, 0);
	this.scene.translate(0,1.4,0);
    this.scene.scale(0.2,0.2,0.2)
    this.top.display();
    this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.rotate(-90*degToRad, 1, 0, 0);
    this.scene.scale(0.2,0.2,0.2)
    this.bottom.display();
    this.scene.popMatrix();

};

MyArm.prototype.setAngle = function (angle) {
	this.angle = angle;
};

MyArm.prototype.setAppearance = function (appearance) {
	this.armNewAppearance = appearance;
};

MyArm.prototype.setHelloAngle = function (angle) {
	if (this.helloAngle <= -0.6 || this.helloAngle >= 0) this.direction = 1 - this.direction;
	if (this.direction == 1) this.helloAngle += angle;
	else this.helloAngle -= angle;
};

MyArm.prototype.resetHello = function() {
	this.helloAngle = 0;
};

/**
 * MyWheel
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

//MyWheel e uma subclasse de CGFobject
function MyWheel(scene, angle, appearance1, appearance2) {
	CGFobject.call(this,scene);
	this.angle = angle;
	this.wheelNewAppearance = appearance1;
	this.restNewAppearance = appearance2;
	this.actualColor = [1, 1, 1];
	this.tire = new MyTorus(scene, 16, 16, 0.3);
	this.rim1 = new MyClosedCylinder(scene, 8, 2);
	this.rim2 = new MyClosedCylinder(scene, 8, 2);
	this.rim3 = new MyClosedCylinder(scene, 8, 2);
	this.initBuffers();

};

MyWheel.prototype = Object.create(CGFobject.prototype);
MyWheel.prototype.constructor=MyWheel;

MyWheel.prototype.display = function() {
   
    this.scene.rotate(this.angle, 1, 0, 0);

    this.scene.pushMatrix();
    this.scene.rotate(120*degToRad, 1, 0, 0);
    this.scene.scale(0.1,0.1,0.6);
    this.restNewAppearance.apply();
    this.rim1.display();
    this.scene.popMatrix();

	this.scene.pushMatrix();
    this.scene.rotate(-120*degToRad, 1, 0, 0);
    this.scene.scale(0.1,0.1,0.6);
    this.restNewAppearance.apply();
    this.rim2.display();
    this.scene.popMatrix();

	this.scene.pushMatrix();
    this.scene.scale(0.1,0.1,0.6);
    this.restNewAppearance.apply();
    this.rim3.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.rotate(-90*degToRad, 0, 1, 0);
    this.wheelNewAppearance.apply();
    this.tire.display();
    this.scene.popMatrix();
};

MyWheel.prototype.setAngle = function (angle) {
	this.angle = angle;
};

MyWheel.prototype.setAppearance = function (appearance1, appearance2) {
	this.wheelNewAppearance = appearance1;
	this.restNewAppearance = appearance2;
	this.actualColor = [1, 1, 1];
	this.wheelNewAppearance.setAmbient(this.actualColor[0], this.actualColor[1], this.actualColor[2], 0.5);
	this.wheelNewAppearance.setDiffuse(this.actualColor[0], this.actualColor[1], this.actualColor[2], 0.2);
	this.wheelNewAppearance.setSpecular(this.actualColor[0], this.actualColor[1], this.actualColor[2], 0.1);
	this.restNewAppearance.setAmbient(this.actualColor[0], this.actualColor[1], this.actualColor[2], 0.5);
	this.restNewAppearance.setDiffuse(this.actualColor[0], this.actualColor[1], this.actualColor[2], 0.2);
	this.restNewAppearance.setSpecular(this.actualColor[0], this.actualColor[1], this.actualColor[2], 0.1);
};

MyWheel.prototype.setColor = function(color) {
	this.actualColor[0] = color[0]/256;	
	this.actualColor[1] = color[1]/256;	
	this.actualColor[2] = color[2]/256;
	this.wheelNewAppearance.setAmbient(this.actualColor[0], this.actualColor[1], this.actualColor[2], 0.5);
	this.wheelNewAppearance.setDiffuse(this.actualColor[0], this.actualColor[1], this.actualColor[2], 0.2);
	this.wheelNewAppearance.setSpecular(this.actualColor[0], this.actualColor[1], this.actualColor[2], 0.1);
	this.restNewAppearance.setAmbient(this.actualColor[0], this.actualColor[1], this.actualColor[2], 0.5);
	this.restNewAppearance.setDiffuse(this.actualColor[0], this.actualColor[1], this.actualColor[2], 0.2);
	this.restNewAppearance.setSpecular(this.actualColor[0], this.actualColor[1], this.actualColor[2], 0.1);
};

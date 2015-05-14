/**
 * MyWheel
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

//MyWheel e uma subclasse de CGFobject
function MyWheel(scene, angle) {
	CGFobject.call(this,scene);
	this.angle = angle;


	this.wheelAppearance = new CGFappearance(this.scene);
	this.wheelAppearance.setAmbient(1, 1, 1, 1);
	this.wheelAppearance.setDiffuse(1, 1, 1, 1);
	this.wheelAppearance.setSpecular(1, 1, 1, 1);	
	this.wheelAppearance.setShininess(10);
	this.wheelAppearance.loadTexture('../resources/images/pattern1.png');

	this.tire = new MyTorus(scene, 16, 16, 0.3);
	this.rim1 = new MyClosedCylinder(scene,16,1);
	this.rim2 = new MyClosedCylinder(scene,16,1);
	this.rim3 = new MyClosedCylinder(scene, 16, 1);
	this.initBuffers();
};

MyWheel.prototype = Object.create(CGFobject.prototype);
MyWheel.prototype.constructor=MyWheel;

MyWheel.prototype.display = function() {
   
    this.scene.rotate(this.angle, 1, 0, 0);

    this.scene.pushMatrix();
    this.scene.rotate(120*degToRad, 1, 0, 0);
    this.scene.scale(0.1,0.1,0.6);
    this.rim1.display();
    this.scene.popMatrix();

	this.scene.pushMatrix();
    this.scene.rotate(-120*degToRad, 1, 0, 0);
    this.scene.scale(0.1,0.1,0.6);
    this.rim2.display();
    this.scene.popMatrix();

	this.scene.pushMatrix();
    this.scene.scale(0.1,0.1,0.6);
    this.rim3.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.rotate(-90*degToRad, 0, 1, 0);
    this.wheelAppearance.apply();
    this.tire.display();
    this.scene.popMatrix();


};

MyWheel.prototype.setAngle = function (angle) {
	this.angle = angle;
};

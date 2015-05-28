/**
 * MyArm
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

//MyArm e uma subclasse de CGFobject
function MyArm(scene, angle) {
	CGFobject.call(this,scene);
	this.angle = angle;
	this.armAppearance = new CGFappearance(this.scene);
	this.armAppearance.setAmbient(1, 1, 1, 1);
	this.armAppearance.setDiffuse(1, 1, 1, 1);
	this.armAppearance.setSpecular(1, 1, 1, 1);	
	this.armAppearance.setShininess(10);
	this.armAppearance.loadTexture('../resources/images/pattern1.png');

	this.armNewAppearance = this.armAppearance;
	this.middle = new MyCylinder(scene, 16, 8);
	this.top = new MyLamp(scene, 16, 8);
	this.bottom = new MyLamp(scene, 16, 8);
	this.initBuffers();
};

MyArm.prototype = Object.create(CGFobject.prototype);
MyArm.prototype.constructor=MyArm;

MyArm.prototype.display = function() {
   
    this.scene.rotate(this.angle, 1, 0, 0);

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
	this.armNewAppearance.apply();
    this.bottom.display();
    this.scene.popMatrix();

};

MyArm.prototype.setAngle = function (angle) {
	this.angle = angle;
};

MyArm.prototype.setAppearance = function (appearance) {
	this.armNewAppearance = appearance;
};
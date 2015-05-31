/**
 * MyHead
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

//MyHead e uma subclasse de CGFobject
function MyHead(scene) {
	CGFobject.call(this,scene);
	this.headAppearance = new CGFappearance(this.scene);
	this.headAppearance.setAmbient(1, 1, 1, 1);
	this.headAppearance.setDiffuse(1, 1, 1, 1);
	this.headAppearance.setSpecular(1, 1, 1, 1);	
	this.headAppearance.setShininess(10);
	this.headAppearance.loadTexture('../resources/images/bender.png');

	this.headNewAppearance = this.headAppearance;
	this.middle = new MyClosedCylinder(scene, 16, 8);
	this.top = new MyLamp(scene,16,8);
	this.bottom = new MyLamp(scene,16,8);
	this.initBuffers();
};

MyHead.prototype = Object.create(CGFobject.prototype);
MyHead.prototype.constructor=MyHead;

MyHead.prototype.display = function() {
   
	this.scene.pushMatrix();
	this.scene.rotate(90*degToRad, 1, 0, 0);
	this.scene.translate(0,1,0);
    this.scene.scale(0.5,0.5,0.5)
    this.top.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
	this.scene.rotate(180*degToRad, 0, 0, 1);
    this.scene.scale(0.5,0.5,1);
    this.headNewAppearance.apply();
    this.middle.display();
    this.scene.popMatrix();

};

MyHead.prototype.setAppearance = function (appearance) {
	this.headNewAppearance = appearance;
};
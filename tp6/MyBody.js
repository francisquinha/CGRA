/**
 * MyBody
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

//MyBody e uma subclasse de CGFobject
function MyBody(scene) {
	CGFobject.call(this,scene);
	this.bodyAppearance = new CGFappearance(this.scene);
	this.bodyAppearance.setAmbient(1, 1, 1, 1);
	this.bodyAppearance.setDiffuse(1, 1, 1, 1);
	this.bodyAppearance.setSpecular(1, 1, 1, 1);	
	this.bodyAppearance.setShininess(10);
	this.bodyAppearance.loadTexture('../resources/images/pattern1.png');

	this.bodyNewAppearance = this.bodyAppearance;
	this.upperBody = new MyClosedCylinder(scene,32,16);
	this.lowerBody = new MyCylinder(scene,32,16);
	this.neck = new MyClosedCylinder(scene,32,16);
	this.axis = new MyClosedCylinder(scene, 32, 16);
	this.initBuffers();
};

MyBody.prototype = Object.create(CGFobject.prototype);
MyBody.prototype.constructor=MyBody;

MyBody.prototype.display = function() {
   
	this.bodyNewAppearance.apply();

    this.scene.pushMatrix();
    this.scene.translate(0,-0.2,0);
    this.scene.scale(0.2,0.2,0.2);
    this.scene.rotate(90*degToRad, 1, 0, 0);
//    this.neck.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(0,-0.8,0);
    this.scene.scale(0.8,2.2,0.8);
    this.scene.rotate(90*degToRad, 1, 0, 0);
    this.upperBody.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(0,-3,0);
    this.scene.scale(0.2,1,0.2);
    this.scene.rotate(90*degToRad, 1, 0, 0);
    this.lowerBody.display();
    this.scene.popMatrix();
    
    this.scene.pushMatrix();
    this.scene.translate(-1.08, -4, 0);
    this.scene.rotate(90*degToRad, 0, 1, 0);
    this.scene.scale(0.2,0.2,2.16);
    this.axis.display();
    this.scene.popMatrix();


};

MyBody.prototype.setAppearance = function (appearance) {
	this.bodyNewAppearance = appearance;
};
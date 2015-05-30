/**
 * MyBody
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

//MyBody e uma subclasse de CGFobject
function MyBody(scene, appearance1, appearance2) {
	CGFobject.call(this,scene);

	this.bodyNewAppearance = appearance1;
	this.restNewAppearance = appearance2;
	this.actualColor = [1, 1, 1];
	this.upperBody = new MyClosedCylinder(scene, 8, 2);
	this.lowerBody = new MyCylinder(scene, 8, 4);
	this.neck = new MyClosedCylinder(scene, 8, 4);
	this.axis = new MyClosedCylinder(scene, 8, 4);
	this.initBuffers();

};

MyBody.prototype = Object.create(CGFobject.prototype);
MyBody.prototype.constructor = MyBody;

MyBody.prototype.display = function() {
   
    this.scene.pushMatrix();
    this.scene.translate(0,-3,0);
    this.scene.scale(0.2,1,0.2);
    this.scene.rotate(90*degToRad, 0, 1, 0);
    this.scene.rotate(90*degToRad, 1, 0, 0);
	this.restNewAppearance.apply();
    this.lowerBody.display();
    this.scene.popMatrix();
    
    this.scene.pushMatrix();
    this.scene.translate(-1.1, -4, 0);
    this.scene.rotate(90*degToRad, 0, 1, 0);
    this.scene.scale(0.2,0.2,2.2);
	this.restNewAppearance.apply();
    this.axis.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(0,-0.8,0);
    this.scene.scale(0.8,2.2,0.8);
    this.scene.rotate(90*degToRad, 0, 1, 0);
    this.scene.rotate(90*degToRad, 1, 0, 0);
	this.bodyNewAppearance.apply();
    this.upperBody.display();
    this.scene.popMatrix();

};

MyBody.prototype.setAppearance = function (appearance1, appearance2) {
	this.bodyNewAppearance = appearance1;
	this.restNewAppearance = appearance2;
	this.actualColor = [1, 1, 1];
	this.bodyNewAppearance.setAmbient(this.actualColor[0], this.actualColor[1], this.actualColor[2], 0.5);
	this.bodyNewAppearance.setDiffuse(this.actualColor[0], this.actualColor[1], this.actualColor[2], 0.2);
	this.bodyNewAppearance.setSpecular(this.actualColor[0], this.actualColor[1], this.actualColor[2], 0.1);
	this.restNewAppearance.setAmbient(this.actualColor[0], this.actualColor[1], this.actualColor[2], 0.5);
	this.restNewAppearance.setDiffuse(this.actualColor[0], this.actualColor[1], this.actualColor[2], 0.2);
	this.restNewAppearance.setSpecular(this.actualColor[0], this.actualColor[1], this.actualColor[2], 0.1);
};

MyBody.prototype.setColor = function(color) {
	this.actualColor[0] = color[0]/256;	
	this.actualColor[1] = color[1]/256;	
	this.actualColor[2] = color[2]/256;
	this.bodyNewAppearance.setAmbient(this.actualColor[0], this.actualColor[1], this.actualColor[2], 0.5);
	this.bodyNewAppearance.setDiffuse(this.actualColor[0], this.actualColor[1], this.actualColor[2], 0.2);
	this.bodyNewAppearance.setSpecular(this.actualColor[0], this.actualColor[1], this.actualColor[2], 0.1);
	this.restNewAppearance.setAmbient(this.actualColor[0], this.actualColor[1], this.actualColor[2], 0.5);
	this.restNewAppearance.setDiffuse(this.actualColor[0], this.actualColor[1], this.actualColor[2], 0.2);
	this.restNewAppearance.setSpecular(this.actualColor[0], this.actualColor[1], this.actualColor[2], 0.1);
};

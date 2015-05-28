/**
 * MyClosedCylinder
 * @constructor
 */
 function MyClosedCylinder(scene, slices, stacks, angle, xOff, yOff, zOff) {
	CGFobject.call(this,scene);
	this.slices=slices;
	this.stacks=stacks;
	this.angle = 0;
	this.xOff = 0;
	this.yOff = 0;
	this.zOff = 0;
	this.corpo = new MyCylinder(scene, this.slices, this.stacks);
	this.corpo.initBuffers();
	this.topo1 = new MyCircle(scene, this.slices);
	this.topo1.initBuffers();
	this.topo2 = new MyCircle(scene, this.slices);
	this.topo2.initBuffers();
/*	
	this.actualColor = [1, 1, 1];
	this.defaultRobotAppearance = new CGFappearance(this.scene);
	this.defaultRobotAppearance.setAmbient(this.actualColor[0], this.actualColor[1], this.actualColor[2], 0.5);
	this.defaultRobotAppearance.setDiffuse(this.actualColor[0], this.actualColor[1], this.actualColor[2], 0.2);
	this.defaultRobotAppearance.setSpecular(this.actualColor[0], this.actualColor[1], this.actualColor[2], 0.1);
	this.defaultRobotAppearance.setShininess(1);

	//this.defaultApperance = 'undefined';//this.defaultRobotAppearance;

	this.materialC = new CGFappearance(this.scene);
	this.materialC.setAmbient(1, 1, 1, 0.8);
	this.materialC.setDiffuse(1, 1, 1, 0.8);
	this.materialC.setSpecular(1, 1, 1, 0.6);	
	this.materialC.setShininess(10);

    var currentTime = Date.now();
	this.milisegundos = 0;
*/
 };

 MyClosedCylinder.prototype = Object.create(CGFobject.prototype);
 MyClosedCylinder.prototype.constructor = MyClosedCylinder;

 MyClosedCylinder.prototype.display = function() {

	this.scene.rotate(this.angle, this.xOff, this.yOff, this.zOff);

    this.scene.pushMatrix();
    this.scene.translate(0, 0, 1);
//    this.materialC.apply();
    this.topo1.display();
    this.scene.popMatrix();

	this.scene.pushMatrix();
    this.scene.scale(-1,1,1);
//    this.materialC.apply();
    this.topo2.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
//   	this.defaultRobotAppearance.apply();
  	this.corpo.display();
	this.scene.popMatrix();
};

/*
MyClock.prototype.update = function (currTime) {
	this.segundo = (currTime - this.milisegundos) / 1000;
	this.minuto = (currTime - this.milisegundos)/ 60000;
	this.hora = (currTime - this.milisegundos) / 3600000;
};
*/

MyClosedCylinder.prototype.setAngle = function (angle, xOff, yOff, zOff) {
	this.angle = angle;
	this.xOff = xOff;
	this.yOff = yOff;
	this.zOff = zOff;
};
/*
MyClosedCylinder.prototype.setColor = function(color) {
	this.actualColor[0] = color[0]/256;	
	this.actualColor[1] = color[1]/256;	
	this.actualColor[2] = color[2]/256;

	this.defaultRobotAppearance.setAmbient(this.actualColor[0], this.actualColor[1], this.actualColor[2], 0.5);
	this.defaultRobotAppearance.setDiffuse(this.actualColor[0], this.actualColor[1], this.actualColor[2], 0.2);
	this.defaultRobotAppearance.setSpecular(this.actualColor[0], this.actualColor[1], this.actualColor[2], 0.1);
};
*/
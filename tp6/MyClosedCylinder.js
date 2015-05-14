/**
 * MyClosedCylinder
 * @constructor
 */
 function MyClosedCylinder(scene, slices, stacks) {
	CGFobject.call(this,scene);
	
	this.slices=slices;
	this.stacks=stacks;

	this.corpo = new MyCylinder(scene, this.slices, this.stacks);
	this.corpo.initBuffers();
	this.topo1 = new MyCircle(scene, this.slices);
	this.topo1.initBuffers();
	this.topo2 = new MyCircle(scene, this.slices);
	this.topo2.initBuffers();

	this.materialC = new CGFappearance(this.scene);
	this.materialC.setAmbient(1, 1, 1, 0.8);
	this.materialC.setDiffuse(1, 1, 1, 0.8);
	this.materialC.setSpecular(1, 1, 1, 0.6);	
	this.materialC.setShininess(10);
/*
    var currentTime = Date.now();
	this.milisegundos = 0;
*/
 };

 MyClosedCylinder.prototype = Object.create(CGFobject.prototype);
 MyClosedCylinder.prototype.constructor = MyClosedCylinder;

 MyClosedCylinder.prototype.display = function() {

    this.scene.pushMatrix();
    this.scene.translate(0, 0, 1);
    this.materialC.apply();
    this.topo1.display();
    this.scene.popMatrix();

	this.scene.pushMatrix();
    this.scene.scale(-1,1,1);
    this.materialC.apply();
    this.topo2.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.materialC.apply();
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
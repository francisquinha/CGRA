/**
 * MyClock
 * @constructor
 */
 function MyClock(scene, slices, stacks) {
	CGFobject.call(this,scene);
	
	this.slices=slices;
	this.stacks=stacks;

	this.corpo = new MyCylinder(scene, this.slices, this.stacks);
	this.corpo.initBuffers();
	this.topo = new MyCircle(scene, this.slices);
	this.topo.initBuffers();

	this.materialC = new CGFappearance(this.scene);
	this.materialC.setAmbient(1, 1, 1, 0.8);
	this.materialC.setDiffuse(1, 1, 1, 0.8);
	this.materialC.setSpecular(1, 1, 1, 0.6);	
	this.materialC.setShininess(10);

	this.clockAppearance = new CGFappearance(this.scene);
	this.clockAppearance.setAmbient(1, 1, 1, 0.8);
	this.clockAppearance.setDiffuse(1, 1, 1, 0.8);
	this.clockAppearance.setSpecular(1, 1, 1, 0.6);	
	this.clockAppearance.setShininess(10);
	this.clockAppearance.loadTexture('../resources/images/clock.png');

	
 };

 MyClock.prototype = Object.create(CGFobject.prototype);
 MyClock.prototype.constructor = MyClock;

MyClock.prototype.display = function() {

    this.scene.pushMatrix();
    this.scene.translate(0, 0, 1);
    this.clockAppearance.apply();
    this.topo.display(); // frente
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.materialC.apply();
	this.corpo.display();
	this.scene.popMatrix();

};

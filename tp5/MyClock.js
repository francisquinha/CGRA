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

	this.horas = new MyClockHand(scene, 3, 0.4);
	this.horas.initBuffers();
	this.minutos = new MyClockHand(scene, 2, 0.6);
	this.minutos.initBuffers();
	this.segundos = new MyClockHand(scene, 1.2, 0.8);
	this.segundos.initBuffers();

	this.materialC = new CGFappearance(this.scene);
	this.materialC.setAmbient(1, 1, 1, 0.8);
	this.materialC.setDiffuse(1, 1, 1, 0.8);
	this.materialC.setSpecular(1, 1, 1, 0.6);	
	this.materialC.setShininess(10);

	this.materialH = new CGFappearance(this.scene);
	this.materialH.setAmbient(0, 0, 0, 0.8);
	this.materialH.setDiffuse(0, 0, 0, 0.8);
	this.materialH.setSpecular(0, 0, 0, 0.6);	
	this.materialH.setShininess(10);

	this.materialS = new CGFappearance(this.scene);
	this.materialS.setAmbient(1, 0, 0, 0.8);
	this.materialS.setDiffuse(1, 0, 0, 0.8);
	this.materialS.setSpecular(1, 0, 0, 0.6);	
	this.materialS.setShininess(10);

	this.clockAppearance = new CGFappearance(this.scene);
	this.clockAppearance.setAmbient(1, 1, 1, 0.8);
	this.clockAppearance.setDiffuse(1, 1, 1, 0.8);
	this.clockAppearance.setSpecular(1, 1, 1, 0.6);	
	this.clockAppearance.setShininess(10);
	this.clockAppearance.loadTexture('../resources/images/clock.png');

	this.milisegundos = currTime;
	this.hora = this.milisegundos / 3600000;
	this.minuto = this.milisegundos / 60000 - this.hora * 60;
	this.segundo = this.milisegundos / 1000 - this.hora * 360 - this.minuto * 60;
	
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

	this.scene.pushMatrix();
	this.scene.translate(0, 0, 1);
    this.materialH.apply();
    this.horas.setAngle(this.hora);
	this.horas.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.translate(0, 0, 1);
    this.materialH.apply();
    this.minutos.setAngle(this.minuto);
	this.minutos.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.translate(0, 0, 1);
    this.materialS.apply();
    this.segundos.setAngle(this.segundo);
	this.segundos.display();
	this.scene.popMatrix();

};

MyClock.prototype.update = function (currTime) {
	
};

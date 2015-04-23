/**
 * MyPaperPlane
 * @constructor
 */
 function MyPaperPlane(scene) {
	CGFobject.call(this,scene);

this.wing1 = new MyWings(scene, 1, 1);
this.wing1.initBuffers();


	this.clockAppearance = new CGFappearance(this.scene);
	this.clockAppearance.setAmbient(0.5, 0.5, 0.5, 0.8);
	this.clockAppearance.setDiffuse(0.5, 0.5, 0.5, 0.8);
	this.clockAppearance.setSpecular(0.5, 0.5, 0.5, 0.6);	
	this.clockAppearance.setShininess(10);
	//this.clockAppearance.loadTexture('../resources/images/clock.png');

    var currentTime = new Date();
	this.milisegundos = currentTime.getMilliseconds();
    this.timeCreate = currentTime.getSeconds();
 };

 MyPaperPlane.prototype = Object.create(CGFobject.prototype);
 MyPaperPlane.prototype.constructor = MyPaperPlane;

MyPaperPlane.prototype.display = function() {

  //this.scene.translate(0, 3.55, 0);
	this.scene.pushMatrix(); 
	//this.wing1.setAngle(this.segundo * 60);
	this.wing1.setTranslate(0.5);	
   	//console.log(this.segundo / 10000000000);
    this.wing1.display();
    this.scene.popMatrix();
};

MyPaperPlane.prototype.update = function (currTime) {
	this.segundo = (currTime - this.milisegundos) / 1000;
};

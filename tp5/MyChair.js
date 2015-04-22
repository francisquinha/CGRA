/**
 * MyChair
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyChair(scene) {
	CGFobject.call(this,scene);

    this.cubeQuad = new MyUnitCubeQuad(this.scene);
    this.cubeQuad.initBuffers;

    // Materials
	this.scene.materialDefault = new CGFappearance(this.scene);

	this.materialT = new CGFappearance(this.scene);
	this.materialT.setAmbient(0.5, 0.3, 0.0, 0.5);
	this.materialT.setDiffuse(0.5, 0.3, 0.0, 0.2);
	this.materialT.setSpecular(0.5, 0.3, 0.0, 0.1);
	this.materialT.setShininess(1);

	this.chairAppearance = new CGFappearance(this.scene);
	this.chairAppearance.setAmbient(1, 1, 1, 0.5);
	this.chairAppearance.setDiffuse(1, 1, 1, 0.2);
	this.chairAppearance.setSpecular(1, 1, 1, 0.1);
	this.chairAppearance.setShininess(1);
	this.chairAppearance.loadTexture('../resources/images/chair.png');

	this.legAppearance = new CGFappearance(this.scene);
	this.legAppearance.setAmbient(1, 1, 1, 0.5);
	this.legAppearance.setDiffuse(1, 1, 1, 0.5);
	this.legAppearance.setSpecular(1, 1, 1, 0.9);
	this.legAppearance.setShininess(1);
	this.legAppearance.loadTexture('../resources/images/legs.png');

	this.materialL = new CGFappearance(this.scene);
	this.materialL.setAmbient(0.4, 0.5, 0.6, 0.5);
	this.materialL.setDiffuse(0.4, 0.5, 0.6, 0.5);
	this.materialL.setSpecular(0.4, 0.6, 0.6, 0.9);
	this.materialL.setShininess(256);
};

MyChair.prototype = Object.create(CGFobject.prototype);
MyChair.prototype.constructor=MyChair;

MyChair.prototype.display = function(){
    var deg2rad=Math.PI/180.0;
	var a_rad=180.0*deg2rad;

 	
   
   	this.scene.pushMatrix();			//assento
		this.scene.translate(-2, 2.1, 4);
		this.scene.scale(1.5, 0.2, 1.5);
		this.chairAppearance.apply();
		//this.materialT.apply();
		this.cubeQuad.display();
	this.scene.popMatrix();
   
    this.scene.pushMatrix();
		this.scene.translate(-2, 3, 4.8);		//costas
		this.scene.scale(1.5, 2, 0.2);
		this.chairAppearance.apply();
		//this.materialT.apply();
		this.cubeQuad.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
		this.scene.translate(-1.4, 1, 4.7);		//perna
		this.scene.scale(0.2, 2, 0.2);
		this.legAppearance.apply();
		//this.materialL.apply();
		this.cubeQuad.display();
    this.scene.popMatrix();  

	this.scene.pushMatrix();
		this.scene.translate(-1.4, 1, 3.4);		//perna
		this.scene.scale(0.2, 2, 0.2);
		this.legAppearance.apply();
		//this.materialL.apply();
		this.cubeQuad.display();
    this.scene.popMatrix();  

    this.scene.pushMatrix();
		this.scene.translate(-2.6, 1, 4.7);		//perna
		this.scene.scale(0.2, 2, 0.2);
		this.legAppearance.apply();
		//this.materialL.apply();
		this.cubeQuad.display();
    this.scene.popMatrix();  

    this.scene.pushMatrix();
		this.scene.translate(-2.6, 1, 3.4);		//perna
		this.scene.scale(0.2, 2, 0.2);
		this.legAppearance.apply();
		//this.materialL.apply();
		this.cubeQuad.display();
    this.scene.popMatrix();  

};

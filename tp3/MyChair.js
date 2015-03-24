/**
 * MyChair
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyChair(scene) {
	CGFobject.call(this,scene);

    this.cubeQuad = new MyUnitCubeQuad(this.scene);
    this.cubeQuad.initBuffers;
};

MyChair.prototype = Object.create(CGFobject.prototype);
MyChair.prototype.constructor=MyChair;

MyChair.prototype.display = function(){
    var deg2rad=Math.PI/180.0;
	var a_rad=180.0*deg2rad;

 	// Materials
	this.scene.materialDefault = new CGFappearance(this.scene);

	this.scene.materialT = new CGFappearance(this.scene);
	this.scene.materialT.setAmbient(0.5, 0.3, 0.0, 0.5);
	this.scene.materialT.setDiffuse(0.5, 0.3, 0.0, 0.2);
	this.scene.materialT.setSpecular(0.5, 0.3, 0.0, 0.1);
	this.scene.materialT.setShininess(1);

	this.scene.materialL = new CGFappearance(this.scene);
	this.scene.materialL.setAmbient(0.4, 0.5, 0.6, 0.5);
	this.scene.materialL.setDiffuse(0.4, 0.5, 0.6, 0.5);
	this.scene.materialL.setSpecular(0.4, 0.6, 0.6, 0.9);
	this.scene.materialL.setShininess(256);
   
   	this.scene.pushMatrix();			//assento
		this.scene.translate(-2, 2.1, 4);
		this.scene.scale(1.5, 0.2, 1.5);
		this.scene.materialT.apply();
		this.cubeQuad.display();
	this.scene.popMatrix();
   
    this.scene.pushMatrix();
		this.scene.translate(-2, 3, 4.8);		//costas
		this.scene.scale(1.5, 2, 0.2);
		this.scene.materialT.apply();
		this.cubeQuad.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
		this.scene.translate(-1.4, 1, 4.7);		//perna
		this.scene.scale(0.2, 2, 0.2);
		this.scene.materialL.apply();
		this.cubeQuad.display();
    this.scene.popMatrix();  

	this.scene.pushMatrix();
		this.scene.translate(-1.4, 1, 3.4);		//perna
		this.scene.scale(0.2, 2, 0.2);
		this.scene.materialL.apply();
		this.cubeQuad.display();
    this.scene.popMatrix();  

    this.scene.pushMatrix();
		this.scene.translate(-2.6, 1, 4.7);		//perna
		this.scene.scale(0.2, 2, 0.2);
		this.cubeQuad.display();
    this.scene.popMatrix();  

    this.scene.pushMatrix();
		this.scene.translate(-2.6, 1, 3.4);		//perna
		this.scene.scale(0.2, 2, 0.2);
		this.cubeQuad.display();
    this.scene.popMatrix();  

};

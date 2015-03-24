/**
 * MyTable
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

//MyTable e uma subclasse de CGFobject
function MyTable(scene) {
	CGFobject.call(this,scene);
	this.cube = new MyUnitCubeQuad(this.scene);
	this.cube.initBuffers();

};


MyTable.prototype = Object.create(CGFobject.prototype);
MyTable.prototype.constructor=MyTable;

MyTable.prototype.display = function() {

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

    this.scene.pushMatrix();
    this.scene.translate(0.0, 3.55, 0.0);
    this.scene.scale(5.0, 0.3, 3.0)
	this.scene.materialT.apply();
    this.cube.display(); // tampo - primeiro escala e depois translada para cima
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(-2.2, 1.7, 1.2);
    this.scene.scale(0.3, 3.4, 0.3)
	this.scene.materialL.apply();
    this.cube.display(); // perna frente esquerda - primeiro escala, depois translada para cima, para a frente e para a esquerda
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(2.2, 1.7, 1.2);
    this.scene.scale(0.3, 3.4, 0.3)
	this.scene.materialL.apply();
    this.cube.display(); // perna frente direita - primeiro escala, depois translada para cima, para a frente e para a direita
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(-2.2, 1.7, -1.2);
    this.scene.scale(0.3, 3.4, 0.3)
	this.scene.materialL.apply();
    this.cube.display(); // perna tras esquerda - primeiro escala, depois translada para cima, para tras e para a esquerda
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(2.2, 1.7, -1.2);
    this.scene.scale(0.3, 3.4, 0.3)
	this.scene.materialL.apply();
    this.cube.display(); // perna frente esquerda - primeiro escala, depois translada para cima, para a tras e para a direita
    this.scene.popMatrix();

}

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

// Materials
	this.scene.materialDefault = new CGFappearance(this.scene);

	this.materialL = new CGFappearance(this.scene);
	this.materialL.setAmbient(0.4, 0.5, 0.6, 0.5);
	this.materialL.setDiffuse(0.4, 0.5, 0.6, 0.5);
	this.materialL.setSpecular(0.4, 0.6, 0.6, 0.9);
	this.materialL.setShininess(256);


	//TP4
	this.tableAppearence = new CGFappearance(this.scene);
	this.tableAppearence.setAmbient(1, 1, 1, 0.5);
	this.tableAppearence.setDiffuse(1, 1, 1, 0.2);
	this.tableAppearence.setSpecular(1, 1, 1, 0.1);
	this.tableAppearence.setShininess(1);
	this.tableAppearence.loadTexture('../resources/images/table.png');
	
	this.legTableAppearance = new CGFappearance(this.scene);
	this.legTableAppearance.setAmbient(1, 1, 1, 0.5);
	this.legTableAppearance.setDiffuse(1, 1, 1, 0.5);
	this.legTableAppearance.setSpecular(1, 1, 1, 0.9);
	this.legTableAppearance.setShininess(1);
	this.legTableAppearance.loadTexture('../resources/images/legs.png');
};


MyTable.prototype = Object.create(CGFobject.prototype);
MyTable.prototype.constructor=MyTable;

MyTable.prototype.display = function() {

    this.scene.pushMatrix();
    this.scene.translate(0.0, 3.55, 0.0);
    this.scene.scale(5.0, 0.3, 3.0)
	this.tableAppearence.apply();
    this.cube.display(); // tampo - primeiro escala e depois translada para cima
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(-2.2, 1.7, 1.2);
    this.scene.scale(0.3, 3.4, 0.3)
	this.legTableAppearance.apply();
	//this.materialL.apply();
    this.cube.display(); // perna frente esquerda - primeiro escala, depois translada para cima, para a frente e para a esquerda
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(2.2, 1.7, 1.2);
    this.scene.scale(0.3, 3.4, 0.3)
	//this.materialL.apply();
	this.legTableAppearance.apply();
    this.cube.display(); // perna frente direita - primeiro escala, depois translada para cima, para a frente e para a direita
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(-2.2, 1.7, -1.2);
    this.scene.scale(0.3, 3.4, 0.3)
	//this.materialL.apply();
	this.legTableAppearance.apply();
    this.cube.display(); // perna tras esquerda - primeiro escala, depois translada para cima, para tras e para a esquerda
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(2.2, 1.7, -1.2);
    this.scene.scale(0.3, 3.4, 0.3)
	//this.materialL.apply();
	this.legTableAppearance.apply();
    this.cube.display(); // perna frente esquerda - primeiro escala, depois translada para cima, para a tras e para a direita
    this.scene.popMatrix();

}

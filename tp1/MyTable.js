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

    this.scene.pushMatrix();
    this.scene.translate(0, 3.7, 0);
    this.scene.scale(5,0.3,3)
    this.cube.display(); // tampo - primeiro escala e depois translada para cima
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(-2.35, 1.8, 1.35);
    this.scene.scale(0.3,3.5,0.3)
    this.cube.display(); // perna frente esquerda - primeiro escala, depois translada para cima, para a frente e para a esquerda
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(2.35, 1.8, 1.35);
    this.scene.scale(0.3,3.5,0.3)
    this.cube.display(); // perna frente direita - primeiro escala, depois translada para cima, para a frente e para a direita
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(-2.35, 1.8, -1.35);
    this.scene.scale(0.3,3.5,0.3)
    this.cube.display(); // perna tras esquerda - primeiro escala, depois translada para cima, para tras e para a esquerda
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(2.35, 1.8, -1.35);
    this.scene.scale(0.3,3.5,0.3)
    this.cube.display(); // perna frente esquerda - primeiro escala, depois translada para cima, para a tras e para a direita
    this.scene.popMatrix();

}

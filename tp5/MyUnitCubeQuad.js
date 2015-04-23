/**
 * MyUnitCubeQuad
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

//MyUnitCubeQuad e uma subclasse de CGFobject
function MyUnitCubeQuad(scene) {
	CGFobject.call(this,scene);
//	this.quad = new Plane(this.scene, 10);
	this.quad = new MyQuad(scene, 0, 1, 0, 1);
	this.quad.initBuffers();



};

MyUnitCubeQuad.prototype = Object.create(CGFobject.prototype);
MyUnitCubeQuad.prototype.constructor=MyUnitCubeQuad;


MyUnitCubeQuad.prototype.display = function() {

    this.scene.pushMatrix();
    this.scene.translate(0, 0, 0.5);
    this.quad.display(); // frente
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.rotate(-Math.PI/2, 1, 0, 0);
    this.scene.translate(0, 0, 0.5);    
    this.quad.display(); // cima - coloca na frente e depois roda para cima
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.rotate(Math.PI, 1, 0, 0)
    this.scene.translate(0, 0, 0.5);
    this.quad.display(); // tras - coloca na frente e depois roda para tras
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.rotate(Math.PI/2, 1, 0, 0);
    this.scene.translate(0, 0, 0.5);
    this.quad.display(); // baixo - coloca na frente e depois roda para baixo
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.rotate(Math.PI/2, 0, 1, 0);
    this.scene.translate(0, 0, 0.5);
    this.quad.display(); // direita - coloca na frente e depois roda para a direita
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.rotate(-Math.PI/2, 0, 1, 0);
    this.scene.translate(0, 0, 0.5);
    this.quad.display(); // esquerda - coloca na frente e depois roda para a esquerda
    this.scene.popMatrix();
}

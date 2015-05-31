/**
 * MyClosedCylinder
 * @constructor
 */
 function MyClosedCylinder(scene, slices, stacks, angle, xOff, yOff, zOff) {
	CGFobject.call(this,scene);
	this.slices=slices;
	this.stacks=stacks;
	this.angle = 0;
	this.xOff = 0;
	this.yOff = 0;
	this.zOff = 0;
	this.corpo = new MyCylinder(scene, this.slices, this.stacks);
	this.corpo.initBuffers();
	this.topo1 = new MyCircle(scene, this.slices);
	this.topo1.initBuffers();
	this.topo2 = new MyCircle(scene, this.slices);
	
	this.topo2.initBuffers();
 };

 MyClosedCylinder.prototype = Object.create(CGFobject.prototype);
 MyClosedCylinder.prototype.constructor = MyClosedCylinder;

 MyClosedCylinder.prototype.display = function() {

	this.scene.rotate(this.angle, this.xOff, this.yOff, this.zOff);

    this.scene.pushMatrix();
    this.scene.translate(0, 0, 1);
    this.topo1.display();
    this.scene.popMatrix();

	this.scene.pushMatrix();
    this.scene.scale(-1,1,1);
    this.topo2.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
  	this.corpo.display();
	this.scene.popMatrix();
};

MyClosedCylinder.prototype.setAngle = function (angle, xOff, yOff, zOff) {
	this.angle = angle;
	this.xOff = xOff;
	this.yOff = yOff;
	this.zOff = zOff;
};
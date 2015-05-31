/**
 * MyPaperPlane
 * @constructor
 */
 function MyPaperPlane(scene, XOffset, YOffset, ZOffset, velX, velY1, velY2, velZ) {
	CGFobject.call(this,scene);

	this.body = new MyWings(scene, 1, 1);
	this.body.initBuffers();
	this.wing1 = new MyWings(scene, 1, 1);
	this.wing1.initBuffers();
	this.wing2 = new MyWings(scene, 1, 1);
	this.wing2.initBuffers();
	this.Xini = XOffset;
	this.Yini = YOffset;
	this.Zini = ZOffset;
	this.Yhitwall = YOffset;
	this.XOffset = XOffset;
	this.YOffset = YOffset;
	this.ZOffset = ZOffset;
	
	this.angle = 0;
	this.milisegundos = Date.now();
	this.hitwall = Date.now();

	this.velX = velX;
	this.velY1 = velY1;
	this.velY2 = velY2;
	this.velZ = velZ;

	this.wingsAppearance = new CGFappearance(this.scene);
	this.wingsAppearance.setAmbient(1, 1, 1, 0.5);
	this.wingsAppearance.setDiffuse(1, 1, 1, 0.2);
	this.wingsAppearance.setSpecular(1, 1, 1, 0.1);
	this.wingsAppearance.setShininess(1);
	this.wingsAppearance.loadTexture('../resources/images/squares.png');
 };

 MyPaperPlane.prototype = Object.create(CGFobject.prototype);
 MyPaperPlane.prototype.constructor = MyPaperPlane;

MyPaperPlane.prototype.setAngle = function (angle) {
	this.angle = angle * degToRad;
};

MyPaperPlane.prototype.setTranslate = function (XOffset, YOffset, ZOffset) {
	this.XOffset = XOffset;
	this.YOffset = YOffset;
	this.ZOffset = ZOffset;
};

MyPaperPlane.prototype.display = function() {

    this.scene.pushMatrix();
	this.scene.translate(this.XOffset, this.YOffset, this.ZOffset);
	this.scene.rotate(this.angle, 0, 0, 1);

	this.scene.pushMatrix();
		this.scene.translate(1.2, 0, 0);
		this.scene.scale(1.2, 1, 0.4);
		this.scene.rotate(180 * degToRad, 0, 0, 1);
		this.scene.rotate(90 * degToRad, 1, 0, 0);
		this.wingsAppearance.apply();
    	this.wing1.display();
    this.scene.popMatrix(); 

	this.scene.pushMatrix();
		this.scene.translate(1.2, 0, 0);
		this.scene.scale(1.2, 1, 0.4);
		this.scene.rotate(90 * degToRad, 0, 1, 0);
		this.scene.rotate(-90 * degToRad, 1, 0, 0);
    	this.wing2.display();
    this.scene.popMatrix(); 

	this.scene.pushMatrix();
		this.scene.translate(1.2, 0, 0);
		this.scene.rotate(180 * degToRad, 0, 0, 1);
		this.scene.scale(1.2, 0.5, 1);
    	this.body.display();
    this.scene.popMatrix();

    this.scene.popMatrix();
};

MyPaperPlane.prototype.update = function (currTime) {

	var elapsed1 = currTime - this.milisegundos;
	var elapsed2 = currTime - this.hitwall;
	if (this.XOffset > 0.01) {
		this.hitwall = Date.now();
		this.XOffset = this.Xini + elapsed1 * this.velX;
		this.YOffset = this.Yini + elapsed1 * this.velY1;
		this.ZOffset = this.Zini + elapsed1 * this.velZ;
		this.Yhitwall = this.YOffset;
		if (this.XOffset < 0.01) this.XOffset = 0.01;
	}
	else if (this.XOffset == 0.01 && this.YOffset > 0.01) {
		this.setAngle(90);
		this.YOffset = this.Yhitwall + elapsed2 * this.velY2;
		if (this.YOffset < 0.01) this.YOffset = 0.01;
	}
	else if (this.XOffset == 0.01 && this.YOffset == 0.01) {
		this.setAngle(25);
	}

};

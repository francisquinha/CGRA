/**
 * MyRobot
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

//MyRobot e uma subclasse de CGFobject
function MyRobot(scene, xOff, yOff, zOff, angle) {
	CGFobject.call(this,scene);
	this.xOff = xOff;
	this.yOff = yOff;
	this.zOff = zOff;
	this.angle = angle * degToRad;
	/*
	this.minS = minS;
	this.maxS = maxS;
	this.minT = minT;
	this.maxT = maxT;
*/
	this.initBuffers();
};


MyRobot.prototype = Object.create(CGFobject.prototype);
MyRobot.prototype.constructor=MyRobot;

MyRobot.prototype.initBuffers = function () {
	this.vertices = [
           0.5, 0.3, 0,
           -0.5, 0.3, 0,
           0, 0.3, 2
			];

	this.indices = [
            0, 1, 2
			//3, 2, 1,
        ];
		
	this.primitiveType=this.scene.gl.TRIANGLES;

    this.normals = [ 0, 0, 1,
                     0, 0, 1,
                     0, 0, 1
                    // 0, 0, 1 
                    ];


    /*this.texCoords = [
    
		this.minS, this.maxT,
		this.maxS, this.maxT,
		this.minS, this.minT,
		this.maxS, this.minT
		];
*/
	this.initGLBuffers();
};


MyRobot.prototype.rotateLeft = function () {
	this.angle += 5*degToRad;
};

MyRobot.prototype.rotateRight = function () {
	this.angle -= 5*degToRad;
};

MyRobot.prototype.translateForward = function () {
	this.xOff += 0.2 * Math.sin(this.angle);
	this.zOff += 0.2 * Math.cos(this.angle);
};

MyRobot.prototype.translateBack = function () {
	this.xOff -= 0.2 * Math.sin(this.angle);
	this.zOff -= 0.2 * Math.cos(this.angle);
};


MyRobot.prototype.setXZ = function (x, z) {
	this.xOff = x;
	this.zOff = z;
};


MyRobot.prototype.display = function() {
    this.scene.pushMatrix();
    this.scene.translate(this.xOff, this.yOff, this.zOff);
	this.scene.rotate(this.angle, 0, 1, 0);
    CGFobject.prototype.display.call(this);
    this.scene.popMatrix();
};
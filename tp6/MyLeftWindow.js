/**
 * MyLeftWindow
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

//MyLeftWindow e uma subclasse de CGFobject
function MyLeftWindow(scene,minS,maxS, minT, maxT) {
	CGFobject.call(this,scene);

    this.minS = minS;
	this.maxS = maxS;
	this.minT = minT;
	this.maxT = maxT;

	this.one = new MyQuad(scene);//, minS,maxS,minT,maxT);
	this.two = new MyQuad(scene);//, minS,maxS,minT,maxT);
	this.three = new MyQuad(scene);//, minS,maxS,minT,maxT);
	this.four = new MyQuad(scene);//, minS,maxS,minT,maxT);
	this.five = new MyQuad(scene);//, minS,maxS,minT,maxT);
	this.six = new MyQuad(scene);//, minS,maxS,minT,maxT);
	this.seven = new MyQuad(scene);//, minS,maxS,minT,maxT);
	this.eight = new MyQuad(scene);//, minS,maxS,minT,maxT);

	this.initBuffers();
};


MyLeftWindow.prototype = Object.create(CGFobject.prototype);
MyLeftWindow.prototype.constructor=MyLeftWindow;

MyLeftWindow.prototype.display = function() {
   
	this.scene.pushMatrix();
    this.scene.translate(-0.33,0.33,0);
    this.scene.scale(0.33,0.33,0.2);
    this.one.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(-0.33,0,0);
    this.scene.scale(0.33,0.33,0.2); 
    this.two.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(-0.33,-0.33,0);
    this.scene.scale(0.33,0.33,0.2); 
    this.three.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(0,0.33,0);
    this.scene.scale(0.33,0.33,0.2);
    this.four.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(0,-0.33,0);
    this.scene.scale(0.33,0.33,0.2); 
    this.five.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(0.33,0.33,0);
    this.scene.scale(0.33,0.33,0.2); 
    this.six.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(0.33,0,0);
    this.scene.scale(0.33,0.33,0.2); 
    this.seven.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(0.33,-0.33,0);
    this.scene.scale(0.33,0.33,0.2); 
    this.eight.display();
    this.scene.popMatrix();
};


MyLeftWindow.prototype.initBuffers = function () {
	this.vertices = [
            -0.5, -0.5, 0,
            0.5, -0.5, 0,
            -0.5, 0.5, 0,
            0.5, 0.5, 0
			];

	this.indices = [
            0, 1, 2, 
			3, 2, 1,
        ];
		
	this.primitiveType=this.scene.gl.TRIANGLES;

    this.normals = [ 0, 0, 1,
                     0, 0, 1,
                     0, 0, 1,
                     0, 0, 1 ];


    this.texCoords = [
    
		this.minS, this.maxT,
		this.maxS, this.maxT,
		this.minS, this.minT,
		this.maxS, this.minT
		];

	this.initGLBuffers();
	
};

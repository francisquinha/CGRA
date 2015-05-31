/**
 * MyLeftWindow
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

//MyLeftWindow e uma subclasse de CGFobject
function MyLeftWindow(scene) {
	CGFobject.call(this,scene);

/*
	this.one = new MyQuad(scene);//, minS,maxS,minT,maxT);
	this.two = new MyQuad(scene);//, minS,maxS,minT,maxT);
	this.three = new MyQuad(scene);//, minS,maxS,minT,maxT);
	this.four = new MyQuad(scene);//, minS,maxS,minT,maxT);
	this.five = new MyQuad(scene);//, minS,maxS,minT,maxT);
	this.six = new MyQuad(scene);//, minS,maxS,minT,maxT);
	this.seven = new MyQuad(scene);//, minS,maxS,minT,maxT);
	this.eight = new MyQuad(scene);//, minS,maxS,minT,maxT);
*/
	this.initBuffers();
};


MyLeftWindow.prototype = Object.create(CGFobject.prototype);
MyLeftWindow.prototype.constructor=MyLeftWindow;
/*
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
*/

MyLeftWindow.prototype.initBuffers = function () {
	this.vertices = [
            -0.5, -0.5, 0,
            -0.155, -0.5, 0,
            0.155, -0.5, 0,
            0.5, -0.5, 0,
            -0.5, -0.23, 0,
            -0.155, -0.23, 0,
            0.155, -0.23, 0,
            0.5, -0.23, 0,
            -0.5, 0.23, 0,
            -0.155, 0.23, 0,
            0.155, 0.23, 0,
            0.5, 0.23, 0,
            -0.5, 0.5, 0,
            -0.155, 0.5, 0,
            0.155, 0.5, 0,
            0.5, 0.5, 0	            
			];

	this.indices = [
            0, 1, 5, 
			0, 5, 4,
			1, 2, 6,
			1, 6, 5,
			2, 3, 7,
			2, 7, 6,
			4, 5, 9,
			4, 9, 8,
			6, 7, 11,
			6, 11, 10,
			8, 9, 13,
			8, 13, 12,
			9, 10, 14,
			9, 14, 13,
			10, 11, 15,
			10, 15, 14
        ];
		
	this.primitiveType=this.scene.gl.TRIANGLES;

    this.normals = [ 0, 0, 1,
                     0, 0, 1,
                     0, 0, 1,
                     0, 0, 1,
                     0, 0, 1,
                     0, 0, 1,
                     0, 0, 1,
                     0, 0, 1,
                     0, 0, 1,
                     0, 0, 1,
                     0, 0, 1,
                     0, 0, 1,
                     0, 0, 1,
                     0, 0, 1,
                     0, 0, 1,
                     0, 0, 1 ];


    this.texCoords = [    
           -0.97, 1.97,
           0.03, 1.97,
           0.97, 1.97,
           1.97, 1.97,
           -0.97, 0.94,
           0.03, 0.94,
           0.97, 0.94,
           1.97, 0.94,
           -0.97, 0.06,
           0.03, 0.06,
           0.97, 0.06,
           1.97, 0.06,
           -0.97, -0.97,
           0.03, -0.97,
           0.97, -0.97,
           1.97, -0.97,
           	            
		];

	this.initGLBuffers();
	
};

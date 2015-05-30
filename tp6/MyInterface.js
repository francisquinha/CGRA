/**
 * MyInterface
 * @constructor
 */
 
 
function MyInterface() {
	//call CGFinterface constructor 
	CGFinterface.call(this);
};

MyInterface.prototype = Object.create(CGFinterface.prototype);
MyInterface.prototype.constructor = MyInterface;

/*
var FizzyText = function() {
  this.changeColor = [ 0, 128, 255 ]; // RGB array
  this.robotTextures = 'undefined';
  this.speed = 1;
};
*/


/**
 * init
 * @param {CGFapplication} application
 */
MyInterface.prototype.init = function(application) {
	// call CGFinterface init
	CGFinterface.prototype.init.call(this, application);
	
	// init GUI. For more information on the methods, check:
	//  http://workshop.chromeexperiments.com/examples/gui
	
	this.gui = new dat.GUI();
	//this.text = new FizzyText();

	// add a button:
	// the first parameter is the object that is being controlled (in this case the scene)
	// the identifier 'doSomething' must be a function declared as part of that object (i.e. a member of the scene class)
	// e.g. LightingScene.prototype.doSomething = function () { console.log("Doing something..."); }; 

	this.gui.add(this.scene, 'pauseWatch').name('Pause clock');	
	// add a group of controls (and open/expand by defult)
	
	var lights = this.gui.addFolder("Lights");
	lights.open();

	// Choose from accepted values
/*    var appearancesNames = [];
    for (var propertyName in this.scene.robotAppearanceList) {
        appearancesNames.push(propertyName);
    }
*/      
	this.gui.add(this.scene, 'currRobotAppearance', { Robot1: 0, Robot2: 1, Robot3: 2, Robot4: 3}).name('Robot').onChange(
		function(value){
			currRobotAppearance = value;
// ir a cena ou chamar robot diretamente daqui?
			this.object.changeTextures(value);
		}
	);
	        
	        

	 this.gui.add(this.scene, 'openWindow').name('Open window');


	// add two check boxes to the group. The identifiers must be members variables of the scene initialized in scene.init as boolean
	// e.g. this.option1=true; this.option2=false;
	
	lights.add(this.scene, 'centerLight').name('Center light');
	lights.add(this.scene, 'rightBoardLight').name('Right board light');
	lights.add(this.scene, 'leftBoardLight').name('Left board light');
	lights.add(this.scene, 'windowLight').name('Window light');
	
	// Colors
	/*	
	this.gui.addColor(this.scene, 'changeColor').name('Robot body color').listen().onChange(function(value){
	changeColor = value;
	this.object.changeColorRobot(value);} 
);
*/
	// add a slider
	// must be a numeric variable of the scene, initialized in scene.init e.g.
	// this.speed=3;
	// min and max values can be specified as parameters
	
	this.gui.add(this.scene, 'speedRobot', 0, 3).name('Robot speed').onChange(
		function(value){
	//console.log(value);
	this.object.changeSpeedRobot(value);
}
);
	
	return true;
};

/**
 * processKeyboard
 * @param event {Event}
 */
MyInterface.prototype.processKeyboard = function(event) {
	// call CGFinterface default code (omit if you want to override)
	CGFinterface.prototype.processKeyboard.call(this,event);
	
	// Check key codes e.g. here: http://www.asciitable.com/
	// or use String.fromCharCode(event.keyCode) to compare chars
	
	// for better cross-browser support, you may also check suggestions on using event.which in http://www.w3schools.com/jsref/event_key_keycode.asp
	switch (event.which || event.keyCode)
	{
		case (97 || 37):// only works for 'a', as it is
	      {this.scene.rotateLeft();
	      break;}
		case (100):	//  d
		  {this.scene.rotateRight();
		  break;}
		case (115):	//  s
		  {this.scene.translateBack();
		  break;}
		case (119):	//  w
		  {this.scene.translateForward();
		  break;}
		case (111):	//  o
		  {//this.scene.helloArm(); // descomentar e apagar tudo o resto que esta para baixo se nao interessar; neste caso
		  // e necessario deixar premido a tecla 'o' para o braço rodar;
/*		  	var count = 0;
		  	var c = this.scene;
var variable = setInterval(function(){ c.helloArm(); count++; 		  	
		  	if(count == 20)
		  		stopInterval();
}, 100); myVar = variable;
c.removeAngles();*/
		  	this.scene.helloArm();
//		  setInterval(function(){c.helloArm()}, 1000);
		  break;}
	};
};
/*
var myVar;

function stopInterval() {
  clearInterval(myVar);
}*/
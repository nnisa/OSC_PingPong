var osc = require("node-osc");

var oscClient;
var oscServer;

var otherMouseX=0;
var otherMouseY=0;

var ourPortInput;
var theirPortInput;
var theirHostInout;
var startButton;


var x = 180;
var y = 180;
var xspeed = 7;
var yspeed = 8;


function setup() {
	ourPortInput = createInput();
	theirPortInput = createInput();
	theirHostInout = createInput();
	startButton = createButton("start");

	startButton.mouseClicked(function(){
		// 1. start an osc listener that updates otherMouseY and otherMouseX
		// 2. Start an OSC sender that sends our mouseX and mouseY
		var theirPortNumber = parseInt(theirPortInput.value());
		oscClient = new osc.Client(theirHostInout.value(), theirPortNumber);

		var ourPortNumber = parseInt(ourPortInput.value());
		oscServer = new osc.Server(ourPortNumber, '149.31.124.32');

		oscServer.on('message', function(msg, rinfo){
			console.log("got some data");
			console.log(msg);

			if (msg[1]== "/player/position"){
				otherMouseY = parseInt(msg[2]);
			} 

			if (msg[1]== "/ball/position"){
				x = parseInt(msg[2]);
				y = parseInt(msg[3]);
			} 
		});
		console.log(ourPortInput.value());
		console.log(theirPortInput.value());
		console.log(theirHostInout.value());
	});
	createCanvas(500, 500);
}

function draw() {
	background(0);
	noStroke();
// drawing the local paddle
	fill(0, 255, 0);
	// ellipse(mouseX, mouseY, 50, 50);
	rect(20, mouseY, 10, 100);
// drawing the client paddle
	fill(255, 0, 0);
	// ellipse(otherMouseX, otherMouseY, 50, 50);
	rect(480, otherMouseY, 10, 100);

	// if (oscClient!= undefined) {
	// oscClient.send('mouseX', mouseX);
	// oscClient.send('mouseY', mouseY);
	// }

	//drawing the ball
    fill(255, 204, 0);
    ellipse ((500-x), (500-y), 20, 20);


    if (oscClient!= undefined) {
	oscClient.send('/player/position', mouseY);
	}



    // paddle is 10x100 pixels
    // starts at mouseX, mouseY
    if ( ((x > 0) && (x < 40)) && ((y > mouseY) && (y < (mouseY+100))) ) {
    	xspeed = -xspeed;
    	yspeed = -yspeed;
    } else if ( (x+10 > 500) || (x-10 < 0) ){
      xspeed = -xspeed;
    } else if ( (y+10 > 500) || (y-10 < 0) ) {
      yspeed = -yspeed;
    } else if ( ((x > 0) && (x > 460)) && ((y > otherMouseY) && (y < (otherMouseY+100))) ) {
    	xspeed = -xspeed;
    	yspeed = -yspeed;
    }
    x = x + xspeed;
    y = y + yspeed;

    //if ball touches sides - end this game 
    //click to start the ball. 

 //    if (oscClient!= undefined) {
	// oscClient.send('ballX', x);
	// oscClient.send('ballY', y);
	// }

 //    if (oscClient!= undefined) {
	// oscClient.send('x', xspeed);
	// oscClient.send('y', yspeed);
	// }
}




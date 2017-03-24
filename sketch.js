var osc = require("node-osc");

var oscClient;
var oscServer;

var otherMouseX=0;
var otherMouseY=0;

var ourPortInput;
var theirPortInput;
var theirHostInout;
var startButton;



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
		oscServer = new osc.Server(ourPortNumber, 'localhost');

		oscServer.on('message', function(msg, rinfo){
			console.log("got some data");
			console.log(msg);
			if (msg[0]== "mouseX"){
				otherMouseX = parseInt(msg[1]);
			} else if(msg[0] == "mouseY"){
				otherMouseY = parseInt(msg[1]);
			}
		});

		console.log(ourPortInput.value());
		console.log(theirPortInput.value());
		console.log(theirHostInout.value());
	});

	createCanvas(800, 800);
}

function draw() {
	background(255);
	noStroke();

	fill(0, 255, 0);
	ellipse(mouseX, mouseY, 50, 50);

	fill(255, 0, 0);
	ellipse(otherMouseX, otherMouseY, 50, 50);

	if (oscClient!= undefined) {
	oscClient.send('mouseX', mouseX);
	oscClient.send('mouseY', mouseY);
	}
}




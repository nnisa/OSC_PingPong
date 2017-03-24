var x = 180;
var y = 180;
var xspeed = 9;
var yspeed = 10;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background (25);

}

function draw() {

  //distance from center of the screen
  var d = dist(windowWidth/2, windowHeight/2, mouseX, mouseY);

    fill (random(200, 250), random(200, 250), random(200, 250));
    ellipse (x, y, 40, 40);

    //bouncing horizontally
   x = x + xspeed;
    
     if (x+20 > windowWidth || x-20 < 0)  {
      xspeed = -xspeed;
    }

    //bouncing veritcally
    y = y + yspeed;

    if (y+20 > windowHeight || y-20 < 0) {
      yspeed = -yspeed;
    }

}



// var data;
// var streetViewImage;
// var weatherData;

// function preload() {
//   weatherData = loadJSON("http://api.openweathermap.org/data/2.5/weather?q=New%20York&APPID=92c47091f31b68d109fa98fef6454484");
//   // streetViewImage = loadImage("https://maps.googleapis.com/maps/api/streetview?size=500x500&location=46.414382,10.013988&heading=101.78&pitch=20";
//   // data = loadJSON("https://maps.googleapis.com/maps/api/directions/json?origin=75+9th+Ave+New+York,+NY&destination=MetLife+Stadium+1+MetLife+Stadium+Dr+East+Rutherford,+NJ+07073");
// }

// function setup() {
//   createCanvas(800, 800);
//   console.log(weatherData);
//   console.log(weatherData.weather[0].description);
// }

// function draw() {
//   // image(streetViewImage, 0, 0);
//   // image(streetViewImage, 500, 0);
//   // image(streetViewImage, 200, 0);
//   // image(streetViewImage, 0, 100);
//   // image(streetViewImage, 0, 200);
//   // console.log(data.routes);
// }
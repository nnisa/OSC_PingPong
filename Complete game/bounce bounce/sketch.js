var x = 180;
var y = 180;
var xspeed = 9;
var yspeed = 10;


function setup() {
  createCanvas(500, 500);
}

function draw() {
    background (0);
    // stroke(255);
    // strokeWeight(4);
    fill(255, 204, 0);
    ellipse (x, y, 20, 20);

    //bouncing horizontally
    
     if (x+10 > 500 || x-10 < 0)  {
      xspeed = -xspeed;
    }
    x = x + xspeed;


    //bouncing veritcally
   

    if (y+10 > 500 || y-10 < 0) {
      yspeed = -yspeed;
    }
    y = y + yspeed;

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
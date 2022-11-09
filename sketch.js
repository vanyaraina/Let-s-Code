var canvas;
var background, backgroundImage;
var bgImg;
var database;
var myform, myplayer, mygame;

function preload() {
  car1 = loadImage("./assets/car1.png");
  car2 = loadImage("./assets/car2.png");
  logo = loadImage("./assets/logo.png");
  track = loadImage("./assets/track.jpg");
  backgroundImage = loadImage("./assets/background.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  console.log(database);
  mygame = new Game();
  mygame.start();
  mygame.getState();
}

function draw() {
    background(backgroundImage);
   
if(myplayerCount === 2){
  mygame.updateState(1);
}

}



function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }


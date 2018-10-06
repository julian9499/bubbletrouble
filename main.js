var balls = [];
var player;
var ball;

function preload() {
  //img = loadImage('../assets/julien.jpg');
}

function setup() {
  createCanvas(800, 800);
  angle = 0;
  stroke(2);
  ellipseMode(CENTER); // Set ellipseMode to CENTER
  var g = color('blue');
  var r = color('white');
  for(var i = 0; i < 10; i++){
    var size = Math.random()*70 + 30;
    var col = color(Math.random()*255, Math.random()*255, Math.random()*255);
    balls[i] = new bubble(size, col, new p5.Vector(Math.random() * 750 + 200, Math.random()*500));
    balls[i].velocity.x = Math.random() * 5 + 1;
  }

}



function draw() {
  background(51);

  fill('red');
  rect(0, 750, 800, 50);

  for(var i = 0; i < balls.length; i++){
    balls[i].update();
    balls[i].draw();
  }

}

function keyPressed() {

}

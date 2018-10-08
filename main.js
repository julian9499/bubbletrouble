var balls = [];
var projectiles = [];
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
  player = new player(color('green'), new p5.Vector(400, 0));

}



function draw() {
  background(51);

  for(var i = 0; i < balls.length; i++){
    balls[i].update();
    balls[i].draw();
  }

  for(var i = 0; i < projectiles.length; i++){
    projectiles[i].update();
    projectiles[i].draw();
  }

  player.update();
  player.draw();

  fill('red');
  rect(0, 750, 800, 50);
}

function keyTyped() {
  if(key === ' '){
    projectiles.push(new projectile(color('white'), new p5.Vector(player.getcoordx() + 30, 650)));
  }
}

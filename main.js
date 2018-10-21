var balls = [];
var projectiles = [];
var player;
var ball;
var timeNow;
var timeLast;
var tickTime;
var d;

function preload() {
  //img = loadImage('../assets/julien.jpg');
}

function setup() {
  d = new Date();
  timeLast = d.getMilliseconds();
  tickTime = 0;
  createCanvas(800, 800);
  angle = 0;
  stroke(2);
  ellipseMode(CENTER); // Set ellipseMode to CENTER
  var g = color('blue');
  var r = color('white');
  for(var i = 0; i < 5; i++){
    var size = Math.random()*70 + 30;
    var col = color(Math.random()*255, Math.random()*255, Math.random()*255);
    balls[i] = new bubble(size, col, new p5.Vector(Math.random() * 750 + 200, Math.random()*500), Math.random() * 5 + 1, 0);
  }
  player = new player(color('green'), new p5.Vector(400, 0));

}

function draw() {
  timeNow = d.getMilliseconds();
  var framedelta = ( timeNow - timeLast )
  timeLast = timeNow;
  background(51);

  for(var i = 0; i < balls.length; i++){
    balls[i].update();
    balls[i].draw();
  }

  for(var i = 0; i < projectiles.length; i++){
    if(projectiles[i].coord.y <= 0){
      projectiles.splice(i, 1);
      break;
    }
    projectiles[i].update();
    projectiles[i].draw();

  }

    for(var i = 0; i < balls.length; i++){
      for(var j = i; j < balls.length; j ++){
        balls[i].intersect(balls[j], framedelta);
      }
    }


  for(var i = 0; i < balls.length; i++){
    for(var j = 0; j < projectiles.length; j++){
      if(projectiles[j].intersect(balls[i])){
        balls[i].split(balls, i);
        projectiles.splice(j,1);
      }
    }
  }


  player.update();
  player.draw();

  fill('red');
  rect(0, 750, 800, 50);
}

function keyTyped() {
  if(key === ' '){
    projectiles.push(new projectile(color('white'), new p5.Vector(player.getcoordx() + 72.5, 650)));
  }
}

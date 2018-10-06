var airres = 0.01;

function bubble(size, color, coord){
  this.size = size;
  this.color = color;
  this.coord = coord;
  this.velocity = new p5.Vector(0, 0);
  this.acceleration = new p5.Vector(0, 9.81);

  this.draw = function (){
    ellipse(coord.x,coord.y,size, size);
  }

  this.update = function (){
    this.velocity.x = this.velocity.x + this.acceleration.x * airres ;
    this.velocity.y = this.velocity.y + this.acceleration.y * airres;

    this.coord.x = this.coord.x + this.velocity.x;
    this.coord.y = this.coord.y + this.velocity.y;

    if(this.coord.y >= 750-size/2){
      if(this.coord.y >= 755 -size/2){
        this.coord.y = 740-size/2;
      }

      this.velocity.y = -this.velocity.y;
    }


    if(this.coord.x >= 800-size/2 || this.coord.x  <= size/2 ){
      if(this.coord.x >= 801-size/2){
        this.coord.x = 799 - size/2;
      }
      if(this.coord.x <= size/2 - 10){
        this.coord.x = size/2;
      }
      this.velocity.x = -this.velocity.x;
    }
  }

  this.split = function() {
    var balls = []
    balls[0] = new bubble(this.size/2, color, new p5.Vector(coord.x -10, coord.y +2));
    balls[1] = new bubble(this.size/2, color, new p5.Vector(coord.x +10, coord.y +2));

    return balls;
  }
}

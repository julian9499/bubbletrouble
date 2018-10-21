function projectile(color, coord){
  this.color = color;
  this.coord = coord;

  this.draw = function (){
    if(coord.y < 0 ){
      return false;
    }
    fill(this.color);
    rect(coord.x,coord.y, 4, 800);
  }

  this.update = function() {
    this.coord.y = this.coord.y - 3;
  }

  this.intersect = function(ball) {
    var distance1 = abs(this.coord.x - ball.getPos().x);
    if(distance1 < ball.getSize() && (this.coord.y - ball.getSize()) <= ball.getPos().y ){
      return true;
    } else  {
      return false;
    }
  }
}

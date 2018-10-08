function projectile(color, coord){
  this.color = color;
  this.coord = coord;

  this.draw = function (){
    if(coord.y < 0 ){
      return false;
    }
    fill(this.color);
    rect(coord.x,coord.y, 5, 800);
  }

  this.update = function() {
    this.coord.y = this.coord.y - 3;
  }
}

function player(color, coord){
  this.color = color;
  this.coord = coord;

  this.draw = function (){
    fill(this.color);
    rect(coord.x + 50,coord.y + 650, 50, 100);
  }

  this.update = function() {
    //left
    if(keyIsDown(65) || keyIsDown(37)){
      player.move(0, -4);
      //right
    } else if(keyIsDown(68) || keyIsDown(39)){
      player.move(0, 4);
      //space
    }
  }

  this.move = function(direction, value) {
      if(direction == 0){
        this.coord.x = this.coord.x + value;
      } else if(direction == 1){
        this.coord.y = this.coord.y + value;
      }
    }

  this.getcoordx = function(){
    return this.coord.x;
  }

  this.intersect = function() {
    var distance1 = sqrt(abs(this.coord.x+50 - ball.getPosition().x) + abs(this.coord.y+650 - ball.getPosition().y));
    var distance2 = sqrt(abs(this.coord.x+100 - ball.getPosition().x) + abs(this.coord.y+650 - ball.getPosition().y));


  }
}

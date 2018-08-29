function Box(x, y, w, h) {
  this.body = Bodies.rectangle(x, y, w, h);
  this.body.friction = -0.01;  
  World.add(world, this.body);
  this.w = w;
  this.h = h;
  this.show = function () {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rect(0, 0, w, h);
    pop();
  }
}

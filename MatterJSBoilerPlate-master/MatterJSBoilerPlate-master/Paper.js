class Paper {
    constructor(x, y) {
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, 40, options)
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipse(0,0,40);
        pop();
      }
}
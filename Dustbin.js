class Dustbin{
    constructor(x, y,width, height) {
      var options = {
      isStatic:true
      }
      
      
      this.x = x;
      this.y = y;
      this.height = height;
      this.width = width;
      this.body = Bodies.rectangle(x,y, this.width, this.height, options);
      this.image = loadImage("dustbin.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      push()
      translate(pos.x, pos.y);
      imageMode(CENTER);
      image(this.image,0, 0, 120, 120);
      pop();
    }
  };

  
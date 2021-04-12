//Define a class for my Fish!
class Fish {
  constructor(speed, scale, color) {
    //this.velocity = Math.random()*2+2;
    this.speed = speed;
    this.isRight = 1;
    this.x = -100;
    this.y = Math.random() * window.innerHeight * 0.5 + 100;
    this.color = color;
    this.scale = scale; //Scale is a multiplyier
  }
  //This draws the bubble!
  draw(myCtx, animation) {

    //convert to radians for the fish wiggle animation
    var radians = animation*Math.PI/180.0;
    // Controls the animation: offset is pixels, freq is wiggles
    var offset = 10;
    var freq = 0.5;

    myCtx.fillStyle = this.color;

    myCtx.save();

    // This transform flips/scales and translates the fish!
    myCtx.transform(-this.isRight*this.scale,0,0,this.scale,this.x,this.y);



    myCtx.beginPath();
    //Draw triangle for head
    myCtx.moveTo(-50, Math.sin(radians-freq)*offset);
    myCtx.lineTo(-5, -30 + Math.sin(radians-freq)*offset);
    myCtx.lineTo(-5, 30 + Math.sin(radians-freq)*offset);
    myCtx.closePath();
    //Draw Trapazoid for tail
    myCtx.moveTo(200, 10 + Math.sin(radians+8*freq)*offset);
    myCtx.lineTo(200, -10 + Math.sin(radians+8*freq)*offset);
    myCtx.lineTo(245, -30 + Math.sin(radians+8*freq)*offset);
    myCtx.lineTo(245, 30 + Math.sin(radians+8*freq)*offset);
    myCtx.closePath();

    // Define the hight of each fish vertebrae
    // Draw the rects for each!
    var fishBones = [65, 80, 90, 95, 90, 80, 65, 45];
    for (var i = 0; i < 8; i++) {
      myCtx.rect(i*25, -fishBones[i]/2 + Math.sin(radians+i*freq)*offset, 20, fishBones[i]);
    }

    myCtx.fill();
    myCtx.restore();
  }
  // This updates the bubble position, and
  update() {
    if (this.isRight == 1) {
      this.x += this.speed
      if (this.x > window.innerWidth + 400) { this.refresh()}
    } else {
      this.x -= this.speed
      if (this.x < -400) { this.refresh()}
    }
  }
  //This starts the bubble at the bottom of the screen
  refresh() {
    if (this.isRight == 1) {
      this.isRight = -1;
      this.y = Math.random() * window.innerHeight * 0.5 + 100;
      this.x = window.innerWidth + 100;
      //this.scale = Math.random()*0.5 + 0.5;
    } else {
      this.isRight = 1;
      this.x = -100;
      this.y = Math.random() * window.innerHeight * 0.5 + 100;
      //this.scale = Math.random()*0.5 + 0.5;
    }
  }
}

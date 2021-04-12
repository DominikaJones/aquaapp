//Define a class for my bubbles!
class Bubble {
  constructor() {
    this.x = Math.random()*x_canv;
    this.depth = Math.random()*y_canv;
    this.radius = Math.random()*30+10;
  }
  //This draws the bubble!
  draw(myCtx) {
    myCtx.beginPath();
    myCtx.arc(this.x, (y_canv-this.depth), this.radius, 0, 2 * Math.PI, false);
    myCtx.fillStyle = 'rgba(200, 200, 254, 0.5)';
    myCtx.fill();
  }
  // This updates the bubble position, and
  update() {
    this.x += Math.random() - 0.5;
    this.depth += 1;
    if (this.depth >= y_canv+40) {
      this.refresh();
    }
  }
  //This starts the bubble at the bottom of the screen
  refresh() {
    this.x = Math.random()*x_canv;
    this.depth = -20;
    this.radius = Math.random()*30+10;
  }
}

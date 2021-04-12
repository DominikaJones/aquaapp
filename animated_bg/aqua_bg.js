// Background Animation for Aquarium Care Web App

//Global variables, many are overwritten during runtime
var x_canv = 1000;
var y_canv = 600;
var timer = 0;

var num_bubbles = 10;
var myBubs = [];

function init() {

  for (var i = 0; i < num_bubbles; i++) {
    myBubs[i] = new Bubble()
  }
  myFish1 = new Fish(2, 1.0, 'rgba(254, 200, 100, 1.0)')
  myFish2 = new Fish(1.5, 0.5, 'rgba(230, 230, 240, 1.0)')
  myFish3 = new Fish(1.2, 0.4, 'rgba(254, 100, 50, 1.0)')

  window.requestAnimationFrame(draw);
}

function draw() {
  //var ctx = document.getElementById('myCanvas').getContext('2d');
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");

  x_canv = window.innerWidth;
  y_canv = window.innerHeight;

  c.width = x_canv;
	c.height = y_canv;

  var grd = ctx.createLinearGradient(x_canv/2, 0, x_canv/2, y_canv);
  grd.addColorStop(1, "#7777FF");
  grd.addColorStop(0, "#33beFF");

  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, x_canv, y_canv);

  for (var i = 0; i < num_bubbles; i++) {
    myBubs[i].update();
    myBubs[i].draw(ctx);
  }

  myFish2.draw(ctx, timer);
  myFish2.update();
  myFish1.draw(ctx, timer);
  myFish1.update();
  myFish3.draw(ctx, timer);
  myFish3.update();

  timer += 3;
  if (timer >= 360) {
    timer = 0;
  }

  window.requestAnimationFrame(draw);
}

init();

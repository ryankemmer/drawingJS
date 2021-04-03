function setup() {
  createCanvas(800, 800);
  background('#222222');
}

let r1 = 10;
let speed1 = .05;

let x2 = 20;
let y2 = 100;
let r2 = 0;
let speed2 = .07;

let x3 = 300;
let y3 = 150;
let r3 = 20;
let speed3 = .01;

function draw() {
  // background (220)

  /// level 1
  translate(width/2, height/2);
  rotate(r1);

  noStroke();
  fill(255,125,0);
  ellipse(0,50,10,10)

  //level 2
  push();

  translate(x2 , y2);
  rotate(r2);

  fill(20,200,0);
  ellipse(50,0,5,5)

  pop();

  //level 2
  push();

  translate(x3 , y3);
  rotate(r2);

  fill(200,200,0);
  ellipse(100,2,50,5)

  pop();

  //level 2
  push();

  translate(x3 , y3);
  rotate(r2);

  fill(20,200,200);
  ellipse(200,0,10,5)

  pop();



  // increase rotation angle

  r1 += speed1;
  r2 += speed2;
  r3 += speed3;

}

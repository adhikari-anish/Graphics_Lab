// defining the clip window boundary.
let xwmin = 300;
let ywmin = 100;
let xwmax = 1100,
  ywmax = 500;

function setup() {
  createCanvas(1350, 650);
  background(119, 255, 241);
  stroke(172, 172, 172);
  // Enter all lines to be checked.
  // line(140, 80, 70, 30);
  line(100, 100, 1200, 600);
  line(150, 60, 1100, 400);
  line(220, 200, 800, 0);
  line(1200, 120, 100, 500);
  line(500, 100, 150, 850);
  line(330, 300, 1300, 300);
  line(0, 110, 500, 600);
  line(400, 100, 500, 600);
  line(320, 300, 800, 600);
}

function draw() {
  fill(255);
  stroke(1);
  strokeWeight(2);
  // draw the clip window.
  rect(xwmin, ywmin, (xwmax - xwmin), (ywmax - ywmin));
  strokeWeight(2);
  stroke(255, 0, 0);
  // call clip function for all the lines
  clip(140, 80, 70, 30);
  clip(100, 100, 1200, 600);
  clip(150, 60, 1100, 400);
  clip(220, 200, 800, 0);
  clip(1200, 120, 100, 500);
  clip(500, 100, 150, 850);
  clip(330, 300, 1300, 300);
  clip(0, 110, 500, 600);
  clip(400, 100, 500, 600);
  clip(320, 300, 800, 600);

}

function clip(x1, y1, x2, y2) {
  let p = [];
  let q = [];
  let u1 = [0];
  let u2 = [1];
  let u1F, u2F;
  let clip = true;

  p[0] = -(x2 - x1);
  p[1] = (x2 - x1);
  p[2] = -(y2 - y1);
  p[3] = (y2 - y1);

  q[0] = x1 - xwmin;
  q[1] = xwmax - x1;
  q[2] = y1 - ywmin;
  q[3] = ywmax - y1;

  for (i = 0; i < 4; i++) {
    if (p[i] ==0) {
      if (q[i] < 0)
        clip = false;
    }
  }

  if (clip) {
    for (i = 0; i < 4; i++) {
      if (p[i] < 0) {
        u1.push((q[i] / p[i]));
      } else if (p[i] > 0) {
        u2.push((q[i] / p[i]));
      }
    }

    u1F = max(u1);
    u2F = min(u2);

    if (u1F < u2F) {
      let xA = x1 + u1F * (x2 - x1);
      let yA = y1 + u1F * (y2 - y1);
      let xB = x1 + u2F * (x2 - x1);
      let yB = y1 + u2F * (y2 - y1);
      // indicate the clipped line.
      line(xA, yA, xB, yB);
    }

  }

}
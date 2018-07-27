function setup() 
{
	createCanvas(windowWidth, windowHeight);


}

function draw() 
{
	strokeWeight(14);// to draw outline of flag
	stroke(7, 69, 183);// to draw outline of flag
	fill(196,7,7);// to draw outline of flag
	beginShape();// to draw outline of flag
	vertex(500,550);// to draw outline of flag
	vertex(500,50);// to draw outline of flag
	vertex(900,300);// to draw outline of flag
	vertex(650,300);// to draw outline of flag
	vertex(900,550);// to draw outline of flag
	vertex(500,550);// to draw outline of flag
	endShape();

	strokeWeight(1);
	stroke(255);
	fill(255,255,255);
	star(600,420,45,70,12);
	strokeWeight(0);
	arc(600,200,145,160,0,-PI);
	fill(196,7,7);
	arc(600,170,152,160,0,-PI);
	fill(255,255,255);
	star(599,240,25,35,14);



}

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}


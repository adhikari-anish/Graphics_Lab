let r;
let x_coord,y_coord;
document.write('Ellipse Drawing Algorithm Using Mid-Point Algorithm');


function setup() {
  createCanvas(screen.width,screen.height);
    r = prompt('Enter the radius',100);
//  console.log(radius);
  }

  function draw() {
    background(0, 255, 0);
    translate(600,250);
    p = 1-r;
    x_coord = 0;
    y_coord = r;
    point(0,0);
    stroke('red');
    // beginShape();
    while(! (x_coord>=y_coord)){
        if (p<0){
            ellipse(x_coord,y_coord,1);
            x_coord++;
            p += 2*x_coord + 1;
        }else{
            ellipse(x_coord,y_coord,0.5);
            x_coord++;
            y_coord--;
            p += 2*x_coord+1-2*y_coord;
        }
        corres_points(x_coord,y_coord);
    }
    // endShape();
  }

  function corres_points(x,y){
      ellipse(y,x,0.5);
      ellipse(x,-y,0.5);
      ellipse(y,-x,0.5);
      ellipse(-y,-x,0.5);
      ellipse(-x,-y,0.5);
      ellipse(-x,y,0.5);
      ellipse(-y,x,0.5);

  }

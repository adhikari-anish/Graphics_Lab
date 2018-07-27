let transformationMatrix = [];
let initialMatrix = [];
let initialMatrix_row = 4;
let initialMatrix_cols = 1;
let transformationMatrix_row = 4;
let transformationMatrix_cols = 4;

let x1 = y1 = 0;
let x2 = 100,
  y2 = 0;
let x3 = y3 = 100;
let x4 = 0,
  y4 = 100;

function setup() {
  createCanvas(windowWidth,windowHeight, WEBGL);
  angleMode(DEGREES);
}

function translation() {
  let tx = 100;
  let ty = 100;
  createTransformationMatrix();
  transformationMatrix[0][3] = tx;
  transformationMatrix[1][3] = ty;
  transformationMatrix[2][3] = 0;
  calculate(x1, y1, 'point1');
  calculate(x2, y2, 'point2');
  calculate(x3, y3, 'point3');
  calculate(x4, y4, 'point4');
}

function rotationCallX() {
  let theta = 90;
  createTransformationMatrix();
  // z-axis rotation
  transformationMatrix[1][1] = cos(theta);
  transformationMatrix[1][2] = -sin(theta);
  transformationMatrix[2][1] = sin(theta);
  transformationMatrix[2][2] = cos(theta);
  // x-axis rotation
  calculate(x1, y1, 'point1');
  calculate(x2, y2, 'point2');
  calculate(x3, y3, 'point3');
  calculate(x4, y4, 'point4');
}

function draw() {
  background(135,206,250);
  rotateX(frameCount * 0.01);
  fill(255,20,147);
  stroke(255);
  beginShape();
  vertex(x1, y1);
  vertex(x2, y2);
  vertex(x3, y3);
  vertex(x4, y4);
  endShape(CLOSE);


}

function calculate(x, y, pointIdentifier) {
  for (j = 0; j < initialMatrix_row; j++) {
    initialMatrix[j] = [];
    for (i = 0; i < initialMatrix_cols; i++) {
      if (j === 0) {
        initialMatrix[j][i] = x;
      } else if (j === 1) {
        initialMatrix[j][i] = y;
      } else if (j === 2) {
        initialMatrix[j][i] = 0;
      } else {
        initialMatrix[j][i] = 1;
      }
    }
  }

  for (j = 0; j < transformationMatrix_row; j++) {
    let temp1 = temp2 = temp3 = 0;
    for (i = 0; i < transformationMatrix_cols; i++) {
      if (j === 0) {
        temp1 = temp1 + (transformationMatrix[j][i] * initialMatrix[i][0]);
      } else if (j === 1) {
        temp2 = temp2 + (transformationMatrix[j][i] * initialMatrix[i][0]);
      } else {
        temp3 = temp3 + (transformationMatrix[j][i] * initialMatrix[i][0]);
      }
    }
    if (pointIdentifier === 'point1') {
      if (j === 0) {
        x1 = temp1;
      } else if (j === 1) {
        y1 = temp2;
      }
    } else if (pointIdentifier === 'point2') {
      if (j === 0) {
        x2 = temp1;
      } else if (j === 1) {
        y2 = temp2;

      }
    } else if (pointIdentifier === 'point3') {
      if (j === 0) {
        x3 = temp1;
      } else if (j === 1) {
        y3 = temp2;
      }
    } else if (pointIdentifier === 'point4') {
      if (j === 0) {
        x4 = temp1;
      } else if (j === 1) {
        y4 = temp2;
      }
    }
  }
}

function createTransformationMatrix() {
  for (j = 0; j < transformationMatrix_row; j++) {
    transformationMatrix[j] = [];
    for (i = 0; i < transformationMatrix_cols; i++) {
      if (i === j) {
        transformationMatrix[j][i] = 1;
      } else {
        transformationMatrix[j][i] = 0;
      }
    }
  }
}
let running = false;
let A;
let B;
let x;
let y;
let compSize = 5;
let diffW = 0;
let diffH = 0;
let splitX;



//--------------------------------------------------------------------------------------------------
function preload() {
  A = loadImage('A.png');
  B = loadImage('B.png');
}

//--------------------------------------------------------------------------------------------------
function setup() {
  // SKETCH SETTINGS
  cursor('none');
  frameRate(60);
  createCanvas(windowWidth-compSize, windowHeight-compSize);
  background(0, 0, 0, 255);

  // SCALE AND CENTER
  diffW = A.width - width;
  diffH = A.height - height;
  if (diffW > diffH) {
    A.resize(width, 0);
    B.resize(width, 0);
  
  if (diffH > diffW) {
    A.resize(0, height);
    B.resize(0, height);
  }
  x = width/2 - A.width/2;
  y = height/2 - A.height/2;
}
}
//--------------------------------------------------------------------------------------------------


function draw() {


  if (running == true) {


    //----------------------------------------------------------------------------------------------- MAINPROGRAM - START//
    
    
    background(0);
    image(B, x, y, B.width ,B.height);
    
        splitX=mouseX - x; 
    if (splitX >= A.width) {
      splitX = A.width
    }
    if (splitX <= 0) {
      splitX = 0.1;
    }
    
    image(A, x, y, splitX, A.height , 0, 0, splitX, 0);
    stroke(255,255,255,150);
    strokeWeight(3);
    line(mouseX, 0, mouseX, height);
  }
  //----------------------------------------------------------------------------------------------- MAINPROGRAM - END//
  // LOAD SCREEN
  else {
    background(20, 20, 25, 255);
    textSize(30);
    fill(255);
    text('Click!', width/2 -50 + compSize, height/2 +20 + compSize)
  }
}

  //----------------------------------------------------------------------------------------------- 
  
function mousePressed() {

  fullscreen(1);
  running = true;
  

}

  //----------------------------------------------------------------------------------------------- 

function windowResized() {

  resizeCanvas(windowWidth-compSize, windowHeight-compSize);
  diffW = A.width - width;
  diffH = A.height - height;
  if (diffW > diffH) {
    A.resize(width, 0);
    B.resize(width, 0);
  }
  if (diffH > diffW) {
    A.resize(0, height);
    B.resize(0, height);
  }
  x = width/2 - A.width/2;
  y = height/2 - A.height/2;
}

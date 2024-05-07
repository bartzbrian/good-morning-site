var mappedBackgroundColor;
var mappedSunColor;
var font;

function preload(){
  font = loadFont('font/Jacquard24-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  textSize(40);
  textFont(font);
  colorMode(HSL);
}

function draw() {
  mappedBackgroundColor = map(mouseY,0,height,55,0);
  mappedSunColor = map(mouseY,0,height,65,20)
  background(mappedBackgroundColor,100,50);
  
  noStroke();
  fill(mappedSunColor,100,50);
  circle(width/2,mouseY,100);
  
  fill(4,100,50);
  text("good morning!",width/2,50);

  if (mouseX > width-200){
    createA('goodnight.html','next');
  }
  
  
}
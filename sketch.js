function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  stroke(255);   
  noFill();
  drawCircle(300,200,300);
}
function drawCircle(x,y,d){ // função recursiva
  ellipse(x,y,d)
  if (d > 2){
  //loop
  drawCircle(x + d *0.5, y , d * 0.5 ) //círculos a direita
  drawCircle(x - d *0.5, y , d * 0.5 ) //circulos a esquerda
  drawCircle(x, y + d * 0.5, d * 0.5 ) //triangulo  de Sierpinski
    
  }
}
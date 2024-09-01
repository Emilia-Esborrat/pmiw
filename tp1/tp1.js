//Esborrat Maria Emilia   91009/0
//TP1
//https://youtu.be/D41kJTKfUuc




let cant = 3;
let tam;
let cantInicial;
let tamInicial;
let img;
let valorAleatorio = false;
function calcularCantidadTotal() {
  return cant * cant;  
}
function preload(){
 img = loadImage("data/OpArt.jpeg"); 
}

function setup() {
  createCanvas(800, 400);
  tam = width/cant/2; 
  cantInicial = cant;
  tamInicial = tam;
  
}

function draw() {
  background(0);
  print("Cantidad total de elementos en la grilla: " + calcularCantidadTotal());
  image(img, 0, 0, width/2, height);
  for (let x=0; x<cant; x++) {
    for (let y=0; y<cant; y++) {
      if ((x+y)%2==0) {
        fill(52, 28, 214);
        rect(width - tam*(x+1), y*tam, tam, tam); 
        fill(12, 8, 36);
        
        if (valorAleatorio) {
          let ellipseSize = random(tam/2, tam);
          ellipse(width - tam*(x+1) + tam/2, y*tam + tam/2, ellipseSize, ellipseSize);  
        } else {
          ellipse(width - tam*(x+1) + tam/2, y*tam + tam/2, tam, tam);  
        }
        
      } else {
        fill(12, 8, 36);
        rect(width - tam*(x+1), y*tam, tam, tam);  
        fill(52, 28, 214);
        
        if (valorAleatorio) {
          let ellipseSize = random(tam/2, tam);
          ellipse(width - tam*(x+1) + tam/2, y*tam + tam/2, ellipseSize, ellipseSize);  
        } else {
          ellipse(width - tam*(x+1) + tam/2, y*tam + tam/2, tam, tam);  
        }
        
      }
    }
  }
}

function mousePressed() {
  cant++;
  tam = width/cant/2; 
}

function keyPressed() {
  if (key == 'r') { // reiniciar con tecla r
    cant = cantInicial;
    tam = tamInicial;
  } else if (key == 'm') {
    valorAleatorio = true; // activar con tecla m
  } else if (key == 'n') {
    valorAleatorio = false; // Desactivar con tecla n
  }
}

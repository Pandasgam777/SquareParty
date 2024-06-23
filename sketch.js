let ajorjinho;
let Dladin; // x
let SubinduDescendo; // y

function setup() {
  
  createCanvas(400, 400);
  background("white");
  ajorjinho = color (random(0, 255), random(0,255), random(0, 255));
  Dladin = [0, 0, 0];
  SubinduDescendo = [random(height), random(height), random(height)]; 
}


function draw() {
  
 fill(ajorjinho);
  
  //console.log("Dladin:", Dladin);
  //console.log("SubinduDescendo:", SubinduDescendo);
  
  for( let ContaCmg in Dladin) {
    rect(Dladin[ContaCmg], SubinduDescendo[ContaCmg], 50);
  
  Dladin[ContaCmg] += random(0, 3);
  SubinduDescendo[ContaCmg] += random(-3, 3);
  
  if(Dladin[ContaCmg] >= width) {
    Dladin[ContaCmg] = 0;
    SubinduDescendo[ContaCmg] = random(height);
    
  }
  }
  
  if (mouseIsPressed) { 
    ajorjinho = color (random(0, 255), random(0,255), random(0, 255));
}
  
}
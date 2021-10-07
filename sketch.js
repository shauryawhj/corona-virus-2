var bg;
var doctor
var doctorImage
var corona
var virusGroup
var virus1,virus2,virus3,virus4,virus5

function preload(){
bg=loadImage("Hospital cw.jpg");
doctorImage=loadImage("Doctor cw.png");
virus1=loadImage("coorona cw.png")
virus2=loadImage("corona1 cw.png")
virus3=loadImage("corona2 cw.png")
virus4=loadImage("corona3 cw.png")
virus5=loadImage("corona4 cw.png")
}
function spawnVirus(){
if(frameCount%60===0){
  var virus=createSprite(0,0,50,50)
  virus.velocityX=4;
  virus.y=Math.round(random(50,350))
  var r = Math.round(random(1,5));
  switch(r){
    case 1:virus.addImage(virus1);
    break;
    case 2:virus.addImage(virus2);
    break;
    case 3:virus.addImage(virus3);
    break;
    case 4:virus.addImage(virus4);
    break;
    case 5:virus.addImage(virus5);
    break;
    default:break;
    
  }
virus.scale=0.15;
virusGroup.add(virus);
}
}


function setup() {

  createCanvas(800,400);
  doctor=createSprite(450,200,50,50);
  doctor.addImage("doctor",doctorImage);
  doctor.scale=0.4;
  virusGroup=createGroup();
  //createSprite(400, 200, 50, 50);
}



function draw() {
  background(bg); 
  spawnVirus() ;
  drawSprites();
}
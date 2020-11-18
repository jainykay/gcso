var car, wall;
var speed, weight;

var deformation;


function setup() {
  createCanvas(1500,400);

  speed = random(55, 90);
  weight = random(400, 1500);

  car = createSprite(50, 200, 50 , 50);
  car.velocityX = speed;
  wall = createSprite(1200, 200, 60, height/2);
}

function draw() {
  background(0);  

  if(wall.x-car.x < (car.width+wall.width)/2) {
    deform();
  }

  drawSprites();
}

function deform() {
  deformation = 0.5 * weight * speed * speed/22500
  
  if(deformation < 100) {
    car.shapeColor = 'green';
  }

  if(deformation > 100 && deformation < 180) {
    car.shapeColor = 'yellow';
  }

  if(deformation > 180) {
    car.shapeColor = 'red';
  }
}
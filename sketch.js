var f1,f2,f3;
var wall,thickness ;
var bullet,speed,weight;

function setup() {

  speed=random(223,321)
  weight=random(400,1500)
  thickness=random(22,83)

  createCanvas(1000,600);

  bullet=createSprite(200, 200, 50, 20);
  wall=createSprite(800, 200, thickness,height/2)
  

  bullet.velocityX = speed;


}

function draw() {
  background(10,0,12); 
  console.log(speed)


  if(bullet.x-wall.x < (wall.width/2+bullet.width/2)) {

    if (hascollided(bullet,wall)) {

      bullet.velocityX=0;

      var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

      bullet.velocityX=0

      

      if (damage<10) {
        wall.shapeColor=('green')
      } else {
        wall.shapeColor=('red')
      }

   }  
 }

  drawSprites();
}

 

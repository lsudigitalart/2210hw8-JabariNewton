var xHeight=-600;
var yHeight = 250;
var xHeight2=0;
var Speed2=1;
var xHeight3=0;
var Speed3=1;
var testA =0;
var click=1;
var Speed =1;
var x= [];
var clack =1;
function preload(){
  head = loadImage("assets/monster1.png");
  body = loadImage("assets/body.png");
  feet = loadImage("assets/feet.png");
  mySound = loadSound('assets/monster.mp3');
}
function setup(){
  createCanvas(600,600)
  mySound.setVolume(0.1);
mySound.play();

}


function gamble(Speed,yHeight){
  fill(255,0,0);
  stroke(0);
//   ellipse(xHeight,yHeight,50,50)
  image(head,xHeight,yHeight);


  if (keyIsPressed === true) {
    click = 0;

  } else if(click === 1){
      xHeight = xHeight + Speed;
      if(xHeight > 600){
        xHeight = -600;
      }
    }
  }

  function gamble2(Speed2,yHeight){
    // xHeight2=0;
    fill(255,0,0);
    stroke(0);
//     ellipse(xHeight2,yHeight,50,50)
    image(body,xHeight2,yHeight);



    if (keyIsPressed === true) {
      click = 0;

    } else if(click === 1){
        xHeight2 = xHeight2 + Speed2;
        if(xHeight2 >= 600){
          xHeight2 = -600;
        }
      }
    }

    function gamble3(Speed3,yHeight3){
      fill(255,0,0);
      stroke(0);
//       ellipse(xHeight3,yHeight3,50,50)
      image(feet,xHeight3,yHeight3);


      if (keyIsPressed === true) {
        click = 0;

      } else if(click === 1){
          xHeight3 = xHeight3 + Speed3;
          if(xHeight3 >= 600){
            xHeight3 = -600;
          }
        }
      }







function draw(){
  background(255);
  gamble(6,0);
  gamble2(40,200);
  gamble3(80,400 );
}

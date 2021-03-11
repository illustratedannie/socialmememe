let heart;
let redheart;
let comment;
let greencomment;
let share;
let blueshare;
let error;
let prints;
let escape;
let second;
let moth;
let bee;
let creek;
let fall;
let food;
let sun;
let veges;
let username;
let photos = [];
var captions = ['enjoying the sunshine today ☀️✨','stuffing myself w delicious food for the lunar new year 🌙✨','creekside reflections 🍂☀️','🌺🐝✨🌊 #savethebees','proofing some fall themed prints 🍂','veges from @peoplesmarketbtown 💚💚💚','Escape Velocity, diptych, 2020','second layer goin alright','moth friend keeping us company 🦋💛','leaving my prints all over the place 💋'];
var index = 0;


function setup() {
  createCanvas(900, 500);
  username = loadImage('assets/username.png');
  bee=loadImage('assets/bee.png');
  creek=loadImage('assets/creek.png');
  fall=loadImage('assets/fall.png');
  food=loadImage('assets/food.png');
  sun=loadImage('assets/sun.png');
  veges=loadImage('assets/veges.png');
  prints=loadImage('assets/prints.png');
  escape=loadImage('assets/escape.png');
  second=loadImage('assets/second.png');
  moth=loadImage('assets/moth.png');
  heart=loadImage('assets/heart.png');
  redheart=loadImage('assets/redheart.png');
  comment=loadImage('assets/comment.png');
  greencomment=loadImage('assets/greencomment.png');
  share=loadImage('assets/share.png');
  blueshare=loadImage('assets/blueshare.png');
  error=loadSound('assets/error.wav');
  
  
  photos = [bee, creek, fall, food, sun, veges, prints, escape, second, moth];
}



function draw() {

  
  
  
//errorsoundoverusername  
  if(mouseX>501 && mouseX<900 && mouseY<86 && mouseY>0){
  error.play();
  }

image(username,501,0,400,86);


image(heart, 525, 450, 25,25);
  
image(comment, 580, 452, 22, 22);
  
image(share, 633, 452, 22, 22);

  //showredheart
  if(mouseX>525 && mouseX<550 && mouseY>450 && mouseY<475){
image(redheart,525,450,25,25);
  }  

 //showgreencommentbubble 
if(mouseX>580 && mouseX<602 && mouseY>452 && mouseY<474){
  image(greencomment,580, 452, 22, 22)
}   
  
  //shownblueshareplane
  if(mouseX>633 && mouseX<655 && mouseY>452 && mouseY<474){
    image(blueshare,633, 452, 22, 22)
  }
  
//border
noFill();
stroke(66,73,77);
strokeWeight(2);
rect(1,1,898,498);

  
//dividerline
noFill();
rect(501,0,399,499);


  
}

function mousePressed() {
background(255);
 
  
//captions 
  index = floor(random(captions.length));
  console.log(index);

  if (index == captions.length) {
    index = 0;
  }

  noStroke();
  fill(0);
  textSize(14);
  text(captions[index], 515, 125);

//photos
  let r = random(photos);
  image(r,0,0,500,500);
  
  
   
}

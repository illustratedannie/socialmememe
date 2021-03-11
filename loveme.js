let loveme;

function preload(){
    loveme=loadSound('lovemeassets/loveme.wav')
}

function setup() {
 

}

function draw() {
loveme.play();
loveme.loop();
loveme.speed(0.5);

}
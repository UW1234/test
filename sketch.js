var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var standing, standingImg
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload() {
towerImg = loadImage("tower.png")
doorImg = loadImage("door.png")
ghostImg = loadImage("ghost-jumping.png")
standingImg = loadImage("ghost-standing.png")
climberImg = loadImage("climber.png")
}

function setup(){
createCanvas(600,600);
tower = createSprite(300,300);
tower.addImage(towerImg);
//tower.velocityY = 3;
}

function draw(){
background(0);
drawSprite();
}
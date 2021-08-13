var player_img,FinishlineImg,Finishline,player,ObjectImg;
var wall1,wall2,wall3,wall1,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20;
var Object1,Object2,Object3,Object4,Object5;


function preload(){
    player_img = loadImage("Images/player.png")
    FinishlineImg = loadImage("Images/FinishlineFinal.png")
    ObjectImg = loadImage("Images/TargetImg.jpg")
}
function setup(){
    createCanvas(400,400);
    //wall1
    wall1 = createSprite(10,70,100,20);
    wall1.shapeColor = "orange";
    //wall2
    wall2 = createSprite(120,50,20,100);
    wall2.shapeColor = "orange";
    //wall3
    wall3 = createSprite(90,130,100,20);
    wall3.shapeColor = "orange";
    //wall4
     wall4 = createSprite(50,250,20,100);
    wall4.shapeColor = "orange";
    //wall5
    wall5 = createSprite(130,210,100,20);
    wall5.shapeColor = "orange";
    //wall6
    wall6 = createSprite(10,250,100,20);
    wall6.shapeColor = "orange";
    //wall7
    wall7 = createSprite(160,100,20,100);
    wall7.shapeColor = "orange";
    //wall8
    wall8 = createSprite(170,20,100,20);
    wall8.shapeColor = "orange";
    //wall9
    wall9 = createSprite(250,70,20,100);
    wall9.shapeColor = "orange";
    //wall10
    wall10 = createSprite(270,150,100,20);
    wall10.shapeColor = "orange";
    //wall11
    wall11 = createSprite(330,50,100,20);
    wall11.shapeColor = "orange";
    //wall12
    wall12 = createSprite(340,125,20,100);
    wall12.shapeColor = "orange";
    //wall13
    wall13 = createSprite(220,250,20,100);
    wall13.shapeColor = "orange";
    //wall14
    wall14 = createSprite(350,210,150,20);
    wall14.shapeColor = "orange";
    //wall15
    wall15 = createSprite(100,300,20,100);
    wall15.shapeColor = "orange";
    //wall16
    wall16 = createSprite(180,310,100,20);
    wall16.shapeColor = "orange";
    //wall17
    wall17 = createSprite(30,352,20,100);
    wall17.shapeColor = "orange";
    //wall18
    wall18 = createSprite(175,352,20,100);
    wall18.shapeColor = "orange";
    //wall19
    wall19 = createSprite(280,290,20,100);
    wall19.shapeColor = "orange";
    //wall20
    wall20 = createSprite(350,270,120,20);
    wall20.shapeColor = "orange";

    Finishline = createSprite(390,390);
    Finishline.addImage(FinishlineImg);

    Object1 = createSprite(140,150);
    Object2 = createSprite(200,230);
    Object3 = createSprite(250,360);
    Object4 = createSprite(350,50);
    Object5 = createSprite(350,370);

    Object1.addImage(ObjectImg);
    Object2.addImage(ObjectImg);
    Object3.addImage(ObjectImg);
    Object4.addImage(ObjectImg);
    Object5.addImage(ObjectImg);

    Object1.scale = 0.02
    Object2.scale = 0.02
    Object3.scale = 0.02
    Object4.scale = 0.02
    Object5.scale = 0.04

    Object1.velocityY = 4;
    Object2.velocityY = 3;
    Object3.velocityY = 4;
    Object4.velocityY = 5;
    Object5.velocityX = 8;

    player = createSprite(20,25,18,18);
    player.addImage(player_img);
    player.scale = 0.015;

    edges = createEdgeSprites();
}
function draw(){
    background(0);

if(player.isTouching(Finishline)){
        textSize(60);
        stroke("red");
        text("You won!",100,200);

        player.velocityX = 0
        player.velocityY = 0
        Object1.velocityX = 0
        Object1.velocityY = 0
        Object2.velocityX = 0
        Object2.velocityY = 0
        Object3.velocityX = 0
        Object3.velocityY = 0
        Object4.velocityX = 0
        Object4.velocityY = 0
        Object5.velocityX = 0
        Object5.velocityY = 0
        
}

if(keyDown("UP_ARROW")){
    //player.velocityX = 0;
    //player.velocityY = -4;
    player.y = player.y-4
}
if(keyDown("DOWN_ARROW")){
    //player.velocityX = 0;
    //player.velocityY = 4;
    player.y = player.y+4;
}
if(keyDown("LEFT_ARROW")){
   // player.velocityX = -4;
    //player.velocityY = 0;
    player.x = player.x-4;
}
if(keyDown("RIGHT_ARROW")){
   // player.velocityX = 4;
    //player.velocityY = 0;
    player.x = player.x +4;
}

player.bounceOff(edges);
player.bounceOff(wall1);
player.bounceOff(wall2);
player.bounceOff(wall3);
player.bounceOff(wall4);
player.bounceOff(wall5);
player.bounceOff(wall6);
player.bounceOff(wall7);
player.bounceOff(wall8);
player.bounceOff(wall9);
player.bounceOff(wall10);
player.bounceOff(wall11);
player.bounceOff(wall12);
player.bounceOff(wall13);
player.bounceOff(wall14);
player.bounceOff(wall15);
player.bounceOff(wall16);
player.bounceOff(wall17);
player.bounceOff(wall18);
player.bounceOff(wall19);
player.bounceOff(wall20);

Object1.bounceOff(edges);
Object2.bounceOff(edges);
Object3.bounceOff(edges);
Object4.bounceOff(edges);
Object5.bounceOff(edges);

if(player.isTouching(Object1)){
    player.x = 20;
    player.y = 25;
}
if(player.isTouching(Object2)){
    player.x = 20;
    player.y = 25;
}
if(player.isTouching(Object3)){
    player.x = 20;
    player.y = 25;
}
if(player.isTouching(Object4)){
    player.x = 20;
    player.y = 25;
}
if(player.isTouching(Object5)){
    player.x = 20;
    player.y = 25;
}

    drawSprites();
}
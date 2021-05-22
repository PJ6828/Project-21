var music;
var surface1, surface2, surface3, surface4;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(100,590,200,20);
    surface1.shapeColor = "red";
    surface2 = createSprite(300,590,200,20);
    surface2.shapeColor = "blue";
    surface3 = createSprite(500,590,200,20);
    surface3.shapeColor = "green";
    surface4 = createSprite(700,590,200,20);
    surface4.shapeColor = "yellow";

    //create box1 sprite and give velocity
    box1 = createSprite(random(20,750),100,20,20);
    box1.velocityX = 5;
    box1.velocityY = 5;
}

function draw() {
    background(rgb(169,169,169));

    //create edgeSprite
    edges = createEdgeSprites();

    box1.bounceOff(edges);
    box1.bounceOff(surface1);
    box1.bounceOff(surface2);
    box1.bounceOff(surface3);
    box1.bounceOff(surface4);

    //add condition to check if box1 touching surface and make it bounce
    if(box1.isTouching(surface1) || box1.bounceOff(surface1)) {
        box1.shapeColor = surface1.shapeColor;
        music.stop();
    }
    if(box1.isTouching(surface2) || box1.bounceOff(surface2)) {
        box1.shapeColor = surface2.shapeColor;
    }
    if(box1.isTouching(surface3) || box1.bounceOff(surface3)) {
        box1.shapeColor = surface3.shapeColor;
        music.play();
    }
    if(box1.isTouching(surface4) || box1.bounceOff(surface4)) {
        box1.shapeColor = surface4.shapeColor;
    }
    drawSprites();
}

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var ground1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,50);
    box3 = new Box(200,300,50,50);
    box4 = new Box(200,300,50,50);
    box5 = new Box(200,300,50,50);
    ground1 = new Ground(200,390,2400,20);
    pig1 = new pig(300,300);
    pig2 = new pig(290,270);
    bird1 = new bird(100,100)
    log1 = new log(810,260,300, PI/2);
    log2 = new log(810,180,300, PI/2);
    log3 = new log(760,210,150, PI/7);
    log4 = new log(870,120,150, -PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    pig2.display();
    bird1.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();


    ground1.display();
}
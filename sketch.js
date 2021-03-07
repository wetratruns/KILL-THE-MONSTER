const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bg;
var hero, ground, monster, chain;

function preload(){
    //load images
    bg = loadImage("images/GamingBackground.png")
}

function setup(){
    createCanvas(1000,600);

    engine = Engine.create();
    world = engine.world;

    //create bodies
    ground = new Ground(350, 400,700,5);

    hero = new Hero(100,200,200,100);

    chain = new Chain(hero.body,{x:100,y:200});

    monster = new Monster(500,300,100,100);

    b1 = new Box(350,200,20,20);
    b2 = new Box(350,200,20,20);
    b3 = new Box(350,200,20,20);
    b4 = new Box(350,200,20,20);
    b5 = new Box(350,200,20,20);
    b6 = new Box(350,200,20,20);
    b7 = new Box(300,200,20,20);
    b8 = new Box(300,200,20,20);
    b9 = new Box(300,200,20,20);
    b10 = new Box(300,200,20,20);
    b11 = new Box(300,200,20,20);
    b12 = new Box(300,200,20,20);
    b13 = new Box(400,200,20,20);
    b14 = new Box(400,200,20,20);
    b15 = new Box(400,200,20,20);
    b16 = new Box(400,200,20,20);
    b17 = new Box(400,200,20,20);
    b18 = new Box(400,200,20,20);
    b19 = new Box(400,200,20,20);
    b20 = new Box(400,200,20,20);

}

function draw(){
    background(bg);
    Engine.update(engine);

    ground.display();
    //displaying the boxes
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    b17.display();
    b18.display();
    b19.display();
    b20.display();

    hero.display();

    monster.display();

}

function mouseDragged(){
    
    Body.setPosition(hero.body,{x:mouseX, y:mouseY});
}
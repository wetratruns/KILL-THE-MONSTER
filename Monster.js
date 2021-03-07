class Monster{
    constructor(x,y,width,height){
        var options = {
            restitution:1
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/Monster-01.png");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.postion;

        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}
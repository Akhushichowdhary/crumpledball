class PaperBall{ constructor(x,y,width,height){
    var option = {
        isStatic : false,
        restitution : 0.3,
        friction : 0.5,
        density : 1.2,
    }
    this.body = Bodies.rectangle(x,y,width,height,option);
    this.width = width;
    this.height = height;
    World.add(world,this.body);

}
display(){
    var pos = this.body.position;
    rectMode(CENTER);
    fill ("pink")
    rect(pos.x,pos.y,this.width,this.height);
}
}
    
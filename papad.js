class paper{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2,
        }

        this.x=x
        this.y=y
        this.width=75
        this.height=75
        this.body=Bodies.rectangle(x,y,this.width,this.height,options)
        this.image=loadImage("paper.png")

        World.add(world,this.body)
    }
    display(){
        var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			imageMode(CENTER)
			fill("black")
            angleMode(RADIANS)
            rotate(this.body.angle)
			image(this.image,0,0,this.width, this.height);
			pop()
    }
}
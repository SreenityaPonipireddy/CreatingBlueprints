class Box{
 //Declaring all of the properties of box
    constructor(x,y,width,height){
           
        var options={
            restitution:1
        }

        //"this" represents something to replace and is replaced with the name
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.height=height;
        this.width=width;
        World.add(myWorld,this.body);
    }
    display(){

        var pos=this.body.position;
        var angle=this.body.angle;
         push();
         translate(pos.x,pos.y)
         rotate(angle)
         rectMode(CENTER);
         fill("purple");
         rect(0,0,this.width,this.height);
         pop();

    }








        
    
    










}
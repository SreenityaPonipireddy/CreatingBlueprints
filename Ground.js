class Ground{

constructor(x, y, width, height){
var options={
isStatic:true

}

this.body=Bodies.rectangle(x, y, width, height, options)
this.width=width;
this.height=height;
World.add(myWorld, this.body);


}
display(){

var pos=this.body.position;
push();
rectMode(CENTER);
fill("brown");
stroke("green");
strokeWeight(3);
rect(pos.x, pos.y, this.width, this.height);
pop();

}











}
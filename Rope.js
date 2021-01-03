class Rope{
    constructor(bodyA,pointB){
   var opt = {
       bodyA:bodyA,
       pointB:pointB,
       stiffness: 1 ,
       length: 300 
   }

   this.pointB = pointB
this.rope = Matter.Constraint.create (opt)   
World.add (world,this.rope) }
display () {
var pointA = this.rope.bodyA.position
var pointB = this.pointB
push ()
stroke('red')
line (pointB.x,pointB.y , pointA.x , pointA.y)
pop()

}

}
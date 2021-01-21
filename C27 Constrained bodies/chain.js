class Chain{
        constructor(bodyA,bodyB){          //function setup()
            var options = {
                bodyA:bodyA,
                bodyB:bodyB,
                stiffness:0.04,
                length:10
            }
           
            this.chain = Constraint.create(options);
            World.add(world,this.chain)
        }

         display(){             //function draw()
            var pointA = this.chain.bodyA.position;
            var pointB = this.chain.bodyB.position;
            strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        
         }
}

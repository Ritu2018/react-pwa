//Dust Particles Simulation by bionicoz based on
//Basic Particle Animation
//Author: Brandon John-Freso

function animate() {
    var W, H, ctx, //ctx stands for context and is the "curso" of our canvas element.
        particleCount = 350,
        particles = []; //this is an array which will hold our particles Object/Class
    
    var canvas = document.getElementById("canvas");

    W = window.innerWidth ;
    H = window.innerHeight ;
    var then = (new Date()).getTime();
    
    canvas.width = W;
    canvas.height = H;

    ctx = canvas.getContext("2d"); // settng the context to 2d rather than the 3d WEBGL
    ctx.globalCompositeOperation = "lighter";
    console.log(ctx);
    var mouse = {
      x: 0, 
      y: 0,
      rx:0,
      ry:0,
      speed:45,
      delta:0
    };
    


    document.addEventListener('mousemove', function(e){ 
        
        mouse.x = e.clientX || e.pageX; 
        mouse.y = e.clientY || e.pageY;
        mouse.x-=W/2;
        mouse.y-=H/2;
      
    }, false);
  
    function randomNorm(mean, stdev) {
      
      return Math.abs(Math.round((Math.random()*2-1)+(Math.random()*2-1)+(Math.random()*2-1))*stdev)+mean;
    }

    //Setup particle class
    class Particle {
        //using hsl is easier when we need particles with similar colors
        constructor(){
        this.h=parseInt(45);
        this.s=parseInt(40 * Math.random() + 30);
        this.l=parseInt(10 * Math.random() + 90);
        this.a=0.5*Math.random() ;
      
        this.color = "hsla("+ this.h +","+ this.s +"%,"+ this.l +"%,"+(this.a)+")";
        this.shadowcolor = "hsla("+ this.h +","+ this.s +"%,"+ this.l +"%,"+parseFloat(this.a-0.55)+")";
      

        
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.direction = {
            "x": -1 + Math.random() * 2,
            "y": -1 + Math.random() * 2
        };
        //this.radius = 9 * ((Math.random()*2-1)+(Math.random()*2-1)+(Math.random()*2-1)+3);
        this.radius = randomNorm(0,4);
        this.scale=0.8*Math.random()+0.5;
        this.rotation=Math.PI/4*Math.random();
      
        this.grad=ctx.createRadialGradient( this.x, this.y, this.radius, this.x, this.y, 0 );
        this.grad.addColorStop(0,this.color);
        this.grad.addColorStop(1,this.shadowcolor);
      
        this.vx = (2 * Math.random() + 4)*.01*this.radius;
        this.vy = (2 * Math.random() + 4)*.01*this.radius;
        
        this.valpha = 0.01*Math.random()-0.02;
        
        this.move = function () {
            this.x += this.vx * this.direction.x ;
            this.y += this.vy * this.direction.y ;
            this.rotation+=this.valpha;
            //this.radius*= Math.abs((this.valpha*0.01+1));

        };
        this.changeDirection = function (axis) {
            this.direction[axis] *= -1;
            this.valpha *= -1;
        };
        this.draw = function () {
            ctx.save();
            ctx.translate(this.x+mouse.rx/-20*this.radius,this.y+mouse.ry/-20*this.radius);  
          ctx.rotate(this.rotation);  
          ctx.scale(1,this.scale);
            
            this.grad=ctx.createRadialGradient( 0, 0, this.radius, 0, 0, 0 );
            this.grad.addColorStop(1,this.color);
            this.grad.addColorStop(0,this.shadowcolor);
            ctx.beginPath();
            ctx.fillStyle = this.grad;
            ctx.arc(0, 0, this.radius, 0, Math.PI * 2, false);
            ctx.fill();
            ctx.restore();

            
        };
        this.boundaryCheck = function () {
            if (this.x >= W*1.2) {
                this.x = W*1.2;
                this.changeDirection("x");
            } else if (this.x <= -W*0.2) {
                this.x = -W*0.2;
                this.changeDirection("x");
            }
            if (this.y >= H*1.2) {
                this.y = H*1.2;
                this.changeDirection("y");
            } else if (this.y <= -H*0.2) {
                this.y = -H*0.2;
                this.changeDirection("y");
            }
        };
    }
    } //end particle class

    function clearCanvas() {
        ctx.clearRect(0, 0, W, H);
    } //end clear canvas

    function createParticles() {
        for (var i = particleCount - 1; i >= 0; i--) {
            let p = new Particle();
            particles.push(p);
        }
    } // end createParticles

    function drawParticles() {
        for (var i = particleCount - 1; i >= 0; i--) {
            let p = particles[i];
            p.draw();
        }

      
    } //end drawParticles

    function updateParticles() {
        for (var i = particles.length - 1; i >= 0; i--) {
            let p = particles[i];
            p.move();
            p.boundaryCheck();

        }
    } //end updateParticles

    function initParticleSystem() {
        createParticles();
        drawParticles();
    }

    function animateParticles() {
        clearCanvas();
        setDelta();
        update()
        drawParticles();
        updateParticles();
        requestAnimationFrame(animateParticles);
    }
  
    initParticleSystem();
    requestAnimationFrame(animateParticles);
  
    function setDelta() {  
       let now    =   (new Date()).getTime();  
       mouse.delta  =   (now-then)/1000;  
       then   =   now;  
    }
    function update() {  
 
    if(isNaN(mouse.delta) || mouse.delta <= 0) { return; }  
 
    var distX   =   mouse.x - (mouse.rx),  
        distY   =   mouse.y - (mouse.ry);  

    if(distX !== 0 && distY !== 0) {          
 
        mouse.rx -=  ((mouse.rx - mouse.x) / mouse.speed); 
        mouse.ry -=  ((mouse.ry - mouse.y) / mouse.speed); 
         
    }   
  
};  
    





}

export default animate;
let can;
let b,r;let slval;
let balls=[];
function setup() {
start();
can=createCanvas(500,300);
can.position(150,30);
can.class("bdd");
b=new ball(30,100,2,0);r=new rec();
for(let j=0;j<10;j=j+1){
balls.push(new ball(random(width),random(height),2+random(3),2+random(3)));	
//balls[j]=new ball(random(width),random(height),2+random(3),2+random(3));	
}
r.display();
}

function draw() {
//clear();
r.y=sl2.value();
background(250,0,0);
fill(0,250,0);
rect(40,40,20,50);
ellipse(80,80,sl.value(),30);
b.grav();b.move();b.chbd();b.display();
for(let j=0;j<balls.length;j++){
balls[j].move();balls[j].chbd();balls[j].display();
if(balls[j].coll(r)){balls[j].chgsp();}//balls.splice(j,1);}	
}
r.display();
}

function keyPressed(){
if(keyCode==UP_ARROW){r.moveUp();}	
if(keyCode==DOWN_ARROW){r.moveDown();}	

}

function mousePressed(){
balls.push(new ball(mouseX,mouseY,-4+random(8),-4+random(8)));
	
}

 class ball{
	 constructor(xst,yst,xspt,yspt){
		 this.x=xst;this.y=yst;
		 this.xs=xspt;this.ys=yspt;
	 this.cnt=0;}
move(){
	this.x=this.x+this.xs;
	this.y=this.y+this.ys;
}

grav(){
this.ys=this.ys+.1;	
}
chgsp(){
	this.xs=-1*this.xs;
}
chbd(){
	if(this.x<0||this.x>width){this.xs=-1*this.xs;this.cnt++;}
	if(this.y<0||this.y>height){this.ys=-1*this.ys;this.cnt++;}
    }
	
display(){
stroke(250,200,50);strokeWeight(5);
fill(0,250,0);
ellipse(this.x,this.y,20,20);
}	

coll(r){
if(r.x-5<this.x&&this.x<r.x+5&&
r.y-30<this.y&&this.y<r.y+30){return true;}	
else {return false;}
}
	
}

class rec{

constructor(){
this.x=30;this.y=200;
}	
moveUp(){this.y-=5;}
moveDown(){this.y+=5;}

display(){
	rectMode(CENTER);
stroke(250,200,50);strokeWeight(5);
fill(0,250,0);
rect(this.x,this.y,10,60);
}	

}	
	


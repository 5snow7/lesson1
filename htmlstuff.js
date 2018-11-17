let sl,sl2
let ref;
function start(){
	sl=createSlider(0,100,50);
	sl.position(650,100);sl.style('rotate','90');
	sl2=createSlider(0,300,50);
	sl2.position(750,100);sl2.style('rotate','90');
	ref=select('#r');ref.position(20,30);  
}
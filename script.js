var canvas, ctx;
var dx= 4;
var dy=4;
var y=180;
var x=10;

var dx2= 4;
var dy2=4;
var y2=120;
var x2=40;

window.onload = function() {
	canvas = document.getElementById("drawingCanvas");

    draw();
}

function draw(){
	ctx = canvas.getContext("2d");
	ctx.clearRect(0,0,canvas.width,canvas.height);
	ballOne();
	ballTwo();
}

function ballOne(){
	ctx.beginPath();
	ctx.fillStyle="#0000ff";
	ctx.arc(x,y,20,0,Math.PI*2,true);
	ctx.closePath();
	ctx.fill();
	if( (x<0 || x>canvas.width))
		dx=-dx;
	if( y<0 || y>canvas.height)
		dy=-dy;
	if (Math.abs(y2-y)<30 && Math.abs(x2-x)<30){
		dx=-dx;
		dy=-dy;
		dx2=-dx2;
		dy2=-dy2;
	}
	x+=dx;
	y+=dy;
}

function ballTwo(){
	ctx.beginPath();
	ctx.fillStyle="green";
	ctx.arc(x2,y2,20,0,Math.PI*2,true);
	ctx.closePath();
	ctx.fill();
	if( x2<0 || x2>canvas.width)
			dx2=-dx2;
	if( y2<0 || y2>canvas.height)
			dy2=-dy2;
		x2-=dx2;
		y2-=dy2;
}

setInterval(draw,10); 



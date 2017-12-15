function waterFloat(n,t,a,e){var i=n,o=function(n,t,a,e){n.animate({top:"+="+e},t,"linear",function(){$({deg:-a}).animate({deg:a},{duration:t,step:function(t){n.css({transform:"rotate("+t+"deg)"})}},"linear"),n.animate({top:"-="+e},t,"linear",function(){$({deg:a}).animate({deg:-a},{duration:t,step:function(t){n.css({transform:"rotate("+t+"deg)"})}},"linear"),o(n,t,a,e)})})};o(i,t,a,e)}

/* page js */
$(document).ready(function(){
    $('.backUrl').click(function(){
      window.history.back();
    });
    // 404 moving js
    var b1 = $('#b1');
    var b2 = $('#b2');
    var b3 = $('#b3');
    var b4 = $('#b4'); 
    var b5 = $('#b5');
    var b6 = $('#b6');
    var b7 = $('#b7');
    var b8 = $('#b8');
    var b9 = $('#b9');
    var b10 = $('#b10');
    var b11 = $('#b11');
    var b12 = $('#b12');
    var p1 = new waterFloat(b1,900,30,20);
    var p2 = new waterFloat(b2,700,30,30);
    var p3 = new waterFloat(b3,800,30,15);
    var p4 = new waterFloat(b4,900,-30,10);
    var p5 = new waterFloat(b5,700,-30,14);
    var p6 = new waterFloat(b6,800,-30,10);
    var p7 = new waterFloat(b7,900,60,20);
    var p8 = new waterFloat(b8,700,60,30);
    var p9 = new waterFloat(b9,800,60,15);
    var p10 = new waterFloat(b10,900,-60,10);
    var p11 = new waterFloat(b11,700,-60,14);
    var p12 = new waterFloat(b12,800,-60,10);
  });

var canvas = document.querySelector("#scene"),
	ctx = canvas.getContext("2d"),
	particles = [],
	amount = 0,
	mouse = {x:0,y:0},
	radius = 1;

var colors = ["#ccc","#ccc", "#ccc","#ccc", "#ccc"];

var copy = document.querySelector("#copy");

var ww = canvas.width = window.innerWidth;
var wh = canvas.height = window.innerHeight;

function Particle(x,y){
	this.x =  Math.random()*ww;
	this.y =  Math.random()*wh;
	this.dest = {
		x : x,
		y: y
	};
	this.r =  Math.random()*5 + 2;
	this.vx = (Math.random()-0.5)*20;
	this.vy = (Math.random()-0.5)*20;
	this.accX = 0;
	this.accY = 0;
	this.friction = Math.random()*0.05 + 0.94;

	this.color = colors[Math.floor(Math.random()*6)];
}

Particle.prototype.render = function() {


	this.accX = (this.dest.x - this.x)/1000;
	this.accY = (this.dest.y - this.y)/1000;
	this.vx += this.accX;
	this.vy += this.accY;
	this.vx *= this.friction;
	this.vy *= this.friction;

	this.x += this.vx;
	this.y +=  this.vy;

	ctx.fillStyle = this.color;
	ctx.beginPath();
	ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
	ctx.fill();

	var a = this.x - mouse.x;
	var b = this.y - mouse.y;

	var distance = Math.sqrt( a*a + b*b );
	if(distance<(radius*70)){
		this.accX = (this.x - mouse.x)/100;
		this.accY = (this.y - mouse.y)/100;
		this.vx += this.accX;
		this.vy += this.accY;
	}

}

function onMouseMove(e){
	// mouse.x = e.clientX;
	// mouse.y = e.clientY;
}

function onTouchMove(e){
    // if(e.touches.length > 0 ){
    //   mouse.x = e.touches[0].clientX;
    //   mouse.y = e.touches[0].clientY;
    // }
}

function onTouchEnd(e){
  // mouse.x = -9999;
  // mouse.y = -9999;
}

function initScene(){
	ww = canvas.width = window.innerWidth;
	wh = canvas.height = window.innerHeight;

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	ctx.font = "bold "+(ww/10)+"px sans-serif";
	ctx.textAlign = "center";
	ctx.fillText(copy.value, ww/2, wh/2);

	var data  = ctx.getImageData(0, 0, ww, wh).data;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.globalCompositeOperation = "screen";

	particles = [];
	for(var i=0;i<ww;i+=Math.round(ww/150)){
		for(var j=0;j<wh;j+=Math.round(ww/150)){
			if(data[ ((i + j*ww)*4) + 3] > 150){
				particles.push(new Particle(i,j));
			}
		}
	}
	amount = particles.length;

}

function onMouseClick(){
	radius++;
	if(radius ===5){
		radius = 0;
	}
}

function render(a) {
	requestAnimationFrame(render);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	for (var i = 0; i < amount; i++) {
		particles[i].render();
	}
};

copy.addEventListener("keyup", initScene);
window.addEventListener("resize", initScene);
window.addEventListener("mousemove", onMouseMove);
window.addEventListener("touchmove", onTouchMove);
window.addEventListener("click", onMouseClick);
window.addEventListener("touchend", onTouchEnd);
initScene();
requestAnimationFrame(render);

window.requestAnimFrame = (
	function(callback) {
		return window.requestAnimationFrame || window.
			webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
			function(callback) {
				window.setTimeout(callback, 1000 / 60);
			};
})();

function initBalls() {
	var balls = [];
	
	var blue = '#3A5BCD';
	var red = '#EF2B36';
	var yellow = '#FFC636';
	var green = '#02A817';

	//T
	balls.push(new SmallBall(60, 10, 0, 0, green));
	balls.push(new SmallBall(70, 10, 0, 0, green));
	balls.push(new SmallBall(80, 10, 0, 0, green));
	balls.push(new SmallBall(70, 20, 0, 0, green));
	balls.push(new SmallBall(70, 30, 0, 0, green));

	//H
	balls.push(new SmallBall(95, 10, 0, 0, green));
	balls.push(new SmallBall(115, 10, 0, 0, green));
	balls.push(new SmallBall(95, 20, 0, 0, green));
	balls.push(new SmallBall(105, 20, 0, 0, green));
	balls.push(new SmallBall(115, 20, 0, 0, green));
	balls.push(new SmallBall(95, 30, 0, 0, green));
	balls.push(new SmallBall(115, 30, 0, 0, green));

	//X
	balls.push(new SmallBall(130, 10, 0, 0, green));
	balls.push(new SmallBall(160, 10, 0, 0, green));
	balls.push(new SmallBall(140, 20, 0, 0, green));
	balls.push(new SmallBall(150, 20, 0, 0, green));
	balls.push(new SmallBall(130, 30, 0, 0, green));
	balls.push(new SmallBall(160, 30, 0, 0, green));

	//C
	balls.push(new Ball(160, 90, 0, 0, blue));
	balls.push(new Ball(143, 78, 0, 0, blue));
	balls.push(new Ball(123, 78, 0, 0, blue));
	balls.push(new Ball(103, 78, 0, 0, blue));
	balls.push(new Ball(86, 90, 0, 0, blue));
	balls.push(new Ball(86, 110, 0, 0, blue));
	balls.push(new Ball(86, 130, 0, 0, blue));
	balls.push(new Ball(86, 150, 0, 0, blue));
	balls.push(new Ball(103, 162, 0, 0, blue));
	balls.push(new Ball(123, 162, 0, 0, blue));
	balls.push(new Ball(143, 162, 0, 0, blue));
	balls.push(new Ball(160, 150, 0, 0, blue));

	//M
	balls.push(new Ball(210, 80, 0, 0, blue));
	balls.push(new Ball(210, 100, 0, 0, blue));
    balls.push(new Ball(210, 120, 0, 0, blue));
    balls.push(new Ball(210, 140, 0, 0, blue));
    balls.push(new Ball(210, 160, 0, 0, blue));
    balls.push(new Ball(228, 95, 0, 0, blue));
    balls.push(new Ball(240, 110, 0, 0, blue));
    balls.push(new Ball(252, 125, 0, 0, blue));
    balls.push(new Ball(264, 110, 0, 0, blue));
    balls.push(new Ball(276, 95, 0, 0, blue));
    balls.push(new Ball(294, 80, 0, 0, blue));
    balls.push(new Ball(294, 100, 0, 0, blue));
    balls.push(new Ball(294, 120, 0, 0, blue));
    balls.push(new Ball(294, 140, 0, 0, blue));
    balls.push(new Ball(294, 160, 0, 0, blue));
    
    //D
    var mOffset = 134;
    balls.push(new Ball(210+mOffset, 80, 0, 0, blue));
    balls.push(new Ball(210+mOffset, 100, 0, 0, blue));
    balls.push(new Ball(210+mOffset, 120, 0, 0, blue));
    balls.push(new Ball(210+mOffset, 140, 0, 0, blue));
    balls.push(new Ball(210+mOffset, 160, 0, 0, blue));
    balls.push(new Ball(230+mOffset, 80, 0, 0, blue));
    balls.push(new Ball(250+mOffset, 80, 0, 0, blue));
    balls.push(new Ball(270+mOffset, 80, 0, 0, blue));
    balls.push(new Ball(281+mOffset, 97, 0, 0, blue));
    balls.push(new Ball(281+mOffset, 118, 0, 0, blue));
    balls.push(new Ball(281+mOffset, 139, 0, 0, blue));
    balls.push(new Ball(230+mOffset, 163, 0, 0, blue));
    balls.push(new Ball(250+mOffset, 160, 0, 0, blue));
    balls.push(new Ball(270+mOffset, 160, 0, 0, blue));
    balls.push(new Ball(210+mOffset, 160, 0, 0, blue));

	//C
	var cOffset = 380;
	balls.push(new Ball(160+cOffset, 90, 0, 0, blue));
	balls.push(new Ball(143+cOffset, 78, 0, 0, blue));
	balls.push(new Ball(123+cOffset, 78, 0, 0, blue));
	balls.push(new Ball(103+cOffset, 78, 0, 0, blue));
	balls.push(new Ball(86+cOffset, 90, 0, 0, blue));
	balls.push(new Ball(86+cOffset, 110, 0, 0, blue));
	balls.push(new Ball(86+cOffset, 130, 0, 0, blue));
	balls.push(new Ball(86+cOffset, 150, 0, 0, blue));
	balls.push(new Ball(103+cOffset, 162, 0, 0, blue));
	balls.push(new Ball(123+cOffset, 162, 0, 0, blue));
	balls.push(new Ball(143+cOffset, 162, 0, 0, blue));
	balls.push(new Ball(160+cOffset, 150, 0, 0, blue));
    
    return balls;
}

function SmallBall(x, y, vx, vy, color) {
	this.x = x;
	this.y = y;
	this.vx = vx;
	this.vy = vy;
	this.color = color;
	this.origX = x;
	this.origY = y;
	this.radius = 5
}

function Ball(x, y, vx, vy, color) {
	this.x = x;
	this.y = y;
	this.vx = vx;
	this.vy = vy;
	this.color = color;
	this.origX = x;
	this.origY = y;
	this.radius = 10;
}

function getMousePos(canvas, e) {
	//获取鼠标在canvas中位置
	var obj = canvas;
	var top = 0;
	var left = 0;
	while (obj.tagName != 'body'){
		top += obj.offsetTop;
		left += obj.offsetLeft;
		obj = obj.offsetParent;
	}
	
	var mouseX = e.pageX - left;
	var mouseY = e.pageY - top;
	
	return {
		x: mouseX,
		y: mouseY
	};
}

var maxSpeed = 5;
function updateBalls(canvas, balls, mousePos) {
	var context = canvas.getContext('2d');
	
	for (var i = 0; i < balls.length; i++) {
		var ball = balls[i];
		
		//获取球的即时位置
		ball.x += ball.vx;
		ball.y += ball.vy;
		
		//球相比原位置的偏移
		shiftX = ball.origX - ball.x;
		shiftY = ball.origY - ball.y;
		
		//鼠标位置及鼠标距离球的距离		
		var mouseX = mousePos.x;
		var mouseY = mousePos.y;
		
		var distX = ball.x - mouseX;
		var distY = ball.y - mouseY;
		
		var radius = Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2));
		//边缘分析
		//底部边界分析
		if (ball.y > (canvas.height - ball.radius)) {
			ball.y = canvas.height - ball.radius - 1;
			ball.vy *= -1;		
		}
		//顶部边界分析
		if (ball.y < (ball.radius)) {
			ball.y = ball.radius + 1;
			ball.vy *= -1;
		}
		//右侧边界分析
		if (ball.x > (canvas.width - ball.radius)) {
			ball.x = canvas.width - ball.radius - 1;
			ball.vx *= -1;
		}
		//左侧边界分析
		if (ball.x < (ball.radius)) {
			ball.x = ball.radius + 1;
			ball.vx *= -1;
		}
		//速度控制
		if (mousePos.x != "") {
			//有鼠标
			ball.vx += 0.003 * shiftX + 20 / Math.pow(radius, 1.8) * distX;
			ball.vy += 0.003 * shiftY + 20 / Math.pow(radius, 1.8) * distY;
		} else{
			//无鼠标
			ball.vx += 0.003 * shiftX;
			ball.vy += 0.003 * shiftY;
		}
		//限制最大速度
		if (ball.vx > maxSpeed) {
			ball.vx = maxSpeed;
		}
		if (ball.vx < -maxSpeed) {
			ball.vx = -maxSpeed;
		}
		if (ball.vy > maxSpeed) {
			ball.vy = maxSpeed;
		}
		if (ball.vy < -maxSpeed) {
			ball.vy = -maxSpeed;
		}
		//阻力
		ball.vx *= 0.98;
		ball.vy *= 0.98;
	}
}

function animate(canvas, balls, mousePos) {
	var context = canvas.getContext('2d');
	
	updateBalls(canvas, balls, mousePos);
	
	//清屏
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	for (var n = 0; n < balls.length; n++) {
		var ball = balls[n];
		context.beginPath();
		context.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI, false);
		context.fillStyle = ball.color;
		context.fill();
	}
	
	requestAnimFrame(function() {
		animate(canvas, balls, mousePos);
	});
}

var canvas = document.getElementById('canvas');
var balls = initBalls();
var mousePos = {
	x: "",
	y: ""
};

canvas.addEventListener('mousemove', function(e) {
	//IE6/7/8支持通过window.event获取对象
	e = e || window.event;
	if (e.pageX) {
		mousePos.x = e.pageX - canvas.offsetLeft;
		mousePos.y = e.pageY - canvas.offsetTop;
	} else{
		mousePos.x = e.clientX + document.body.scrollLeft - document.body.clientLeft;
		mousePos.y = e.clientY + document.body.scrollTop - document.body.clientTop;
	}
});

canvas.addEventListener('mouseleave', function(e) {
	mousePos.x = "";
	mousePos.y = "";
});

animate(canvas, balls, mousePos);
 


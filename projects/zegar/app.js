var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var min, sec, hr, ms, amOrPm = 'AM';
var radH, radM, radS;
const threePIByTwo = (3 * Math.PI) / 2;
function init()
{
	canvas.width = document.documentElement.clientWidth - 35;
	canvas.height = document.documentElement.clientHeight - 45;
	window.requestAnimationFrame(draw);
}

function draw(now)
{
	var centerX = canvas.width / 2,
		centerY = canvas.height / 2,
		date = new Date();

	hr = date.getHours();
	min = date.getMinutes();
	sec = date.getSeconds();
	ms = date.getMilliseconds();
	if(hr > 12)
	{
		amOrPm = 'PM';
    hr -= 12;
	}
	radH = 0.000008333 * ( ( hr * 60 * 60 * 1000 ) + ( min * 60 * 1000 ) + ( sec * 1000 ) + ms );
	radM = 0.0001 * ( ( min * 60 * 1000 ) + ( sec * 1000 ) + ms );
	radS = 0.006 * ( ( sec * 1000 ) + ms );

	drawRect(0, 0, canvas.width, canvas.height, '#202833');
	drawCircle(centerX, centerY, 220, 0, Math.PI * 2, false, '#121212', 'stroke', 30);
  drawCircle(centerX, centerY, 220, threePIByTwo, rad(radS) + threePIByTwo, false, '#DC543E', 'stroke', 30);
  drawCircle(centerX, centerY, 180, 0, Math.PI * 2, false, '#252525', 'stroke', 50);
  drawCircle(centerX, centerY, 180, threePIByTwo, rad(radM) + threePIByTwo, false, '#8b26c8', 'stroke', 50);
  drawCircle(centerX, centerY, 110, 0, Math.PI * 2, false, '#747474', 'stroke', 90);
  drawCircle(centerX, centerY, 110, threePIByTwo, rad(radH) + threePIByTwo, false, '#0b7e8a', 'stroke', 90);
  drawCircle(centerX, centerY, 95, 0, Math.PI * 2, false, '#000000', 'fill', 50);
	window.requestAnimationFrame(draw);
}

init();

function rad(deg){
	return  (Math.PI / 180) * deg;
}

function drawText(text, x, y, color, size) {
	ctx.font = `${size} "Passion One"`;
	ctx.fillStyle = color;
	ctx.fillText(text, x, y);
}

function drawRect(x, y, width, height, color) {
	ctx.fillStyle = color;
	ctx.fillRect(x, y, width, height);
}

function drawArc(x, y, radius, start, end, clockwise)
{
	ctx.beginPath();
	ctx.arc(x, y, radius, start, end, clockwise);
}

function drawCircle(x, y, radius, start, end, clockwise, color, type, thickness) {
	if(type == 'fill')
	{
		ctx.fillStyle = color;
		drawArc(x, y, radius, start, end, clockwise)
		ctx.fill();
	}
	else if(type == 'stroke')
	{
		ctx.strokeStyle = color;
		ctx.lineWidth = thickness;
		drawArc(x, y, radius, start, end, clockwise)
		ctx.stroke();
	}
}

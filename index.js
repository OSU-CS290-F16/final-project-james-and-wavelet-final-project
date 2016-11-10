var canvas = document.getElementById('drawing-pad');

if(canvas.getContext){
    var ctx = canvas.getContext('2d');
}

var xpos = 0
var ypos = 0
var mouseButtonDown = 0
var xprev = -1
var yprev = -1

function clear(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
}

var clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', clear);

function draw(ctx, x, y){
    if (xprev == -1){
        xprev = x;
        yprev = y;
    }

    ctx.fillStyle = 0,0,0,255;
    ctx.lineCap = "round";

    ctx.beginPath();
    ctx.moveTo(xprev, yprev);
    ctx.lineTo(x, y);
    ctx.lineWidth = 10;
    ctx.stroke();//
    ctx.closePath();

    xprev = x;
    yprev = y;
}

function handleMouseButtonDown(event){
    mouseButtonDown = 1;
    draw(ctx, xpos, ypos);
}

function handleMouseButtonUp(){
    mouseButtonDown = 0;
    xprev = -1;
    yprev = -1;
}

function handleMouseButtonMove(event){
    getMousePosition(event);
    if(mouseButtonDown == 1){
        draw(ctx, xpos, ypos);
    }
}

function getMousePosition(event){
    xpos = event.offsetX;
    ypos = event.offsetY;
}

canvas.addEventListener('mousedown', handleMouseButtonDown);
canvas.addEventListener('mousemove', handleMouseButtonMove);
document.addEventListener('mouseup', handleMouseButtonUp);

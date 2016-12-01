//Color selection buttons
var blackSelect = document.getElementById('black');
var redSelect = document.getElementById('red');
var orangeSelect = document.getElementById('orange');
var yellowSelect = document.getElementById('yellow');
var greenSelect = document.getElementById('green');
var blueSelect = document.getElementById('blue');
var purpleSelect = document.getElementById('purple');
var whiteSelect = document.getElementById('white');
var customSelect = document.getElementById('custom-color');
var colorBox = document.getElementById('color-indicator');

function customColorSelect (){
  var red = document.getElementById('red-text');
  var green = document.getElementById('green-text');
  var blue = document.getElementById('blue-text');
  var opacity = document.getElementById('opacity-text');
  if((red.value >=0) && (red.value<=255) && (green.value >=0) && (green.value<=255) && (blue.value >=0) && (blue.value<=255) && (opacity.value >=0) && (opacity.value<=255)){
      setColor(red.value,green.value,blue.value,opacity.value);

      //Pretty sure this (line below, and the style.background lines in blackSelect, redSelect, etc.) is bad practice. Change if possible
      colorBox.style.background = 'rgba(' + red.value + ',' + green.value + ',' + blue.value + ',' + opacity.value + ')';
  }
  else{
      if((red.value <0) || (red.value>255)){
          red.value = '';
      }
      if((green.value <0) || (green.value>255)){
          green.value = '';
      }
      if((blue.value <0) || (blue.value>255)){
          blue.value = '';
      }
      if((opacity.value <0.0) || (opacity.value>1.0)){
          opacity.value = '';
      }
      alert("One of your color inputs is invalid.");
  }
}

blackSelect.addEventListener('click',function(){
    lineColor = "rgba(0,0,0,255)";
    colorBox.style.background = 'black';
} );
redSelect.addEventListener('click',function(){
    lineColor = "rgba(255,0,0,255)"
    colorBox.style.background = 'red';
});
orangeSelect.addEventListener('click', function(){
    lineColor = "rgba(255,165,0,255)";
    colorBox.style.background = 'orange';
});
yellowSelect.addEventListener('click', function(){
    lineColor = "rgba(255,255,0,255)";
    colorBox.style.background = 'yellow';
});
greenSelect.addEventListener('click',function(){
    lineColor = "rgba(0,255,0,255)";
    colorBox.style.background = 'green';
});
blueSelect.addEventListener('click',function(){
    lineColor = "rgba(0,0,255,255)";
    colorBox.style.background = 'blue';
});
purpleSelect.addEventListener('click', function(){
    lineColor = "rgba(128,0,128,255)";
    colorBox.style.background = 'purple';
});
whiteSelect.addEventListener('click', function(){
    lineColor = "rgba(255,255,255,255)";
    colorBox.style.background = 'white';
});
customSelect.addEventListener('click',customColorSelect);



//Size select
var maxSize = 200;
var minSize = 1;

function changeSize(event){
    var newSize = event.target.value;
    if((newSize>=minSize) && (newSize<=maxSize)){
        lineSize = newSize;
    }
    //Any size outside minSize-maxSize resets to 10,
    else{
        lineSize = 10;
        event.target.value = '';
    }
}

var sizeSelectInput = document.getElementById('size-select');
sizeSelectInput.addEventListener('input', changeSize);

//Drawing Pad Fucntions
var canvas = document.getElementById('drawing-pad');

if(canvas.getContext){
    var ctx = canvas.getContext('2d');
}

var xpos = 0
var ypos = 0
var mouseButtonDown = 0
var xprev = -1
var yprev = -1
var lineSize = 10;
var lineColor = "rgba(0,0,0,1.0)";

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

    ctx.lineCap = "round";

    ctx.beginPath();
    ctx.moveTo(xprev, yprev);
    ctx.lineTo(x, y);
    ctx.lineWidth = lineSize;
    ctx.strokeStyle = lineColor;
    ctx.stroke();
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

function setSize(size){
  lineSize = size;
}

function setColor(rd, gr, bl, op){
  lineColor = "rgb(" + rd + "," + gr + "," + bl + "," + op + ")";
}
canvas.addEventListener('mousedown', handleMouseButtonDown);
canvas.addEventListener('mousemove', handleMouseButtonMove);
document.addEventListener('mouseup', handleMouseButtonUp);


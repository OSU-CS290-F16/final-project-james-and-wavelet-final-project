//Color selection buttons
var blackSelect = document.getElementById('black');
var redSelect = document.getElementById('red');
var orangeSelect = document.getElementById('orange');
var yellowSelect = document.getElementById('yellow');
var greenSelect = document.getElementById('green');
var blueSelect = document.getElementById('blue');
var purpleSelect = document.getElementById('purple');
var whiteSelect = document.getElementById('white');
var colorBox = document.getElementById('color-indicator');
var customBox = document.getElementById('custom-indicator');
var customPalette = document.getElementsByClassName('custom-colors');
var c1r, c1g , c1b;
var c2r, c2g , c2b;
var c3r, c3g , c3b;
var c4r, c4g , c4b;
var ccr = 0, ccg = 0, ccb = 0;

//When clicking Go! under custom color
function handleCustomButton (){
  var red = document.getElementById('red-text');
  var green = document.getElementById('green-text');
  var blue = document.getElementById('blue-text');
  setColor(red.value,green.value,blue.value);
  colorBox.style.background = 'rgb(' + red.value + ',' + green.value + ',' + blue.value + ')';
  ccr = red.value;
  ccg = green.value;
  ccb = blue.value;
}

var customButton = document.getElementById('custom-color');
customButton.addEventListener('click',handleCustomButton);

//When changing the numerical color values
function handleCustomChange(){
    var red = document.getElementById('red-text');
    var green = document.getElementById('green-text');
    var blue = document.getElementById('blue-text');
    if(red.value <0){
        red.value = '0';
    }
    if(red.value >255){
        red.value = '255';
    }
    if(green.value <0){
        green.value = '0';
    }
    if(green.value>255){
        green.value = '255';
    }
    if(blue.value <0){
        blue.value = '0';
    }
    if(blue.value>255){
        blue.value = '255';
    }
    customBox.style.background = 'rgb(' + red.value + ',' + green.value + ',' + blue.value + ')';
}

var customColorSelect = document.getElementsByClassName('color-input');
for (var i = 0; i < customColorSelect.length; i++){
    customColorSelect[i].addEventListener('input', handleCustomChange);
}

//Preset Color select
blackSelect.addEventListener('click',function(){
    setColor(0,0,0);
    ccr = 0;
    ccg = 0;
    ccb = 0;
    colorBox.style.background = 'black';
} );
redSelect.addEventListener('click',function(){
    setColor(255,0,0);
    ccr = 255;
    ccg = 0;
    ccb = 0;
    colorBox.style.background = 'red';
});
orangeSelect.addEventListener('click', function(){
    setColor(255,165,0);
    ccr = 255;
    ccg = 165;
    ccb = 0;
    colorBox.style.background = 'orange';
});
yellowSelect.addEventListener('click', function(){
    setColor(255,255,0);
    ccr = 255;
    ccg = 255;
    ccb = 0;
    colorBox.style.background = 'yellow';
});
greenSelect.addEventListener('click',function(){
    setColor(0,128,0);
    ccr = 0;
    ccg = 128;
    ccb = 0;
    colorBox.style.background = 'green';
});
blueSelect.addEventListener('click',function(){
    setColor(0,0,255);
    ccr = 0;
    ccg = 0;
    ccb = 255;
    colorBox.style.background = 'blue';
});
purpleSelect.addEventListener('click', function(){
    setColor(128,0,128);
    ccr = 128;
    ccg = 0;
    ccb = 128;
    colorBox.style.background = 'purple';
});
whiteSelect.addEventListener('click', function(){
    setColor(255,255,255);
    ccr = 255;
    ccb = 255;
    ccg = 255;
    colorBox.style.background = 'white';
});

//Saving colors to custom palette
function handleSaveColor(){
    if ((ccr != c1r) || (ccg != c1g) || (ccb != c1b)){
        c4r = c3r, c4g = c3g, c4b = c3b;
        c3r = c2r, c3g = c2g, c3b = c2b;
        c2r = c1r, c2g = c1g, c2b = c1b;
        c1r = ccr, c1g = ccg, c1b = ccb;
        customPalette[0].style.background = 'rgb(' + c1r + ',' + c1g + ',' + c1b + ')';
        customPalette[1].style.background = 'rgb(' + c2r + ',' + c2g + ',' + c2b + ')';
        customPalette[2].style.background = 'rgb(' + c3r + ',' + c3g + ',' + c3b + ')';
        customPalette[3].style.background = 'rgb(' + c4r + ',' + c4g + ',' + c4b + ')';
    }
}

var saveButton = document.getElementById('save-color');
saveButton.addEventListener('click',handleSaveColor);

//Custom Palette color changing function
customPalette[0].addEventListener('click', function(){
    setColor(c1r,c1g,c1b);
    colorBox.style.background = 'rgb(' + red.value + ',' + green.value + ',' + blue.value + ')';
});
customPalette[1].addEventListener('click', function(){
    setColor(c2r,c2g,c2b);
    colorBox.style.background = 'rgb(' + red.value + ',' + green.value + ',' + blue.value + ')';
});
customPalette[2].addEventListener('click', function(){
    setColor(c3r,c3g,c3b);
    colorBox.style.background = 'rgb(' + red.value + ',' + green.value + ',' + blue.value + ')';
});
customPalette[3].addEventListener('click', function(){
    setColor(c4r,c4g,c4b);
    colorBox.style.background = 'rgb(' + red.value + ',' + green.value + ',' + blue.value + ')';
});

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
var lineColor = "rgb(0,0,0)";

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

function setColor(rd, gr, bl){
  lineColor = "rgb(" + rd + "," + gr + "," + bl + ")";
}
canvas.addEventListener('mousedown', handleMouseButtonDown);
canvas.addEventListener('mousemove', handleMouseButtonMove);
document.addEventListener('mouseup', handleMouseButtonUp);

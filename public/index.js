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
var c5r, c5g , c5b;
var c6r, c6g , c6b;
var c7r, c7g , c7b;
var c8r, c8g , c8b;
var ccr = 0, ccg = 0, ccb = 0;

//When clicking Go! under custom color
function handleCustomButton (){
  var red = document.getElementById('red-text');
  var green = document.getElementById('green-text');
  var blue = document.getElementById('blue-text');
  if(red.value == ''){
      red.value = '0';
  }
  if(green.value == ''){
      green.value = '0';
  }
  if(blue.value == ''){
      blue.value = '0';
  }
  setColor(red.value,green.value,blue.value);
  colorBox.style.background = 'rgb(' + red.value + ',' + green.value + ',' + blue.value + ')';
}

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
    if((red.value >=0) && (red.value<=255)){
        ccr = red.value;
    }
    else{
        ccr = '0';
    }
    if((green.value >=0) && (green.value<=255)){
        ccg = green.value;
    }
    else{
        ccg = '0';
    }
    if((blue.value >=0) && (blue.value<=255)){
        ccb = blue.value;
    }
    else{
        ccb = '0';
    }
    customBox.style.background = 'rgb(' + red.value + ',' + green.value + ',' + blue.value + ')';
}


/*
function startColors(){
    c1r = colorData.color1.c1r
    c1g = colorData.color1.c1g
    c1b = colorData.color1.c1b
    c2r = colorData.color2.c2r
    c2g = colorData.color2.c2g
    c2b = colorData.color2.c2b
    c3r = colorData.color3.c3r
    c3g = colorData.color3.c3g
    c3b = colorData.color3.c3b
    c4r = colorData.color4.c4r
    c4g = colorData.color4.c4g
    c4b = colorData.color4.c4b
    c5r = colorData.color5.c5r
    c5g = colorData.color5.c5g
    c5b = colorData.color5.c5b
    c6r = colorData.color6.c6r
    c6g = colorData.color6.c6g
    c6b = colorData.color6.c6b
    c7r = colorData.color7.c7r
    c7g = colorData.color7.c7g
    c7b = colorData.color7.c7b
    c8r = colorData.color8.c8r
    c8g = colorData.color8.c8g
    c8b = colorData.color8.c8b

    customPalette[0].style.background = 'rgb(' + c1r + ',' + c1g + ',' + c1b + ')';
    customPalette[1].style.background = 'rgb(' + c2r + ',' + c2g + ',' + c2b + ')';
    customPalette[2].style.background = 'rgb(' + c3r + ',' + c3g + ',' + c3b + ')';
    customPalette[3].style.background = 'rgb(' + c4r + ',' + c4g + ',' + c4b + ')';
    customPalette[4].style.background = 'rgb(' + c5r + ',' + c5g + ',' + c5b + ')';
    customPalette[5].style.background = 'rgb(' + c6r + ',' + c6g + ',' + c6b + ')';
    customPalette[6].style.background = 'rgb(' + c7r + ',' + c7g + ',' + c7b + ')';
    customPalette[7].style.background = 'rgb(' + c8r + ',' + c8g + ',' + c8b + ')';
}

startColors();
*/
//Saving colors to custom palette
function handleSaveColor(){
    if ((ccr != c1r) || (ccg != c1g) || (ccb != c1b)){
        c8r = c7r, c8g = c7g, c8b = c7b;
        c7r = c6r, c7g = c6g, c7b = c6b;
        c6r = c5r, c6g = c5g, c6b = c5b;
        c5r = c4r, c5g = c4g, c5b = c4b;
        c4r = c3r, c4g = c3g, c4b = c3b;
        c3r = c2r, c3g = c2g, c3b = c2b;
        c2r = c1r, c2g = c1g, c2b = c1b;
        c1r = ccr, c1g = ccg, c1b = ccb;
        customPalette[0].style.background = 'rgb(' + c1r + ',' + c1g + ',' + c1b + ')';
        customPalette[1].style.background = 'rgb(' + c2r + ',' + c2g + ',' + c2b + ')';
        customPalette[2].style.background = 'rgb(' + c3r + ',' + c3g + ',' + c3b + ')';
        customPalette[3].style.background = 'rgb(' + c4r + ',' + c4g + ',' + c4b + ')';
        customPalette[4].style.background = 'rgb(' + c5r + ',' + c5g + ',' + c5b + ')';
        customPalette[5].style.background = 'rgb(' + c6r + ',' + c6g + ',' + c6b + ')';
        customPalette[6].style.background = 'rgb(' + c7r + ',' + c7g + ',' + c7b + ')';
        customPalette[7].style.background = 'rgb(' + c8r + ',' + c8g + ',' + c8b + ')';
    }
}


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


//Canvas selection
function handleCanvasSelect(event){
    var canvasSelection = event.target.value;
    console.log(canvasSelection)
    window.location.href = '/drawing-pad/' + canvasSelection;
}

//Canvas
var canvas = document.getElementById('drawing-pad');

if(canvas){
    if(canvas.getContext){
        var ctx = canvas.getContext('2d');
    }

    //Drawing Pad Function
    ctx.beginPath();
    ctx.rect(0,0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    ctx.fill();

    var xpos = 0
    var ypos = 0
    var mouseButtonDown = 0
    var xprev = -1
    var yprev = -1
    var lineSize = 10;
    var lineColor = "rgb(0,0,0)";

    //clearRect doesn't leave a white background when saving.
    function clear(){
        ctx.beginPath();
        ctx.rect(0,0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
        ctx.fill();
    }

    function saveCanvas(){
        var saveBackground = document.getElementById('save-background');
        var saveWindow = document.getElementById('save-window');
        saveBackground.classList.remove('hidden');
        saveWindow.classList.remove('hidden');
    }

    function closeWindow(){
        var saveBackground = document.getElementById('save-background');
        var saveWindow = document.getElementById('save-window');
        saveBackground.classList.add('hidden');
        saveWindow.classList.add('hidden');

        clearInput();
    }

    function clearInput(){
        var inputValues = document.getElementById('canvas-name');
        inputValues.value = '';
    }

    function confirmSave(){

        //closeWindow();
    }

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
}
//End of if(canvas)

//Add event listeners if the corresponding case is there
window.addEventListener('DOMContentLoaded', function(){
    var customButton = document.getElementById('custom-button');
    if(customButton){
        customButton.addEventListener('click',handleCustomButton);
    }

    var customColorSelect = document.getElementsByClassName('color-input');
    for (var i = 0; i < customColorSelect.length; i++){
        if(customColorSelect[i]){
            customColorSelect[i].addEventListener('input', handleCustomChange);
        }
    }
    //Preset Color select
    if(blackSelect){
        blackSelect.addEventListener('click',function(){
            setColor(0,0,0);
            colorBox.style.background = 'black';
        } );
        redSelect.addEventListener('click',function(){
            setColor(255,0,0);
            colorBox.style.background = 'red';
        });
        orangeSelect.addEventListener('click', function(){
            setColor(255,165,0);
            colorBox.style.background = 'orange';
        });
        yellowSelect.addEventListener('click', function(){
            setColor(255,255,0);
            colorBox.style.background = 'yellow';
        });
        greenSelect.addEventListener('click',function(){
            setColor(0,128,0);
            colorBox.style.background = 'green';
        });
        blueSelect.addEventListener('click',function(){
            setColor(0,0,255);
            colorBox.style.background = 'blue';
        });
        purpleSelect.addEventListener('click', function(){
            setColor(128,0,128);
            colorBox.style.background = 'purple';
        });
        whiteSelect.addEventListener('click', function(){
            setColor(255,255,255);
            colorBox.style.background = 'white';
        });
    }


    var saveColorButton = document.getElementById('save-color');
    if(saveColorButton){
        saveColorButton.addEventListener('click',handleSaveColor);
    }

    //Custom Palette color changing
    if(customPalette[0]){
        customPalette[0].addEventListener('click', function(){
            setColor(c1r,c1g,c1b);
            colorBox.style.background = 'rgb(' + c1r + ',' + c1g + ',' + c1b + ')';
        });
        customPalette[1].addEventListener('click', function(){
            setColor(c2r,c2g,c2b);
            colorBox.style.background = 'rgb(' + c2r + ',' + c2g + ',' + c2b + ')';
        });
        customPalette[2].addEventListener('click', function(){
            setColor(c3r,c3g,c3b);
            colorBox.style.background = 'rgb(' + c3r + ',' + c3g + ',' + c3b + ')';
        });
        customPalette[3].addEventListener('click', function(){
            setColor(c4r,c4g,c4b);
            colorBox.style.background = 'rgb(' + c4r + ',' + c4g + ',' + c4b + ')';
        });
        customPalette[4].addEventListener('click', function(){
            setColor(c5r,c5g,c5b);
            colorBox.style.background = 'rgb(' + c5r + ',' + c5g + ',' + c5b + ')';
        });
        customPalette[5].addEventListener('click', function(){
            setColor(c6r,c6g,c6b);
            colorBox.style.background = 'rgb(' + c6r + ',' + c6g + ',' + c6b + ')';
        });
        customPalette[6].addEventListener('click', function(){
            setColor(c7r,c7g,c7b);
            colorBox.style.background = 'rgb(' + c7r + ',' + c7g + ',' + c7b + ')';
        });
        customPalette[7].addEventListener('click', function(){
            setColor(c8r,c8g,c8b);
            colorBox.style.background = 'rgb(' + c8r + ',' + c8g + ',' + c8b + ')';
        });
    }

    var sizeSelectInput = document.getElementById('size-select');
    if(sizeSelectInput){
        sizeSelectInput.addEventListener('input', changeSize);
    }

    var clearButton = document.getElementById('clear-button');
    if(clearButton){
        clearButton.addEventListener('click', clear);
    }

    var saveCanvasButton = document.getElementById('save-canvas-button');
    if(saveCanvasButton){
        saveCanvasButton.addEventListener('click', saveCanvas);
    }

    var closeSaveWindow = document.getElementById('close-x')
    if (closeSaveWindow){
        closeSaveWindow.addEventListener('click', closeWindow)
    }

    var cancelSaveWindow = document.getElementById('window-cancel')
    if(cancelSaveWindow){
        cancelSaveWindow.addEventListener('click', closeWindow)
    }

    var confirmSaveButton = document.getElementById('window-save')
    if(confirmSaveButton){
        confirmSaveButton.addEventListener('click', confirmSave)
    }

    var canvasSelect = document.getElementById('select-canvas');
    if(canvasSelect){
        canvasSelect.addEventListener('change', handleCanvasSelect)
    }

    if(canvas){
        canvas.addEventListener('mousedown', handleMouseButtonDown);
        canvas.addEventListener('mousemove', handleMouseButtonMove);
        document.addEventListener('mouseup', handleMouseButtonUp);
    }
})
var saveButton = document.getElementById('save');
//Saving function
function save() { 
  var canvasSave = canvas.toDataURL('image/jpeg');
  this.href = canvasSave;
};
saveButton.addEventListener('click',save, false);


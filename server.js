var path = require('path');
var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var colorData = require('./colors');
var canvasData = require('./canvases');
var jf = require('jsonfile');

var app = express();
var port = process.env.PORT || 3000;
var colorSetNum = 1;


app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');
app.use(bodyParser.text());


app.use(express.static(path.join(__dirname, 'public')));


//Grab data and write to json
app.post('/post',function (req,res){
  //Regex Backslashes out
  var finalData = JSON.parse(req.body);
  res.send(req.body);
  addToJson(finalData);//Becasue appending JSONS doesn't work well
});

//Sending data to index.js
app.get('/colors/:set', function(req,res,next){
  //If colors are found
  var colorsIn = colorData[req.params.set];
  console.log('req.params.set == ',req.params.set);
  console.log('colorsIn == ',colorsIn);

  if(colorsIn){
    res.status(200).render('drawing-pad',{
      title: 'Draw - Drawing Pad'
    });
  }
  else{
    next();
  }
});
//For a get request to get colors json.
app.get('/get',function(req,res){
  var colorsJson = fs.readFileSync('colors.json');
  var colors = JSON.parse(colorsJson);
  res.status(200).send(colors);
});
app.get('/', function (req, res){
    res.status(200).render('index',{
        title: 'Draw - Home',
        color: colorData
    });
});

app.get('/drawing-pad', function(req,res){
    res.status(200).render('drawing-pad',{
        title: 'Draw - Drawing Pad'
    })
})

app.get('/delete', function(req,res){
    res.status(200).render('delete',{
        title: 'Draw - Delete'
    })
})

app.get('*', function (req, res) {
  res.status(404).render('404',{
      title: 'Draw - 404'
  })
});

app.listen(port, function () {
  console.log("== Listening on port", port);
});

//This adds the new json to the old json
function addToJson(jsonIn){
  var colorsJson = fs.readFileSync('colors.json');
  var colors = JSON.parse(colorsJson);
  console.log(colors);
  colors[colorSetNum] = jsonIn;
  colorSetNum += 1;
  var colorsJson = JSON.stringify(colors);
  fs.writeFileSync('colors.json', colorsJson);
}
//var jsonIn = JSON.parse(fs.readFileSync('colors.json','utf8'));
//console.log(jsonIn);

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
  //Testing to see if data made it in
  console.log(req.body);
  res.send(req.body);
  addToJson(req.body);//Becasue appending JSONS doesn't work well
});
//Sending data to index.js
app.get('/colors/:set', function(req,res,next){
  //If colors are found
  var colorsIn = colors[req.params.set];
  console.log(req.params.set);
  console.log(colorsIn);
  
  if(colorsIn){
    res.status(200).render('drawing-pad',{
      title: 'Draw - Drawing Pad'
    });
    res.send(colorsIn);
  }
  else{
    next();
  }
});

app.get('/', function (req, res){
    res.status(200).render('index',{
        title: 'Draw - Home'
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

function addToJson(jsonIn){
  var colorsJson = fs.readFileSync('colors.json');
  console.log(colorsJson);
  var colors = JSON.parse(colorsJson);
  console.log(colors);
  console.log(colorSetNum);
  colors[colorSetNum] = jsonIn;
  colorSetNum += 1;
  var colorsJson = JSON.stringify(colors);
  fs.writeFileSync('colors.json', colorsJson);
}
//var jsonIn = JSON.parse(fs.readFileSync('colors.json','utf8'));
//console.log(jsonIn);
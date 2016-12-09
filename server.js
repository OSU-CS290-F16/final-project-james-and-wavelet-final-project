var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var port = process.env.PORT || 3000;


app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');


app.use(express.static(path.join(__dirname, 'public')));

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

var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var port = process.env.PORT || 3000;

// Serve static files from public/.
app.use(express.static(path.join(__dirname, 'public')));

/*
 * If we didn't find the requested resource in the static files directory,
 * send a 404 error.
 */
app.get('*', function(req, res) {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});


// Listen on the specified port.
app.listen(port, function () {
  console.log("== Listening on port", port);
});
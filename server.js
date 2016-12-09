var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var people = require('./people');
var app = express();
var port = process.env.PORT || 3000;
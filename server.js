var express = require('express');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var snacks = require('./routes/snacks');

var app = express();

// static files
app.use(express.static('public'));

//Configs
app.use(bodyParser.json());

// Routers
app.use('/', index);
app.use('/snacks', snacks);

var server = app.listen(process.env.PORT || 3000, function(){
  var port = server.address().port;
  console.log('Listening on port', port);
});

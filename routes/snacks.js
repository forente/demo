var router = require('express').Router();

var sweet = ['Skittles', 'Twix', '100 Grand', 'Baby Ruth', 'Pineapple', 'Mango', 'Candied Pineapple', 'Gushers', 'Goobers', 'Fruit By The Foot'];
var salty = ['Pringles', 'Bugles', 'Gardetto', 'Snyders Pretzels', 'Pizza', 'Slim Jims', 'Pop Corn', 'Cheese Itz', 'Funyons'];

router.get('/', function(request, response){
  response.send('Please use /salty, /sweet, or /all. Good day *hand slap*.')
});

router.get('/salty', function(request, response){
  response.send(salty);
});

router.get('/sweet', function(request, response){
  response.send(sweet);
});

router.get('/all', function(request, response){
  var total = sweet.concat(salty);
  response.send(total);
});

router.post('/add', function(request, response){
  console.log(request.body);

  var snack = request.body;

  if(snack.type === 'Sweet'){
    sweet.push(snack.snackName);
    response.sendStatus(200);
  } else if(snack.type === 'Salty') {
    salty.push(snack.snackName);
    response.sendStatus(200);
  } else {
    response.sendStatus(500);
  }
});

module.exports = router;

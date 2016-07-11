var router = require('express').Router();

router.get('/', function(request, response){
  response.send('Hello again');
})

module.exports = router;

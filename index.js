var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.send('I am there, running and alive!!!');
});

app.listen(app.get('port'), function() {
  console.log('My Node app is running on port', app.get('port'));
});

import express from 'express';

const app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.send('I am still there, running and alive and now in ES6!!!');
});

app.listen(app.get('port'), function() {
  console.log('My Node app is running on port', app.get('port'));
});

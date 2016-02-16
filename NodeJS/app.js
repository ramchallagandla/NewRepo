var express = require('express');

var app = express();

app.listen(3000);

app.get('/', function(request, response){
   response.send('<h1>Hello World!!!</h1>') 
});

app.get('/api', function (request, response) {
   response.json({person: 'ram'}); 
});
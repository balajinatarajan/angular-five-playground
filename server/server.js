var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/text', function(req, res) {
  res.status(200);
  res.send({ text: 'Account Found' });
});

console.log("Listening on port 4300");
app.listen(4300);

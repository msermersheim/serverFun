var express = require('express')
var app = express()
var bodyParser = require('body-parser')

// app.use(bodyParser.urlencoded({
//   extended: false
// }))

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.get('/test', function(req, res) {
  res.end('ended');
});

app.get('/users/:user', function(req, res) {
  res.end('this is data for user: ' + req.params.user);
});

app.post('/test', function(req, res) {
  console.log('req.body', req.body)
  res.end('ended');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
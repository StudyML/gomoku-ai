var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require("path");
var conn = require('./con/dbcon.js')();


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json()); // for parsing application/json
// app.set('views', './');
// app.set('view engine', 'html');

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/hi', function(req, res) {
  console.log('body: ' + JSON.stringify(req.body));
  res.json(JSON.stringify(req.body));
});
app.use(express.static('public'));

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});

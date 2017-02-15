var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var moment     = require('moment');

app.use(bodyParser.urlencoded({ extended: true }));

var port = process.env.PORT || 8080;
var router = express.Router();

router.use(function(req, res, next) {
  // console.log('There is a requesting.');
  console.log('There is a requesting at ' + moment().format('YYYY-MM-DD HH:mm:ss'));
  next();
});

router.get('/', function(req, res) {
  res.send('<h1>Hello World</h1>');
});

router.get('/:name', function(req, res) {
  res.send('<h1>Hello ' + req.params.name + '</h1>');
});

router.post('/', function (req, res) {
  var name = req.body.name;
  res.json({message: 'Hello ' + name});
});

app.use('/home', router);

app.listen(port);
console.log('Magic happens on port ' + port);

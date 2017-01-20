var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('Hello Austin! I wrote this entirely in Nano!');
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});

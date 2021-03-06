var fuzzy = require('fuzzy-filter');
var express = require('express');
var app = express();
var fs = require('fs');

var dir = "/home/klang/files";

var get_directories = function(query) {
	var all_results = fs.readdirSync(dir);
	var fuzzy_results = fuzzy(query, all_results);
	console.log(fuzzy_results);
	return fuzzy_results;
}

app.get("/search/:query", function(req, res) {
	console.log(req.params.query);
	res.send(get_directories(req.params.query));
});

app.listen(8080);

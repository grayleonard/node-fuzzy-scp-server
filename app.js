var fuzzy = require('fuzzy-filter');
var express = require('express');
var app = express();
var fs = require('fs');

var dir = "/home/klang/torrents/";

var get_torrents = function(query) {
	var all_results = fs.readDirSync(dir);
	var fuzzy_results = fuzzy(query, all_results);
	console.log(fuzzy_results);
	return fuzzy_results;
}

app.get("/search/:query", function(req, res) {
	console.log(req.params.query);
	res.send(get_torrents(req.params.query);
});

app.listen(8080);

var express = require('express');
var router  = express.Router();
var cradle = require("cradle");
var db = new(cradle.Connection)().database('spider');

router.get('/', function(req, res, next) {
	res.send("stock");
});

router.get('/spider', function(req, res, next) {

	var data;
	data = db.view('_all/_all_datas', function(err, docs) {
		var res = [];
		var item;
		for (item in docs){
			res.push(item)
		}
		return res;
	});
	console.log(data);

	res.render('index', {title:'hello', datas:data});
});

router.get('/list', function(req, res, next) {
	var data;
	db.view('_all/_all_datas', {limit:20}, function(err, docs) {
		res.json(docs)
	});
});

module.exports = router;


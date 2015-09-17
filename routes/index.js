var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* TAGS */
router.get('/tag/:tagname', function(req, res, next) {
	res.render('index', {title: 'hello'+req.params.tagname});
});

router.get('/list', function(req, res, next) {
	res.render('index', {
		title: 'List',
		items: []
	});
});
module.exports = router;

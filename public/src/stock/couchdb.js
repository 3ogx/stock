var db = new(cradle.Connection)('http://127.0.0.1', 5984, {
		cache: true,
		raw: false,
		forceSave: true
		}).database('spider');
exports.alldata = function(req, res) {
	db.view('_all/_all_datas', function(err, docs) {
		res.json(docs);
	});
}

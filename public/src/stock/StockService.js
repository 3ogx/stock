(function(){
  'use strict';
	angular.module('stock')
		.service('stockService', ['$q', '$http', StockService]);

	function StockService($q, $http) {
		// var datas = $http.jsonp("http://www.runoob.com/try/angularjs/data/Customers_JSON.php?jsonp=JSON_CALLBACK").success(function(data){console.log(data);}).error(function(error){console.log(error)});
		var datas = [
{"Name":"Alfreds Futterkiste","City":"Berlin","Country":"Germany"},
{"Name":"Ana Trujillo Emparedados y helados","City":"México D.F.","Country":"Mexico"},
{"Name":"Antonio Moreno Taquería","City":"México D.F.","Country":"Mexico"},
{"Name":"Around the Horn","City":"London","Country":"UK"},
{"Name":"B's Beverages","City":"London","Country":"UK"},
{"Name":"Berglunds snabbköp","City":"Luleå","Country":"Sweden"},
{"Name":"Blauer See Delikatessen","City":"Mannheim","Country":"Germany"},
{"Name":"Blondel père et fils","City":"Strasbourg","Country":"France"},
{"Name":"Bólido Comidas preparadas","City":"Madrid","Country":"Spain"},
{"Name":"Bon app'","City":"Marseille","Country":"France"},
{"Name":"Bottom-Dollar Marketse","City":"Tsawassen","Country":"Canada"},
{"Name":"Cactus Comidas para llevar","City":"Buenos Aires","Country":"Argentina"},
{"Name":"Centro comercial Moctezuma","City":"México D.F.","Country":"Mexico"},
{"Name":"Chop-suey Chinese","City":"Bern","Country":"Switzerland"},
{"Name":"Comércio Mineiro","City":"São Paulo","Country":"Brazil"}
];
		var websites = [
			{"name":"qq", "siteurl":"http://stock.qq.com/", "logo":""},
			{"name":"163", "siteurl":"http://stock.163.com/", "logo":""},
			{"name":"yahoo", "siteurl":"http://finaces.yahoo.com", "logo":""},
			{"name":"google", "siteurl":"http://www.google.com.hk", "logo":""},
		];

		return {
			loadData: function() {
				return $http.get("http://127.0.0.1:3000/assets/data.js").success(function(data){
					return $q.when(data);
				})
			},
			ld: function() {
				return $http.get("/stock/list").success(function(data){
					return $q.when(data);
				});
			},
			website: function() {
				return $q.when(websites);
			}
		}
	}
})();

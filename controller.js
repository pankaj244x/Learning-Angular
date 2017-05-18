/*var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		template: 'Welcome user!'
	})
	.when('/anotherPage', {
		template: 'Welcome user, again!'
	})
	.otherwise({
		redirectTo: '/'
	});
});*/
/*
var app = angular.module('mainApp', []);
app.controller('people', function($scope, $http){
	$http({
		method: 'GET',
		url: 'http://localhost/database.json' 
	}).then(function(response){
		$scope.persons = response.data.records;
		
	}, function(error){
		
	});
});
*/
var app = angular.module('mainApp', []);

app.controller('app', function($scope){
	/*
	var range = 10;
	var myRange = [];
	for(i=0;i<range;i++){
		myRange.push(i);
	}
	
	var range = new Array(100);
	$scope.range = range;
	
	$scope.counter = -1;
	$scope.$watch('myText', function(newValue, oldValue){
		//console.log("New Value: "+ newValue);
		//console.log("Old Value: "+ oldValue);
		$scope.counter++;
	});

	$scope.myRandomNumber = Math.random();
	document.querySelector('input').addEventListener('click', function(){
		console.log('button clicked');
		$scope.myRandomNumber = Math.random();
		$scope.$digest();
	}, false);
		*/
});







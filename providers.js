var application = angular.module('mainApp', []);
/*
application.provider('date', function(){
	var greet;
	return{
		setGreeting: function(value){
			greet = value;
			
		},
		$get: function(){
			return{
				showDate: function(){
					var date = new Date();
					return greet +" its " + date.getHours();
				},
				devshowDate: function(){
					var date = new Date();
					return date.getHours();
				}
			}
		}
	}
});

application.config(function(dateProvider){
	var time = dateProvider.$get().devshowDate();
	if(time>0 && time<12){
		dateProvider.setGreeting("Good morning!");
	}else if(time>13 && time<17){
		dateProvider.setGreeting("Good day");
	}else if(time>17 && time<19){
		dateProvider.setGreeting("Good evening!");
	}else{
		dateProvider.setGreeting("Good night");
	}
	
});

application.controller('app', function($scope, date){
	$scope.greetMessage = date.showDate();
});
*/
application.service('fromService',function(){
	this.message = "This is from service";
});

application.factory('fromFactory', function(){
	var factory={};
	factory.message = "This is from factory!"
	return factory;
});

application.provider('fromProvider', function(){
	var m1 = "This is from provider!";
	return{
		setAName: function(name){
			m1 += " "+name;
		},
		$get: function(){
			return{
				message: m1
			}
		}
	}
});

application.config(function(fromProviderProvider){
	fromProviderProvider.setAName("Pankaj Sharma");
});

application.controller('app', function($scope, fromService, fromFactory, fromProvider){
	$scope.greetMessage = [fromService.message, fromProvider.message, fromFactory.message];
});
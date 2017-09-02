// declaring modules-- Auth for login form and Home for Login success Page
var app=angular.module('mainApp',['ngRoute','adoor3.css']);

app.config(function($routeProvider){

	$routeProvider
	.when('/',{

		templateUrl:'WriterLogin.html',
		css:'./css/styles.css'
	})
	.when('/dashboard',{

		templateUrl:'dashboard.html'
	})
	.otherwise({

		redirectTo:'/'
	});
});

app.controller('loginCtrl',function($scope,$http,$location){


	$scope.submit=function(){
		var email=$scope.email;
		var password=$scope.password;
		$http.post('http://devapi.whitepanda.in/api/v1/writers/register',{username:email,password:password})
		.success(function(response){
			if(response){
			$location.path('/dashboard');
		}
		else{
			alert.('You Need to register First!');
		}
		})

	};
})
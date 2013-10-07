var app = angular.module('tutorial', ['dataServices']).
		  config(['$routeProvider', function($routeProvider) {
		  $routeProvider.
		  	  when('/', {templateUrl: 'template/home.html',   controller: HomeCtrl}). 
		  	  when('/learn/:code', {templateUrl: 'template/lesson.html',   controller: LessonCtrl}).  
		  	  
		      otherwise({redirectTo: '/'});
		}])
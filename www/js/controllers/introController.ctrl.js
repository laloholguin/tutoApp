angular.module('introModule', [])
.controller('IntroController', function($scope, $state, $ionicSlideBoxDelegate){
	$scope.startApp = function () {
		$state.go('begin');
	}

	$scope.next = function () {
		$ionicSlideBoxDelegate.next();
	}

	$scope.previous = function(){
		$ionicSlideBoxDelegate.previous();
	}

	$scope.slideHasChanged = function(){
		$scope.slideIndex = index;
	}

});

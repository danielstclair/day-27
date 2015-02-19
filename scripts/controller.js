angular.module('app.controller', []).controller('submitting', function($scope){
	// $scope.contactForm = false;

	$scope.email = $('#email').val();

	$scope.checkInput = function(){
		
		console.log('hola');
		if(!$scope.name){
			$scope.errorName = true;
		}
		if($scope.email == ''){
			$scope.errorEmail1 = true;
		}; 
		if ($scope.email.indexOf('@') === -1) {
			$scope.errorEmail2 = true;
		};
		if(!$scope.website){
			$scope.errorWeb1 = true;
		}
		if(!$scope.message){
			$scope.errorMessage = true;
		}
		

	}

	
})

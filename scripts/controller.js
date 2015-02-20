angular.module('app.controller', []).controller('submitting', function($scope){
	$scope.contactForm = true;

	// $scope.names = $('#names').val();

	$scope.checkInput = function(){
		console.log('hola');
		if($scope.successMessage == true && $scope.successWeb == true && $scope.successEmail == true && $scope.successName == true){
			console.log('testing');
			$scope.contactForm = false;
		}

		$scope.$watch('name', function(){
			if(!$scope.name){
				$scope.errorName = true;
			} else {
				$scope.errorName = false;
				$scope.successName = true;
			}
		})
		
		$scope.$watch('email', function(){
			if(!$scope.email){
				$scope.errorEmail1 = true;
			} else if($scope.email.indexOf('@') === -1) {
				$scope.errorEmail2 = true;
				$scope.errorEmail1 = false;
			} else{
				$scope.errorEmail1 = false;
				$scope.errorEmail2 = false;
				$scope.successEmail = true;
			}
		})

		$scope.$watch('website', function(){
			if(!$scope.website){
				$scope.errorWeb1 = true;
			} else if($scope.website.substring(0,7) !== 'http://') {
				$scope.errorWeb2 = true;
				$scope.errorWeb1 = false;
			} else{
				$scope.errorWeb1 = false;
				$scope.errorWeb2 = false;
				$scope.successWeb = true;
			}
		})

		$scope.$watch('messages', function(){
			if(!$scope.messages){
				$scope.errorMessage = true;
			} else{
				$scope.errorMessage= false;
				$scope.successMessage = true;
			}
		})


	}

	
})

angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService) {
	friendService.getFriends().then(function(res){
		$scope.currentUser = res.data.currentUser;
		$scope.friends = res.data.friends;
		
	})
	$scope.friendToAdd = {
		"name": $scope.friendName
	}

	$scope.addAFriend = () => {
		friendService.addFriend($scope.friendToAdd).then(function(res){
		
	})};
	
});
angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService) {
	friendService.getFriends().then(function(res){
		console.log(res);
		$scope.currentUser = res.data.currentUser;
		$scope.friends = res.data.friends;
		// return req.session.currentUser;
	})
	// $scope.friends = friendService.getFriends().then(function(res){
	// 	return myFriends;
	// })
});
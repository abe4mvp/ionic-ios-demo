angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  var friends = Friends.all();
  console.log(friends);
  $scope.friends = friends;
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  var friend = Friends.get($stateParams.friendId);
  console.log(friend);
  $scope.friend = friend;

})

.controller('AccountCtrl', function($scope) {
});

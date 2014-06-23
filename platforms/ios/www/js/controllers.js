angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Friends) {
  Friends.fetch();
})

.controller('FriendsCtrl', function($scope, Friends) {
  
  $scope.fetch = function(){
    Friends.fetch().then(function(data){
      $scope.friends = data;
      $scope.$broadcast('scroll.refreshComplete');
    });
  };

})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  var friend = Friends.get($stateParams.friendId);
  console.log(friend);
  $scope.friend = friend;

})

.controller('AccountCtrl', function($scope, $http, Friends) {
  $scope.create = function(id){
    Friends.add(id); 
  };
});



angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function($http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var directors;

  var endpoint = 'http://livestream-api.herokuapp.com/directors';
  $http
    .get(endpoint)
    .success(function(data){
      directors = data;
    });



  return {
    all: function() {
      return directors;
    },
    get: function(friendId) {
      var id = Number(friendId);
      for (var i = 0; i < directors.length; i++) {
        var director = directors[i];
        console.log(director.id, friendId);
        if(director.id === id){
          return director;
        }
      }
    }
  };
});

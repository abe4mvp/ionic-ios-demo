angular.module('starter.services', [])

.factory('Friends', function($http) {
  var directors;

  var endpoint = 'http://livestream-api.herokuapp.com/directors';
  
  var fetch = function(){
    $http
      .get(endpoint)
      .success(function(data){
        directors = data;
    });
  };
  fetch();


  return {
    all: function() {
     return directors;
    },

    fetch: fetch,

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

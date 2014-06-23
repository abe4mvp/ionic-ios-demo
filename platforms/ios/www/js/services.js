angular.module('starter.services', [])

.factory('Friends', function($http) {
  var directors;

  var endpoint = 'http://livestream-api.herokuapp.com/directors';
  
  var fetch = function(){
    var promise = $http
      .get(endpoint)
      .then(function(response){
        directors = response.data;
        return response.data;
    });

    return promise;  
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
    },

    add: function(id) {
      $http
        .post(endpoint, {livestream_id: id})
        .success(function(data){
          directors.push(data);
        });
      }
    };
});

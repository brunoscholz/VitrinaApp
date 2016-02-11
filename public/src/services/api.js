angular.module('VitrinaApp')
  .factory('API', ['$http', 'idFactory', function($http, idFactory) {

    return {
      getFeed: function() {
        //return $http.get('http://localhost:3000/api/feed');
        return $http.get('model/feed.json')
      },
      getMediaById: function(id) {
        return $http.get('model/feed.json')
          .then(function(obj) {
            var result;
            var index;
            var entry;
            var searchEntry = "id";
            for (index = 0; index < obj.length; ++index)
            {
              entry = obj[index];
              //console.log(entry.id + ": " + id);
              if (entry.id == id)
              {
                result = entry;
              }
            }

            return result;
          });

        //return $http.get('http://localhost:3000/api/media/' + id);
      },
      likeMedia: function(id) {
        return $http.post('http://localhost:7000/api/like', { mediaId: id });
      },
      listMessages: function(id) {
        return $http.get('model/msg.json')
      },
      sendMessage: function(id, msg) {
        var msg = {
          "recipientId": "9850573737390734622C",
          "message": "Hello, world!",
          "secret": "test12345"
        };

        return $http.put('/api/dapps/' + idFactory + '/api/messages/add', { "d": msg });
      }
    }

}]);
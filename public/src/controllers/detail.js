var detail = angular.module('VitrinaApp');

detail.controller('DetailController', ['$scope', '$rootScope', '$location', 'API',
  function ($scope, $rootScope, $location, API) {

    var mediaId = $location.path().split('/').pop();

    /*API.getMediaById(mediaId).then(function(media) {
      $scope.hasLiked = false;//media.user_has_liked;
      $scope.card = media;
    });*/

    // not acceptable... should come right from server!
    // when in production it should come right
    API.getFeed().success(function(data) {
      var result;
      var index;
      var entry;
      var searchEntry = "id";
      for (index = 0; index < data.length; ++index)
      {
        entry = data[index];
        //console.log(entry.id + ": " + id);
        if (entry.id == mediaId)
        {
          result = entry;
          break;
        }
      }

      $scope.hasLiked = false;//media.user_has_liked;
      $scope.card = result;
      $scope.tags = JSON.parse(result.tags);
    });

    $scope.like = function() {
      $scope.hasLiked = true;
      API.likeMedia(mediaId).error(function(data) {
        alert('Error', data.message, 'error');
      });
    };
}]);
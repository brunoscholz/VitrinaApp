var looks = angular.module('VitrinaApp');

/* Look details */
looks.controller('LookDetailController', ['$scope', '$rootScope', '$location', 'API',
  function ($scope, $rootScope, $location, API) {
    var mediaId = $location.path().split('/').pop();

    /*API.getMediaById(mediaId).then(function(media) {
      $scope.hasLiked = false;//media.user_has_liked;
      $scope.card = media;
    });*/

    // not acceptable... should come right from server!
    // when in production it should come right
    API.getFeed().success(function(data) {
      var result = {};
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
      $scope.hasNotLiked = false;

      $scope.card = result;
      $scope.tags = JSON.parse(result.tags);
    });

    $scope.like = function() {
      if(!$scope.hasLiked) {
        // didnt like yet or has disliked
        $scope.hasLiked = true;
        if($scope.hasNotLiked)
          $scope.hasNotLiked = false;
      } else {
        $scope.hasLiked = false;
      }
      
      /*API.likeMedia(mediaId).error(function(data) {
        alert('Error', data.message, 'error');
      });*/
    };

    $scope.dislike = function() {
      if(!$scope.hasNotLiked) {
        // didnt like yet or has disliked
        $scope.hasNotLiked = true;
        if($scope.hasLiked)
          $scope.hasLiked = false;
      } else {
        $scope.hasNotLiked = false;
      }

      /*API.likeMedia(mediaId).error(function(data) {
        alert('Error', data.message, 'error');
      });*/
    };

    $scope.share = function() {
      
    };

    $scope.tip = function() {
      
    };
}]);

/* Look creation */
looks.controller('LookCreateController', ['$scope', '$rootScope', '$location', 'API', 'twFileReader',
  function ($scope, $rootScope, $location, API, twFileReader) {
    $scope.title = "";
    $scope.look;
    $scope.myFile = {};

    $scope.readFile = function() {
      var file = $scope.myFile;
         
      //console.log('file is ' );
      //console.dir(file);

      //var uploadUrl = "/fileUpload";
      //fileUpload.uploadFileToUrl(file, uploadUrl);
      twFileReader.readAsDataURL(file).then(function(dataURL) {
        //do something with dataURL
        $scope.look = dataURL;

        //Caman = require('caman').Caman;
        Caman($scope.look, function () {
          this.brightness(40);
          this.vignette('10%');
          this.render(function() {

          });
        });

      });

    };

    $scope.previewPost = function() {
      console.log('preview');
    };

    $scope.post = function() {
      console.log('post/file ready');
    };
}]);

/* Look edition */
looks.controller('LookEditController', ['$scope', '$rootScope', '$location', 'API',
  function ($scope, $rootScope, $location, API) {
    $scope.title = "type the fucking title here...";
}]);

/* Look delete */
looks.controller('LookDeleteController', ['$scope', '$rootScope', '$location', 'API',
  function ($scope, $rootScope, $location, API) {
    

}]);
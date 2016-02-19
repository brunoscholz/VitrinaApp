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
looks.controller('LookCreateController', ['$scope', '$rootScope', '$location', 'twFileReader',
  function ($scope, $rootScope, $location, twFileReader) {
    $scope.title = "";
    $scope.look = {
      'url': '',
      'width': 0,
      'height': 0
    };
    $scope.myFile = {};
    $scope.tags = {};

    $scope.addTag = function (tag) {

    }
    
    $scope.removeTag = function (tag) {
      
    }

    var maxWidth = 500,
        maxHeight = 500,
        imgWidth  = 500,
        imgHeight = 500,
        originalCanvas=null;

    $scope.readFile = function() {
      var file = $scope.myFile;
         
      //console.log('file is ' );
      //console.dir(file);

      //var uploadUrl = "/fileUpload";
      //fileUpload.uploadFileToUrl(file, uploadUrl);
      twFileReader.readAsDataURL(file).then(function(dataURL) {
        //do something with dataURL
        var img = new Image;
        img.onload = function() {
          imgWidth  = img.width;
          imgHeight = img.height;
          var newWidth, newHeight, ratio;

          // Calculate the new image dimensions, so they fit
          // inside the maxWidth x maxHeight bounding box
          if (imgWidth >= maxWidth || imgHeight >= maxHeight) {
            // The image is too large,
            // resize it to fit a 500x500 square!
            if (imgWidth > imgHeight) {
              // Wide
              ratio = imgWidth / maxWidth;
              newWidth = maxWidth;
              newHeight = imgHeight / ratio;
            } else {
              // Tall or square
              ratio = imgHeight / maxHeight;
              newHeight = maxHeight;
              newWidth = imgWidth / ratio;
            }
          } else {
            newHeight = imgHeight;
            newWidth = imgWidth;
          }

          originalCanvas=document.getElementById("look-canvas");
          var originalContext=originalCanvas.getContext("2d");

          // Set the attributes for centering the canvas
          originalCanvas.setAttribute("width", newWidth);
          originalCanvas.setAttribute("height", newHeight);
          // originalCanvas.style.marginTop = (-newHeight/2) + "px";
          // originalCanvas.style.marginLeft = (-newWidth/2) + "px";

          // Draw the dropped image to the canvas
          // with the new dimensions
          originalContext.drawImage(this, 0, 0, newWidth, newHeight);

          // We don't need this any more
          img.remove();

          // show filters
        }

        img.src = dataURL;
      });
    };

    $scope.ApplyFilter = function(effect) {
        // Clone the canvas
        var clone = originalCanvas.cloneNode(true);
        
        // Clone the image stored in the canvas as well
        clone.getContext('2d').drawImage(originalCanvas,0,0);
        document.getElementById("dropzone").innerHTML = null;
        document.getElementById("dropzone").appendChild(clone); 

        Caman(clone, function () {
          // If such an effect exists, use it:
          if( effect in this){
            this[effect]();
            this.render();
          }
        });


        /*Caman("#look-canvas", function() {
          this.lomo();
          this.render();
        });*/
    }

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
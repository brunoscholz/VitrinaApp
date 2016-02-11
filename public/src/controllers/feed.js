var feed = angular.module('VitrinaApp');
//, Show
feed.controller('FeedController', ['$scope', '$http', 'API',
  function ($scope, $http, API) {
    if(true) { //isAuthenticated()
      API.getFeed().success(function(data) {
        $scope.cards = data;
      });
    }

    $scope.parJson = function (json) {
        return JSON.parse(json);
    }

    /*$scope.result = [
      angular.fromJson(data.resultList[0]),
      angular.fromJson(data.resultList[1])
    ];
    alert($scope.result[0].codeName);*/

    /*$scope.alphabet = ['0-9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
      'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
      'Y', 'Z'];
    $scope.genres = ['Action', 'Adventure', 'Animation', 'Children', 'Comedy',
      'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Food',
      'Home and Garden', 'Horror', 'Mini-Series', 'Mystery', 'News', 'Reality',
      'Romance', 'Sci-Fi', 'Sport', 'Suspense', 'Talk Show', 'Thriller',
      'Travel'];*/

    //$scope.orderProp = 'age';
}]);

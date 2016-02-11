var chat = angular.module('VitrinaApp');

chat.controller('ChatController', ['$scope', '$http', 'API',
  function ($scope, $http, API) {
  	$scope.toSend = '';

    if(true) { //isAuthenticated()
      API.listMessages().success(function(data) {
        $scope.msgList = data;
      });
    }

    $scope.send = function() {
    	API.sendMessage(0, $scope.toSend);
    }

}]);

//, Auth
angular.module('VitrinaApp')
  .controller('LoginController', function($scope) {
    $scope.login = function() {
      //Auth.login({ email: $scope.email, password: $scope.password });
    };
    $scope.facebookLogin = function() {
      //Auth.facebookLogin();
    };
    $scope.googleLogin = function() {
      //Auth.googleLogin();
    };
    //$scope.pageClass = 'fadeZoom';
  });
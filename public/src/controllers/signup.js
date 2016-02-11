//, Auth
angular.module('VitrinaApp')
  .controller('SignupController', function($scope) {
    $scope.signup = function() {
      // Auth.signup({
      //   name: $scope.displayName,
      //   email: $scope.email,
      //   password: $scope.password
      // });
    };
    $scope.pageClass = 'fadeZoom'
  });
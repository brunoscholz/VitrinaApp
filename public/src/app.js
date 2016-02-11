angular.module('VitrinaApp', ['ngResource', 'ngMessages', 'ngRoute', 'ngAnimate'])
  .config(function ($routeProvider, $locationProvider) {
    //$locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'src/views/feed.html',
        controller: 'FeedController'
      })
      .when('/login', {
        templateUrl: 'src/views/login.html',
        controller: 'LoginController'
      })
      .when('/signup', {
        templateUrl: 'src/views/signup.html',
        controller: 'SignupController'
      })
      .when('/photo/:id', {
        templateUrl: 'src/views/detail.html',
        controller: 'DetailController'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope, $window, idFactory) { //, $auth authService,
    $rootScope.appID = idFactory;
    if (true) { // $auth.isAuthenticated()
      $rootScope.currentUser = 'bruno0001';//JSON.parse($window.localStorage.currentUser);
    }
  });

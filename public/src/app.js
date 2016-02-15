angular.module('VitrinaApp', ['ngResource', 'ngMessages', 'ngRoute', 'ngAnimate', 'ngEmbed'])
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
      .when('/look/:id', {
        templateUrl: 'src/views/lookdetail.html',
        controller: 'LookDetailController'
      })
      .when('/look/create', {
        templateUrl: 'src/views/lookcreate.html',
        controller: 'LookCreateController'
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

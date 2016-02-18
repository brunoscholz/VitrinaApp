angular.module('VitrinaApp', ['ngResource', 'ngMessages', 'ngRoute', 'ngAnimate', 'ngEmbed', 'tw.services.fileReader'])
  .config(function ($routeProvider, $locationProvider, $logProvider) {
    //$locationProvider.html5Mode(true);
    $logProvider.debugEnabled(true);

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
      .when('/look/create', {
        templateUrl: 'src/views/lookcreate.html',
        controller: 'LookCreateController'
      })
      .when('/look/view/:id', {
        templateUrl: 'src/views/lookdetail.html',
        controller: 'LookDetailController'
      })
      .when('/look/edit/:id', {
        templateUrl: 'src/views/lookedit.html',
        controller: 'LookEditController'
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

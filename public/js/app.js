var codelibApp = angular.module('codelibApp', [
  'ngRoute',
  'ngCookies',
  'ui.bootstrap',
  'codelibControllers',
]);

codelibApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/search', {
        templateUrl: 'search.html',
        controller: 'SearchCtrl'
      }).
      when('/login', {
        templateUrl: 'login.html',
        controller: 'LoginCtrl'
      }).
      when('/profile', {
        templateUrl: 'profile.html',
        controller: 'ProfileCtrl'
      }).
      when('/results/:q', {
        templateUrl: 'results.html',
        controller: 'SearchResultCtrl'
      }).
      otherwise({
        redirectTo: '/search'
      });
  }
]);

codelibApp.run(function($rootScope,$location,$cookies) {
  $rootScope.search = function(q){
    // console.log(q);
    $location.path('/results/'+q);
    // $cookies.put('searchText', q);
    // return false;
  };
  $rootScope.$on("$routeChangeSuccess", function(angularEvent, current, previous){
    $rootScope.hideLogin = false;
    $rootScope.showSearch = false;
  });

  // $rootScope.searchText = $cookies.get('searchText');
  // if(!$rootScope.searchText) $rootScope.searchText='';

  $rootScope.library = $cookies.getObject('library');
  if(!$rootScope.library) $rootScope.library = [];
});
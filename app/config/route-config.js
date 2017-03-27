'use strict';

module.exports = ['$stateProvider', '$urlRouterProvider', routerConfig];

function routerConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('/', '/home');

  let routes = [
    {
      name: 'home',
      url: '/home',
      controller: 'HomeController',
      controllerAs: 'homeCtrl'
    },
    {
      name: 'signup',
      url: '/signup',
      controller: 'SignupController',
      controllerAs: 'signupCtrl'
    }
  ];

  routes.forEach( route => {
    $stateProvider.state(route);
  });
}

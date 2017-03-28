'use strict';


function routerConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('/', '/home');

  let routes = [
    {
      name: 'home',
      url: '/home',
      template: require('../view/home-view/home-view.html'),
      controller: 'HomeViewController',
      controllerAs: 'homeViewCtrl',
    },
    {
      name: 'signup',
      url: '/signup',
      template: require('../view/signup-view/signup-view.html'),
      controller: 'SignupViewController',
      controllerAs: 'signupViewCtrl',
    },
  ];

  routes.forEach( route => {
    $stateProvider.state(route);
  });
}

module.exports = ['$stateProvider', '$urlRouterProvider', routerConfig];

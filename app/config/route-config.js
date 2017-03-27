'use strict';

module.exports = ['$stateProvider', '$urlRouterProvider', routerConfig];

function routerConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('/', '/home');

  let routes = [
    {
      name: 'home',
      url: '/home',
      controller: 'HomeController',
      controllerAs: 'homeCtrl',
      template: require('../view/home/home.html')
    },
    {
      name: 'signup',
      url: '/signup',
      controller: 'SignupController',
      controllerAs: 'signupCtrl',
      template: require('../view/signup/signup.html')
    }
  ];

  routes.forEach( route => {
    $stateProvider.state(route);
  });
}

'use strict';
require('./scss/main.scss');
const angular = require('angular');
const path = require('path');
const pascalcase = require('pascalcase');
const uiRouter = require('angular-ui-router');

const routeApp = angular.module('routeApp', [uiRouter]);

let context = require.context('./config/', true, /\.js$/);
context.keys().forEach(key => {
  routeApp.config(context(key));
});

context = require.context('./view/', true, /\.js$/);
context.keys().forEach(key => {
  let name = pascalcase(path.basename(key, '.js'));
  routeApp.controller(name, context(key));
});

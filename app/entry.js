'use strict';

require('./main.scss');

const path = require('path');
const pascalcase = require('pascalcase');
const uiRouter = require('angular-ui-router');
const angular = require('angular');

const routesApp = angular.module('routesApp', [uiRouter]);

let context = require.context('./config/', true, /\.js$/);
context.keys().forEach( key => {
  routesApp.config(context(key));
});

context = require.context('./view/', true, /\.js$/);
context.keys().forEach( key => {
  let name = pascalcase(path.basename(key, '.js'));
  routesApp.controller(name, context(key));
});

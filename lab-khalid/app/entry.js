 'use strict';

const
  path = require('path'),
  camelcase = require('camelcase'),
  pascalcase = require('pascalcase'),
  angular = require('angular'),
  uiRouter = require('angular-ui-router'),

  routesApp = angular.module('routesApp', [uiRouter]);

 let context = require.context('./config/', true, /\.js$/);

 context.keys().forEach( key => {
   routesApp.config(context(key));
 });

 context = require.context('./view/', true, /\.js$/);
 context.keys().forEach( key => {
   let name = pascalcase(path.basename(key, '.js'));
   routesApp.controller(name, context(key))
 });
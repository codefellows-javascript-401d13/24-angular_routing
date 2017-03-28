'use strict';

require('./scss/main.scss');

const path = require('path');
const camelcase = require('camelcase');          //eslint-disable-line
const pascalcase = require('pascalcase');
const angular = require('angular');
const uiRouter = require('angular-ui-router');

const routingApp = angular.module('routingApp', [uiRouter]);

const configModules = require.context('./config/', true, /\.js$/);
configModules.keys().forEach( module => {
  routingApp.config(configModules(module));
});

const viewModules = require.context('./view/', true, /\.js$/);
viewModules.keys().forEach( module => {
  let name = pascalcase(path.basename(module, '.js'));
  routingApp.controller(name, viewModules(module));
});

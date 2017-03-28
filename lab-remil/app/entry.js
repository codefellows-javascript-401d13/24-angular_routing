'use strict';

import './scss/main.scss';

import path from 'path';
import camelcase from 'camelcase';          //eslint-disable-line
import pascalcase from 'pascalcase';
import angular from 'angular';
import uiRouter from 'angular-ui-router';

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

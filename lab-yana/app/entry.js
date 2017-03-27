'use strict';

// const HTMLPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const camelcase = require('camelcase');
const pascalcase = require('pascalcase');
const angular = require('angular');
const uiRouter = require('angular-ui-router');

const routesApp = angular.module('routesApp', [uiRouter]);

let context = require.context('./config/', true, /\.js$/);
context.keys().forEach(key => routesApp.config(context(key)));

context = require.context('./view/', true, /\.js$/);
context.keys().forEach(key => {
  let name = pascalcase(path.basename(key, '.js'));
  routesApp.controller(name, context(key));
});

// module.exports = {
//   entry: `${__dirname}/app/entry.js`,
//   output: {
//     filename: 'bundle.js',
//     path: `${__dirname}/build`
//   },
//   plugins: [
//     new HTMLPlugin({ template: `${__dirname}/app/index.html`} ),
//     new ExtractTextPlugin('bundle.css')
//   ],
//   rules: {
//
//   }
// };

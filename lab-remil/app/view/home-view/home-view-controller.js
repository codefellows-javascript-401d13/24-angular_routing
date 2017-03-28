'use strict';

require('./home-view.scss');

function HomeViewController($log) {
  $log.debug('HomeViewController');

  this.title = 'Home sweet home';
}

module.exports = ['$log', HomeViewController];

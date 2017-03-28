'use strict';

require('./home-view.scss');


function HomeViewController($log) {
  $log.debug('HomeViewController');
}

module.exports = ['$log', HomeViewController];

'use strict';

require('./signup-view.scss');


function SignupViewController($log) {
  $log.debug('SignupViewController');
}

module.exports = ['$log', SignupViewController];

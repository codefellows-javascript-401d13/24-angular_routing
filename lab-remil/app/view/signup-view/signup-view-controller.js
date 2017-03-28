'use strict';

require('./signup-view.scss');


function SignupViewController($log) {
  $log.debug('SignupViewController');

  this.title = 'Sign up for da swag';
}

module.exports = ['$log', SignupViewController];

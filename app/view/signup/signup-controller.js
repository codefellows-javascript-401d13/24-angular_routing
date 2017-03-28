'use strict';

require('./signup.scss');

module.exports = ['$log', SignupContent];

function SignupContent($log) {
  $log.debug('SignupContent');

  this.title = 'Sign up here:';
}

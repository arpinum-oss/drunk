'use strict';

module.exports = function (cluck) {
  return cluck.shell.executeBin('jshint', ['.']);
};

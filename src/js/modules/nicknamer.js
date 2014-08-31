'use strict';

var Module = require('backbone').Marionette.Module;

module.exports = Module.extend({
  startWithParent: false,

  constructor: function(moduleName, app, options) {
    console.log('construct: ', this, moduleName, app, options);
  },

  initialize: function(options, moduleName, app) {
    console.log('initialise: ', this, options, moduleName, app);
  },
  // To have custom start functions they can't be named' start'
  onStart: function(options) {
    console.log('start: ', this, options);
    this.trigger('nicknamer:hello', {
      message: 'Hello'
    });
  },

  onStop: function(options) {
    console.log('stop: ', this, options);
  },
});

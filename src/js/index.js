'use strict';

// Set up the dependencies
var Backbone = require('backbone');
Backbone.$ = jQuery;
require('backbone.marionette');

// Start the application
var App = new Backbone.Marionette.Application();
var Router = require('./router.js');

// When the application starts, do this
App.on('start', function() {
	console.log('App start', this);
});

// Add an initializer to the app when it starts
App.addInitializer(function(options) {
	console.log('Add initializer: ', options, this);
  new Router();
  Backbone.history.start();
});

// Start the application
App.start();
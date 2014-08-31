'use strict';
/* global jQuery */

// Set up the dependencies
var Backbone = require('backbone');
Backbone.$ = jQuery;
require('backbone.marionette');

// Start the application
var App = new Backbone.Marionette.Application();
var Router = require('./router');
var Nicknamer = require('./modules/nicknamer');

var nicknamer = App.module('Nicknamer', Nicknamer);
console.log(nicknamer);

// When the application starts, do this
App.on('start', function() {
  console.log('App start', this);
});

// Example of an event binding to the nicknamer class
nicknamer.on("nicknamer:hello", function(data) {
  $('body').append('<strong>' + data.message + '</strong>')
});

// Add an initializer to the app when it starts
App.addInitializer(function(options) {
  console.log('Add initializer: ', options, this);
  new Router();
  Backbone.history.start();
});

// Start the application
App.start();
nicknamer.onStart();

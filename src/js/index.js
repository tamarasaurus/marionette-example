'use strict';

var Backbone = require('backbone');
Backbone.$ = jQuery;
require('backbone.marionette');

var App = new Backbone.Marionette.Application();

App.on('start', function() {
	console.log('App start', this);
});

App.addInitializer(function(options) {
	console.log('Add initializer: ', options, this);
});

var PersonItemView = require('./views/item/person');
var PersonList = require('./regions/list');


PersonList.show(new PersonItemView());


App.start();
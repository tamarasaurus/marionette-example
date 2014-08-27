'use strict';

var Backbone = require('backbone');
Backbone.$ = jQuery;
require('backbone.marionette');

var AppRouter = require('./router');
var App = new Backbone.Marionette.Application();


App.on('start', function(options) {
    if (Backbone.history) {
        Backbone.history.start();
    }
    console.log(this);
});

App.start();
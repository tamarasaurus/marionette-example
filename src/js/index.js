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

var PersonList = require('./regions/list');
var PeopleView = require('./views/collection/people');
var PeopleCollection = require('./collections/people');
var PersonModel = require('./models/person');


var people = new PeopleCollection([
    new PersonModel({
        name: 'Tamara'
    }),
    new PersonModel({
        name: 'Craig'
    }),
    new PersonModel({
        name: 'Cameron'
    })
]);

var peopleView = new PeopleView({
	collection: people
});

PersonList.show(peopleView);

App.start();
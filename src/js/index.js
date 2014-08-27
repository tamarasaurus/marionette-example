'use strict';

// Set up the dependencies
var Backbone = require('backbone');
Backbone.$ = jQuery;
require('backbone.marionette');

// Start the application
var App = new Backbone.Marionette.Application();

// When the application starts, do this
App.on('start', function() {
	console.log('App start', this);
});

// Add an initializer to the app when it starts
App.addInitializer(function(options) {
	console.log('Add initializer: ', options, this);
});

// PersonList is the page region where the data will be rendered e.g. 'div.main'
var PersonList = require('./regions/list');

// PeopleView is the Marionette CollectionView that groups together the 'Person' ItemViews - it will render each individual ItemView from the collection that it receives
var PeopleView = require('./views/collection/people');

// PeopleCollection is the definition of a collection of people models - it groups together models/person
var PeopleCollection = require('./collections/people');

// PersonModel is the standard model for a person. We create three people and add them to the PeopleCollection
var PersonModel = require('./models/person');

// This is a collection of PersonModels for each person
var peopleCollection = new PeopleCollection([
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

// Here we initialise PeopleView which is a Marionette CollectionView and we pass in the 'people' collection
var peopleView = new PeopleView({
	collection: peopleCollection
});


// @todo Make a controller that is responsible for these models and colections, set the router to render those views

// This will render the CollectionView in the PersonList region that we specified earlier - e.g. div.main
PersonList.show(peopleView);

// Start the application
App.start();
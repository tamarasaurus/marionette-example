'use strict';

var ItemView = require('backbone').Marionette.ItemView;
var template = require('../../templates/person.hbs');

// This defines the model for a person, and sets a handlebar template for that model
module.exports = ItemView.extend({
	template: template
});
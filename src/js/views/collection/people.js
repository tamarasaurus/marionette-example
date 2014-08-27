'use strict';

var CollectionView = require('backbone').Marionette.CollectionView;
var PersonView = require('../item/person');

// This is a CollectionView that renders each childView for the data passed in - in this case each item will be rendered as a person with PersonView
module.exports = CollectionView.extend({
	childView: PersonView
});
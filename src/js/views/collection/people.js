'use strict';

// pass an array of models to the collectionview then render it in the region
var CollectionView = require('backbone').Marionette.CollectionView;
var PersonView = require('../item/person');

module.exports = CollectionView.extend({
  childView: PersonView
});
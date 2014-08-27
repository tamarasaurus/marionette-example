'use strict';

var Collection = require('backbone').Collection;
var Person = require('../models/person');

// This module defines a standards Backbone collection of people, when it's initialised with 'new' it accepts an array of Person instances e.g. new Person({name: 'Tamara'})
module.exports = Collection.extend({
    model: Person
});
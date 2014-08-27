'use strict';

var Collection = require('backbone').Collection;
var Person = require('../models/person');

module.exports = Collection.extend({
    model: Person
});
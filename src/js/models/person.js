'use strict';

var Model = require('backbone').Model;

// This is the model for a person, it has a default value 'age'
module.exports = Model.extend({
    defaults: {
        age: '24'
    }
});
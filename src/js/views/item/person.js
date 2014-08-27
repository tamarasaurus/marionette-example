'use strict';

var ItemView = require('backbone').Marionette.ItemView;
var template = require('../../templates/person.hbs');
var PersonModel = require('../../models/person');

var person = new PersonModel({
    name: 'Tamara'
});

console.log(person);

module.exports = ItemView.extend({
    template: template,
    model: person
});

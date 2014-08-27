'use strict';

var ItemView = require('backbone').Marionette.ItemView;
var template = require('../../templates/person.hbs');

module.exports = ItemView.extend({
    template: template
});

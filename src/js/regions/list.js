'use strict';

var Region = require('backbone').Marionette.Region;


// This module defines a region in the page where content will be rendered - it's a section for a list of people
module.exports = new Region({
	el: '.main'
});
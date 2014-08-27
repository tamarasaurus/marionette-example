'use strict';

var Router = require('backbone').Marionette.AppRouter;
var MainController = require('./controllers/main');
var mainController = new MainController();

module.exports = Router.extend({
  controller: mainController,
  appRoutes: {
    'show': 'showPeople'
  },
  routes: {
    'test': 'test'
  },
  test: function() {
    console.log('testing standard route function');
  }
});


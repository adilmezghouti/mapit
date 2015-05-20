import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('locations', function() {});
  this.resource('profile', function() {});
  this.resource('login', function() {});
  this.resource('flyer', function() {});
});

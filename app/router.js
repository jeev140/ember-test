import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('auth');
  this.route('login');
  this.route('rentals', function() {
    this.route('show', { path: ':rental_id' });
    this.route('addrental');
  });
  this.route('accessdenied');
});

export default Router;

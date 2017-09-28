import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
	actions: {
	  logout() {
	    this.get('session').logout(this.controllerFor('login'));
	  }
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    if (!localStorage.sessionEnable) {
      this.transitionTo('login');
    } else {
      this.transitionTo('index');
    }
  }
});
import Ember from 'ember';

export default Ember.Route.extend({
  activate() {
    const applicationController = this.controllerFor('application');
      applicationController.setProperties({
        userName: null,
        password: null,
        loginFail: false,
        sessionEnable: false
      });
  },
  beforeModel() {
    this.transitionTo('auth');
  }
});





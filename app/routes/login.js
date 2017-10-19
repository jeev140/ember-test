import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  activate() {
    const loginController = this.controllerFor('login');
     loginController.setProperties({
        userName: null,
        password: null,
        loginFail: false,
        sessionEnable: false
      });
  },
  actions: {
    login() {
      const loginController = this.controllerFor('login');
      const applicationController = this.controllerFor('application');
      this.get('session').login(loginController.get('userName'),
        loginController.get('password'), loginController, applicationController);
    }
  }
});





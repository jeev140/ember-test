import Ember from 'ember';
const { isEmpty, $ } = Ember;

export default Ember.Service.extend({
  sessionEnable: false,

  login(username, password, controller, applicationController) {
    if(!username) {
      controller.set('message', 'Enter username');
      return;
    }
    if(!password) {
      controller.set('message', 'Enter password');
      return;   
    }

    $.ajax({
      url: 'api/login',
      type: 'GET',
      data: {
        username,
        password
      }
    }).then(function(response) {
      if(isEmpty(response.data)) {
        controller.set('message', 'Enter valid username or password');
      } else {
        localStorage.sessionEnable = true;
        applicationController.set('isSessionEnable', true);
        controller.transitionToRoute("index");
      }  
    }, function() {
      controller.set('message', 'Enter valid username or password');
    });
  },

  logout(loginController, applicationController) {
    localStorage.removeItem("sessionEnable");
    applicationController.set('isSessionEnable', false);
    loginController.transitionToRoute("login");
  }
});
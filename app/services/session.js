import Ember from 'ember';
const { isEmpty, $ } = Ember;

export default Ember.Service.extend({
  sessionEnable: false,

  login(username, password, controller) {
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
        controller.transitionToRoute("index");
      }  
    }, function() {
      controller.set('message', 'Enter valid username or password');
    });
  },

  logout(controller) {
    localStorage.removeItem("sessionEnable");
    controller.transitionToRoute("login");
  }
});
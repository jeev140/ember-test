import Ember from 'ember';

export default Ember.Controller.extend({
	isSessionEnable: localStorage.getItem('sessionEnable')
});

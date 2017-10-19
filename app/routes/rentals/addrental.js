import Ember from 'ember';

export default Ember.Route.extend({
  activate() {
    const addrentalController = this.controllerFor('rentals.addrental');
    addrentalController.setProperties({
      title: null,
      owner: null,
      city: null,
      propertyType: 'Rentals',
      image: null,
      bedrooms: null,
      description: null
    });
  },
  actions: {
    addRental() {
      const addrentalController = this.controllerFor('rentals.addrental');
      var model = this.store.createRecord('rental', {
        title:addrentalController.title,
        owner: addrentalController.owner,
        city: addrentalController.city,
        propertyType: addrentalController.propertyType,
        image: addrentalController.image,
        bedrooms: addrentalController.bedrooms,
        description: addrentalController.description
    });
      model.save();
      this.transitionTo('rentals');
    }
  }
});


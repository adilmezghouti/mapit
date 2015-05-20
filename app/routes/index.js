import Ember from "ember";

export default Ember.Route.extend({
  setupController: function(controller, model){
    this._super(model, controller);

    Ember.run.schedule('afterRender', this, function() {
      $('#sidebar').show();
    })

    this.store.find('company').then(function(locations){
      model = Ember.Object.create({
        locations: locations.content
      });
      controller.set('model', model);

      navigator.geolocation.getCurrentPosition(function(loc) {
        console.log('coords', loc.coords);
        model.set('latitude', loc.coords.latitude);
        model.set('longitude', loc.coords.longitude);
        controller.set('model', model);
      });
    });
  }
});

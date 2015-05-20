import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(model, controller) {
    this._super(model, controller);

    Ember.run.schedule('afterRender', this, function() {
      Ember.$('#sidebar').hide();
    });

  }
});

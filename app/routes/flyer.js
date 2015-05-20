import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(model, controller) {
    this._super(model, controller);
    this.store.find('flyer', {'user_id':1}).then(function(flyer) {
      console.log('flyer', flyer);
    });

    Ember.run.schedule('afterRender', this, function() {
      $('#flyer').qrcode({
        "width": 100,
        "height": 100,
        "color": "#3a3",
        "text": "http://larsjung.de/qrcode"
      });
    });
  }
});

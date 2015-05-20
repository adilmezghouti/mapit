import Ember from "ember";

export default Ember.Route.extend({
  // setupController: function(controller, model){
  //   this._super(model, controller);
  //
  //   this.store.find('location').then(function(locations){
  //     model = Ember.Object.create({
  //       locations: locations.content,
  //       markers: [
  //         Ember.Object.create({
  //           latitude: 34.039611,
  //           longitude: -4.996419
  //         }),
  //         Ember.Object.create({
  //           latitude: 33.893638,
  //           longitude: -5.558527
  //         })
  //       ]
  //     });
  //     controller.set('model', model);
  //
  //     navigator.geolocation.getCurrentPosition(function(loc) {
  //       console.log('coords', loc.coords);
  //       model.set('latitude', loc.coords.latitude);
  //       model.set('longitude', loc.coords.longitude);
  //       controller.set('model', model);
  //     });
  //
  //
  //
  //   //   console.log('locations', locations.content);
  //   //
  //   //   model = Ember.Object.create({
  //   //     latitude:34.039611,
  //   //     longitude:-4.996419,
  //   //     locations: [],
  //   //     markers: [
  //   //       Ember.Object.create({
  //   //         latitude: 34.039611,
  //   //         longitude: -4.996419
  //   //       }),
  //   //       Ember.Object.create({
  //   //         latitude: 33.893638,
  //   //         longitude: -5.558527
  //   //       })
  //   //     ]
  //   //   });
  //   //
  //
  //   //
  //   });
  // },
  //
  // loadScript: function() {
  //   var script = document.createElement('script');
  //   script.type = 'text/javascript';
  //   script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +
  //       '&signed_in=true&callback=initialize';
  //   document.body.appendChild(script);
  // }

});

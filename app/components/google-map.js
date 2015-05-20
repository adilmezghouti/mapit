import Ember from 'ember';

export default Ember.Component.extend({

  insertMap: function() {
    var container = this.$('.map-canvas')[0];
    var options = {
      center: new window.google.maps.LatLng(
        this.get('latitude'),
        this.get('longitude')
      ),
      zoom: 13
    };

    this.set('map', new window.google.maps.Map(container, options));
    this.set('markerCache', []);
    this.setMarkers();
  }.observes('longitude').on('didInsertElement'),

  setMarkers: function() {
    var map = this.get('map'),
      markers = this.get('markers'),
      markerCache = this.get('markerCache');
    var infowindow = new window.google.maps.InfoWindow({
      content: 'Display some useful information here'
    });

    var directionsDisplay = new window.google.maps.DirectionsRenderer();
    var directionsService = new window.google.maps.DirectionsService();
    var self = this;

    directionsDisplay.setMap(map);

    if (markers) {
      markerCache.forEach(function(marker) {
        marker.setMap(null);
      }); // Remove all existing markers

      markers.forEach(function(marker) {
        var gMapsMarker = new window.google.maps.Marker({
          position: new window.google.maps.LatLng(marker.get('latitude'), marker.get('longitude')),
          map: map,
          title: marker.get('name'),
          animation: window.google.maps.Animation.DROP,
          icon: '/assets/images/drugstore.png'
        });

        window.google.maps.event.addListener(gMapsMarker, 'click', function() {
          // infowindow.open(map, gMapsMarker);
          // new window.google.maps.InfoWindow({
          //   content: marker.get('address') + ' ' + marker.get('city')
          // }).open(map, gMapsMarker);
          var start = new window.google.maps.LatLng(self.get('latitude'), self.get('longitude'));
          var end = new window.google.maps.LatLng(marker.get('latitude'), marker.get('longitude'));
          calcRoute(start,end);
        });

        markerCache.pushObject(gMapsMarker); // Add this marker to our cache

        function calcRoute(start,end) {
          console.log(start,end);
          var request = {
            origin: start,
            destination: end,
            travelMode: window.google.maps.TravelMode.DRIVING
          };
          directionsService.route(request, function(response, status) {
            if (status === window.google.maps.DirectionsStatus.OK) {
              console.log('User has been routed...');
              directionsDisplay.setDirections(response);
            }
          });
        }
      }, this);
    }

    var youAreHereMarker = new window.google.maps.Marker({
      position: new window.google.maps.LatLng(self.get('latitude'), self.get('longitude')),
      map: map,
      title: 'You are here',
      animation: window.google.maps.Animation.DROP
    });

    markerCache.pushObject(youAreHereMarker);
  }
});

import DS from 'ember-data';

export default DS.Model.extend({
  longitude: DS.attr('String'),
  latitude: DS.attr('String'),
  type: DS.attr('String'),
  name: DS.attr('String'),
  address: DS.attr('String'),
  city: DS.attr('String'),
  country: DS.attr('String')
});

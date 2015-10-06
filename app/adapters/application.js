import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://130.211.58.230:3000',
  namespace: 'api'
});

import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('String'),
    address: DS.attr('String'),
    url: DS.attr('String')
});

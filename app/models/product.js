import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  image: DS.attr(),
  description: attr(),
  size: DS.attr(),
  price: DS.attr()
});

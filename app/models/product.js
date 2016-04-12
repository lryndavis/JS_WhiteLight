import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  image: DS.attr(),
  image2: DS.attr(),
  image3: DS.attr(),
  image4: DS.attr(),
  image5: DS.attr(),
  description: DS.attr(),
  size: DS.attr(),
  materials: DS.attr(),
  condition: DS.attr(),
  label: DS.attr(),
  era: DS.attr(),
  measurements: DS.attr(),
  price: DS.attr(),
  category: DS.attr(),
  quantity: DS.attr(),
  date: DS.attr(),
  stock: DS.attr('boolean'),
});

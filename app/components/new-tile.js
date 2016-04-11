import Ember from 'ember';

export default Ember.Component.extend({
  sortDefinition: ['date:asc'],
  sortedProducts: Ember.computed.sort('products', 'sortDefinition'),
});

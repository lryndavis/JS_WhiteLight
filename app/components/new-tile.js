import Ember from 'ember';

export default Ember.Component.extend({
  sortDefinition: ['date:desc'],
  sortedProducts: Ember.computed.sort('products', 'sortDefinition'),
});

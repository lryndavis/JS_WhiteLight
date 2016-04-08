import Ember from 'ember';

export default Ember.Component.extend({
  sortProperties: ['price:desc', 'price:asc'],
  sortedProducts: Ember.computed.sort('products', 'sortProperties'),

  actions: {
    sortBy: function(sortProperties) {
      this.set('sortProperties', [sortProperties]);
    },
  }
});

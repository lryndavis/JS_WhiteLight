import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.Component.extend({
  sortProperties: ['price:desc', 'price:asc', 'date:desc'],
  sortedProducts: Ember.computed.sort('products', 'sortProperties'),
  perPage: 4,

  pagedContent: pagedArray('sortedProducts', {
    pageBinding: 'page',
    perPageBinding: 'perPage'
  }),

  actions: {
    sortBy: function(sortProperties) {
      this.set('sortProperties', [sortProperties]);
    },
  }
});

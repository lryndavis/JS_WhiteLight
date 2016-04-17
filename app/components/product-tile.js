import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

//paginates products, limiting to 4 products per page
//allows products to be sorted by price or date of entry depending on user's choice 
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

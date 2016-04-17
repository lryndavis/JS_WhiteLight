import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

//paginates products, limiting to 4 products per page 
export default Ember.Component.extend({
  sortDefinition: ['date:asc'],
  sortedProducts: Ember.computed.sort('products', 'sortDefinition'),
  perPage: 4,

  pagedContent: pagedArray('sortedProducts', {
    pageBinding: 'page',
    perPageBinding: 'perPage'
  }),
});

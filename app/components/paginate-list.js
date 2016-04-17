import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

//paginates products, limiting to 4 products per page
export default Ember.Component.extend({
  perPage: 4,

  pagedContent: pagedArray('products', {
    pageBinding: 'page',
    perPageBinding: 'perPage'
  }),
});

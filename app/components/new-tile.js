import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.Component.extend({
  sortDefinition: ['date:asc'],
  sortedProducts: Ember.computed.sort('products', 'sortDefinition'),
  perPage: 4,

  pagedContent: pagedArray('sortedProducts', {
    pageBinding: 'page',
    perPageBinding: 'perPage'
  }),
});

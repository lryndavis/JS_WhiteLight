
import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.Component.extend({
  perPage: 6,

  pagedContent: pagedArray('products', {
    pageBinding: 'page',
    perPageBinding: 'perPage'
  }),
});

import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.Object.extend({
  content: model.products,

  // the pagedArray
  pagedContent: pagedArray('content', {perPage: 4
  })
});

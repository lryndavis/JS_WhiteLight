import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.Object.extend({
  // The property that contains all objects
  // In a real app, often set by the route
  content: model.products,

  // the PagedArray
  pagedContent: pagedArray('content', {perPage: 4
  })
});

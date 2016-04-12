import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.query('product', {
      orderBy: 'size',
      equalTo: params.size_id
    });
  },
  actions: {
    sortBy: function(sortProperties) {
      this.set('sortProperties', [sortProperties]);
    }
  }
});

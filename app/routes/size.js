import Ember from 'ember';

//returns products by firebase query, by size
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

import Ember from 'ember';

//returns products by firebase query, by category
export default Ember.Route.extend({
  model: function(params) {
    return this.store.query('product', {
      orderBy: 'category',
      equalTo: params.category_id
    });
  },

  actions: {
    sortBy: function(sortProperties) {
      this.set('sortProperties', [sortProperties]);
    }
  }
});

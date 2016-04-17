import Ember from 'ember';

//returns products by firebase query, by era
export default Ember.Route.extend({
  model: function(params) {
    return this.store.query('product', {
      orderBy: 'era',
      equalTo: params.era_id
    });
  },

  actions: {
    sortBy: function(sortProperties) {
      this.set('sortProperties', [sortProperties]);
    }
  }
});

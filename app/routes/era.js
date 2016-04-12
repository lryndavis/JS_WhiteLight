import Ember from 'ember';

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
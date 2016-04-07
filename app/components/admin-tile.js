import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteProduct(product) {
      if(confirm('Are you sure you want to delete this product?')) {
        this.sendAction('destroyProduct', product);
      }
    }
  }
});

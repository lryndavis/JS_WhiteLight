import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('product');
  },
  
  actions: {
    saveProduct(params) {
      var newProduct = this.store.createRecord('product', params);
      newProduct.save();
    },
    destroyProduct(product) {
      return product.destroyRecord();
    },
    updateProduct(product, params) {
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined) {
          product.set(key, params[key]);
        }
      });
      product.save().catch(function(e) {
        console.log(e.errors);
      });
    }
  }
});

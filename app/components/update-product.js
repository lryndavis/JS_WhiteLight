import Ember from 'ember';

export default Ember.Component.extend({
  updateProductForm: false,
  actions: {
    updateProductForm() {
      this.set('updateProductForm', true);
    },
    updateProduct(product) {
      var params = {
        title: this.get('title'),
        image: this.get('image'),
        description: this.get('description'),
        size: this.get('size'),
        price: this.get('price'),
        category: this.get('category')
      };
      this.set('updateProductForm', false);
      this.sendAction('updateProduct', product, params);
    }
  }
});

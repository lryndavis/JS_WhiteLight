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
        category: this.get('category'),
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
      };
      if (this.get('price')) {
        params.price = parseInt(this.get('price'));
      };
      if (this.get('quantity')) {
        params.quantity = parseInt(this.get('quantity'));
      };
      this.set('updateProductForm', false);
      this.sendAction('updateProduct', product, params);
    }
  }
});

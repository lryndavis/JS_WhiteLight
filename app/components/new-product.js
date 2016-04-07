import Ember from 'ember';

export default Ember.Component.extend({
  addNewProduct: false,
  actions: {
    productFormShow() {
      this.set('addNewProduct', true);
    },
    saveProduct() {
      var params = {
        title: this.get('title'),
        image: this.get('image'),
        description: this.get('description'),
        size: this.get('size'),
        price: parseInt(this.get('price')),
        category: this.get('category'),
        quantity: parseInt(this.get('quantity'))
      };
      this.set('addNewProduct', false);
      this.sendAction('saveProduct', params);
    }
  }
});

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
        category: this.get('category'),
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
      };
      if (this.get('price')) {
        params.price = parseInt(this.get('price'));
      };
      if (this.get('quantity')) {
        params.quantity = parseInt(this.get('quantity'));
      };
      this.set('addNewProduct', false);
      this.sendAction('saveProduct', params);
    }
  }
});

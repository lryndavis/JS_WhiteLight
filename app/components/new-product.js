import Ember from 'ember';

//generates a new product from the admin portal
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
        image2: this.get('image2'),
        image3: this.get('image3'),
        image4: this.get('image4'),
        image5: this.get('image5'),
        description: this.get('description'),
        size: this.get('size'),
        materials: this.get('materials'),
        condition: this.get('condition'),
        label: this.get('label'),
        era: this.get('era'),
        measurements: this.get('measurements'),
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

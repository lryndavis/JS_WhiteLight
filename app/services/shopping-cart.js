import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  grandTotal: Ember.computed('items.[]', function(){
    var total = 0;
    var cartItems = this.get('items');
    for (var i = 0; i < cartItems.length; i++) {
      total += cartItems[i].get('price');
    }
    return total;
  }),
  itemsInCart: Ember.computed('items.[]', function(){
    var cartItems = this.get('items');
    var totalItems = cartItems.length;
    return totalItems;
  }),
  add(item) {
    this.get('items').pushObject(item);
  },
  remove(item) {
    this.get('items').removeObject(item);
  },
  empty() {
    this.get('items').setObjects([]);
  }
});

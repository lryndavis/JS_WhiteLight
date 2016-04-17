import Ember from 'ember';

//shopping cart service, generates grand total
export default Ember.Service.extend({
  items: [],
  grandTotal: Ember.computed('items.[]', function(){
    var total = 0;
    var sign = '$';
    var cartItems = this.get('items');
    for (var i = 0; i < cartItems.length; i++) {
      total += cartItems[i].get('price');
    }
    return `${sign}${(Math.floor(total / 100))}.${(total % 100)}`;
  }),
  //will not allow an item to be added to the cart twice (since there is only one of each product)
  add(item) {
    if (this.get("items").indexOf(item) < 0) {
      this.get('items').pushObject(item);
    } else {
      return "error";
    }
  },
  remove(item) {
    this.get('items').removeObject(item);
  },
  empty() {
    this.get('items').setObjects([]);
  }
});

import Ember from 'ember';

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

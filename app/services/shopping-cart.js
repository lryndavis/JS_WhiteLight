import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  grandTotal: Ember.computed('items.[]', function(){
    var total = 0;
    var items = this.get('items');
    for (var i = 0; i < items.length; i++) {
      total += items[i].get('price');
    }
    return total;
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

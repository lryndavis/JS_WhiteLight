import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  add(item) {
    this.get('items').pushObject(item);
  },
  remove(item) {
    this.get('items').removeObject(item);
  },
  empty() {
    this.get('items').setObjects([]);
  },
  totalCost() {
  this.get('items').reduce(function(total, item){
    return total + item.price;
  }, 0);
}
});

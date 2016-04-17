import Ember from 'ember';

//actions for removing and emptying shopping cart 
export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    removeFromCart(item) {
      this.get('shoppingCart').remove(item);
    },
    emptyCart(item) {
      this.get('shoppingCart').empty();
    }
  }
});

import Ember from 'ember';

//user auth
export default Ember.Controller.extend({
  actions: {
    signOut() {
      this.get('session').close();
      this.transitionToRoute('/');
    }
  }
});

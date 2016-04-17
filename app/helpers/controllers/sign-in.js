import Ember from 'ember';

//user auth 
export default Ember.Controller.extend({
  actions: {
    signIn(provider) {
      let controller = this;
      this.get('session').open('firebase', {
        provider: provider,
        email: this.get('email') || '',
        password: this.get('password') || '',
      }).then(() => {
        controller.set('email', null);
        controller.set('password', null);
        controller.transitionToRoute('welcome');
      }, (error) => {
        console.log(error);
      });
    }
  }
});

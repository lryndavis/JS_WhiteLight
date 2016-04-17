import Ember from 'ember';

//user auth
export default Ember.Controller.extend({
  firebase: Ember.inject.service(),
  actions: {
    signUp() {
      let controller = this;
      this.get('firebase').createUser({
        email: this.get('email') || '',
        password: this.get('password') || '',
        firstName: this.get('firstName') || '',
        lastName: this.get('lastName') || '',
      }, (error, data) => {
        if (error) {
          console.log(error);
        } else {
          controller.set('email', null);
          controller.set('password', null);
          controller.set('firstName', null);
          controller.set('firstName', null);
          controller.transitionToRoute('sign-in');
        }
      });
    }
  }
});

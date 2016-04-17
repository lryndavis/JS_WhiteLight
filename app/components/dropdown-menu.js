import Ember from 'ember';

//actions for dropdown menu, currently a bit buggy and needs to be fixed so that it will close when clicked outside of menu component
export default Ember.Component.extend({
  dropdownOpen: false,

  actions: {
    toggleDropdown() {
        this.toggleProperty('dropdownOpen');
      }
    },
  });

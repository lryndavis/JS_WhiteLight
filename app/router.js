import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('product', {path: '/product/:product_id'});
  this.route('cart');
  this.route('admin');
  this.route('category', {path: '/category/:category_id'});
  this.route('new');
  this.route('sign-up');
  this.route('sign-in');
  this.authenticatedRoute('welcome');
});

export default Router;

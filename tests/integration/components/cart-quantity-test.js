import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('cart-quantity', 'Integration | Component | cart quantity', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{cart-quantity}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#cart-quantity}}
      template block text
    {{/cart-quantity}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

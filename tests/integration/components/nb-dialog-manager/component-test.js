import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nb-dialog-manager', 'Integration | Component | nb dialog manager', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{nb-dialog-manager}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#nb-dialog-manager}}
      template block text
    {{/nb-dialog-manager}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

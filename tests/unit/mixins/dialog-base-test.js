import Ember from 'ember';
import DialogBaseMixin from 'nullbase-dialog/mixins/dialog-base';
import { module, test } from 'qunit';

module('Unit | Mixin | dialog base');

// Replace this with your real tests.
test('it works', function(assert) {
  let DialogBaseObject = Ember.Object.extend(DialogBaseMixin);
  let subject = DialogBaseObject.create();
  assert.ok(subject);
});

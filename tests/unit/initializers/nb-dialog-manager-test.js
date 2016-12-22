import Ember from 'ember';
import NbDialogManagerInitializer from 'dummy/initializers/nb-dialog-manager';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | nb dialog manager', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  NbDialogManagerInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});

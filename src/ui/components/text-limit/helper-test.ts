import textLimit from './helper';

const { module, test } = QUnit;

module('Helper: text-limit', function(hooks) {
  test('it computes', function(assert) {
    assert.equal(textLimit([]), undefined);
  });
});

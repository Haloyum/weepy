import assert from 'assert';
import { camelize, capitalize } from '../../lib/utils/string';

describe('Utils | String | camelize @unit', function() {
  it('camelizes string with valid input', function() {
    const text = 'abc_def_ghi';
    assert.equal(camelize(text), 'abcDefGhi');
  });

  it('camelizes string with continues underscore', function() {
    const text = 'abc___def';
    assert.equal(camelize(text), 'abcDef');
  });

  it('handles empty string', function() {
    const text = '';
    assert.equal(camelize(text), '');
  });
});

describe('Utils | String | capitalize @unit', function() {
  it('capitalizes string with valid input', function() {
    const text = 'abc';
    assert.equal(capitalize(text), 'Abc');
  });

  it('handles empty string', function() {
    const text = '';
    assert.equal(capitalize(text), '');
  });

  it('handles null string', function() {
    const text = null;
    assert.equal(capitalize(text), null);
  });
});

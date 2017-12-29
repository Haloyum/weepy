import assert from 'assert';
import Enum from '../../lib/utils/enum';

describe('Utils | Enum @unit', function() {
  it('converts an array into Enum object', function() {
    const obj = new Enum(['a', 'b', 'c']);
    assert.deepEqual(obj, { a: 'a', b: 'b', c: 'c' });
  });

  it('converts an object into Enum object', function() {
    const obj = new Enum({ a: 'abc', b: 'def', c: 'ghi' });
    assert.deepEqual(obj, { a: 'abc', b: 'def', c: 'ghi' });
  });

  it('cannot change Enum object property', function() {
    const obj = new Enum(['a', 'b']);
    assert.throws(() => {
      obj.a = '123';
    });
  });
});

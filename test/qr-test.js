import assert from 'assert';
import {
  IdQrCode,
  StringQrCode,
  TempIdQrCode,
  TempStringQrCode
} from '../lib/qr';

describe('Qr | TempStringQRCode @unit', function() {
  lazy('sceneString', function() {
    return 'test-scene-string';
  });

  context('when parameters are valid', function() {
    lazy('expireSeconds', function() {
      return 1000;
    });

    it('parses into correct json format', function() {
      const qr = new TempStringQrCode(this.sceneString, this.expireSeconds);

      assert.deepEqual(qr.toJSON(), {
        action_name: 'QR_STR_SCENE',
        expire_seconds: 1000,
        action_info: {
          scene: {
            scene_str: this.sceneString
          }
        }
      });
    });
  });

  context('with invalid expire seconds', function() {
    lazy('expireSeconds', function() {
      return 'invalid-expire-seconds';
    });

    it('raises assertion error when creating object', function() {
      assert.throws(() => {
        const qr = new TempStringQrCode(this.sceneString, this.expireSeconds);
        qr.toSomething();
      });
    });
  });
});

describe('Qr | TempIdQrCode @unit', function() {
  context('with valid parameters', function() {
    lazy('sceneId', function() {
      return 1234;
    });

    lazy('expireSeconds', function() {
      return 1000;
    });

    it('parses into correct json format', function() {
      const qr = new TempIdQrCode(this.sceneId, this.expireSeconds);

      assert.deepEqual(qr.toJSON(), {
        action_name: 'QR_SCENE',
        expire_seconds: 1000,
        action_info: {
          scene: {
            scene_id: this.sceneId
          }
        }
      })
    });
  });

  context('when scene id is valid', function() {
    lazy('sceneId', function() {
      return 'invalid-scene-id';
    });

    lazy('expireSeconds', function() {
      return 1000;
    });

    it('raises assertion error when creating object', function() {
      assert.throws(() => {
        const qr = new TempIdQrCode(this.sceneId, this.expireSeconds);
        qr.doSomething();
      });
    });
  });

  context('when expire seconds is valid', function() {
    lazy('sceneId', function() {
      return 1234;
    });

    lazy('expireSeconds', function() {
      return 'invalid-expire-seconds';
    });

    it('raises assertion error when creating object', function() {
      assert.throws(() => {
        const qr = new TempIdQrCode(this.sceneId, this.expireSeconds);
        qr.doSomething();
      });
    });
  });
});

describe('Qr | StringQrCode @unit', function() {
  lazy('sceneString', function() {
    return 'test-scene-string';
  });

  it('parses into correct json format', function() {
    const qr = new StringQrCode(this.sceneString);

    assert.deepEqual(qr.toJSON(), {
      action_name: 'QR_LIMIT_STR_SCENE',
      action_info: {
        scene: {
          scene_str: this.sceneString
        }
      }
    });
  });

  context('when scene string is invalid', function() {
    lazy('sceneString', function() {
      return null;
    });

    it('raises assertion error when creating object', function() {
      assert.throws(() => {
        const qr = new TempIdQrCode(this.sceneId, this.expireSeconds);
        qr.doSomething();
      });
    });
  });
});

describe('Qr | IdQrCode @unit', function() {
  lazy('sceneId', function() {
    return 1234;
  });

  it('parses into correct json format', function() {
    const qr = new IdQrCode(this.sceneId);

    assert.deepEqual(qr.toJSON(), {
      action_name: 'QR_LIMIT_SCENE',
      action_info: {
        scene: {
          scene_id: this.sceneId
        }
      }
    });
  });

  context('when scene id is invalid (null)', function() {
    lazy('sceneId', function() {
      return null;
    });

    it('raises assertion error when creating object', function() {
      assert.throws(() => {
        const qr = new TempIdQrCode(this.sceneId, this.expireSeconds);
        qr.doSomething();
      });
    });
  });

  context('when scene id is invalid (non-number)', function() {
    lazy('sceneId', function() {
      return 'invalid-scene-id';
    });

    it('raises assertion error when creating object', function() {
      assert.throws(() => {
        const qr = new TempIdQrCode(this.sceneId, this.expireSeconds);
        qr.doSomething();
      });
    });
  });
});

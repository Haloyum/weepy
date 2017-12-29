import assert from 'assert';
import Enum from './utils/enum';

export const QrType = new Enum({
  TEMP_STRING: 'QR_STR_SCENE',
  TEMP_ID: 'QR_SCENE',
  STRING: 'QR_LIMIT_STR_SCENE',
  ID: 'QR_LIMIT_SCENE'
});

export class TempStringQrCode {
  constructor(sceneString, expireSeconds) {
    assert(sceneString, 'scene string required');
    assert(expireSeconds, 'expire seconds required');
    assert(typeof expireSeconds === 'number', 'expire seconds must be number');

    this.sceneString = sceneString;
    this.expireSeconds = expireSeconds;
  }

  toJSON() {
    return {
      action_name: QrType.TEMP_STRING,
      expire_seconds: this.expireSeconds,
      action_info: {
        scene: {
          scene_str: this.sceneString
        }
      }
    };
  }
}

export class TempIdQrCode {
  constructor(sceneId, expireSeconds) {
    assert(sceneId, 'scene id required');
    assert(expireSeconds, 'expire seconds required');
    assert(typeof sceneId === 'number', 'scene id must be a number');
    assert(typeof expireSeconds === 'number', 'expire seconds must be number');

    this.sceneId = sceneId;
    this.expireSeconds = expireSeconds;
  }

  toJSON() {
    return {
      action_name: QrType.TEMP_ID,
      expire_seconds: this.expireSeconds,
      action_info: {
        scene: {
          scene_id: this.sceneId
        }
      }
    };
  }
}

export class StringQrCode {
  constructor(sceneString) {
    assert(sceneString, 'scene string required');

    this.sceneString = sceneString;
  }

  toJSON() {
    return {
      action_name: QrType.STRING,
      action_info: {
        scene: {
          scene_str: this.sceneString
        }
      }
    };
  }
}

export class IdQrCode {
  constructor(sceneId) {
    assert(sceneId, 'scene id required');
    assert(typeof sceneId === 'number', 'scene id must be a number');

    this.sceneId = sceneId;
  }

  toJSON() {
    return {
      action_name: QrType.ID,
      action_info: {
        scene: {
          scene_id: this.sceneId
        }
      }
    };
  }
}

export default {
  TempIdQrCode,
  TempStringQrCode,
  StringQrCode,
  IdQrCode
};

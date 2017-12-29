import assert from 'assert';
import Enum from './utils/enum';

// Doc: https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141013

export const ButtonTypes = new Enum({
  CLICK: 'click',
  VIEW: 'view',
  VIEW_LIMITED: 'view_limited',
  SCANCODE_PUSH: 'scancode_push',
  SCANCODE_WAITMESSAGE: 'scancode_waitmsg',
  PHOTO: 'pic_sysphoto',
  ALBUM: 'pic_photo_or_album',
  WECHAT_PHOTO: 'pic_weixin',
  LOCATION: 'location_select',
  MEDIA: 'media_id',
  MINI_PROGRAM: 'miniprogram'
});

export class ClickButton {
  static parse(data) {
    const { name, key } = data;
    return new ClickButton(name, key);
  }

  constructor(name, key) {
    assert(name, 'Click button must contain a valid name');
    assert(key, 'Click button must contain a valid key');

    this.name = name;
    this.key = key;
  }

  toJSON() {
    return {
      type: ButtonTypes.CLICK,
      name: this.name,
      key: this.key
    };
  }
}

export class ViewButton {
  static parse(data) {
    const { name, url } = data;
    return new ViewButton(name, url);
  }

  constructor(name, url) {
    assert(name, 'View button must contain a valid name');
    assert(url, 'View button must contains a valid url');

    this.name = name;
    this.url = url;
  }

  toJSON() {
    return {
      type: ButtonTypes.VIEW,
      name: this.name,
      url: this.url
    };
  }
}

export class ScanCodePushButton {
  static parse(data) {
    const { name, key } = data;
    return new ScanCodePushButton(name, key);
  }

  constructor(name, key) {
    assert(name, 'Scan code push button must contain a valid name');
    assert(key, 'Scan code push button must contain a key');

    this.name = name;
    this.key = key;
  }

  toJSON() {
    return {
      type: ButtonTypes.SCANCODE_PUSH,
      name: this.name,
      key: this.key
    };
  }
}

export class ScanCodeWaitMessageButton {
  static parse(data) {
    const { name, key } = data;
    return new ScanCodeWaitMessageButton(name, key);
  }

  constructor(name, key) {
    assert(name, 'Scan code wait message button must contain a valid name');
    assert(key, 'Scan code wait message button must contain a key');

    this.name = name;
    this.key = key;
  }

  toJSON() {
    return {
      type: ButtonTypes.SCANCODE_WAITMESSAGE,
      name: this.name,
      key: this.key
    };
  }
}

export class PhotoButton {
  static parse(data) {
    const { name, key } = data;
    return new PhotoButton(name, key);
  }

  constructor(name, key) {
    assert(name, 'Photo button must contain a valid name');
    assert(key, 'Photo button must contain a key');

    this.name = name;
    this.key = key;
  }

  toJSON() {
    return {
      type: ButtonTypes.PHOTO,
      name: this.name,
      key: this.key
    };
  }
}

export class AlbumButton {
  static parse(data) {
    const { name, key } = data;
    return new AlbumButton(name, key);
  }

  constructor(name, key) {
    assert(name, 'Album button must contain a valid name');
    assert(key, 'Album button must contain a key');

    this.name = name;
    this.key = key;
  }

  toJSON() {
    return {
      type: ButtonTypes.ALBUM,
      name: this.name,
      key: this.key
    };
  }
}

export class WeChatPhotoButton {
  static parse(data) {
    const { name, key } = data;
    return new WeChatPhotoButton(name, key);
  }

  constructor(name, key) {
    assert(name, 'WeChat photo button must contain a valid name');
    assert(key, 'WeChat photo button must contain a key');

    this.name = name;
    this.key = key;
  }

  toJSON() {
    return {
      type: ButtonTypes.WECHAT_PHOTO,
      name: this.name,
      key: this.key
    };
  }
}

export class LocationButton {
  static parse(data) {
    const { name, key } = data;
    return new LocationButton(name, key);
  }

  constructor(name, key) {
    assert(name, 'Location button must contain a valid name');
    assert(key, 'Location button must contain a key');

    this.name = name;
    this.key = key;
  }

  toJSON() {
    return {
      type: ButtonTypes.LOCATION,
      name: this.name,
      key: this.key
    };
  }
}

export class MediaButton {
  static parse(data) {
    const { name, media_id } = data;
    return new MediaButton(name, media_id);
  }

  constructor(name, mediaId) {
    assert(name, 'Media button must contain a valid name');
    assert(mediaId, 'Media button must contain a media id');

    this.name = name;
    this.mediaId = mediaId;
  }

  toJSON() {
    return {
      type: ButtonTypes.MEDIA,
      name: this.name,
      media_id: this.mediaId
    };
  }
}

export class ViewLimitedButton {
  static parse(data) {
    const { name, media_id } = data;
    return new ViewLimitedButton(name, media_id);
  }

  constructor(name, mediaId) {
    assert(name, 'View limited button must contain a valid name');
    assert(mediaId, 'View limited button must contain a media id');

    this.name = name;
    this.mediaId = mediaId;
  }

  toJSON() {
    return {
      type: ButtonTypes.VIEW_LIMITED,
      name: this.name,
      media_id: this.mediaId
    };
  }
}

export class MiniProgramButton {
  static parse(data) {
    const {
      name,
      url,
      appid,
      pagepath
    } = data;
    return new MiniProgramButton(name, url, appid, pagepath);
  }

  constructor(name, url, appId, pagePath) {
    assert(name, 'Mini program button must contain a valid name');
    assert(appId, 'Mini program button must contain an appId');
    assert(pagePath, 'Mini program button must contain a page path');

    this.name = name;
    this.appId = appId;
    this.url = url;
    this.pagePath = pagePath;
  }

  toJSON() {
    return {
      type: ButtonTypes.MINI_PROGRAM,
      name: this.name,
      url: this.url,
      appid: this.appId,
      pagepath: this.pagePath
    };
  }
}

export class SubMenu {
  constructor(name, items = []) {
    assert(name, 'Sub Menu must contain a valid name');
    this.name = name;
    this.items = items;
  }

  addItem(item) {
    this.items.push(item);
  }

  toJSON() {
    return {
      name: this.name,
      sub_button: this.items.map(item => item.toJSON())
    };
  }
}

export class Menu {
  static createButton(btn) {
    switch (btn.type) {
      case ButtonTypes.CLICK: return ClickButton.parse(btn);
      case ButtonTypes.VIEW: return ViewButton.parse(btn);
      case ButtonTypes.VIEW_LIMITED: return ViewLimitedButton.parse(btn);
      case ButtonTypes.SCANCODE_PUSH: return ScanCodePushButton.parse(btn);
      case ButtonTypes.SCANCODE_WAITMESSAGE: return ScanCodeWaitMessageButton.parse(btn);
      case ButtonTypes.PHOTO: return PhotoButton.parse(btn);
      case ButtonTypes.ALBUM: return AlbumButton.parse(btn);
      case ButtonTypes.WECHAT_PHOTO: return WeChatPhotoButton.parse(btn);
      case ButtonTypes.LOCATION: return LocationButton.parse(btn);
      case ButtonTypes.MEDIA: return MediaButton.parse(btn);
      case ButtonTypes.MINI_PROGRAM: return MiniProgramButton.parse(btn);
      default: break;
    }
    return null;
  }

  static parse(data) {
    const { button } = data;
    const menu = new Menu();

    button.forEach((btn) => {
      if (btn.type) {
        menu.addItem(Menu.createButton(btn));
      } else {
        const { name, sub_button } = btn;
        const subMenu = new SubMenu(name);

        sub_button.forEach((subBtn) => {
          subMenu.addItem(Menu.createButton(subBtn));
        });

        menu.addItem(subMenu);
      }
    });

    return menu;
  }

  constructor(items = []) {
    this.items = items;
  }

  addItem(item) {
    this.items.push(item);
  }

  toJSON() {
    return {
      button: this.items.map(item => item.toJSON())
    };
  }
}

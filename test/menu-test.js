import assert from 'assert';
import {
  ButtonTypes,
  ClickButton,
  ViewButton,
  ScanCodePushButton,
  ScanCodeWaitMessageButton,
  PhotoButton,
  AlbumButton,
  WeChatPhotoButton,
  LocationButton,
  MediaButton,
  ViewLimitedButton,
  MiniProgramButton,
  SubMenu,
  Menu
} from '../lib/menu';

describe('Menu | ClickButton @unit', function() {
  before(function() {
    this.clickButton = new ClickButton('test-name', 'test-key');
  });

  it('creates correct object', function() {
    assert.equal(this.clickButton.name, 'test-name');
    assert.equal(this.clickButton.key, 'test-key');
  });

  it('toJSON works correctly', function() {
    assert.deepEqual(this.clickButton.toJSON(), {
      type: ButtonTypes.CLICK,
      name: 'test-name',
      key: 'test-key'
    });
  });
});

describe('Menu | ViewButton @unit', function() {
  before(function() {
    this.viewButton = new ViewButton('test-name', 'test-url');
  });

  it('creates correct object', function() {
    assert.equal(this.viewButton.name, 'test-name');
    assert.equal(this.viewButton.url, 'test-url');
  });

  it('toJSON works correctly', function() {
    assert.deepEqual(this.viewButton.toJSON(), {
      type: ButtonTypes.VIEW,
      name: 'test-name',
      url: 'test-url'
    });
  });
});

describe('Menu | ScanCodePushButton @unit', function() {
  before(function() {
    this.scanCodePushButton = new ScanCodePushButton('test-name', 'test-key');
  });

  it('creats correct object', function() {
    assert.equal(this.scanCodePushButton.name, 'test-name');
    assert.equal(this.scanCodePushButton.key, 'test-key');
  });

  it('toJSON works correctly', function() {
    assert.deepEqual(this.scanCodePushButton.toJSON(), {
      type: ButtonTypes.SCANCODE_PUSH,
      name: 'test-name',
      key: 'test-key'
    });
  });
});

describe('Menu | ScanCodeWaitMessageButton @unit', function() {
  before(function() {
    this.scanCodeWaitMessageButton = new ScanCodeWaitMessageButton('test-name', 'test-key');
  });

  it('creates object correctly', function() {
    assert.equal(this.scanCodeWaitMessageButton.name, 'test-name');
    assert.equal(this.scanCodeWaitMessageButton.key, 'test-key');
  });

  it('toJSON works correctly', function() {
    assert.deepEqual(this.scanCodeWaitMessageButton.toJSON(), {
      type: ButtonTypes.SCANCODE_WAITMESSAGE,
      name: 'test-name',
      key: 'test-key'
    });
  });
});

describe('Menu | PhotoButton @unit', function() {
  before(function() {
    this.photoButton = new PhotoButton('test-name', 'test-key');
  });

  it('creates object correctly', function() {
    assert.equal(this.photoButton.name, 'test-name');
    assert.equal(this.photoButton.key, 'test-key');
  });

  it('toJSON works correctly', function() {
    assert.deepEqual(this.photoButton.toJSON(), {
      type: ButtonTypes.PHOTO,
      name: 'test-name',
      key: 'test-key'
    });
  });
});

describe('Menu | AlbumButton @unit', function() {
  before(function() {
    this.albumButton = new AlbumButton('test-name', 'test-key');
  });

  it('creates the object correctly', function() {
    assert.equal(this.albumButton.name, 'test-name');
    assert.equal(this.albumButton.key, 'test-key');
  });

  it('toJSON works correctly', function() {
    assert.deepEqual(this.albumButton.toJSON(), {
      type: ButtonTypes.ALBUM,
      name: 'test-name',
      key: 'test-key'
    });
  });
});

describe('Menu | WeChatPhotoButton @unit', function() {
  before(function() {
    this.wechatPhotoButton = new WeChatPhotoButton('test-name', 'test-key');
  });

  it('creates the object correctly', function() {
    assert.equal(this.wechatPhotoButton.name, 'test-name');
    assert.equal(this.wechatPhotoButton.key, 'test-key');
  });

  it('toJSON works correctly', function() {
    assert.deepEqual(this.wechatPhotoButton.toJSON(), {
      type: ButtonTypes.WECHAT_PHOTO,
      name: 'test-name',
      key: 'test-key'
    });
  });
});

describe('Menu | LocationButton @unit', function() {
  before(function() {
    this.locationButton = new LocationButton('test-name', 'test-key');
  });

  it('creates the object correctly', function() {
    assert.equal(this.locationButton.name, 'test-name');
    assert.equal(this.locationButton.key, 'test-key');
  });

  it('toJSON works correctly', function() {
    assert.deepEqual(this.locationButton.toJSON(), {
      type: ButtonTypes.LOCATION,
      name: 'test-name',
      key: 'test-key'
    });
  });
});

describe('Menu | MediaButton @unit', function() {
  before(function() {
    this.mediaButton = new MediaButton('test-name', 'test-media-id');
  });

  it('creates the object correctly', function() {
    assert.equal(this.mediaButton.name, 'test-name');
    assert.equal(this.mediaButton.mediaId, 'test-media-id');
  });

  it('toJSON works correctly', function() {
    assert.deepEqual(this.mediaButton.toJSON(), {
      type: ButtonTypes.MEDIA,
      name: 'test-name',
      media_id: 'test-media-id'
    });
  });
});

describe('Menu | ViewLimitedButton @unit', function() {
  before(function() {
    this.viewLimitedButton = new ViewLimitedButton('test-name', 'test-media-id');
  });

  it('creates the object correctly', function() {
    assert.equal(this.viewLimitedButton.name, 'test-name');
    assert.equal(this.viewLimitedButton.mediaId, 'test-media-id');
  });

  it('toJSON works correctly', function() {
    assert.deepEqual(this.viewLimitedButton.toJSON(), {
      type: ButtonTypes.VIEW_LIMITED,
      name: 'test-name',
      media_id: 'test-media-id'
    });
  });
});

describe('Menu | MiniProgramButton @unit', function() {
  before(function() {
    this.miniProgramButton = new MiniProgramButton('test-name', 'test-url', 'test-app-id', 'test-page-path');
  });

  it('creates the object correctly', function() {
    assert.equal(this.miniProgramButton.name, 'test-name');
    assert.equal(this.miniProgramButton.url, 'test-url');
    assert.equal(this.miniProgramButton.appId, 'test-app-id');
    assert.equal(this.miniProgramButton.pagePath, 'test-page-path');
  });

  it('toJSON works correctly', function() {
    assert.deepEqual(this.miniProgramButton.toJSON(), {
      type: ButtonTypes.MINI_PROGRAM,
      name: 'test-name',
      url: 'test-url',
      appid: 'test-app-id',
      pagepath: 'test-page-path'
    });
  });
});

describe('Menu | SubMenu @unit', function() {
  before(function() {
    this.clickButton = new ClickButton('test-name-0', 'test-key-0');
    this.viewButton = new ViewButton('test-name-1', 'test-url-1');
    this.subMenu = new SubMenu('test-submenu');
    this.subMenu.addItem(this.clickButton);
    this.subMenu.addItem(this.viewButton);
  });

  it('adds item into the list', function() {
    assert.equal(this.subMenu.items.length, 2);
  });

  it('toJSON works correctly', function() {
    assert.deepEqual(this.subMenu.toJSON(), {
      name: 'test-submenu',
      sub_button: [
        this.clickButton.toJSON(),
        this.viewButton.toJSON()
      ]
    });
  });
});

describe('Menu | Menu @unit', function() {
  before(function() {
    this.clickButton = new ClickButton('test-name-0', 'test-key-0');
    this.viewButton = new ViewButton('test-name-1', 'test-url-1');
    this.subMenu = new SubMenu('test-submenu');
    this.subMenu.addItem(this.viewButton);
    this.menu = new Menu();
    this.menu.addItem(this.clickButton);
    this.menu.addItem(this.subMenu);
  });

  it('toJSON works correctly', function() {
    assert.deepEqual(this.menu.toJSON(), {
      button: [
        this.clickButton.toJSON(),
        this.subMenu.toJSON()
      ]
    });
  });
});

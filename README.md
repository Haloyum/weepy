# Project Title

WeChat Official Account Admin Node Library

## Getting Started

### Notice: we basically follow all fields name passing from WeChat Official Account endpoints but we do `Camelize` all field names to make them consistent with javascript syntax.

### Obtaining authentication token

```
const { Auth } = require('weepy');

const appId = 'your-app-id';
const appSecret = 'your-app-secret';

const auth = new Auth(appId, appSecret);

auth.getToken()
  .then(response => {
    const { accessToken, expiresIn } = response;

    // use accessToken and expiresIn as you wish
  });
```

### Creating Api Object

```
const { Api } = require('weepy');

const accessToken = 'your-access-token';

const api = new Api(accessToken);

api.getMaterialCount()
  .then()
  ...
```

### Creating Menu

```
const { Menu } = require('weepy');

const menu = new Menu.Menu();

const sub1 = new Menu.SubMenu('sub-menu-1');

const sub1Item = new Menu.ViewButton('vb-1', 'https://vb-1.com');

sub1.addItem(sub1Item);

const sub2 = new Menu.ClickButton('cb-1', 'click-button-key');

menu.addItem(sub1);
menu.addItem(sub2);

const api = new Api('your-access-token');

api.createMenu(menu)
  .then(...)

```

### More documentation on the way!!!

## How to start development

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Node version >= 8.0.0


### Installing

Installing all dependencies

```
npm install
```


## Running the tests

Run the entire test suite

```
npm run test-all
```

Run single test file

```
npm run test file-path
```

## Build the library

```
npm run build
```

Built library will be available in `lib` folder

## Authors

* **Chicheng Ren** - *Initial work* - [Haloyum](https://github.com/Haloyum)

See also the list of [contributors](https://github.com/Haloyum/weepy/contributors) who participated in this project.

## License

This project is licensed under the MIT License


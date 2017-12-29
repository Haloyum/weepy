import Promise from 'bluebird';
import assert from 'assert';
import { ajaxGet } from './utils/ajax';

const GRANT_TYPE = 'client_credential';
const TOKEN_AUTH_URL = 'https://api.weixin.qq.com/cgi-bin/token';

class Auth {
  /**
   * Creates an instance of Auth.
   * @param {any} appId
   * @param {any} appSecret
   * @memberof Auth
   */
  constructor(appId, appSecret) {
    assert(appId, 'App Id required');
    assert(appSecret, 'App Secret required');

    this.appId = appId;
    this.appSecret = appSecret;
  }

  /**
   * getToken - fetch the token given existed 'appId' and 'appSecret'
   * @returns [Object] - contains 'accessToken' and 'expiresIn'
   * @throws [Object] - contains 'errCode' and 'errMsg'
   * @memberof Auth
   */
  getToken() {
    const params = {
      grant_type: GRANT_TYPE,
      appid: this.appId,
      secret: this.appSecret
    };

    return ajaxGet(TOKEN_AUTH_URL, { params })
      .then((res) => {
        const { body } = res;

        if (body && body.errcode) {
          return Promise.reject(body);
        }

        return Promise.resolve(body);
      });
  }
}

export default Auth;

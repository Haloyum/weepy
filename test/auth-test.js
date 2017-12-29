import assert from 'assert';
import Auth from '../lib/auth';
import CREDENTIALS from './fixtures/auth';
import { setupApi } from './support/server';

describe('Auth @unit', function() {
  before(function() {
    this.server = setupApi();
    this.auth = new Auth(CREDENTIALS.appID, CREDENTIALS.appSecret);
  });

  it('create auth object', function() {
    assert.equal(this.auth.appId, CREDENTIALS.appID);
    assert.equal(this.auth.appSecret, CREDENTIALS.appSecret);
  });

  it('getToken sends correct request', function() {
    // TODO:
  });
});

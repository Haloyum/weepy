import sinon from 'sinon';

export function setupApi() {
  return sinon.fakeServer.create();
}

export function getApiRequests(server, url, method) {

}

export function getLastApiRequest(server, url, method) {

}

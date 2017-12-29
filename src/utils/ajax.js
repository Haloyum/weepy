import request from 'superagent';
import debug from 'debug';
import { camelize } from './string';

const getLogger = debug('weepy:utils:ajax:ajaxGet');

function parseResponse(response) {
  const parsed = {};

  Object.keys(response).forEach((key) => {
    parsed[camelize(key)] = response[key];
  });

  return parsed;
}

export function ajaxGet(url, { params } = {}) {
  const queryParams = params ? params : {};

  getLogger(`url: ${url}\nparams: ${JSON.stringify(queryParams)}`);

  return request.get(url)
    .query(queryParams)
    .then((res) => {
      getLogger(`response: ${res.text}`);

      try {
        // make best effort to parse the data based on text content
        return parseResponse(JSON.parse(res.text));
      } catch (error) {
        return res.text;
      }
    });
}

const postLogger = debug('weepy:utils:ajax:ajaxPost');

export function ajaxPost(url, {
  data,
  params,
  files,
  fields
} = {}) {
  const queryParms = params ? params : {};

  postLogger(`url: ${url}\nparams: ${JSON.stringify(queryParms)}`);

  let promise = request.post(url).query(queryParms);

  if (files || fields) {
    const filesArray = files || [];

    filesArray.forEach((f, i) => {
      const { name, file, options } = f;
      postLogger(`file ${i}: ${name}-${file}-${JSON.stringify(options)}`);
      promise = promise.attach(name, file, options);
    });

    if (fields && fields.length) {
      const fieldsArray = fields || [];
      fieldsArray.forEach((f, i) => {
        const { name, value } = f;
        postLogger(`field ${i}: ${name}-${value}`);
        promise = promise.field(name, value);
      });
    } else {
      const fieldsObj = fields ? fields : {};
      postLogger(`fields: ${JSON.stringify(fieldsObj)}`);
      promise = promise.field(fieldsObj);
    }
  } else {
    const payloadData = data ? data : {};
    postLogger(`data: ${JSON.stringify(payloadData)}`);
    promise = promise.send(payloadData);
  }

  return promise
    .then((res) => {
      postLogger(`response: ${res.text}`);

      try {
        // make best effort to parse the data based on text content
        return parseResponse(JSON.parse(res.text));
      } catch (error) {
        return res.text;
      }
    });
}

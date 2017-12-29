import Promise from 'bluebird';
import assert from 'assert';
import { ajaxGet, ajaxPost } from './utils/ajax';
import {
  MAX_MATERIAL_COUNT,
  MIN_MATERIAL_COUNT,
  MIN_MATERIAL_OFFSET
} from './material';

const API_BASE = 'https://api.weixin.qq.com/cgi-bin';
const MP_BASE = 'https://mp.weixin.qq.com/cgi-bin';
const QR_CREATE_URL = `${API_BASE}/qrcode/create`;
const CREATE_MENU_URL = `${API_BASE}/menu/create`;
const GET_MENU_URL = `${API_BASE}/menu/get`;
const DELETE_MENU_URL = `${API_BASE}/menu/delete`;
const SHOW_QR_URL = `${MP_BASE}/showqrcode`;
// Material
const ADD_MATERIAL_URL = `${API_BASE}/material/add_material`;
const DEL_MATERIAL_URL = `${API_BASE}/material/del_material`;
const GET_MATERIAL_COUNT_URL = `${API_BASE}/material/get_materialcount`;
const BATCH_GET_MATERIAL_URL = `${API_BASE}/material/batchget_material`;

class Api {
  constructor(accessToken) {
    this.accessToken = accessToken;
  }

  handleResponse(response) {
    if (response && response.errmsg !== 'ok' && response.errcode) {
      return Promise.reject(response);
    }

    return Promise.resolve(response);
  }

  createQrCode(qr) {
    assert(qr, 'Qr Code object required');

    const data = qr.toJSON();
    const params = { access_token: this.accessToken };

    return ajaxPost(QR_CREATE_URL, { data, params })
      .then(response => this.handleResponse(response));
  }

  showQrCode(ticket) {
    assert(ticket, 'Ticket required');

    const params = { ticket };
    return ajaxGet(SHOW_QR_URL, { params });
  }

  // *: menu api doesn't support customized menu yet

  createMenu(menu) {
    assert(menu, 'Menu required');

    const params = { access_token: this.accessToken };

    return ajaxPost(CREATE_MENU_URL, { data: menu.toJSON(), params })
      .then(response => this.handleResponse(response));
  }

  getMenu() {
    const params = { access_token: this.accessToken };

    // Official document is wrong, data structure should be: { menu: { button: ... } }
    return ajaxGet(GET_MENU_URL, { params })
      .then(response => this.handleResponse(response));
  }

  deleteMenu() {
    const params = { access_token: this.accessToken };

    return ajaxGet(DELETE_MENU_URL, { params })
      .then(response => this.handleResponse(response));
  }

  addMaterial(material) {
    const params = {
      access_token: this.accessToken,
      type: material.type
    };
    const fields = [
      {
        name: 'title',
        value: material.title
      },
      {
        name: 'introduction',
        value: material.introduction
      }
    ];
    const files = [
      {
        name: 'media',
        file: material.file
      }
    ];

    return ajaxPost(ADD_MATERIAL_URL, { files, fields, params })
      .then(response => this.handleResponse(response));
  }

  deleteMaterial(mediaId) {
    const params = {
      access_token: this.accessToken
    };

    const data = {
      media_id: mediaId
    };

    return ajaxPost(DEL_MATERIAL_URL, { data, params })
      .then(response => this.handleResponse(response));
  }

  getMaterialCount() {
    const params = {
      access_token: this.accessToken
    };

    return ajaxGet(GET_MATERIAL_COUNT_URL, { params })
      .then(response => this.handleResponse(response));
  }

  batchGetMaterial(type, count, offset) {
    const params = {
      access_token: this.accessToken
    };

    const data = {
      type,
      count: Math.min(Math.max(MIN_MATERIAL_COUNT, count), MAX_MATERIAL_COUNT),
      offset: Math.max(MIN_MATERIAL_OFFSET, offset ? offset : 0)
    };

    return ajaxPost(BATCH_GET_MATERIAL_URL, { data, params })
      .then(response => this.handleResponse(response));
  }
}

export default Api;

import superagent from 'superagent';
import config from 'config/config';

export default class ApiClient {

  requestHeaders = {
    get: {
      Accept: 'application/json',
    },
    post: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    put: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    del: {
      Accept: 'application/json'
    }
  };

  formatUrl = (path) => {
    const adjustedPath = path[0] !== '/' ? '/' + path : path;
    return `${config.apiDomain}${config.apiPath}${adjustedPath}`;
  };

  addApiKeyParam = (params) => {
    return {...params, ...{'appid': config.apiKey}};
  };

  get(path, params) {
    return new Promise((resolve, reject) => {
      return superagent.get(this.formatUrl(path))
        .set(this.requestHeaders.get)
        .query(this.addApiKeyParam(params))
        .then(response => {
          resolve(response.body);
        })
        .catch(error => {
          reject(error.message);
        })
    });
  }

  post(path, params, data) {
    return new Promise((resolve, reject) => {
      return superagent.get(this.formatUrl(path))
        .set(this.requestHeaders.post)
        .query(params)
        .send(data)
        .then(response => {
          resolve(response.body);
        })
        .catch(error => {
          reject(error);
        })
    });
  }

  put(path, params, data) {
    return new Promise((resolve, reject) => {
      return superagent.get(this.formatUrl(path))
        .set(this.requestHeaders.put)
        .query(params)
        .send(data)
        .then(response => {
          resolve(response.body);
        })
        .catch(error => {
          reject(error);
        })
    });
  }

  del(path, params) {
    return new Promise((resolve, reject) => {
      return superagent.get(this.formatUrl(path))
        .set(this.requestHeaders.del)
        .query(params)
        .then(response => {
          resolve(response.body);
        })
        .catch(error => {
          reject(error);
        })
    });
  }
}

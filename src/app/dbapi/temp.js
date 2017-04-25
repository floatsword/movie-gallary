import { ajax } from 'jquery';

const API_KEY = '0df993c66c0c636e29ecbb5344252a4a';
const API_URL = 'http://api.douban.com/v2/movie/';

export const fetch = function(path, {requiresAPIKey = false} = {}, args) {
  return ajax({
    url: path,
    dataType: 'jsonp',
    data: {
      ...args,
      apiKey: requiresAPIKey ? API_KEY : undefined
    }
  })
}

const getKey = function(url, args) {
  return `${url}|${args ? JSON.stringify(args) : ''}`
}
export default function get(
  path,
  options = { cache: false , requiresAPIKey: false},
  payloadHandler = payload => payload,
  responseHandler = response => response
) {
  return async function(payload) {
    let url = null;
    if (typeof path === 'function') {
      url = API_URL + path(payload)
    } else {
      url = API_URL + path
    }

    const args = payloadHandler(payload);
    const storage = options.cache;
    const key = getKey(url, args);

    if (storage.setItem) {
      if (storage.getItem(key)) {
        const cacheObj = JSON.parse(storage.getItem(key));
        return responseHandler(cacheObj);
      }
    }

    const response = await fetch(url, options, args);

    if (storage.setItem) {
      storage.setItem(key, JSON.stringify(response))
    }
    const result = responseHandler(response);
    return result;
  }
}

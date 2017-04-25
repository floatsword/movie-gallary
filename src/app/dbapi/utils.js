import { ajax } from 'jquery';

export const fetch = (path, args = {}) => {
  return ajax({
    url: path,
    dataType: 'jsonp',
    data: {
      ...args
    }
  })
}


function getKey(url, args) {
  return `${url}|${args ? args: ''}`
}
export function get(
  path,
  cache = false,
  payloadHandler = function(payload) {return payload},
  responseHandler = function(response) {return response}
) {
  let url = null;
  if (typeof path === 'function') {
    url = path(payload)
  } else {
    url = path
  }
  const args = payloadHandler(payloda);
  const storage = cache;
  const key = getKey(url, args);
  if (storage.getItem) {
    storage.getItem()
  }
}

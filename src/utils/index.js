const parseJson = (res) => res.json();

function checkStatus(res) {
  if (res.status >= 200 && res.status < 300) {
    return res;
  } else {
    let error = new Error();
    error.res = res;
    throw error;
  }
}

export function performReq(url, options) {
  if (!options.headers) {
    options.headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    options.body = JSON.stringify(options.body);
  }

  return fetch(url, options)
    .then(checkStatus)
    .then(parseJson);
}

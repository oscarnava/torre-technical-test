const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';

const URL = (url = '', useProxy = true) => `${useProxy ? PROXY_URL : ''}${url}`;

const request = (url, body) => {
  const opts = {
    method: 'POST',
    body: body && JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(URL(url), opts).then((response) => response.json());
};

export default request;

const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';

const URL = (url = '', useProxy = true) => `${useProxy ? PROXY_URL : ''}${url}`;

const apiRequest = (url, body, method = 'POST') => {
  const opts = {
    method,
    body: body && JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(URL(url), opts).then((response) => response.json());
};

export default apiRequest;

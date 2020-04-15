import MOCK_RECS_DATA from './mockRecsData';

const MOCK_DATA = {
  'https://bio.torre.co/api/bios/ana-maria-diaz/recommendations': MOCK_RECS_DATA,
};

const request = (url, body) => {
  const pageInfo = url.match(/(.*)\?page=(\d)/);
  const key = pageInfo ? pageInfo[1] : url;
  const page = pageInfo ? +pageInfo[2] : 0;
  // console.log({ key, page }, Object.keys(MOCK_DATA)[0] === key, 'data', MOCK_DATA[key]);
  return Promise.resolve((MOCK_DATA[key] && MOCK_DATA[key][page]) || null);
};

export default request;

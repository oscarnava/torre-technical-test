import MOCK_RECS_DATA from './mockRecsData';
import MOCK_USER_INFO from './mockUserInfo';

const MOCK_DATA = {
  'https://bio.torre.co/api/bios/ana-maria-diaz/recommendations': MOCK_RECS_DATA,
  'https://torre.bio/api/bios/ana-maria-diaz': [MOCK_USER_INFO],
};

const mockRequest = (url) => {
  const pageInfo = url.match(/(.*)\?page=(\d)/);
  const key = pageInfo ? pageInfo[1] : url;
  const page = pageInfo ? +pageInfo[2] : 0;
  return Promise.resolve((MOCK_DATA[key] && MOCK_DATA[key][page]) || {});
};

export default mockRequest;

import request from './mockAPI';
import Globals from '../globals';

const { SERVICE_URL } = Globals;

const requestPage = (user, page) => request(`${SERVICE_URL}/${user}/recommendations?page=${page}`, { getGiven: false, getReceived: true });

const acumRecs = ({ total, elements }, acum = { total: 0, count: 0, stats: {} }) => {
  if (elements && elements[0] && elements[0].connections) {
    acum.total = total;
    return elements[0].connections.reduce((acc, itm) => {
      acum.count += 1;
      const { weight, strengths } = itm.recommendation;
      // console.log({ source: itm.personSourceId, weight, strengths });
      strengths.forEach((strg) => { acc.stats[strg] = (acc.stats[strg] || 0) + weight; });
      return acc;
    }, acum);
  }
  return acum;
};

const fetchUserInfo = async (user) => {
  const info = acumRecs(await requestPage(user, 0));
  //TODO: Currently the API only returns the first 20 recommendations; should fetch all, but time is scarce.
  return info;
};

export default fetchUserInfo;

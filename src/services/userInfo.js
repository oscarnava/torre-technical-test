import request from './mockAPI';
import Globals from '../globals';

const { RECS_SERVICE_URL, INFO_SERVICE_URL } = Globals;

const requestRecommendations = (user, page) => request(`${RECS_SERVICE_URL}/${user}/recommendations?page=${page}`, { getGiven: false, getReceived: true });
const requestUserInfo = (user) => request(`${INFO_SERVICE_URL}/${user}`, null, 'GET');

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

//TODO: Currently the API only returns the first 20 recommendations; should fetch all, but time is scarce.
const fetchUserRecs = async (user) => acumRecs(await requestRecommendations(user, 0));
const fetchUserInfo = async (user) => requestUserInfo(user);

export {
  fetchUserRecs,
  fetchUserInfo,
};

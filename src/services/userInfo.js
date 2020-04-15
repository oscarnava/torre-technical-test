import request from './mockAPI';
import Globals from '../globals';

const { SERVICE_URL } = Globals;

const requestPage = (user, page) => request(`${SERVICE_URL}/${user}/recommendations?page=${page}`, { getGiven: false, getReceived: true });

const acumRecs = (data, acum = {}) => {
  const recommendations = data.elements[0].connections.map((itm) => {
    const { weight, strengths } = itm.recommendation;
    return { source: itm.personSourceId, weight, strengths };
  });
  return recommendations;
};

const fetchUserInfo = async (user) => {
  const data = await requestPage(user, 0);
  console.log(data);
  console.log(acumRecs(data));
};

export default fetchUserInfo;

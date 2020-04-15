import request from './API';
import Globals from '../globals';

const { SERVICE_URL } = Globals;

const fetchUserInfo = (user, page = 0) => request(`${SERVICE_URL}/${user}/recommendations?page=${page}`, { getGiven: false, getReceived: true });

export default fetchUserInfo;

import mockRequest from './mockAPI';
import apiRequest from './API';

const urlParams = new URLSearchParams(window.location.search);
const request = urlParams.get('mode') === 'mock' ? mockRequest : apiRequest;

export default request;

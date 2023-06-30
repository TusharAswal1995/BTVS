import axios from 'axios';
import {Alert} from 'react-native';
import {Config} from 'react-native-config';

const baseURL = Config.API_BASE_URL;
const headers = {
  'Content-Type': 'application/json',
};
export class NetworkService {
  constructor() {
    this.client = axios.create({baseURL, headers});
  }

  setBaseUrlForApis = baseURL => {
    this.client.defaults.baseURL = baseURL;
  };

  setAccessToken = token => {
    // this.client.defaults.headers.common.authorization = `Bearer ${token}`;
    this.client.defaults.headers.common['X-Token'] = token;
  };

  clearAccessToken = () => {
    delete this.client.defaults.headers.common.authorization;
  };

  request = ({method, url, data, ...config}) => {
    return this.client.request({method, url, data, ...config});
  };
}

export const networkService = new NetworkService();

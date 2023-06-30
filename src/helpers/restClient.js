import Toast from 'react-native-toast-message';
import NetInfo from '@react-native-community/netinfo';
import idx from 'idx';
import {store} from 'store/setup';
import {BASE_URL} from 'constants/apiEndpoints';
import {create} from 'apisauce';
let authToken = idx(store, _ => _.getState().authReducer.loginData.data.token);
const api = create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    Authorization: authToken,
  },
});
export default class RestClient {
  static isConnected() {
    return new Promise(function (fulfill, reject) {
      NetInfo.fetch().then(isConnected => {
        if (isConnected && isConnected.isConnected) fulfill(isConnected);
        else {
          reject(`Please check your internet connection and try again`);
          Toast.show({
            type: 'error',
            text1: 'Network Error',
            text2: 'Please check your internet connection and try again',
          });
        }
      });
    });
  }

  static statusResponses(response, fulfill, reject) {
    console.log(response.status, 'fulfill', reject);
    if (response.status == 200) {
      fulfill(response.data);
    } else if (response.status == 401) {
      reject(response.status);
      reject(new Error(response.status));
    } else {
      reject(new Error(response.status));
      Toast.show({
        type: 'error',
        text1: 'API error',
        text2: 'API MESSAGE HERE.........',
      });
    }
  }

  static getCall(url, enableToast) {
    api.setHeaders({
      Authorization: authToken,
    });

    let context = this;
    return new Promise(function (fulfill, reject) {
      context
        .isConnected()
        .then(() => {
          api.get(url).then(response => {
            console.log(response.data, 'GET RESPONSE=======>', response.status);
            context.statusResponses(response, fulfill, reject);
          });
        })
        .catch(error => {
          if (enableToast)
            Toast.show({
              type: 'error',
              text1: 'API error',
              text2: 'API MESSAGE HERE.........',
            });
          reject(error);
        });
    });
  }

  static postCall(url, enableToast) {
    api.setHeaders({
      Authorization: authToken,
    });
    let context = this;
    return new Promise(function (fulfill, reject) {
      context
        .isConnected()
        .then(() => {
          api.post(url, params).then(response => {
            console.log(
              response.data,
              'POST RESPONSE=======>',
              response.status,
            );
            context.statusResponses(response, fulfill, reject);
          });
        })
        .catch(error => {
          if (enableToast)
            Toast.show({
              type: 'error',
              text1: 'API error',
              text2: 'API MESSAGE HERE.........',
            });
          reject(error);
        });
    });
  }
}

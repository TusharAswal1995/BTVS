import {AUTHENTICATION} from 'api/apiList';
import {networkService} from 'helpers/networkService';
import Config from 'react-native-config';

export class AuthController {
  constructor() {
    this.networkService = networkService;
    this?.networkService?.setBaseUrlForApis(Config.API_BASE_URL);
  }

  login({}) {
    return this.networkService.request({
      method: 'POST',
      url: AUTHENTICATION.login,
      data: null,
    });
  }
}

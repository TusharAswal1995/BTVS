import * as TYPES from 'actions/actionTypes';
import {AuthController} from 'controllers/authController';

const loginRequest = () => ({
  type: TYPES.LOGIN_REQUEST,
  payload: null,
});

const loginSuccess = (user, token) => ({
  type: TYPES.LOGIN_SUCCESS,
  payload: {user: user, token: token},
});

const loginError = error => ({
  type: TYPES.LOGIN_FAILURE,
  payload: {error},
});

export const login = (email, password) => async (dispatch, _) => {
  try {
    dispatch(loginRequest());
    const authController = new AuthController();
    const {data} = await authController.login({email, password});
    if (data.code == 200) {
      // networkService.setAccessToken(data?.data?.access_token);
      dispatch(loginSuccess(data.data));
      // MyToast('Login successful', 'success');
    } else {
      dispatch(loginError());
    }
  } catch (data) {
    dispatch(loginError());
  }
};

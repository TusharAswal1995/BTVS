import * as TYPES from 'actions/actionTypes';

const initialState = {
  loading: false,
  userData: null,
};

export const authReducer = (state = initialState, action) => {
  console.log(action, 'actionaction');
  switch (action.type) {
    case TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        loading: true,
        userData: action.response,
      };

    case TYPES.LOGIN_FAILURE:
      return {
        ...state,
        user: action.response,
        loading: false,
      };

    case TYPES.LOGIN_REQUEST:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

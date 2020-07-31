import {
  JOIN_SUCCESS,
  JOIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
} from '../actions/constants';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case JOIN_SUCCESS:
      localStorage.setItem('token', payload.token); //setting the user's login token to local storage
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case JOIN_FAIL:
    case AUTH_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };

    default:
      return state;
  }
}

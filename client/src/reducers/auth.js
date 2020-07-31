import { JOIN_SUCCESS, JOIN_FAIL } from '../actions/constants';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case JOIN_SUCCESS:
      localStorage.setItem('token', payload.token); //setting the user's login token to local storage
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      }
    case JOIN_FAIL:
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

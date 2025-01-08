// États initiaux
const initialState = {
  token: null,
  isAuthenticated: false,
  user: null,
};

// Actions types
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAIL = "LOGIN_FAIL";
const LOGOUT = "LOGOUT";

// Reducer
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        user: action.payload.user,
        isAuthenticated: true,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

// États initiaux
const initialState = {
  isAuthenticated: false,
  token: null,
  user: null,
};

// Actions types
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAIL = "LOGIN_FAIL";
const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
const LOGOUT = "LOGOUT";

// Reducer
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload,
        user: action.payload.user,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        user: action.payload, // Mise à jour de l'utilisateur avec les nouvelles données
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

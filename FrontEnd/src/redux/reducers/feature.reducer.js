const initialState = {
  user: null,
};

const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
const UPDATE_USER_ERROR = "UPDATE_USER_ERROR";

export const featureReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };

    case UPDATE_USER_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};

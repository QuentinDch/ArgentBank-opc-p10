const initialState = {
  user: null,
  token: null,
};

export const featureReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_USER_SUCCESS":
      console.log("Updated user data in reducer:", action.payload);
      return {
        ...state,
        user: action.payload,
        token: action.payload.token,
      };
    case "UPDATE_USER_ERROR":
      return {
        ...state,
      };
    default:
      return state;
  }
};

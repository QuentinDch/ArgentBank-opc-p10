const initialState = {
  profile: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_PROFILE_SUCCESS":
      return {
        ...state,
        profile: action.payload,
      };
    case "FETCH_USER_PROFILE_FAIL":
      return {
        ...state,
      };
    default:
      return state;
  }
};

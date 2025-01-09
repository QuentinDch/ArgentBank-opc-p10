import axios from "axios";

export const updateUserProfile = (data, token) => async (dispatch) => {
  try {
    const res = await axios.put(
      "http://localhost:3001/api/v1/user/profile",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch({
      type: "UPDATE_USER_SUCCESS",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "UPDATE_USER_ERROR",
    });
    console.error(err);
    throw err;
  }
};

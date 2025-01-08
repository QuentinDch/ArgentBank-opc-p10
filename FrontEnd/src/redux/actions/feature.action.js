import axios from "axios";

export const updateUserProfile = (formData, token) => async (dispatch) => {
  try {
    const res = await axios.put(
      "http://localhost:3001/api/v1/user/profile",
      formData,
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
    throw err;
  }
};

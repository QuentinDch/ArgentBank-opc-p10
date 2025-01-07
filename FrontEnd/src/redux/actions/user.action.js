import axios from "axios";

export const getUserProfile = () => async (dispatch) => {
  const token = sessionStorage.getItem("token");

  try {
    const res = await axios.get("http://localhost:3001/api/v1/user/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({ type: "FETCH_USER_PROFILE_SUCCESS", payload: res.data.body });
    return res;
  } catch (err) {
    dispatch({ type: "FETCH_USER_PROFILE_FAIL" });
    throw err;
  }
};

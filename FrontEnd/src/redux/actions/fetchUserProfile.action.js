import axios from "axios";

export const fetchUserProfile = (token) => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:3001/api/v1/user/profile", {
      headers: { Authorization: `Bearer ${token}` },
    });

    const user = res.data.body;

    dispatch({ type: "LOGIN_SUCCESS", payload: { token, user } });
  } catch {
    dispatch({ type: "LOGIN_FAIL" });
  }
};

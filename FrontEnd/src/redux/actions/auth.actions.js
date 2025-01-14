import axios from "axios";

export const loginUser = (postData) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:3001/api/v1/user/login",
      postData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const token = res.data.body.token;
    console.log("Token récupéré:", token);
    if (postData.remember) {
      localStorage.setItem("token", token);
    } else {
      sessionStorage.setItem("token", token);
    }

    const userRes = await axios.get(
      "http://localhost:3001/api/v1/user/profile",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const user = userRes.data.body;

    dispatch({ type: "LOGIN_SUCCESS", payload: { token, user } });
    return res;
  } catch (err) {
    dispatch({ type: "LOGIN_FAIL" });
    throw err;
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
  dispatch({ type: "LOGOUT" });
};

// Action pour mettre à jour les données utilisateur
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

    // Dispatch de l'action pour mettre à jour les données dans le store
    dispatch({
      type: "UPDATE_USER_SUCCESS",
      payload: res.data.body, // Nouvelle version des données utilisateur
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
};

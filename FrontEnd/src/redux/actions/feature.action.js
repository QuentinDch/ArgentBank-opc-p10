import axios from "axios";

// Action pour mettre à jour les informations utilisateur
export const updateUserProfile = (userData, token) => async (dispatch) => {
  try {
    // Requête PUT avec les données dans le body
    const res = await axios.put(
      "http://localhost:3001/api/v1/user/profile",
      userData, // Les données utilisateur à mettre à jour
      {
        headers: {
          "Content-Type": "application/json", // Définir le type de contenu pour les données JSON
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // Si la requête est réussie, dispatch l'action avec les nouvelles données utilisateur
    dispatch({
      type: "UPDATE_USER_SUCCESS",
      payload: res.data, // Les données mises à jour retournées par l'API
    });
  } catch (err) {
    dispatch({
      type: "UPDATE_USER_ERROR",
    });
    throw err;
  }
};

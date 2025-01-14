import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducer/auth.reducer";

// Configuration du store Redux
const store = configureStore({
  reducer: {
    auth: authReducer, // Reducer pour gérer l'authentification utilisateur et la gestion du profil (récupération et modification)
  },
});

export default store;

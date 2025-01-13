import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/auth.reducer";
import { featureReducer } from "./reducers/feature.reducer";

// Combiner reducers
const rootReducer = combineReducers({
  auth: authReducer, // Reducer pour gérer l'authentification et la récupération donnée profil utilisateur
  feature: featureReducer, // Reducer pour gérer la feature EditModal
});

// Configuration du store Redux
const store = configureStore({
  reducer: rootReducer,
});

export default store;

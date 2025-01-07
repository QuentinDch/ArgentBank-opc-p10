import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user.reducer";
import { authReducer } from "./reducers/auth.reducer";
import { featureReducer } from "./reducers/feature.reducer";

// Combiner les reducers (ajout de authReducer)
const rootReducer = combineReducers({
  user: userReducer, // Le reducer pour gérer l'utilisateur
  auth: authReducer, // Le reducer pour gérer l'authentification
  feature: featureReducer, // Le reducer pour gérer la feature EditModal
});

// Configuration du store Redux
const store = configureStore({
  reducer: rootReducer,
});

export default store;

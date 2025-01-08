import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { authReducer } from "./reducers/auth.reducer";
import { featureReducer } from "./reducers/feature.reducer";

// Combiner reducers
const rootReducer = combineReducers({
  auth: authReducer, // Le reducer pour gérer l'authentification
  feature: featureReducer, // Le reducer pour gérer la feature EditModal
});

// Configuration du store Redux
const store = configureStore({
  reducer: rootReducer,
});

export default store;

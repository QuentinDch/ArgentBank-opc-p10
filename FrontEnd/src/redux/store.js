import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducer/auth.reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Configuration pour redux-persist
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

// Configuration du store Redux
const store = configureStore({
  reducer: {
    auth: persistedReducer,
  },
});

export const persistor = persistStore(store);

export default store;

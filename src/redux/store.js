import { configureStore } from "@reduxjs/toolkit";
import storeReducer from "./storeSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

export const store = configureStore({
  reducer: {
    store: storeReducer,
  },
});

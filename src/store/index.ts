import { configureStore } from "@reduxjs/toolkit";
// Reducers
import reducer from "../reducers/reducer";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ immutableCheck: false, serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;

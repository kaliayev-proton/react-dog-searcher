import { configureStore } from "@reduxjs/toolkit";
import dogsReducer from "../feature/dogs/dogsSlice";
import { dogsApi } from "../services/dogs/dogs";

export const store = configureStore({
  reducer: {
    dogs: dogsReducer,
    [dogsApi.reducerPath]: dogsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dogsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from '@reduxjs/toolkit';
import contentReducer from './slices/contentSlice';
import dynamicConfigReducer from "./slices/dynamicConfigSlice";


export const store = configureStore({
  reducer: {
    content:contentReducer,
    dynamicConfig: dynamicConfigReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

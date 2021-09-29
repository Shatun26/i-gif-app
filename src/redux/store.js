// первая строчка не меняется
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

// импрорт редьюсеров
import authReducer from './slices/auth';
import MainReducer from './slices/main';
// не меняется
const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

export const store = configureStore({
  reducer: {
    // меняется только набор редьюсеров
    auth: authReducer,
    main: MainReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

import { configureStore } from '@reduxjs/toolkit';
import { reducer as appReducer } from './reducer'; // твой старый reducer для города/авторизации
import offersReducer from './offers-reducer'; // новый slice для офферов
import { createAPI } from '../services/api';

export const api = createAPI();

export const store = configureStore({
  reducer: {
    app: appReducer,     // город, авторизация, общий список офферов
    offers: offersReducer // детальная информация, отзывы, nearby
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

// Типизация для хуков
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

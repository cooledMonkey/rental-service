import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import { FullOffer, OffersList, Review } from '../types/offer.js';
import {getFullOFfer, getReviews, offersCityList, requireAuthorization, setError, setOffersDataLoadingStatus, setReviewLoadingStatus} from './action.js';
import {saveToken, dropToken, getToken} from '../services/token.js';
import {APIRoute, AuthorizationStatus} from '../const.js';
import {AuthData, UserData} from '../types/user-data.js';
import { store } from './index.js';

const TIMEOUT_SHOW_ERROR = 2000;

const fetchOffersAction = createAsyncThunk<void, undefined, {
 dispatch: AppDispatch;
 state: State;
 extra: AxiosInstance;
}>(
 'data/fetchOffers',
 async (_arg, {dispatch, extra: api}) => {
  dispatch(setOffersDataLoadingStatus(true));
   const {data} = await api.get<OffersList[]>(APIRoute.Offers);
   dispatch(setOffersDataLoadingStatus(false));
   dispatch(offersCityList(data));
 },
);

const checkAuthAction = createAsyncThunk<void, undefined, {
   dispatch: AppDispatch;
   state: State;
   extra: AxiosInstance;
 }>(
   'user/checkAuth',
   async (_arg, {dispatch, extra: api}) => {
     try {
       await api.get(APIRoute.Login);
       dispatch(requireAuthorization(AuthorizationStatus.Auth));
     } catch {
       dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
     }
   },
 );


const logoutAction = createAsyncThunk<void, undefined, {
 dispatch: AppDispatch;
 state: State;
 extra: AxiosInstance;
}>(
 'user/logout',
 async (_arg, {dispatch, extra: api}) => {
   await api.delete(APIRoute.Logout);
   dropToken();
   dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
 },
);
const clearErrorAction = createAsyncThunk(
   'clearError',
   () => {
     setTimeout(
       () => store.dispatch(setError(null)),
       TIMEOUT_SHOW_ERROR,
     );
   },
 );
 
 const loginAction = createAsyncThunk<
 UserData,       
 AuthData,       
 { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>(
 'user/login',
 async ({ email, password }, { dispatch, extra: api, rejectWithValue }) => {
   try {
     const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
     saveToken(data.token);
     dispatch(requireAuthorization(AuthorizationStatus.Auth));
     return data;
   } catch (err) {
     dropToken();
     dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
     return rejectWithValue('Login failed');
   }
 }
);

const fetchFullOfferAction = createAsyncThunk<void, undefined, {
 dispatch: AppDispatch;
 state: State;
 extra: AxiosInstance;
}>(
 'data/fetchFullOffer',
 async (offerId, {dispatch, extra: api}) => {
  dispatch(setOffersDataLoadingStatus(true));
   const { data } = await api.get<FullOffer>(`${APIRoute.Offers}/${offerId}`);
   dispatch(getFullOFfer(data));
 },
);

const fetchReviewsAction = createAsyncThunk<void, string, {dispatch: AppDispatch;state: State;extra: AxiosInstance;}>(
 'comments/getReviews',
 async (offerId, {dispatch, extra: api}) => {
  dispatch(setOffersDataLoadingStatus(true));
   const { data } = await api.get<Review[]>(`${APIRoute.Comments}/${offerId}`);
   dispatch(getReviews(data));
 },
);

// const postReviewAction = createAsyncThunk<
//   Review[], // Тип возвращаемых данных при успехе
//   { offerId: string; reviewData: Review }, // Тип входных параметров
//   { 
//     dispatch: AppDispatch;state: State;extra: AxiosInstance;
//   }
// >(
//   'comments/postReview',
//   async ({ offerId, reviewData }, { dispatch, extra: api, rejectWithValue }) => {
//     try {
//       dispatch(setReviewLoadingStatus(true));
//       await api.post(`${APIRoute.Comments}/${offerId}`, reviewData);
//       const { data } = await api.get<Review[]>(`${APIRoute.Comments}/${offerId}`);
//       dispatch(getReviews(data));
//       console.log(data)
//       return data; // ВАЖНО: возвращаем данные, а не void
      
//     } catch (error) {
//       return rejectWithValue('Failed to post review');
//     } finally {
//       dispatch(setReviewLoadingStatus(false));
//     }
//   }
// );

// store/comments-actions.ts
const postReviewAction = createAsyncThunk<
  Review[],
  { offerId: string; reviewData: Review },
  { dispatch: AppDispatch; state: State; extra: AxiosInstance; rejectValue: string }
>(
  'comments/postReview',
  async ({ offerId, reviewData }, { dispatch, extra: api, rejectWithValue }) => {
    console.log("Hello")
    try {
      // Получаем токен прямо здесь
      const token = getToken();
      
      if (!token) {
        return rejectWithValue('No authorization token');
      }

      console.log("Hello1")
      
      await api.post(
        `${APIRoute.Comments}/${offerId}`,
        reviewData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Hello2")
      const { data } = await api.get<Review[]>(`${APIRoute.Comments}/${offerId}`);
      console.log("Hello3")
      dispatch(getReviews(data));
      console.log(data)
      return data;
    } catch (error: any) {
      // Обработка ошибки 401 (Unauthorized)
      if (error.response?.status === 401) {
        // Токен истек или недействителен
        localStorage.removeItem('jwt-token');
        // Можно редиректнуть на страницу логина
      }
      console.log(error)
      return rejectWithValue(error.response?.data?.message || 'Failed to post review');
    }
  }
);

export {fetchOffersAction, checkAuthAction, loginAction, logoutAction, clearErrorAction, fetchFullOfferAction, fetchReviewsAction, postReviewAction }

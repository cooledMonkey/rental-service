import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FullOffer, Review, OffersList } from '../types/offer';
import { getFullOFfer, getReviews, setFullOffersDataLoadingStatus } from './action';

type OffersState = {
  fullOffer: FullOffer | null;
  reviews: Review[];
  nearbyOffers: OffersList[];
  isFullOfferLoading: boolean;
  isReviewsLoading: boolean;
  error: string | null;
};

const initialState: OffersState = {
  fullOffer: null,
  reviews: [],
  nearbyOffers: [],
  isFullOfferLoading: false,
  isReviewsLoading: false,
  error: null
};

export const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    // Синхронные действия (если нужны)
    clearOfferData: (state) => {
      state.fullOffer = null;
      state.reviews = [];
      state.nearbyOffers = [];
      state.error = null;
    },
    setOfferError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(getFullOFfer, (state, action) => {
        state.fullOffer = action.payload;
        state.isFullOfferLoading = false;
      })
    .addCase(setFullOffersDataLoadingStatus, (state, action) => {
           state.isFullOfferLoading = action.payload;
    })
    .addCase(getReviews, (state, action) => {
        state.reviews = action.payload;
      })
    // .addCase(postReviewAction, (state, action) => {
    //   state.reviews = action.payload;
    // })
      ;
  }
});

// Экспортируем синхронные действия
export const { clearOfferData, setOfferError } = offersSlice.actions;

// Экспортируем reducer
export default offersSlice.reducer;
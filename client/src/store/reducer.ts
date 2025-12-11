
import { createReducer } from '@reduxjs/toolkit'; 
import {offersList } from '../mocks/offers-list';

import {changeCity, offersCityList, reviewsList, addReview} from './action'; 
import {CITIES_LOCATION} from '../const';
import { getCity } from '../utils';
import { reviews } from '../mocks/reviews';

const defaultCity = getCity('Paris', CITIES_LOCATION);
const initialState = {
    city: defaultCity,
    offers: offersList,
    reviews: reviews
};

const reducer = createReducer (initialState, (builder) => {
    builder
    .addCase(changeCity, (state, action) => {
        state.city = action.payload;
    })
    .addCase (offersCityList, (state, action) => 
        { state.offers = action.payload;
    })
    .addCase(reviewsList, (state, action) => 
        { state.reviews = action.payload;
    })
    .addCase(addReview, (state, action) => {
        state.reviews.unshift(action.payload);
    });
});
export {reducer};
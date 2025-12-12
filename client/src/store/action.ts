
import { createAction } from '@reduxjs/toolkit';
import { CityOffer, OffersList, Review } from '../types/offer';

const changeCity = createAction( 'offers/changeCity', (city: CityOffer) => ({ payload: city}));
const offersCityList = createAction( 'offers/offersCityList', (offers: OffersList[]) => ({ payload: offers}));
const reviewsList = createAction( 'offers/reviews', (reviews: Review[]) => ({ payload: reviews}));
const addReview = createAction<Review>('offersreviews/add');

export {changeCity, offersCityList, reviewsList, addReview };
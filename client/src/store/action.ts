
import { createAction } from '@reduxjs/toolkit';
import { CityOffer, OffersList, Review } from '../types/offer';
import { AuthorizationStatusType } from '../types/authorization-status';

const changeCity = createAction( 'offers/changeCity', (city: CityOffer) => ({ payload: city}));
const offersCityList = createAction( 'offers/offersCityList', (offers: OffersList[]) => ({ payload: offers}));
const reviewsList = createAction( 'offers/reviews', (reviews: Review[]) => ({ payload: reviews}));
const addReview = createAction<Review>('offersreviews/add');
const requireAuthorization = createAction<AuthorizationStatusType>('user/requireAuthorization');
const setError = createAction('setError', (error: string | null) =>({
    payload: error
}));
const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export {changeCity, offersCityList, reviewsList, addReview, requireAuthorization, setError, setOffersDataLoadingStatus };
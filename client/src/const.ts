import { CityOffer } from "./types/offer";

const Settings = {
    rentOffersCount: 312,
} as const;

const AppRoute = {
    Main: "/",
    Login: "/login",
    Favorites: "/favorites",
    Offer: "/offer/:id"
} as const

const AuthorizationStatus = {
    Auth: "AUTH",
    NoAuth: "NO_AUTH",
    Unknown: "UNKNOWN"
}

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
export {Settings, AppRoute, AuthorizationStatus};

export type City = {
  id: string;
  city: CityOffer;
};

export const CITIES: City[] = [
  { id: 'Paris', 
    city: {
    name: 'Paris', location: {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13 }
    }
 },
  { id: 'Cologne',city: { name: 'Cologne', location: {
        'latitude': 50.938590,
        'longitude': 6.959922,
        'zoom': 13 }} },
  { id: 'Brussels', city: { name: 'Brussels', location: {
        'latitude': 50.846697, 
        'longitude': 4.352544,
        'zoom': 13 }} },
  { id: 'Amsterdam',city: { name: 'Amsterdam', location: {
        'latitude': 52.373057,
        'longitude': 4.892557,
        'zoom': 13 } }},
  { id: 'Hamburg',city: { name: 'Hamburg', location: {
        'latitude': 53.567103, 
        'longitude': 9.991934,
        'zoom': 13 } }},
  { id: 'Dusseldorf',city: { name: 'Dusseldorf', location: {
        'latitude': 51.230569, 
        'longitude': 6.787428,
        'zoom': 13 }} },
];

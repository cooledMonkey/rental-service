import { CityOffer, OffersList } from "./types/offer"

function getCity(name: string, cityOffers: CityOffer[]){
    return cityOffers.filter((x: CityOffer) => x.name === name)[0];
}

function getOffersByCity(city: string, offersList: OffersList[]){
    return city == undefined ? offersList : offersList.filter((x) => x.city.name === city);
}

export {getCity, getOffersByCity};
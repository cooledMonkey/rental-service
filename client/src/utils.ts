import { SortOffersType } from "./const";
import { CityOffer, OffersList } from "./types/offer"
import { SortOffer } from "./types/sort";

function getCity(name: string, cityOffers: CityOffer[]){
    return cityOffers.filter((x: CityOffer) => x.name === name)[0];
}

function getOffersByCity(city: string, offersList: OffersList[]){
    return city == undefined ? offersList : offersList.filter((x) => x.city.name === city);
}


function sortOffersByType (offers: OffersList[], type: SortOffer): OffersList[] { switch (type) {
    case SortOffersType.PriceToHigh:
        return offers.sort((a, b) => a.price - b.price);
    case SortOffersType.PriceToLow:
        return offers.sort((a, b) =>b.price - a.price);
    case SortOffersType.TopRated:
        return offers.sort((a, b) => b. rating - a.rating); 
    default:
        return offers;
    }
}

export {getCity, getOffersByCity, sortOffersByType};
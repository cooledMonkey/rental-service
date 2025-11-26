import { OffersList } from "../../types/offer"
import { CitiesCard } from "../cities-card/cities-card";

type CitiesCardListProps = {
    offersList: OffersList[];
    onOfferMouseEnter: ((id: string) => void) | (() => void);
    onOfferMouseLeave: (() => void) | undefined;
}

function CitiesCardList({offersList, onOfferMouseEnter, onOfferMouseLeave}: CitiesCardListProps){
    return(<div className="cities__places-list places__list tabs__content">
            {offersList.length === 0 ? 
                <p key={"no-items"} className="cities__status-description">
                    We could not find any property available at the moment in this city
                </p> : 
                        Array.from(offersList, (item) =>
            <article  onMouseEnter={() => onOfferMouseEnter(item.id)} onMouseLeave={onOfferMouseLeave}>
            <CitiesCard key={item.id} id={item.id} title={item.title} type={item.type} 
                price={item.price} previewImage={item.previewImage} isPremium={item.isPremium} rating={item.rating}
                 />
            </article>)
            }
        </div>);
}
export {CitiesCardList};
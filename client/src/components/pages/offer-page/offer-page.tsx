import { JSX } from "react";
import { ReviewsItem } from "../../reviews-item/reviews-item";
import { OfferHost } from "../../offer-host/offer-host";
import { OfferInside } from "../../offer-inside/offer-inside";
import { Logo } from "../../logo/logo";
import { FullOffer, OffersList } from "../../../types/offer";
import { useParams } from "react-router-dom";
import { NotFoundPage } from "../not-found-page/not-found-page";
import { SendReviewItem } from "../../send-review-component/send-review-component";
import { CitiesCardList } from "../../cities-card-list/cities-card-list";

type OfferProps = {
  offers: FullOffer[];
  offersList: OffersList[];
}

function OfferPage({offers, offersList}: OfferProps): JSX.Element{
  const params = useParams();
  const offer = offers.find((item) => item.id === params.id);
  if(!offer){
    return <NotFoundPage />
  }
return(
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Myemail@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
     
<main className="page__main page__main--offer">
  <section className="offer">
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {offer.images.map((item) => (
          <div key={item} className="offer__image-wrapper">
            <img className="offer__image" src={item} alt="Photo studio" />          </div>
        ))}
      </div>
    </div>
    <div className="offer__container container">
      <div className="offer__wrapper">
        {offer.isPremium ? (
          <div className="offer__mark">
            <span>Premium</span>
          </div>) : null}
        <div className="offer__name-wrapper">
          <h1 className="offer__name">
            {offer.title}
          </h1>
          <button className="offer__bookmark-button button" type="button">
            <svg className="offer__bookmark-icon" width="31" height="33">
              <use href="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="offer__rating rating">
          <div className="offer__stars rating__stars">
            <span style={{width: `${(Number(offer.rating) * 20.0)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
          <span className="offer__rating-value rating__value">{offer.rating}</span>
        </div>
        <ul className="offer__features">
          <li className="offer__feature offer__feature--entire">
            Apartment
          </li>
          <li className="offer__feature offer__feature--bedrooms">
            3 Bedrooms
          </li>
          <li className="offer__feature offer__feature--adults">
            Max 4 adults
          </li>
        </ul>
        <div className="offer__price">
          <b className="offer__price-value">&euro;{offer.price}</b>
          <span className="offer__price-text">&nbsp;night</span>
        </div>
        
        <OfferInside names={offer.goods} />
      
        <OfferHost host={offer.host}/>
        <section className="offer__reviews reviews">
          <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
          <ul className="reviews__list">
            <ReviewsItem/>
          </ul>
            <SendReviewItem />
        </section>
      </div>
    </div>

    <section className="offer__map map"></section>
  </section>

  <div className="container">
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        { <CitiesCardList offersList={offersList}/> }
      </div>
    </section>
  </div>
</main></div> )
}

export { OfferPage };
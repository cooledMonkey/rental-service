import { JSX } from "react";
import { ReviewsItem } from "../../reviews-item/reviews-item";
import { OfferHost } from "../../offer-host/offer-host";
import { OfferInside } from "../../offer-inside/offer-inside";
import { Logo } from "../../logo/logo";
import { FullOffer } from "../../../types/offer";
import { useParams } from "react-router-dom";
import { NotFoundPage } from "../not-found-page/not-found-page";

type OfferProps = {
  offers: FullOffer[];
}

function OfferPage({offers}: OfferProps): JSX.Element{
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
            <span style={{ width: "100%" }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
          <span className="offer__rating-value rating__value">4.8</span>
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
          <form className="reviews__form form" action="#" method="post">
            <label className="reviews__label form__label" htmlFor="review">Your review</label>
            <div className="reviews__rating-form form__rating">
              <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" />
              <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
                <svg className="form__star-image" width="37" height="33">
                  <use href="#icon-star"></use>
                </svg>
              </label>

              <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" />
              <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
                <svg className="form__star-image" width="37" height="33">
                  <use href="#icon-star"></use>
                </svg>
              </label>

              <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" />
              <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
                <svg className="form__star-image" width="37" height="33">
                  <use href="#icon-star"></use>
                </svg>
              </label>

              <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" />
              <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
                <svg className="form__star-image" width="37" height="33">
                  <use href="#icon-star"></use>
                </svg>
              </label>

              <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" />
              <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
                <svg className="form__star-image" width="37" height="33">
                  <use href="#icon-star"></use>
                </svg>
              </label>
            </div>
            <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
            <div className="reviews__button-wrapper">
              <p className="reviews__help">
                To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
              </p>
              <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
            </div>
          </form>
        </section>
      </div>
    </div>

    <section className="offer__map map"></section>
  </section>

  <div className="container">
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {/* <CitiesCardList offersList={offers}/> */}
      </div>
    </section>
  </div>
</main></div> )
}

export { OfferPage };
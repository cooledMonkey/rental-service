import { JSX } from "react";
import { OfferHost } from "../../offer-host/offer-host";
import { OfferInside } from "../../offer-inside/offer-inside";
import { Logo } from "../../logo/logo";
import { FullOffer, OffersList } from "../../../types/offer";
import { useParams } from "react-router-dom";
import { NotFoundPage } from "../not-found-page/not-found-page";
import { CitiesCardList } from "../../cities-card-list/cities-card-list";
import Map from "../../map/map";
import { useActiveOffer } from "../../map/activeMarker";
import { ReviewsList } from "../../reviews-list/reviews-list";
import {Link} from 'react-router-dom';

type OfferProps = {
  offers: FullOffer[];
  offersList: OffersList[];
}

function OfferPage({offers, offersList}: OfferProps): JSX.Element{
  const { activeOfferId, handleOfferMouseEnter, handleOfferMouseLeave } = useActiveOffer();
  const params = useParams();
  const offer = offers.find((item) => item.id === params.id);
  if(!offer){
    return <NotFoundPage />
  }
  const icon = document.getElementById('icon');
  if(icon){
    icon.style.display = 'hidden';
  }
 
return(
    <div className="page">
      <div className="visually-hidden">
      <svg xmlns="http://www.w3.org/2000/svg">
        <symbol id="icon-star" viewBox="0 0 13 12">
          <path fillRule="evenodd" clipRule="evenodd" 
          d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z">
          </path>
        </symbol>
      </svg>
    </div>
              <div style={{'display': 'none'}}>
      <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
    </div>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link to="/favorites" className ="header__nav-link header__nav-link--profile">
                    <div className ="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className ="header__user-name user__name">Myemail@gmail.com</span>
                    <span className ="header__favorite-count">3</span>                    
                  </Link>
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
                       { !offer.isFavorite ? <button className="offer__bookmark-button button offer__bookmark-button--active button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use href="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button> :
                                      <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use href="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
                        }
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
        <ReviewsList offerId={offer.id} />
      </div>
    </div>

    <section className="offer__map map">
      <Map  city={offersList[0].city}
            points={offersList}
            selectedPoint={activeOfferId}>
      </Map>
    </section>
  </section>

  <div className="container">
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        { <CitiesCardList offersList={offersList} onOfferMouseEnter={handleOfferMouseEnter} onOfferMouseLeave={handleOfferMouseLeave}/> }
      </div>
    </section>
  </div>
</main></div> )
}

export { OfferPage };
import { JSX } from "react";
import { Logo } from "../../logo/logo";

function NotFoundPage():JSX.Element{
    return(<div className ="page page--gray page--main">
      <header className ="header">
        <div className ="container">
          <div className ="header__wrapper">
            <div className ="header__left">
              <Logo />
            </div>
            <nav className ="header__nav">
              <ul className ="header__nav-list">
                <li className ="header__nav-item user">
                  <a className ="header__nav-link header__nav-link--profile" href="#">
                    <div className ="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className ="header__user-name user__name">Myemail@gmail.com</span>
                    <span className ="header__favorite-count">3</span>
                  </a>
                </li>
                <li className ="header__nav-item">
                  <a className ="header__nav-link" href="#">
                    <span className ="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className ="page__main page__main--index">
        <h1 className ="visually-hidden">Cities</h1>
        <div className ="tabs">
          <section className ="locations container">
            <ul className ="locations__list tabs__list">
              <li className ="locations__item">
                <a className ="locations__item-link tabs__item" href="#">
                  <span>Paris</span>
                </a>
              </li>
              <li className ="locations__item">
                <a className ="locations__item-link tabs__item" href="#">
                  <span>Cologne</span>
                </a>
              </li>
              <li className ="locations__item">
                <a className ="locations__item-link tabs__item" href="#">
                  <span>Brussels</span>
                </a>
              </li>
              <li className ="locations__item">
                <a className ="locations__item-link tabs__item tabs__item--active">
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className ="locations__item">
                <a className ="locations__item-link tabs__item" href="#">
                  <span>Hamburg</span>
                </a>
              </li>
              <li className ="locations__item">
                <a className ="locations__item-link tabs__item" href="#">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <p className="offer__host-title">404</p>
        <p className="offer__host-title">Ooops. Not found this page</p>

      </main>
    </div>)
}
export {NotFoundPage};
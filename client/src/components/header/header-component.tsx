import { JSX } from "react";
import { Logo } from "../logo/logo";
import { useAppSelector } from "../../hooks";
import { AuthorizationStatus } from "../../const";
import { Link } from "react-router-dom";

export function HeaderComponent(): JSX.Element{
      const authorizationStatus = useAppSelector((state) => state.app.authorizationStatus);
      const favoriteOffersList = useAppSelector((state) => state.app.favoriteOffers)
      const userData = useAppSelector((state) => state.app.userData);

          return(<header className ="header">
        <div className ="container">
          <div className ="header__wrapper">
            <div className ="header__left">
              <Logo />
            </div>
            <nav className ="header__nav">
              <ul className ="header__nav-list">
                
                {
                  authorizationStatus === AuthorizationStatus.Auth ? 
                  <li className ="header__nav-item user">
                  
                  <Link to="/favorites" className ="header__nav-link header__nav-link--profile">
                    <div className ="header__avatar-wrapper user__avatar-wrapper">
                      <img className="user__avatar" src={userData?.avatar} />
                    </div>
                                       
                  </Link>  
                  <Link to="/favorites" className ="header__nav-link header__nav-link--profile">
                  <div>
                    <span className ="header__user-name user__name">{userData?.email}</span>
                    <span className ="header__favorite-count">{favoriteOffersList.length}</span> 
                  </div>  
                  </Link>        
                </li>:
                <li className ="header__nav-item user">
                  <Link to="/favorites" className ="header__nav-link header__nav-link--profile">
                    <div className ="header__avatar-wrapper user__avatar-wrapper">
                    </div>                   
                  </Link>             
                </li>
                }
                
                {
                  authorizationStatus === AuthorizationStatus.Auth ? 
                  <li className ="header__nav-item">
                  <a className ="header__nav-link" href="#">
                    <span className ="header__signout">Sign out</span>
                  </a>
                </li> :
                <li className ="header__nav-item">
                  <a className ="header__nav-link" href="#">
                    <span className ="header__signout">Sign in</span>
                  </a>
                </li>
                }
                

              </ul>
            </nav>
          </div>
        </div>
      </header>);
}
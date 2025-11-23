import { MainPage } from "../pages/main-page/main-page";
import { OfferPage } from "../pages/offer-page/offer-page";
import { NotFoundPage } from "../pages/not-found-page/not-found-page";
import { FavoritesPage } from "../pages/favorites-page/favorites-page";
import { LoginPage } from "../pages/login-page/login-page"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoute, AuthorizationStatus } from "../../const";
import { PrivateRoute } from "../private-route/private-route";
import { FullOffer, OffersList } from "../../types/offer";

type AppMainPageProps = {
    rentalOffersCount: number;
    offersList: OffersList[];
    offers: FullOffer[];
}

function App({rentalOffersCount, offersList, offers}: AppMainPageProps){
    return(<BrowserRouter>
        <Routes>
            <Route path={AppRoute.Main}
                element={<MainPage rentalOffersCount={rentalOffersCount} offersList={offersList}/>} >
            </Route>
            <Route path={`${AppRoute.Offer}/:id`} element={<OfferPage offers={offers}/>}  />
              <Route
                path={ AppRoute.Favorites }
                element={
              <PrivateRoute
                authorizationStatus={ AuthorizationStatus.Auth }>
                <FavoritesPage offersList={offersList}/>

              </PrivateRoute>
            }
          />
            <Route path={AppRoute.Login} element={<LoginPage/>} />
            <Route path="*" element={<NotFoundPage/>} />
        </Routes>
    </BrowserRouter>
    )
}
export {App}
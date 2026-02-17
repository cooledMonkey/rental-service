import { MainPage } from "../pages/main-page/main-page";
import { NotFoundPage } from "../pages/not-found-page/not-found-page";
import { FavoritesPage } from "../pages/favorites-page/favorites-page";
import { LoginPage } from "../pages/login-page/login-page"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../private-route/private-route";
import { useAppSelector } from "../../hooks";
import { AppRoute, AuthorizationStatus } from "../../const";
import { LoadingPage } from "../pages/loading-page/loading-page";

function App(){
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isQuestionsDataLoading = useAppSelector((state) => state.isOffersDataLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isQuestionsDataLoading){
    return(<BrowserRouter><LoadingPage/></BrowserRouter>)
  }
    return(<BrowserRouter>
        <Routes>
            <Route path={AppRoute.Main}
                element={<MainPage />} >
            </Route>
            {/* <Route path={`${AppRoute.Offer}/:id`} element={<OfferPage offers={offers} offersList={offersList.slice(0, 3)}/>}  /> */}
              <Route
                path={ AppRoute.Favorites }
                element={
              <PrivateRoute
                authorizationStatus={ authorizationStatus }>
                <FavoritesPage />

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
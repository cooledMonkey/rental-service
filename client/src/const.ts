const Settings = {
    rentOffersCount: 312,
} as const;

const AppRoute = {
    Main: "/",
    Login: "/login",
    Favorites: "/favorites",
    Offer: "/offer/:id"
} as const

const AuthorizationStatus = {
    Auth: "AUTH",
    NoAuth: "NO_AUTH",
    Unknown: "UNKNOWN"
}
export {Settings, AppRoute, AuthorizationStatus};
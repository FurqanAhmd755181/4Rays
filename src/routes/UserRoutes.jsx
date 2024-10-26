import LandingPage from "../pages/User/LandingPage/LandingPage.jsx";
import PricingPage from "../pages/pricingpage/PricingPage.jsx";
import AboutPage from "../pages/User/AboutPage/AboutPage.jsx";

const UserRoutes = [
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/pricing",
        element: <PricingPage />,
    },
    {
        path: "/about",
        element: <AboutPage />
    }
]

export default UserRoutes;
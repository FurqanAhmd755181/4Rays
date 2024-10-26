import LandingPage from "../pages/User/LandingPage/LandingPage.jsx";
import PricingPage from "../pages/User/pricingpage/PricingPage.jsx";


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
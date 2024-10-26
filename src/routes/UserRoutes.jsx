import LandingPage from "../pages/User/LandingPage.jsx";
import PricingPage from "../pages/pricingpage/PricingPage.jsx";

const UserRoutes = [
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/pricing",
        element: <PricingPage />,
    }
]

export default UserRoutes;
import LandingPage from "../pages/User/LandingPage/LandingPage.jsx";
import PricingPage from "../pages/User/pricingpage/PricingPage.jsx";
import AboutPage from "../pages/User/AboutPage/AboutPage.jsx";
import SignInPage from "../pages/authpages/Signinpage/Signinpage.jsx";
import SignUpPage from "../pages/authpages/Signuppage/SignUpPage.jsx";
import { Cart } from "../pages/User/Cart.jsx";

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
        element: <AboutPage />,
    },

    {
        path: "/signin",
        element: <SignInPage />,
    },
{
        path: "/signup",
        element: <SignUpPage/>,
    },
    {
        path: "/cart",
        element: <Cart />
    }
]

export default UserRoutes;

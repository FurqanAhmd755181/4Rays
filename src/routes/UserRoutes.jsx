import LandingPage from "../pages/User/LandingPage/LandingPage.jsx";
import PricingPage from "../pages/User/pricingpage/PricingPage.jsx";
import AboutPage from "../pages/User/AboutPage/AboutPage.jsx";
import AccountAuth from "../pages/User/AccountPages/AccountAuth.jsx";
import MyAccountBody from "../pages/User/AccountPages/MyAccountBody.jsx";
import SignInPage from "../pages/authpages/Signinpage/Signinpage.jsx";
import SignUpPage from "../pages/authpages/Signuppage/SignUpPage.jsx";
import BillingForm from "../pages/User/Billing/BillingForm.jsx";
import BillingBody from "../pages/User/Billing/BillingBody.jsx";
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
        path: "/cart",
        element: <Cart />
    }
    ,
    {
        path: "/Signup",
        element: <AccountAuth/>,
    }
    ,
    {
        path : "/MyAccount",
        element : <MyAccountBody />
    }
    ,
    {
        path : "/checkout",
        element : <BillingBody />
    }

]

export default UserRoutes;

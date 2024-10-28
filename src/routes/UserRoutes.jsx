import LandingPage from "../pages/User/LandingPage/LandingPage.jsx";
import PricingPage from "../pages/User/pricingpage/PricingPage.jsx";
import AboutPage from "../pages/User/AboutPage/AboutPage.jsx";
import AccountAuth from "../pages/User/AccountPages/AccountAuth.jsx";
import MyAccountBody from "../pages/User/AccountPages/MyAccountBody.jsx";
import SignInPage from "../pages/authpages/Signinpage/Signinpage.jsx";
import SignUpPage from "../pages/authpages/Signuppage/SignUpPage.jsx";
import CustomerSupport from "../pages/User/CustomerSupport/CustomerSupport.jsx";

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
        path: "/Signup",
        element: <AccountAuth/>,
    },
    {
        path : "/MyAccount",
        element : <MyAccountBody />
    },
    {
        path : "/CustomerSuport",
        element : <CustomerSupport />
    }
]

export default UserRoutes;

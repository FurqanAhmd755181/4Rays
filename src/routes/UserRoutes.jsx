import LandingPage from "../pages/User/LandingPage/LandingPage.jsx";
import PricingPage from "../pages/User/pricingpage/PricingPage.jsx";
import AboutPage from "../pages/User/AboutPage/AboutPage.jsx";
import AccountAuth from "../pages/User/AccountPages/AccountAuth.jsx";
import MyAccountBody from "../pages/User/AccountPages/MyAccountBody.jsx";
import { Error } from "../pages/User/Layout/Error.jsx";
import BlogList from "../pages/User/Blog/BlogList.jsx";
import SignInPage from "../pages/authpages/Signinpage/Signinpage.jsx";
import SignUpPage from "../pages/authpages/Signuppage/SignUpPage.jsx";
import BillingBody from "../pages/User/Billing/BillingBody.jsx";
import { Cart } from "../pages/User/Cart.jsx";
import SubscriptionConfirmation from "../pages/User/Subscription/Subscription.jsx";

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
        path : "/bloglist",
        element : <BlogList />
    },
       { path : "/subscription",
        element : <SubscriptionConfirmation />
    },
    {
        path: "/error",
        element: <Error />
    }
    ,
    {
        path : "/checkout",
        element : <BillingBody />
    }

]

export default UserRoutes;

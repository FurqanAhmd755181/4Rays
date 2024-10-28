import LandingPage from "../pages/User/LandingPage/LandingPage.jsx";
import PricingPage from "../pages/User/pricingpage/PricingPage.jsx";
import AboutPage from "../pages/User/AboutPage/AboutPage.jsx";
import AccountAuth from "../pages/User/AccountPages/AccountAuth.jsx";
import MyAccountBody from "../pages/User/AccountPages/MyAccountBody.jsx";


import BlogList from "../pages/User/Blog/BlogList.jsx";

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
    }
]

export default UserRoutes;

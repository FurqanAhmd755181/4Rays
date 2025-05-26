import { createHashRouter } from "react-router-dom";
import UserLayout from "../pages/User/Layout/UserLayout.jsx";
import UserRoutes from "./UserRoutes.jsx";
import Signinpage from "../pages/authpages/Signinpage/Signinpage.jsx";
import SignUpPage from "../pages/authpages/Signuppage/SignUpPage.jsx";

const router = createHashRouter([
    {
        path: "/",
        element: <UserLayout />,
        children: UserRoutes
    },
    {
        path: "/sign-in",
        element: <Signinpage />
    },
    {
        path: "/sign-up",
        element: <SignUpPage />
    }
])

export default router;

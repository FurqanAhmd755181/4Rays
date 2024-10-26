import {createBrowserRouter} from "react-router-dom";
import UserLayout from "../pages/User/Layout/UserLayout.jsx";
import UserRoutes from "./UserRoutes.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <UserLayout />,
        children: UserRoutes
    }
])

export default router;
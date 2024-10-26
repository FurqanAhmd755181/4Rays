import Header from "./Header.jsx";
import {Outlet} from "react-router-dom";
import Footer from "./Footer.jsx";

function UserLayout() {
    return (
        <>
          <Header />
            <Outlet />
          <Footer />
        </>
    );
}

export default UserLayout;
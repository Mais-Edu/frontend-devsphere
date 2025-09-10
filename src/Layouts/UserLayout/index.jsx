import { Outlet } from "react-router-dom";
import UserHeader from "../../components/UserHeader";
import Footer from "../../components/Footer";

const UserLayout = () => {
    return (
        <>
            <UserHeader />
            <Outlet />
            <Footer />
        </>
    );
}

export default UserLayout;
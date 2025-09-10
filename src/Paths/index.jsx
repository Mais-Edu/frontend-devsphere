import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "../Layouts/SiteLayout";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import TestPage from "../pages/TestPage";
import UserLayout from "../Layouts/UserLayout";

const Paths = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SiteLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/test" element={<TestPage />} />
                </Route>
                <Route path="/user/" element={<UserLayout />}>
                </Route>
                <Route path="/*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Paths;
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "../SiteLayout";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import TestPage from "../pages/TestPage";

const Paths = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SiteLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/test" element={<TestPage />} />
                </Route>
                <Route path="/*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
     );
}
 
export default Paths;
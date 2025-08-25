import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "../SiteLayout";
import HomePage from "../pages/Home{age";
import NotFoundPage from "../pages/NotFoundPage";

const Paths = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SiteLayout />}>
                    <Route index element={<HomePage />} />
                </Route>
                <Route path="/*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
     );
}
 
export default Paths;
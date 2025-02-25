import { createHashRouter } from "react-router-dom";
import Frontlayout from "../layouts/Frontlayout";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import DemoPage from "../pages/DemoPage";
import DonatePage from "../pages/DonatePage";
import WishPage from "../pages/WishPage";
import GoodsPage from "../pages/GoodsPage";
import SpotlightPage from "../pages/SpotlightPage";


const router = createHashRouter([
    {
        path: "/",
        element: <Frontlayout />,
        children: [
            {
                path: "",
                element: <HomePage />,
            },
            {
                path: "search",
                element: <SearchPage />,
            },
            {
                path: "demo",
                element: <DemoPage />,
            },
            {
                path: "donate",
                element: <DonatePage />,
            },
            {
                path: "wish",
                element: <WishPage />,
            },
            {
                path: "goods",
                element: <GoodsPage />,
            },
            {
                path: "spotlight",
                element: <SpotlightPage />,
            },
        ],
    }
]);

export default router;
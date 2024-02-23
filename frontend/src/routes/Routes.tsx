import { createBrowserRouter } from "react-router-dom";
import Genres from "../pages/genres/Genres";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/genres", element: <Genres /> },
]);
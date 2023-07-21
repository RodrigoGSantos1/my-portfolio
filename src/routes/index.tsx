import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import ErrorPage from "../pages/404";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/projetos",
        element: <Projects />
    }
]);

export default router;

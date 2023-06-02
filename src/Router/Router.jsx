import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Details from "../Pages/Details/Details";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/details/:id',
                element: <Details />,
                loader: ()=> fetch('https://api.tvmaze.com/search/shows?q=all')
            }
        ]
    }
])

export default router;
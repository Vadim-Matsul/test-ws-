import Posts from "../pages/Posts";
import About from "../pages/About";

export const privateRoutes = [
    {path: "/posts", element: Posts},
    {path: "/about", element: About},
    {path: "*", element: About}

]  
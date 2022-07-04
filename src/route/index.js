import Posts from "../pages/Posts";
import About from "../pages/About";
import Interaction from "../pages/Interaction";

export const privateRoutes = [
    {path: "/posts", element: Posts},
    {path: "/about", element: About},
    {path: "*",      element: About},
    {path: "/interaction", element: Interaction}
]  
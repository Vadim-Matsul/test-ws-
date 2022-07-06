// import { useParams } from "react-router-dom";
import       Posts from "../pages/Posts";
import       About from "../pages/About";
import Interaction from "../pages/Interaction";
import    PageById from "../pages/PageById";
import    AuthPage from "../pages/AuthPage";

export const privateRoutes = [
    {path:       "/posts",  element: Posts      },
    {path:   "/posts/:id",  element: PageById   },
    {path:       "/about",  element: About      },
    {path:            "*",  element: About      },
    {path: "/interaction",  element: Interaction}
]  

export const publicRoutes = [
    {path: '/login', element: AuthPage },
    {path: '*',      element: AuthPage }
]
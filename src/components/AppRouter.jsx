import React from "react";
import { Route, Routes } from "react-router-dom";
import { privateRoutes } from "../route";



const AppRouter = () => {

    return (
        <Routes>
            { privateRoutes.map( route => 
                <Route 
                    path={ route.path } 
                    element={ <route.element/> } 
                    key = { route.path } 
                />)
            }
        </Routes>
    )
}


export default AppRouter;
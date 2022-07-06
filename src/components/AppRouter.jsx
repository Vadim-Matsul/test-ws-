import React, { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AppContext } from "../context";
import { privateRoutes, publicRoutes } from "../route";



const AppRouter = () => {

const {auth, setAuth} = useContext ( AppContext );

    useEffect (() => {
        if (localStorage.getItem('auth')){
            setAuth(true)
     }
    }, [auth])
    


    return (
            auth 
            ? <Routes>{ privateRoutes.map( route => 
                <Route 
                    path={ route.path } 
                    element={ <route.element/> } 
                    key = { route.path } 
                /> )}
              </Routes>
            : <Routes>{ publicRoutes.map( route => 
                <Route 
                    path={ route.path } 
                    element={ <route.element/> } 
                    key = { route.path } 
                /> )}
              </Routes>
            
    )
}


export default AppRouter;
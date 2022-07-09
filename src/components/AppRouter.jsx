import React, { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AppContext } from "../context";
import { useFetching } from "../hooks/useFetching";
import { privateRoutes, publicRoutes } from "../route";
import Loader from "./UI/loader/Loader";



const AppRouter = () => {

 const {auth, setAuth} = useContext ( AppContext );

 const [fetchAuth, loadingAuth, ErrorAuth]  = useFetching (() => {
    if ( localStorage.getItem('auth') ){
        setAuth(true)
    }
 })
    useEffect (() => {
       fetchAuth ()
    }, [auth])
    


    return (
        loadingAuth 
          ? <Loader /> 
          : auth 
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
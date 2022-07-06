import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostService } from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
import Loader from "../components/UI/loader/Loader";
import NavBar from "../components/UI/navbar/NavBar";



const PageById = () => {

 const params = useParams ()
 const [ postById, setPostById ] = useState ({})
 const [ comById, setComById ] = useState ([])

 const [PageById, loadingPage, errorPage] = useFetching ( async () => {
    const responsePost = await PostService.getPostById (params.id)
        setPostById ( responsePost.data )
    const responseCom  = await PostService.getComById  (params.id)
        setComById ( responseCom.data )
 })

 useEffect (() => {
    PageById ()
 },[])



    return (
        loadingPage
         ? <Loader />
         : <div>
                <NavBar />
                <div className={"Post PostById"} >
                    <h2>Пост  { postById.id }</h2>
                    <div>
                        <span className={"Post-content-title"}>{ postById.title }</span>
                    </div>
                    <div>
                        <span>{ postById.body }</span>
                    </div>
                    <div className={'Post-btns'}>
                    </div>
                </div>
                
                <div className={'Block-ComById'}>
                    <h3>Комментарии к { postById.id } посту</h3>
                    { comById.map( comment => 
                        <div className={'ComById'}>
                            <h2>{ comment.email }</h2>
                            <div>
                                <span>{ comment.name }</span>
                                <span>{ comment.body }</span>
                            </div>
                        </div>
                  )}
                

                </div>
           </div>
        
    )
}


export default PageById;
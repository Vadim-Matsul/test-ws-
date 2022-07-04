import React, { useMemo } from "react";


export const useFiltering = (posts, sort, query) => {
    
   const sortedPosts = useSorting (posts, sort)

   const sortedAndFilteredPosts = useMemo (() => {
      return sortedPosts.filter (post => post.title.toLowerCase().includes( query ))
   },[sortedPosts, query])
   
 return sortedAndFilteredPosts;
}


export const useSorting = (posts, sort) => {

   const sortedPosts = useMemo (() => {
      if (sort){
         return [...posts].sort( (a,b) => a[sort].localeCompare(b[sort]) )
      }  return posts
   }, [posts, sort] )

   return sortedPosts;
}
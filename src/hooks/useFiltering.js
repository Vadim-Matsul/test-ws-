import React, { useMemo } from "react";

export const useFiltering = (posts, sort) => {
    
    const sortedPosts = useMemo (() => {
        if(sort){
            return posts.sort((a,b) => a[sort].localeCompare(b[sort]))
        } else {
            return posts
        }
    }, [posts, sort])

    return sortedPosts;
}
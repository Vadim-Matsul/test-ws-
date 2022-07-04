import React from "react";
import axios from "axios";

export class PostService {

    static getPosts = async (limit, page) => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                 _page: page
            }
        })
        return response;
    }


    static getPostById = async (id) => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        return response;
    }


    static getComById = async (id) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response;
    }
}
// creating API with many endpoint using redux https://redux-toolkit.js.org/rtk-query/usage-with-typescript#createapi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const moviesDB = createApi({
    reducerPath: 'moviesDB', baseQuery: fetchBaseQuery({
        baseUrl: "https://api.themoviedb.org/3",
    }),
    endpoints: (builder) => {
        return {
            getMoviesDB: builder.query({
                query: () => ({
                    url: `/discover/movie?api_key=${REACT_APP_API_KEY}&with_network=123&language=en-US`,
                    method: 'GET',
                }),
            }),
            getMoviesbyId: builder.query({
                query: (info) => {
                    const {id} = info;
                    return {
                        url: `/movie/${id}?language=en-US&api_key=${REACT_APP_API_KEY}`,
                        method: 'GET',
                    }
                }
            })
        }
    }
})

export const {useGetMoviesDBQuery, useGetMoviesbyIdQuery} = moviesDB
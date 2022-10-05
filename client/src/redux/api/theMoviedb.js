// creating API with many endpoint using redux https://redux-toolkit.js.org/rtk-query/usage-with-typescript#createapi
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const MovieDBApi = createApi({
    reducerPath: 'theMoviedb',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3'
    }),
    endpoints:(builder) => ({
        getMoviedb: builder.query({query: () => '/discover/movie?sort_by=popularity.desc'})
    }),
})
export const {useGetMoviedbQuery} = MovieDBApi

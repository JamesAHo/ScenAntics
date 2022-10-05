import { configureStore} from '@reduxjs/toolkit';
import { MovieDBApi } from './api/theMoviedb';

export const store = configureStore({
    reducer: {
        [MovieDBApi.reducerPath]: MovieDBApi.reducer,
    }, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(MovieDBApi.middleware)
})
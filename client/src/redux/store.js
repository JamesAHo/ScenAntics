import { configureStore} from '@reduxjs/toolkit';
import { moviesDB } from './api/theMoviedb';



const store = configureStore({
    reducer: {
        [moviesDB.reducerPath]: moviesDB.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesDB.middleware),
})
  
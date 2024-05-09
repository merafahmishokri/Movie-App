import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./slices/movieSlice"
import favoritesReducer from "./slices/favoriteSlice"
import usersReducer from "./slices/userSlice"

const store=configureStore({
    reducer:{
        movies:moviesReducer,
        favorites:favoritesReducer,
        users:usersReducer
    }
})

export default store;
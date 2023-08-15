import { configureStore } from "@reduxjs/toolkit"
import { tmdbApi } from "../services/tmdb"
import genre from "../features/currentGenre"
import userReducer from "../features/auth"

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenre: genre,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
})

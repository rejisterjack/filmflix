import { useState } from "react"
import { Box, CircularProgress, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { useGetMoviesQuery } from "../../services/tmdb"
import { MovieList } from "../import"

const Movies = () => {
  const [page, setPage] = useState(1)
  const { genreName, searchQuery } = useSelector((state) => state.currentGenre) 
  const { data, error, isFetching } = useGetMoviesQuery({ genreName, page, searchQuery })

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem"></CircularProgress>
      </Box>
    )
  }

  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          no movies that match that name <br /> please search for something else
        </Typography>
      </Box>
    )
  }

  if (error) return "an error has occured"

  return (
    <div>
      <MovieList movies={data} />
    </div>
  )
}

export default Movies

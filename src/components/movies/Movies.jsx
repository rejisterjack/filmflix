import { Box, CircularProgress, useMediaQuery,Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { useGetMoviesQuery } from "../../services/tmdb"

const Movies = () => {

  const {data} = useGetMoviesQuery()

  return (
    <div>Movies</div>
  )
}

export default Movies
// import { useState } from "react"
// import { Box, CircularProgress, Typography } from "@mui/material"
// import { useSelector } from "react-redux"
// import { useGetMoviesQuery } from "../../services/tmdb"
// import { MovieList } from "../import"

// const Movies = () => {
//   const [page, setPage] = useState(1)
//   const { genreName, searchQuery } = useSelector((state) => state.currentGenre)
//   const { data, error, isFetching } = useGetMoviesQuery({
//     genreName,
//     page,
//     searchQuery,
//   })

//   if (isFetching) {
//     return (
//       <Box display="flex" justifyContent="center">
//         <CircularProgress size="4rem"></CircularProgress>
//       </Box>
//     )
//   }

//   if (!data.results.length) {
//     return (
//       <Box display="flex" alignItems="center" mt="20px">
//         <Typography variant="h4">
//           no movies that match that name <br /> please search for something else
//         </Typography>
//       </Box>
//     )
//   }

//   if (error) return "an error has occured"

//   return (
//     <div>
//       <MovieList movies={data} />
//     </div>
//   )
// }

// export default Movies

import { useState } from "react"
import { Box, CircularProgress, useMediaQuery, Typography } from "@mui/material"
import { useSelector } from "react-redux"

import { MovieList, Pagination, FeaturedMovie } from "../import"
import { useGetMoviesQuery } from "../../services/tmdb"

function Movies() {
  const [page, setPage] = useState(1)
  const { genreName, searchQuery } = useSelector(
    (state) => state.currentGenre
  )
  const { data, error, isFetching } = useGetMoviesQuery({
    genreName,
    page,
    searchQuery,
  })

  const lg = useMediaQuery((theme) => theme.breakpoints.only("lg"))
  const numberOfMovies = lg ? 16 : 18

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    )
  }

  if (!data.results.length) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" mt="20px">
        <Typography variant="h4">
          No movies that match that name.
          <br />
          Please searh for something else.
        </Typography>
      </Box>
    )
  }

  if (error) return "An error has occured."

  return (
    <div>
      <FeaturedMovie movie={data.results[0]} />
      <MovieList movies={data} numberOfMovies={numberOfMovies} excludeFirst />
      <Pagination
        currentPage={page}
        setPage={setPage}
        totalPages={data.total_pages}
      />
    </div>
  )
}

export default Movies

import { Grid } from "@mui/material"
import useStyles from "./styles"
import { Movie } from "../import"

const MovieList = ({
  movies,
  numberOfMovies,
  movieLinkPrefix,
  useRelativeLinks,
}) => {
  const classes = useStyles()

  return (
    <Grid container className={classes.moviesContainer}>
      {movies.results.slice(0, numberOfMovies).map((movie, i) => (
        <Movie
          key={i}
          movie={movie}
          i={i}
          movieLinkPrefix={movieLinkPrefix}
          useRelativeLinks={useRelativeLinks}
        />
      ))}
    </Grid>
  )
}

export default MovieList

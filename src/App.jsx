import { CssBaseline } from "@mui/material"
import { Routes, Route } from "react-router-dom"
import useStyles from "./components/styles"
import {
  Actors,
  MovieInformationl,
  Movies,
  NavBar,
  Profile,
} from "./components/import"

const App = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route path="/" element={<Movies />}></Route>
          <Route path="movie/:id" element={<MovieInformationl />}></Route>
          <Route path="actors/:id" element={<Actors />}></Route>
          <Route path="profile/:id" element={<Profile />}></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App

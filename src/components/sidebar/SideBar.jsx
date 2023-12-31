import { useDispatch, useSelector } from "react-redux"
import { selectGenre } from "../../features/currentGenre" // Adjust the import path
import genreIcons from "../../assets/genres"
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
} from "@mui/material"
import { Link } from "react-router-dom"
import { useTheme } from "@mui/styles"
import useStyles from "./styles"
import { useGetGenresQuery } from "../../services/tmdb"
import { useEffect } from "react"

const categories = [
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top_rated" },
  { label: "Upcoming", value: "upcoming" },
]

const blueLogo =
  "https://res.cloudinary.com/dktfpedhu/image/upload/v1692735668/filmflix/filmflix-red_ywdxiz.png"
const redLogo =
  "https://res.cloudinary.com/dktfpedhu/image/upload/v1692735668/filmflix/fimlflix-blue_hpliku.png"

const SideBar = ({ setMobileOpen }) => {
  const { genreName } = useSelector((state) => state.currentGenre)
  const theme = useTheme()
  const classes = useStyles()
  const { data, isFetching } = useGetGenresQuery()
  const dispatch = useDispatch()
  // const myData = data.genres.map((item)=>({name: item.name, id: item.id}))
  // console.log(myData)

  useEffect(() => {
    setMobileOpen(false)
  }, [genreName])
  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === "light" ? redLogo : blueLogo}
          alt="flimflix logo"
        />
      </Link>

      <Divider />

      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => dispatch(selectGenre(value))} button>
              <ListItemIcon>
                <img
                  src={genreIcons[label.toLowerCase()]}
                  alt=""
                  className={classes.genreImages}
                  height={30}
                />
              </ListItemIcon>
              <ListItemText primary={label}></ListItemText>
            </ListItem>
          </Link>
        ))}
      </List>

      <Divider />

      <List>
        <ListSubheader>Genres</ListSubheader>
        {isFetching ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress></CircularProgress>
          </Box>
        ) : (
          data.genres.map(({ name, id }) => (
            <Link key={name} className={classes.links} to="/">
              <ListItem onClick={() => dispatch(selectGenre(id))} button>
                <ListItemIcon>
                  <img
                    src={genreIcons[name.toLowerCase()]}
                    alt=""
                    className={classes.genreImages}
                    height={30}
                  />
                </ListItemIcon>
                <ListItemText primary={name}></ListItemText>
              </ListItem>
            </Link>
          ))
        )}
      </List>
    </>
  )
}

export default SideBar

import { useEffect } from "react";
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/styles";
import useStyles from "./styles";

const categories = [
    { label: "Top Rated", value: 'topRated' },
    { label: "Popular", value: 'popular' },
    { label: "Upcoming", value: 'upcoming' },
]

const demoCategories = [
    { label: "Comedy", value: "populor" },
    { label: "Action", value: "action" },
    { label: "Horror", value: "horror" },
    { label: "Animation", value: "animation"}
]

const redLogo = "https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png";
const blueLogo = "https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png";

const Sidebar = ({ setMobileOpen }) => {
    const theme = useTheme();
    const classes = useStyles();
    return (
        <>
            <Link to="/" className={classes.imageLink}>
                <img 
                    className={classes.image} 
                    src={theme.palette.mode === "light" ? blueLogo : redLogo} 
                    alt="Movieverse Logo" 
                    />
            </Link>
            <Divider />
            <List>
                <ListSubheader>Categories</ListSubheader>
                {categories.map(({label, value}) => (
                    <Link key={value} className={classes.links} to="/">
                        <ListItem onClick={() => {}} button>
                            {/* <ListItemIcon>
                                <img src={redLogo} className={classes.genreImages} height={30} />
                            </ListItemIcon> */}
                            <ListItemText primary={label} />
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Divider />
            <List>
                <ListSubheader>Genres</ListSubheader>
                {demoCategories.map(({label, value}) => (
                    <Link key={value} className={classes.links} to="/">
                        <ListItem onClick={() => {}} button>
                            {/* <ListItemIcon>
                                <img src={redLogo} className={classes.genreImages} height={30} />
                            </ListItemIcon> */}
                            <ListItemText primary={label} />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </>
    )
}

export default Sidebar;
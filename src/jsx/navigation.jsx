/**
 * @file navigation.jsx
 * @author Brett Carney (brettcarney.com)
 * @brief Represents the navbar
 * 
 * @version 1.0
 * @date 2021-04-28
 * 
 */

import ReactDOM from 'react-dom';
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: "#f17f00",
    },
    textOnLight: {
        color: "#3d1500",
        fontWeight: "bold",
    }
}));

export default function ButtonAppBar({ pages, pagesArray }) {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    // On click handler for the hamburger menu
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // Handler for closing the hamburger menu
    const handleClose = () => {
        setAnchorEl(null);
    };

    // Create menu items from the pages array
    var navbarItems = pagesArray.map(page => {

        let navbarLink = (
            <MenuItem key={page.location} onClick={handleClose} component={Link} href={page.location}>
                {page.name}
            </MenuItem>
        );

        return (
            navbarLink
        );
    });

    const pageUrl = window.location.href;
    // Get the page title
    const matchedPage = () => {
        let matchedString = pageUrl.match("[^\/]+(?=\/$|$)")[0];
        let formattedTitle = pages[matchedString] !== undefined ? pages[matchedString].name : pages["home"].name;
        return formattedTitle;
    }

    return (
        <div className={classes.root}>
            <AppBar className={`${classes.appBar} ${classes.textOnLight}`} position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
                        <MenuIcon aria-controls="simple-menu" aria-haspopup="true" />
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {navbarItems}
                    </Menu>

                    <Typography variant="h6" className={`${classes.title} ${classes.textOnLight}`}>
                        {matchedPage()}
                    </Typography>
                    {/* <Button color="inherit">Login</Button> */}
                </Toolbar>
            </AppBar>
        </div>
    );
}

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse1: '',
            pages: {
                "home": {
                    name: "Home",
                    location: "/"
                },
                "schedule": {
                    name: "Schedule",
                    location: "/schedule"
                },
                "pokemon": {
                    name: "Pokemon",
                    location: "/pokemon"
                },
                "shinylocke": {
                    name: "Shinylocke",
                    location: "/shinylocke"
                }
            },
            pagesArray: [
                {
                    name: "Home",
                    location: "/"
                },
                {
                    name: "Schedule",
                    location: "/schedule"
                },
                {
                    name: "Pokemon",
                    location: "/pokemon"
                },
                {
                    name: "Shinylocke",
                    location: "/shinylocke"
                }
            ]
        };
    }

    render() {
        return (
            <ButtonAppBar pages={this.state.pages} pagesArray={this.state.pagesArray}></ButtonAppBar>
        );
    }
}

ReactDOM.render(<Navigation />, document.getElementById("navigation"));
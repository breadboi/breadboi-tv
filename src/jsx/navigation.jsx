/**
 * @file navigation.jsx
 * @author Brett Carney (brettcarney.com)
 * @brief Handles the navbar and drawer functionality for navigating the site.
 * 
 * @version 1.0
 * @date 2021-04-28
 * 
 */

import React from "react";

/* Navbar imports */
import { makeStyles } from "@material-ui/core";
import { AppBar, IconButton, Toolbar, List, ListItem, ListItemText, Container, Hidden } from "@material-ui/core"

/* Drawer imports */
import { Drawer } from "@material-ui/core"
import { Menu } from "@material-ui/icons"
import { useState } from "react";

/* Public Facing Links */
const navLinks = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "Schedule",
        path: "/schedule"
    },
    {
        title: "Pokemon",
        path: "/pokemon"
    },
    {
        title: "Shinylocke",
        path: "/shinylocke"
    }
];

/* Styling for MUI Components */
const useStyles = makeStyles({
    appBar: {
        backgroundColor: `#F17F00`
    },
    navbarDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },
    navDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },
    linkText: {
        fontFamily: `Breadfont`,
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `#3D1500`,
        fontWeight: `bold`,
        fontSize: `31px`,
        '&:hover': {
            color: "#FFEED7",
        },
        '&:click': {
            color: "#00BAF0",
        }
    },
    list: {
        width: 250
    }
});

/**
 * 
 * @returns Navbar, Hamburger, and Drawer navigation elements
 */
const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <Container maxWidth={false} className={classes.navbarDisplayFlex}>
                    <IconButton edge="start" color="inherit" aria-label="home">
                        <a href={navLinks[0].path} key={navLinks[0].title}>
                            <img src="public/assets/channel-logo-icon.png" width="50px"></img>
                        </a>
                    </IconButton>

                    {/* Hide on Desktop */}
                    <Hidden smDown>
                        <List
                            component="nav"
                            aria-labelledby="main navigation"
                            className={classes.navDisplayFlex}
                        >
                            {navLinks.map(({ title, path }) => (
                                <a href={path} key={title} className={classes.linkText}>
                                    <ListItem button>
                                        <ListItemText disableTypography primary={title} />
                                    </ListItem>
                                </a>
                            ))}
                        </List>
                    </Hidden>

                    {/* Hide on Mobile */}
                    <Hidden mdUp>
                        <SideDrawer navLinks={navLinks}></SideDrawer>
                    </Hidden>

                </Container>
            </Toolbar>
        </AppBar>
    )
}

/**
 * 
 * @param {*} navLinks Valid navigation json object.
 * @returns 
 */
const SideDrawer = ({ navLinks }) => {
    const classes = useStyles();
    const [state, setState] = useState({ right: false })

    /**
     * 
     * @param {*} anchor What direction the drawer slides in from
     * @param {*} open Drawer State
     * @returns 
     */
    const toggleDrawer = (anchor, open) => event => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return
        }

        setState({ [anchor]: open })
    }

    /**
     * 
     * @param {*} anchor What direction the drawer slides in from
     * @returns 
     */
    const sideDrawerList = anchor => (
        <div
            className={classes.list} /*Add this */
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List component="nav">
                {navLinks.map(({ title, path }) => (
                    <a href={path} key={title} className={classes.linkText} /*Add this*/>
                        <ListItem button>
                            <ListItemText disableTypography primary={title} />
                        </ListItem>
                    </a>
                ))}
            </List>
        </div>
    )

    return (
        <React.Fragment>
            <IconButton
                edge="start"
                aria-label="menu"
                onClick={toggleDrawer("right", true)}
            >
                <Menu fontSize="large" className={"bread-dark"} />
            </IconButton>

            <Drawer
                anchor="right"
                open={state.right}
                onOpen={toggleDrawer("ritght", true)}
                onClose={toggleDrawer("right", false)}
            >
                {sideDrawerList("right")}
            </Drawer>
        </React.Fragment>
    )
}


export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <Header></Header>
        );
    }
}
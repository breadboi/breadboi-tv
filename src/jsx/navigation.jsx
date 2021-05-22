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
}));

export default function ButtonAppBar({ pages }) {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    var navbarItems = pages.map(page => {

        let navbarLink = (
            <MenuItem onClick={handleClose} component={Link} href={page.location}>
                {page.name}
            </MenuItem>
        );

        return (
            navbarLink
        );
    });

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} />
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

                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
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
            pages: [
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
                }]
        };
    }

    render() {
        return (
            <ButtonAppBar pages={this.state.pages}></ButtonAppBar>
        );
    }
}

ReactDOM.render(<Navigation />, document.getElementById("navigation"));
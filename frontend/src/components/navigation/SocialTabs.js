/**
 * @file home.jsx
 * @author Brett Carney (brettcarney.com)
 * @brief Represents the main content on the home page
 * 
 * @version 1.0
 * @date 2020-09-27
 * 
 */

import { makeStyles } from "@material-ui/core";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Hidden from "@material-ui/core/Hidden";

import { Timeline } from 'react-twitter-widgets';
var React = require('react');

/* Styling for MUI Components */
const useStyles = makeStyles({
    appBar: {
        backgroundColor: `#3D1500`
    },
    linkText: {
        fontFamily: `Breadfont`,
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `#FFEED7`,
        fontWeight: `bold`,
        fontSize: `31px`
    }
});

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const a11yProps = (index) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const SocialTabs = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <AppBar position="static" className={classes.appBar}>
                <Tabs value={value} onChange={handleChange} centered aria-label="simple tabs example">
                    <Tab label="Twitch" {...a11yProps(0)} />
                    <Tab label="Twitter" {...a11yProps(1)} />
                    <Tab label="YouTube" {...a11yProps(2)} />
                </Tabs>
            </AppBar>

            <TabPanel value={value} index={0}>
                {/* Stream Card */}
                <iframe
                    title="imbreadboi-player"
                    src={"https://player.twitch.tv/?channel=imbreadboi&parent=" + window.location.hostname}
                    frameBorder="0"
                    allowFullScreen={true}
                    scrolling="no"
                    height="500px"
                    width="100%"></iframe>
                <Hidden smDown>
                    <iframe
                        title="imbreadboi-chat"
                        frameBorder="0"
                        scrolling="no"
                        id="chat_embed"
                        src={"https://www.twitch.tv/embed/imbreadboi/chat?parent=" + window.location.hostname}
                        height="500px"
                        width="100%">
                    </iframe>
                </Hidden>
            </TabPanel>

            <TabPanel value={value} index={1}>
                {/* Twitter Card */}
                <Hidden smDown>
                    <Timeline
                        dataSource={{
                            sourceType: 'profile',
                            screenName: 'bread_and_boi'
                        }}
                        options={{
                            height: "1000px",
                            width: '100%'
                        }}
                    />
                </Hidden>

                <Hidden mdUp>
                    <Timeline
                        dataSource={{
                            sourceType: 'profile',
                            screenName: 'bread_and_boi'
                        }}
                        options={{
                            height: "500px",
                            width: '100%'
                        }}
                    />
                </Hidden>
            </TabPanel>

            <TabPanel value={value} index={2}>
                {/* Youtube */}
                <iframe title="youtube-player" 
                        width="100%"
                        height="500"
                        src="https://www.youtube.com/embed?listType=user_uploads&list=bcash6911" 
                        allowFullScreen
                ></iframe>
            </TabPanel>
        </div>
    );
}

export default SocialTabs;
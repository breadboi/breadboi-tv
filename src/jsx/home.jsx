/**
 * @file home.jsx
 * @author Brett Carney (brettcarney.com)
 * @brief Represents the main content on the home page
 * 
 * @version 1.0
 * @date 2020-09-27
 * 
 */

var ReactDOM = require('react-dom');
var React = require('react');

import Navigation from './navigation.jsx';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Twitch" {...a11yProps(0)} />
                    <Tab label="Twitter" {...a11yProps(1)} />
                    <Tab label="YouTube" {...a11yProps(2)} />
                </Tabs>
            </AppBar>

            <TabPanel value={value} index={0}>
                {/* Stream Card */}
                <iframe src={"https://player.twitch.tv/?channel=imbreadboi&parent=" + location.hostname} frameBorder="0" allowFullScreen={true} scrolling="no" height="378px" width="100%"></iframe>
                <iframe frameBorder="0"
                    scrolling="no"
                    id="chat_embed"
                    src={"https://www.twitch.tv/embed/imbreadboi/chat?parent=" + location.hostname}
                    height="500"
                    width="100%">
                </iframe>
            </TabPanel>

            <TabPanel value={value} index={1}>
                {/* Twitter Card */}
                <a className="twitter-timeline content-item" data-height="890px" href="https://twitter.com/bread_and_boi?ref_src=twsrc%5Etfw"></a>
            </TabPanel>

            <TabPanel value={value} index={2}>
                {/* Youtube */}
                <iframe width="100%" height="720" src="https://www.youtube.com/embed?listType=user_uploads&list=bcash6911" allowFullScreen></iframe>
            </TabPanel>
        </div>
    );
}

class Home extends React.Component {
    render() {
        return (
            <SocialTabs></SocialTabs>
        );
    }
}

ReactDOM.render(
    <div>
        <Navigation />
        <Home />
    </div>
    , document.getElementById("home"));
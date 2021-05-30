/**
 * @file streams.jsx
 * @author Brett Carney (brettcarney.com)
 * @brief Represents the streams section of the main landing page
 * 
 * @version 1.0
 * @date 2020-02-19
 * 
 */

var ReactDOM = require('react-dom');
var React = require('react');

import Navigation from './navigation.jsx';
import Bingo from './bingo.jsx';

class Pokemon extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            breadboi: {
                channel: 'imbreadboi',
                host: '71.201.181.148',
                port: '3001'
            },
            pickels: {
                channel: 'pickels1481',
                host: '71.201.181.148',
                port: '3001'
            }
        };
    }

    render() {
        return (

            <div className="stream-section">
                <div className="gird grid-pad">
                    <div className="row streams-row">

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="card shadow card-item-dark">
                                <div className="card-body">
                                    <iframe src={"https://player.twitch.tv/?channel=" + this.state.breadboi.channel + "&parent=" + location.hostname} frameBorder="0" allowFullScreen={true} scrolling="no" height="500" width="100%"></iframe>
                                    <iframe frameBorder="0"
                                        scrolling="no"
                                        id="chat_embed"
                                        src={"https://www.twitch.tv/embed/" + this.state.breadboi.channel + "/chat?parent=" + location.hostname}
                                        height="500"
                                        width="100%">
                                    </iframe>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="card shadow card-item-dark">
                                <div className="card-body">
                                    <iframe src={"https://player.twitch.tv/?channel=" + this.state.pickels.channel + "&parent=" + location.hostname} frameBorder="0" allowFullScreen={true} scrolling="no" height="500" width="100%"></iframe>
                                    <iframe frameBorder="0"
                                        scrolling="no"
                                        id="chat_embed"
                                        src={"https://www.twitch.tv/embed/" + this.state.pickels.channel + "/chat?parent=" + location.hostname}
                                        height="500"
                                        width="100%">
                                    </iframe>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}

ReactDOM.render(<div><Navigation /><Bingo /><Pokemon /></div>, document.getElementById("pokemon"));

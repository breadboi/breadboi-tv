/**
 * @file mainContent.jsx
 * @author Brett Carney (brettcarney.com)
 * @brief Represents the main content on the home page
 * 
 * @version 1.0
 * @date 2020-09-27
 * 
 */

var ReactDOM = require('react-dom');
var React = require('react');

class MainContent extends React.Component {
    render() {
        return (
            <div className="stream-section">
                <div className="gird grid-pad">

                    <div className="row main-content-row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="card twitter-dark shadow stream-card content-item">
                                <div className="card-body">
                                    <iframe src={"https://player.twitch.tv/?channel=imbreadboi&parent=" + location.hostname} frameBorder="0" allowFullScreen={true} scrolling="no" height="378" width="100%"></iframe>
                                    <iframe frameBorder="0"
                                        scrolling="no"
                                        id="chat_embed"
                                        src={"https://www.twitch.tv/embed/imbreadboi/chat?parent=" + location.hostname}
                                        height="500"
                                        width="100%">
                                    </iframe>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <a className="twitter-timeline content-item" data-height="942px" data-theme="dark" href="https://twitter.com/bread_and_boi?ref_src=twsrc%5Etfw"></a>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

ReactDOM.render(<MainContent />, document.getElementById("mainContent"));
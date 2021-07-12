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

import Navigation from "./navigation.jsx";

class Shinylocke extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            breadboi: {
                channel: 'imbreadboi',
                host: '71.201.181.148'
            },
            pickels: {
                channel: 'pickels1481',
                host: '71.201.181.148'
            },
            meech: {
                channel: 'thatboymeech',
                host: '71.201.181.148'
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
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="card shadow card-item-dark">
                                <div className="card-body">
                                    <iframe src={"https://player.twitch.tv/?channel=" + this.state.pickels.channel + "&parent=" + location.hostname} frameBorder="0" allowFullScreen={true} scrolling="no" height="500" width="100%"></iframe>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="card shadow card-item-dark">
                                <div className="card-body">
                                    <iframe src={"https://player.twitch.tv/?channel=" + this.state.meech.channel + "&parent=" + location.hostname} frameBorder="0" allowFullScreen={true} scrolling="no" height="500" width="100%"></iframe>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="card shadow card-item-dark">
                                <div className="card-body">
                                    <div id="myCarousel" className="carousel slide" data-interval="false" data-ride="carousel">
                                        <ol className="carousel-indicators">
                                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                            <li data-target="#myCarousel" data-slide-to="1"></li>
                                            <li data-target="#myCarousel" data-slide-to="2"></li>
                                        </ol>
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <iframe frameBorder="0"
                                                    scrolling="no"
                                                    id="chat_embed"
                                                    src={"https://www.twitch.tv/embed/" + this.state.breadboi.channel + "/chat?parent=" + location.hostname}
                                                    height="500"
                                                    width="100%">
                                                </iframe>
                                            </div>
                                            <div className="carousel-item">
                                                <iframe frameBorder="0"
                                                    scrolling="no"
                                                    id="chat_embed"
                                                    src={"https://www.twitch.tv/embed/" + this.state.pickels.channel + "/chat?parent=" + location.hostname}
                                                    height="500"
                                                    width="100%">
                                                </iframe>
                                            </div>
                                            <div className="carousel-item">
                                                <iframe frameBorder="0"
                                                    scrolling="no"
                                                    id="chat_embed"
                                                    src={"https://www.twitch.tv/embed/" + this.state.meech.channel + "/chat?parent=" + location.hostname}
                                                    height="500"
                                                    width="100%">
                                                </iframe>
                                            </div>
                                        </div>

                                        <a className="carousel-control carousel-control-prev" data-target="#myCarousel" data-slide="prev">
                                            <span className="carousel-control-prev-icon"></span>
                                        </a>
                                        <a className="carousel-control carousel-control-next" data-target="#myCarousel" data-slide="next">
                                            <span className="carousel-control-next-icon"></span>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}

ReactDOM.render(<div><Navigation /><Shinylocke /></div>, document.getElementById("shinylocke"));

/**
 * @file streams.jsx
 * @author Brett Carney (brettcarney.com)
 * @brief Represents the streams section of the main landing page
 * 
 * @version 1.0
 * @date 2020-02-19
 * 
 */

class Streams extends React.Component {
    render() {
        return (
            <div className="stream-section">
                <div className="gird grid-pad">

                    <div className="row text-center">
                        <div className="col section-header white-heading">
                            <h2>Pokemon Black/White | Bread boi vs Pickels</h2>
                        </div>
                    </div>

                    <div className="row streams-row">

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="card bg-dark project-card shadow">
                                <div className="card-body">
                                    <iframe src="https://player.twitch.tv/?channel=imbreadboi&parent=localhost" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="100%"></iframe>
                                    <iframe frameborder="0"
                                        scrolling="no"
                                        id="chat_embed"
                                        src="https://www.twitch.tv/embed/imbreadboi/chat?parent=localhost"
                                        height="500"
                                        width="100%">
                                    </iframe>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="card bg-dark project-card shadow">
                                <div className="card-body">
                                    <iframe src="https://player.twitch.tv/?channel=pickels1481&parent=localhost" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="100%"></iframe>
                                    <iframe frameborder="0"
                                        scrolling="no"
                                        id="chat_embed"
                                        src="https://www.twitch.tv/embed/pickels1481/chat?parent=localhost"
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

ReactDOM.render(<Streams />, document.getElementById("streams"));
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
    constructor(props) {
        super(props);

        const urlParams = new URLSearchParams(window.location.search);
        const streamsParam = urlParams.get('streams');        

        const queryStreams = streamsParam.split(',');
        
        this.state = {
            streams: queryStreams
        };
    }

    render() {
        return (

            <div className="stream-section">
                <div className="gird grid-pad">
                    <div className="row streams-row">
                        <div className="row">
                            {this.state.streams.map(function (stream, i) {
                                return <Stream key={i} stream={stream} />;
                            })}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

class Stream extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="card bg-dark project-card shadow">
                    <div className="card-body">
                        <iframe src={"https://player.twitch.tv/?channel=" + this.props.stream + "&parent=" + location.hostname} frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="100%"></iframe>
                        <iframe frameborder="0"
                            scrolling="no"
                            id="chat_embed"
                            src={"https://www.twitch.tv/embed/" + this.props.stream + "/chat?parent=" + location.hostname}
                            height="500"
                            width="100%">
                        </iframe>
                    </div>
                </div>
            </div>

        );
    }
}

ReactDOM.render(<Streams />, document.getElementById("streams"));
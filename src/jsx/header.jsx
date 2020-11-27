/**
 * @file header.jsx
 * @author Brett Carney (brettcarney.com)
 * @brief Header for the main landing page
 * @version 1.0
 * @date 2020-02-19
 * 
 */

class Header extends React.Component {
  render() {
    return (
      <div className="grid grid-pad">

        <div className="row text-center">
          <div className="circular shadow-lg">
            <img id="twitch_logo" src="public/assets/channel-logo.png" alt="Avatar" className="bread-logo" />
          </div>          
        </div>

        <div className="row text-center">
          <div className="col">
            <div className="white-heading">
              <h1>Bread boi</h1>
            </div>
          </div>
        </div>

        <div className="row text-center">
          <div className="col">
            <div className="white-heading">
              <h2>Twitch Streamer</h2>
            </div>
          </div>
        </div>

        <div className="row text-center">
          <div className="col">
            <a href="https://www.twitch.tv/products/imbreadboi" target="_blank" class="btn btn-lg white-heading" title="Subscribe">
              <i class="zmdi zmdi-twitch white-heading"></i> Consider Subscribing
            </a>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById("header"));
/**
 * @file links.jsx
 * @author Brett Carney (brettcarney.com)
 * @brief Links footer for the main landing page
 * @version 1.0
 * @date 2020-02-19
 * 
 */

var ReactDOM = require('react-dom');
var React = require('react');

class Links extends React.Component
{
    render()
    {
        return (
            <div className="links-section">
                <div className="gird grid-pad">

                    <div className="link-container text-center row">

                        <div className="col">
                            <a href="https://twitch.tv/imbreadboi" target="_blank" className="links-section-a" onDragStart={(e) => { e.preventDefault() }}><i className="link-section-icon shadow-lg zmdi zmdi-twitch" onDragStart={(e) => { e.preventDefault() }}></i></a>
                        </div>

                        <div className="col">
                            <a href="https://twitter.com/bread_and_boi" target="_blank" className="links-section-a" onDragStart={(e) => { e.preventDefault() }}><i className="link-section-icon shadow-lg zmdi zmdi-twitter"></i></a>
                        </div>

                        <div className="col">
                            <a href="https://www.youtube.com/channel/UCwi2mq8wAFsU5ESSUhX4l_A?view_as=subscriber" target="_blank" className="links-section-a" onDragStart={(e) => { e.preventDefault() }}><i className="link-section-icon shadow-lg zmdi zmdi-youtube"></i></a>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

ReactDOM.render(<Links />, document.getElementById("links"));

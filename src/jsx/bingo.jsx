/**
 * @file bingo.jsx
 * @author Brett Carney (brettcarney.com)
 * @brief Represents the bingo content
 * 
 * @version 1.0
 * @date 2021-02-09
 * 
 */

var ReactDOM = require('react-dom');
var React = require('react');

class Bingo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bingoBoard: []
        };

        this.serverRequest = this.serverRequest.bind(this);
    }

    serverRequest() {
        fetch("/api/bingo")
            .then(response => response.json())
            .then(data => this.setState({ bingoBoard: data }));
    }

    componentDidMount() {
        this.serverRequest();
        this.interval = setInterval(() => this.serverRequest(), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {

        var bingoSlot = this.state.bingoBoard.map(bingoItem => {

            let bingoDiv = (
                <div key={bingoItem.slot} className={bingoItem.colors + " col bingo-cell"} id={bingoItem.slot}>
                    {bingoItem.name}
                </div>
                );

            return (
                bingoDiv
            );
        });

        return (
            <div className="bingo-section">
                <div className="bread-dark bingo-title text-center">
                    <div>Pokemon Lockout Bingo Board</div>    
                </div>
                <div className="bingo-grid grid grid-pad">
                    <div className="row row-cols-5 bingo-row">
                        {bingoSlot}
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Bingo />, document.getElementById("bingo"));
/**
 * @file schedule.jsx
 * @author Brett Carney (brettcarney.com)
 * @brief Represents the schedule content
 * 
 * @version 1.0
 * @date 2021-02-09
 * 
 */

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

            let bingoDiv = <div className={bingoItem.colors} id={bingoItem.slot}>{bingoItem.name}</div>;

            return (
                bingoDiv
            );
        });

        return (
            <div className="bingo-section">
                <div className="white-heading text-center">
                    <h1>Pokemon Lockout Bingo Board</h1>    
                </div>
                <div className="bingo-grid">
                    {bingoSlot}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Bingo />, document.getElementById("bingo"));
/**
 * @file schedule.jsx
 * @author Brett Carney (brettcarney.com)
 * @brief Represents the schedule content
 * 
 * @version 1.0
 * @date 2021-02-09
 * 
 */

class Schedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            streamSchedule: []
        };

        this.serverRequest = this.serverRequest.bind(this);
    }

    serverRequest() {
        fetch("/api/schedule")
            .then(response => response.json())
            .then(data => this.setState({ streamSchedule: data.Days }))
    }

    componentDidMount() {
        this.serverRequest();
    }

    render() {

        // convert utc time to local time
        function convertUTCToLocal(timeToConvert) {
            var easternTime = moment.tz(timeToConvert, 'YYYY-MM-DD h:mm:ss a', 'America/Chicago');
            var localDate = easternTime.clone(easternTime).tz(moment.tz.guess());
            return localDate;
        }

        function isWithinTimeSlot(startTime, duration) {
            var currentTime = moment().tz(moment.tz.guess());
            var initialTime = moment.tz(startTime, 'YYYY-MM-DD h:mm:ss a', 'America/Chicago');
            var endTime = moment(initialTime);
            endTime.add(duration, 'hours');

            return currentTime.isBetween(initialTime, endTime);
        }

        var scheduledGames = this.state.streamSchedule.map(currentDay => {
            return (
                <tr className={isWithinTimeSlot(currentDay.Date, currentDay.Duration) ? "current-timeslot" : "timeslot"}>
                    <td>{convertUTCToLocal(currentDay.Date).format('MMM DD')}</td>
                    <td>{currentDay.Title}</td>
                    <td>{currentDay.GameType}</td>
                    <td> <i class="fa fa-clock-o text-white" aria-hidden="true"></i> {currentDay.Duration} </td>
                    <td> <i class="fa fa-clock-o" aria-hidden="true"></i> {convertUTCToLocal(currentDay.Date).format('hh:mm A z')} </td>
                    <td>{currentDay.Description}</td>
                </tr>
            )
        });

        return (
            <div className="schedule-section">
                <div className="container text-center">
                    <div className="fa-stack center-block medium-icon-red fa-5x">
                        <i className="fa fa-circle fa-stack-2x"></i> <i className="fa fa-clock-o fa-stack-1x fa-inverse"></i>
                    </div>
                    <h1 className="text-gdq-red extra-spacing">Bread boi's 24hr Stream Schedule</h1>
                    <h4 className="text-gdq-black well ">All start times below are converted to your local time<span id="offset-detected"> ({moment.tz.guess()})</span>.</h4>
                </div>

                <table id="runTable" className="table table-condensed">
                    <thead>
                        <tr className="day-split">
                            <td>Date</td>
                            <td>Game</td>
                            <td>Game Type</td>
                            <td>Estimated Runtime</td>
                            <td>Start Time</td>
                            <td>Description</td>
                        </tr>
                    </thead>
                    <tbody>
                        {scheduledGames}
                    </tbody>
                </table>
            </div>
        );
    }
}


ReactDOM.render(<Schedule />, document.getElementById("schedule"));
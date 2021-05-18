/**
 * @file schedule.jsx
 * @author Brett Carney (brettcarney.com)
 * @brief Represents the schedule content
 * 
 * @version 1.0
 * @date 2021-02-09
 * 
 */

var ReactDOM = require('react-dom');
var React = require('react');
var moment = require('moment');
require("moment-timezone");

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

        /**
         * Converts a time to the client local time
         * @param {string} timeToConvert String should be in this format YYYY-MM-DD h:mm:ss a
         */
        function convertUTCToLocal(timeToConvert) {
            var easternTime = moment.tz(timeToConvert, 'YYYY-MM-DD h:mm:ss a', 'America/Chicago');
            var localDate = easternTime.clone(easternTime).tz(moment.tz.guess());
            return localDate;
        }

        /**
         * Check if a time is between a start and a duration.
         * @param {string} startTime String should be in this format YYYY-MM-DD h:mm:ss a
         * @param {string} duration String should be in this format hh:mm:ss
         */
        function isWithinTimeSlot(startTime, duration) {
            var currentTime = moment().tz(moment.tz.guess());
            var initialTime = moment.tz(startTime, 'YYYY-MM-DD h:mm:ss a', 'America/Chicago');
            var endTime = moment(initialTime);
            endTime.add(duration, 'hours');

            return currentTime.isBetween(initialTime, endTime);
        }

        /**
         * Check if the current time is after the endtime of a stream.
         * @param {string} startTime String should be in this format YYYY-MM-DD h:mm:ss a
         * @param {string} duration String should be in this format hh:mm:ss
         */
        function isAfterTimeSlot(startTime, duration) {
            var currentTime = moment().tz(moment.tz.guess());
            var initialTime = moment.tz(startTime, 'YYYY-MM-DD h:mm:ss a', 'America/Chicago');
            var endTime = moment(initialTime);
            endTime.add(duration, 'hours');

            return currentTime.isAfter(endTime);
        }

        var scheduledGames = this.state.streamSchedule.map(currentDay => {
            let trClasses = "";
            let withinTimeClass = isWithinTimeSlot(currentDay.Date, currentDay.Duration) ? "current-timeslot" : "timeslot";
            let afterTimeClass = isAfterTimeSlot(currentDay.Date, currentDay.Duration) ? " d-none" : "";

            trClasses = withinTimeClass + afterTimeClass;

            return (
                <tr key={currentDay.Date} className={trClasses}>
                    <td>{convertUTCToLocal(currentDay.Date).format('MMM DD')}</td>
                    <td>{currentDay.Title}</td>
                    <td>{currentDay.GameType}</td>
                    <td> <i className="fa fa-clock-o" aria-hidden="true"></i> {currentDay.Duration} </td>
                    <td> {convertUTCToLocal(currentDay.Date).format('hh:mm A z')} </td>
                    <td>{currentDay.Description}</td>
                </tr>
            )
        });

        return (
            <div className="schedule-section">
                <div className="container text-center">
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
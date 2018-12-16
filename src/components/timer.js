import React from "react";
import { connect } from "react-redux";
import { startTest, stopTest } from "../redux/actions/action";

const totalTime = 120;
class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.startTimer = this.startTimer.bind(this);
        this.state = {
            timerStarted: false,
            time: this.props.totalTime
        }
    }

    startTimer() {
        this.setState({
            timerStarted: true
        })
        this.props.dispatch(startTest())
        let interval = setInterval(()=> {
            let time = this.state.time;
            time--;
            console.log(time)
            if (time == 0) {
                clearInterval(interval);
                alert("times up..!!");
                this.props.dispatch(stopTest())
            }
            this.setState({
                time
            })

        }, 1000)
    }
    

    render() {
        let { wordCount} = this.props,
        time = this.state.time,
             WPA = wordCount ? Math.floor(totalTime* wordCount / (totalTime- time)) : 0;
        return (
            <div className="timer-container">
                <div><button className="start-button" onClick={this.startTimer} disabled={this.state.timerStarted}>Start Test</button></div>
                <p> Remaining time is {Math.floor(time/60)}: {parseInt(time%60)}</p>
                <p>{`WPM ${WPA}`}</p>
            </div>
        )
    }
}

const mapStoreToProps = (state) => {
    return {
        wordCount: state.totalWordsTyped,
        totalTime: state.totalTime
    }
}

export default connect(mapStoreToProps)(Timer)
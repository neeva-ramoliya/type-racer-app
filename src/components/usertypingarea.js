import React from "react";
import { connect } from "react-redux";
import { updateState } from "../redux/actions/action";

class UserTypingArea extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: "",
            hasStarted: false,
            correctFlag: true,

        }
    }

    handleChange(event) {
        let originalTextArray = this.props.originalText.split(" "),
            currentWord = originalTextArray[this.props.totalWordsTyped],
            currentValue = event.target.value,
            totalWordsTyped = this.props.totalWordsTyped,
            correctPosition = this.props.correctInputPosition,
            incorrectPosition = this.props.incorrectInputPosition

       
            if (currentValue.length < this.state.value.length) {
                let diff = this.state.value.length-currentValue.length, incorrectChars = incorrectPosition-correctPosition;

                !incorrectChars && (correctPosition = correctPosition - diff)
                incorrectChars && incorrectChars < diff && (correctPosition = correctPosition - diff + incorrectChars)
                incorrectPosition = incorrectPosition - (diff)
            } else
                if (currentValue.match(/\s$/) && correctPosition == incorrectPosition) {
                    currentValue = "";
                    correctPosition++;
                    totalWordsTyped++;
                    incorrectPosition++;
                } else if (currentWord.indexOf(currentValue) != -1) {
                    correctPosition++;
                    incorrectPosition++;
                } else {
                    incorrectPosition++;
                }
            
            
            this.setState({
                value: currentValue
            })
        
        this.props.dispatch(updateState({
            correctPosition,
            incorrectPosition,
            totalWordsTyped
        }))

        console.log("correct position", correctPosition);
        console.log("incorrect position", incorrectPosition);
    }

   onPaste(event) {
       event.preventDefault();
       event.stopPropagation();
   }

    render() {
        return (
            <div className="usertyping-area">
                <input className="user-input" type="text"  onChange={(event) => this.handleChange(event)} disabled= {!this.props.isTestStarted}onPaste= {this.onPaste} unselectable="on" value={this.state.value}></input>
            </div>
        )
    }
}

const mapStoreToProps = (state) => {
    return {
        originalText: state.originalText,
        totalWordsTyped: state.totalWordsTyped,
        correctInputPosition: state.correctPosition,
        incorrectInputPosition: state.incorrectPosition,
        isTestStarted: state.isTestStarted
    }
}

export default connect(mapStoreToProps)(UserTypingArea)
import React from "react";
import { connect } from "react-redux";
import { getText } from "../redux/actions/action"

class OriginalTextArea extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.dispatch(getText())
      }

    render() {
        let { originalText, correctPosition, incorrectPosition } = this.props,
            correctText = originalText.substring(0, this.props.correctPosition),
            incorrectText = originalText.substring(correctPosition, incorrectPosition),
            remainingText = originalText.substring(incorrectPosition, originalText.length-1)
        return (
            <div className="original-text-container">
                <span className="correct-input">{correctText}</span> 
                <span className="incorrect-input">{incorrectText}</span>
                <span className="remaining-text">{remainingText}</span>
            </div>
        )
    }
}

const mapStoreToProps = (state) => {
    return {
        originalText: state.originalText,
        correctPosition: state.correctPosition,
        incorrectPosition: state.incorrectPosition,
        totalWordsTyped: state.totalWordsTyped
    }
}

export default connect(mapStoreToProps)(OriginalTextArea)
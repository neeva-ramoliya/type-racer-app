import React from "react";
import OriginalTextArea from "./originaltextarea";
import UserTypingArea from "./usertypingarea";
import Timer from "./timer";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
       return ( <div class="app-container">
             <h3 className="app-title">Typeracer Application</h3>
             <Timer />
             <OriginalTextArea />
             <UserTypingArea />
        </div>
       )
    }
}

export default App;
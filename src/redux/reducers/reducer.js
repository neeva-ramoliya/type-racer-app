const defaultState = {
        originalText: "Lorem ipsum congue euismod adipiscing urna sapien maecenas curabitur massa purus cras integer, sit integer quis lacus fermentum nunc tempor tellus congue dolor vitae molestie, risus ac suscipit suspendisse a dictumst consequat diam platea nec accumsan egestas nisl aliquam dictumst.",
        correctPosition: 0,
        incorrectPosition: 0,
        totalWordsTyped: 0,
        isTestStarted: false,
        totalTime: 120
}

import _ from "lodash";

export default (state = defaultState, action) => {
        switch (action.type) {
                case "SET_ORIGIN_TEXT": 
                        return _.merge(_.clone(state), {originalText:  action.data.text_out.replace(/(<([^>]+)>)/ig,"")})
                        break;
                case "GET_STATE":
                        return state;
                        break;

                case "UPDATE_STATE":

                        return _.merge(_.clone(state), action.updates);
                        break;
                case "START_TEST":
                        return _.merge(_.clone(state), { isTestStarted: true })
                        break;
                case "STOP_TEST":
                        return _.merge(_.clone(state), { isTestStarted: false })
                        break;
                default:
                        return state;
                        break;
        }
}
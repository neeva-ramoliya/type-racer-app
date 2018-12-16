import axios from "axios";

export const setOriginText = (data) => {
    return {
        type: "SET_ORIGIN_TEXT",
        data
    }
}

export const getState = () => {
    return {
     type: "GET_STATE"
    }
}

export const updateState = (updates) => {
    return {
        type: "UPDATE_STATE",
        updates
    }
} 

export const startTest = () => {
    return {
        type: "START_TEST"
    }
}

export const stopTest = () => {
    return {
        type: "STOP_TEST"
    }
}

export const getText = () => {
    return dispatch => {
        axios.get('https://www.randomtext.me/api/')
        .then((res) => dispatch(setOriginText(res.data)))
    }
}
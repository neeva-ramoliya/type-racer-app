import { createStore, applyMiddleware } from "redux";
import Reducer from "../reducers/reducer";
import thunk from 'redux-thunk';

export default () => {
    const store = createStore(Reducer, applyMiddleware(thunk));
    return store;
}
import {createStore} from "redux";
import {combineReducers} from "redux";
import auth from "./auth/authReducer";

const rootReducer = combineReducers({auth});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

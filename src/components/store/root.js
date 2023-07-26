import { combineReducers } from "redux";
import { legacy_createStore as createStore } from 'redux';
import groupReducer from './add-group-slice';
import userReducer from './edit-user-slice';
import questionReducer from "../../redux/reducers/question";
import surveysReducer from "../../redux/reducers/survey";

// const currentState = store.getState();

const rootReducer = combineReducers({
    user: userReducer,
    group: groupReducer,
    survey: surveysReducer, 
    questions: questionReducer
  });

const root = createStore(rootReducer);



export default root;
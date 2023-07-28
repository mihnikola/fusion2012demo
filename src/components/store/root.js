import { combineReducers } from "redux";
import { legacy_createStore as createStore } from 'redux';
import groupReducer from './group-slice';
import userReducer from './user-slice';
import questionReducer from "../../redux/reducers/question";
import surveysReducer from "../../redux/reducers/survey";

const rootReducer = combineReducers({
    user: userReducer,
    group: groupReducer,
    survey: surveysReducer, 
    questions: questionReducer
  });

const root = createStore(rootReducer);



export default root;
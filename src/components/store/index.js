import { configureStore} from '@reduxjs/toolkit';


import groupReducer from './add-group-slice';
import userReducer from './edit-user-slice';
import questionReducer from '../../redux/reducers/question';
import surveyReducer from '../../redux/reducers/survey';
import surveysReducer from '../../redux/reducers/surveys';

const store = configureStore({
    reducer: {
        group:groupReducer.reducer,
        user: userReducer.reducer,
        question: questionReducer.reducer,
        survey: surveyReducer.reducer,
        surveys: surveysReducer.reducer,
    }
});


  
export default store;
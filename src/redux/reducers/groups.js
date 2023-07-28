import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  questions: [],
};

const questionsSlice = createSlice({
    name:'questions',
    initialState,
    reducers:{
        setQuestions(state, action){
            state.questions = [...state.questions, action.payload];
        },
        setEditSurveyQuestions(state, action){
            state.questions = action.payload.questions;
        },
        resetQuestions(state, action){
            state.questions = [];
        },
        removeQuestion(state, action){
            state.questions = state.questions.filter((question) => question.id != action.payload)
        },
        setEditQuestions(state, action){
            let questions = [...state.questions];
            let upd_obj = questions.findIndex((question => question.id == action.payload.id));
            if(upd_obj > -1 ){
                questions[upd_obj].questionText = action.payload.questionText;
                questions[upd_obj].maxAnswers = action.payload.maxAnswers;
                questions[upd_obj].answers = action.payload.answers;
            }
            
        },
        setResetSurvey(state, action){
            state.questions = [];
        }
    }
});


export const questionsActions = questionsSlice.actions;

export default questionsSlice;

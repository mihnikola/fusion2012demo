import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  surveys: [],
};

const surveysSlice = createSlice({
    name:'surveys',
    initialState,
    reducers:{
        setSurveySubmit(state, action){
            state.surveys = [...state.surveys, action.payload];
        },
        setSurveyEditSubmit(state, action){
            let surveys = [...state.surveys];
            let ind_obj = surveys.findIndex((survey) => survey.id == action.payload.id)
            surveys[ind_obj].name = action.payload.name;
            surveys[ind_obj].questions = action.payload.questions;
        },
        setRemoveSurvey(state, action){
            state.surveys = state.surveys.filter((survey) => survey.id != action.payload)
        },
    }
});


export const surveysActions = surveysSlice.actions;

export default surveysSlice;

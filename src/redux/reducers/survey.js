import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  id:"",
  name: "",
  questionText: "",
  questionId: "",
  maxAnswers: 0,
  answers: [
    {
      text: "",
      type: 0,
      status: "",
    },
  ],
};

const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    setSurveyId(state, action){
      state.id = action.payload;
    },
    setSurveyName(state, action) {
      state.name = action.payload;
    },
    setQuestionText(state, action) {
      state.questionText = action.payload;
    },
    setMaxNumber(state, action) {
      state.maxAnswers = action.payload;
    },
    setIncrement(state, action) {
      state.maxAnswers = action.payload + 1;
    },
    setDecrement(state, action) {
      state.maxAnswers = action.payload - 1;
    },
    setAddAnswer(state, action){
      state.answers = [...state.answers, action.payload];
    },
    setRemoveAnswer(state, action){
      state.answers = state.answers.filter((_, index)=> index !== action.payload);
    },
    setAnswerText(state, action){
      state.answers = state.answers.map((answer, aIndex) =>
            aIndex === action.payload.answerIndex
              ? { ...answer, text: action.payload.value }
              : answer
          )
    },
    setAnswerType(state, action){
      state.answers = state.answers.map((answer, aIndex) =>
            aIndex === action.payload.answerIndex
              ? { ...answer, type: action.payload.value }
              : answer
          )
    },
    setQuestion(state, action){
      state.answers = action.payload.answers;
      state.questionText = action.payload.questionText;
      state.questionId = action.payload.id;
      state.maxAnswers = action.payload.maxAnswers;
    },
    setReset(state){
      state.answers =[
        {
          text: "",
          type: 0,
          status: "",
        },
      ]
      state.maxAnswers = 0
      state.questionText = ""
      state.questionId = ""
    },
    setResetSurveyNameId(state,action){
      state.name = "";
      state.id = "";
    }
  },
});

export const surveyActions = surveySlice.actions;

export default surveySlice;

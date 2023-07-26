import React, { useReducer, useState } from "react";
import styles from "./CreateSurvey.module.css";
import Questions from "./QuestionSurvey/Questions";
import Answers from "./AnswersSurvey/Answers";
import { questionsActions } from "../../redux/reducers/question";
import { surveyActions } from "../../redux/reducers/survey";
import { useDispatch, useSelector } from "react-redux";

function FormSurvey() {
  const dispatchQuestions = useDispatch();
  const dispatchSurveys = useDispatch();

  const id = useSelector((state)=> state.survey.id)
  const name = useSelector((state)=> state.survey.name)
  const questionText = useSelector((state)=> state.survey.questionText)
  const questionId = useSelector((state)=> state.survey.questionId)
  const maxAnswers = useSelector((state)=> state.survey.maxAnswers)
  const answers = useSelector((state)=> state.survey.answers)

  const handleNameChange = (e) => {
     dispatchSurveys(surveyActions.setSurveyName(e.target.value))
  };

  const handleQuestionTextChange = (e) => {
    dispatchSurveys(surveyActions.setQuestionText(e.target.value))
  };

  const handleMaxNumberChange = (e) => {
    if (e.target.value === "") {
      dispatchSurveys(surveyActions.setMaxNumber(e.target.value))
    } else if (parseInt(e.target.value) > 0 && parseInt(e.target.value) < 21) {
      dispatchSurveys(surveyActions.setMaxNumber(parseInt(e.target.value)))
    }
  };

  const handleIncrementChange = (e, number) => {
    e.preventDefault();
    if (number === ""){number = 0;}
    if (parseInt(number) < 20){
      dispatchSurveys(surveyActions.setIncrement(number))
    };
  };

  const handleDecrementChange = (e, number) => {
    e.preventDefault();
    if (number === "") number = 20;
    if (parseInt(number) > 0){
      dispatchSurveys(surveyActions.setDecrement(number))
    };
  };

  const handleAnswerChange = (e, answerIndex) => {
    dispatchSurveys(surveyActions.setAnswerText({value: e.target.value, answerIndex}))
  };
  const handleAnswerTypeChange = (value, answerIndex) => {
    dispatchSurveys(surveyActions.setAnswerType({value, answerIndex}))
  };
  const handleAddAnwser = () => {
    dispatchSurveys(surveyActions.setAddAnswer({text:"", type: 0, status: ""}))
  };
  const handleRemoveAnswer = (answerIndex) => {
    if (answers.length > 1) {
      dispatchSurveys(surveyActions.setRemoveAnswer(answerIndex))
    }
  };



  const handleGetData = () => {
    let request ={};
    if(questionId == ""){
      request = {
      id: Math.floor(Math.random() * 100000),
      questionText,
      maxAnswers,
      answers
    };
    if (answers.filter((ans)=> ans.type === 0).length == 0 && answers.filter((ans)=> ans.text === "").length == 0 && maxAnswers > 0 && questionText !== ""){
      dispatchQuestions(questionsActions.setQuestions(request));
      dispatchSurveys(surveyActions.setReset());
    }
    
  }else{
    request = {
      id: questionId,
      questionText,
      maxAnswers,
      answers
    };
    if (answers.filter((ans)=> ans.type === 0).length == 0 && answers.filter((ans)=> ans.text === "").length == 0 && maxAnswers > 0 && questionText !== ""){
      dispatchQuestions(questionsActions.setEditQuestions(request));
      dispatchSurveys(surveyActions.setReset());
    }
    
  }
   



  }

  return (
    <div>
      <input
        type="text"
        className={styles["input-box"]}
        value={name}
        id={id}
        required
        placeholder="Add survey name..."
        onChange={handleNameChange}
        autoComplete="off"
      />
      <Questions
        increment={handleIncrementChange}
        decrement={handleDecrementChange}
        textChange={handleQuestionTextChange}
        maxNumberChange={handleMaxNumberChange}
        questionText={questionText}
        questionId={questionId}
        maxAnswers={maxAnswers}
        getData={handleGetData}
      >
        <Answers
          answers={answers}
          removeAnswer={handleRemoveAnswer}
          addAnwser={handleAddAnwser}
          answerChange={handleAnswerChange}
          answerTypeChange={handleAnswerTypeChange}
        />
      </Questions>
    </div>
  );
}

export default FormSurvey;

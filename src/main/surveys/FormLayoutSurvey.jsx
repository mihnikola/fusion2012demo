import React from "react";
import styles from "./CreateSurvey.module.css";
import FusionLogo from "../../img/green-power.png";
import { useDispatch, useSelector } from "react-redux";
import { questionsActions } from "../../redux/reducers/question";
import { surveysActions } from "../../redux/reducers/surveys";
import { surveyActions } from "../../redux/reducers/survey";

const FormLayoutSurvey = ({ children }) => {
  const dispatchQuestions = useDispatch();
  const dispatchSurveys = useDispatch();
  const questions = useSelector((state) => state.question.questions);
  const name = useSelector((state) => state.survey.name);
  const id = useSelector((state) => state.survey.id);

  const resetHandler = () => {
    dispatchQuestions(questionsActions.resetQuestions());
    dispatchSurveys(surveyActions.setReset());
    dispatchSurveys(surveyActions.setResetSurveyNameId());
  };
  const submitHandler = () => {
    let request = {};
    if (name.length > 2 && questions.length > 0) {
      if (id) {
        request = {
          id,
          name,
          questions,
        };

        dispatchSurveys(surveysActions.setSurveyEditSubmit(request));
      } else {
        request = {
          id: Math.floor(Math.random() * 10000),
          name,
          questions,
        };

        dispatchSurveys(surveysActions.setSurveySubmit(request));
      }
      dispatchQuestions(questionsActions.setResetSurvey());
      dispatchSurveys(surveyActions.setResetSurveyNameId());
    }
    
  };
  return (
    <div className={styles.box}>
      <div className={styles.content}>
        <div className={styles.titleOfForm}>
          <img src={FusionLogo} className={styles.log} alt="" />
          <h2>
            <i>Survey</i>
          </h2>
        </div>
        {children}
      </div>
      <button
        className={styles.btnAdminSave}
        type="submit"
        onClick={submitHandler}
      >
        Save
      </button>
      <button
        className={styles.btnAdminReset}
        onClick={resetHandler}
        type="reset"
      >
        Reset
      </button>
    </div>
  );
};

export default FormLayoutSurvey;

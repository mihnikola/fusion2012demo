import React from "react";
import trashImg from "../../../img/trash2.png";
import previewImg from "../../../img/preview.png";
import styles from "./../CreateSurvey.module.css";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { surveysActions } from "../../../redux/reducers/surveys";
import { surveyActions } from "../../../redux/reducers/survey";
import { questionsActions } from "../../../redux/reducers/question";

function ViewSurveyItem({ data }) {
  const dispatch = useDispatch();
  const dispatchQuestion = useDispatch();
  const dispatchSurvey = useDispatch();
  const surveys = useSelector((state) => state.surveys.surveys);

  const editSurveyHandler = (e) => {

    const survey = surveys.find((survey)=> survey.id == e.currentTarget.id);
    
    dispatchSurvey(surveyActions.setSurveyName(survey.name))
    dispatchSurvey(surveyActions.setSurveyId(survey.id))
    dispatchQuestion(questionsActions.setEditSurveyQuestions(survey))
  };
  const removeSurveyHandler = (e) => {
    dispatch(surveysActions.setRemoveSurvey(e.currentTarget.id));
  };
  return (
    <div key={data.id} className={styles.forgetBtnsPoll}>
      <div className={styles.plots}>{data.name}</div>
      <div className={styles.btns}>
        <button
          className={styles.btnAdminView}
          onClick={(e) => editSurveyHandler(e)}
          id={data.id}
        >
          <img src={previewImg} className={styles.previewicon} />
        </button>
        <button
          className={styles.btnAdminRemove1}
          onClick={(e) => removeSurveyHandler(e)}
          id={data.id}
        >
          <img src={trashImg} className={styles.trash1icon} />
        </button>
      </div>
    </div>
  );
}
ViewSurveyItem.propTypes = {
  data: PropTypes.object,
};

export default ViewSurveyItem;
